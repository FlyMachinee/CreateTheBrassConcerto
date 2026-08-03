// priority: 8192
// 允许同步的安全后缀名
const safeExtensions = ['.toml', '.json', '.cfg', '.txt', '.snbt', '.yml', '.yaml', '.properties', '.conf']

//递归处理目录
function syncConfigFiles(sourceDir, targetDir) {
    let totalProcessed = 0
    let totalUpdated = 0
    try {
        //遍历源目录
        let fileStream = $Files.walk(sourceDir)
        fileStream.forEach(sourcePath => {
            try {
                //跳过目录，只处理文件
                if (!$Files.isRegularFile(sourcePath)) {
                    return
                }
                //检查文件后缀
                let fileName = sourcePath.getFileName().toString().toLowerCase()
                if (!safeExtensions.some(ext => fileName.endsWith(ext))) {
                    console.warn('[Slimeli]非法文件类型，已跳过: ' + fileName)
                    return
                }
                //检查文件大小
                try {
                    let fileSize = $Files.size(sourcePath)
                    if (fileSize > 1 * 1024 * 1024) {
                        console.warn('[Slimeli]跳过过大文件(1MB): ' + fileName + ' (' + fileSize + ' 字节)')
                        return
                    }
                } catch (sizeErr) {
                    console.warn('[Slimeli]无法获取大小，已跳过: ' + fileName)
                    return
                }
                // 计算相对于源目录的相对路径
                let relativePath = sourceDir.relativize(sourcePath)
                let targetPath = $FilePaths.get(targetDir.toString(), relativePath.toString())
                totalProcessed++
                // 确保目标文件的父目录存在
                let targetParent = targetPath.getParent()
                if (targetParent != null && !$Files.exists(targetParent)) {
                    $Files.createDirectories(targetParent)
                }
                // 检查目标文件是否存在
                if (!$Files.exists(targetPath)) {
                    // 文件不存在，直接复制
                    $Files.copy(sourcePath, targetPath, $StandardCopyOption.REPLACE_EXISTING)
                    console.log('[Slimeli]已更新文件: ' + relativePath.toString())
                    totalUpdated++
                    return
                }
                try {
                    let sourceSize = $Files.size(sourcePath);
                    let targetSize = $Files.size(targetPath);
                    // 比较文件大小
                    if (sourceSize !== targetSize) {
                        $Files.copy(sourcePath, targetPath, $StandardCopyOption.REPLACE_EXISTING)
                        //$Files.delete(targetPath)
                        console.log('[Slimeli]已更新文件: ' + relativePath.toString())
                        totalUpdated++
                        return
                    }
                } catch (sizeCompareErr) {
                    console.warn('[Slimeli]无法比较文件大小: ' + relativePath.toString() + '-' + sizeCompareErr.message)
                }
                // 比较文件内容
                let sourceContent = $Files.readAllBytes(sourcePath)
                let targetContent = $Files.readAllBytes(targetPath)
                if (!$Arrays.equals(sourceContent, targetContent)) {
                    // 内容不同，替换文件
                    $Files.copy(sourcePath, targetPath, $StandardCopyOption.REPLACE_EXISTING)
                    //$Files.delete(targetPath)
                    console.log('[Slimeli]已更新文件: ' + relativePath.toString())
                    totalUpdated++
                }

            } catch (fileErr) {
                console.error('[Slimeli]处理文件时出错，请向作者反馈并提供详细日志: ' + sourcePath + ' - ' + fileErr)
            }
        })
        fileStream.close()
    } catch (walkErr) {
        console.error('[Slimeli]遍历目录时出错，请向作者反馈并提供详细日志: ' + walkErr)
    }
    return { processed: totalProcessed, updated: totalUpdated }
}
let disableServerConfigAutoUpdate=false
StartupEvents.init(event => {
    if (disableServerConfigAutoUpdate){
        console.log("[Slimeli]自动同步已禁用" + e)
        return
    }
    // 获取游戏根目录
    let gameDir = $RootPath.GAMEDIR.get().toFile()
    let results = []
    //查找两层获得所有存在的serverconfig路径
    try {
        // 遍历第一层目录
        let firstLevelStream = $Files.list(gameDir.toPath())
        let firstLevelIterator = firstLevelStream.iterator()
        while (firstLevelIterator.hasNext()) {
            let firstLevelPath = firstLevelIterator.next()
            //检查第一层目录本身是否有level.dat
            let levelDatPath1 = firstLevelPath["resolve(java.lang.String)"]("level.dat")
            if ($Files.exists(levelDatPath1)) {
                // 检查同目录是否存在serverconfig文件夹
                let serverConfigPath1 = firstLevelPath["resolve(java.lang.String)"]("serverconfig")
                if ($Files.exists(serverConfigPath1) && $Files.isDirectory(serverConfigPath1)) {
                    results.push(serverConfigPath1)
                }
            }
            if ($Files.isDirectory(firstLevelPath)) {
                try {
                    // 遍历第二层目录
                    let secondLevelStream = $Files.list(firstLevelPath)
                    let secondLevelIterator = secondLevelStream.iterator()
                    while (secondLevelIterator.hasNext()) {
                        let secondLevelPath = secondLevelIterator.next()
                        if ($Files.isDirectory(secondLevelPath)) {
                            // 检查是否存在level.dat
                            // 明确调用接受字符串参数的resolve方法
                            let levelDatPath = secondLevelPath["resolve(java.lang.String)"]("level.dat")
                            if ($Files.exists(levelDatPath)) {
                                // 检查同目录是否存在serverconfig文件夹
                                let serverConfigPath = secondLevelPath["resolve(java.lang.String)"]("serverconfig")
                                if ($Files.exists(serverConfigPath) && $Files.isDirectory(serverConfigPath)) {
                                    results.push(serverConfigPath)
                                }
                            }
                        }
                    }
                    secondLevelStream.close()
                } catch (e) { console.error("[Slimeli]遍历第二层目录出错: " + e) }
            }
        }
        firstLevelStream.close()
        if (results.length > 0) {
            console.log("[Slimeli]找到的serverconfig文件夹路径: ")
            results.forEach(path => console.log(path.toString()))
        } else {
            console.log("[Slimeli]未找到匹配的serverconfig文件夹")
        }

    } catch (e) { console.error("[Slimeli]遍历目录出错: " + e) }

    // 获取defaultconfig路径
    let gameDir1 = $RootPath.GAMEDIR.get()
    let defaultConfigPath = $FilePaths.get(gameDir1.toString(), 'defaultconfigs')
    console.info('[Slimeli]开始尝试同步defaultconfigs到每一个serverconfig')
    // 确保defaultconfig存在
    if (!$Files.exists(defaultConfigPath) || !$Files.isDirectory(defaultConfigPath)) {
        console.log('[Slimeli]defaultconfigs目录不存在，跳过配置文件同步')
        return
    }
    console.log('[Slimeli]源目录: ' + defaultConfigPath.toString())
    for (let serverConfigPath of results) {
        try {
            // 确保serverconfig存在
            if (!$Files.exists(serverConfigPath)) {
                $Files.createDirectories(serverConfigPath)
            }
            console.log('[Slimeli]开始递归同步配置文件...')
            console.log('[Slimeli]目标目录: ' + serverConfigPath.toString())
            // 同步配置文件（包括子目录）
            let result = syncConfigFiles(defaultConfigPath, serverConfigPath)

            console.log(`[Slimeli]配置文件同步完成，处理了${result.processed}个文件，更新了${result.updated}个文件`)

        } catch (err) {
            console.error('[Slimeli]同步配置文件时发生错误，请向作者反馈并提供详细日志: ' + err)
        }
    }
})