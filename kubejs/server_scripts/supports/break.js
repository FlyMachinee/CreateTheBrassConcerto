// priority: 32768
//代码来自忆然
let $ClassFilter = Java.loadClass("dev.latvian.mods.kubejs.util.ClassFilter")
let $ServerScriptManager = Java.loadClass("dev.latvian.mods.kubejs.server.ServerScriptManager")
let $KubeJS = Java.loadClass("dev.latvian.mods.kubejs.KubeJS")
let ScriptManagers = {
    CLIENT: $KubeJS.getClientScriptManager(),
    SERVER: $ServerScriptManager.instance,
    STARTUP: $KubeJS.getStartupScriptManager()
}
/**@type {Internal.Class<$JavaWrapper_>} */
let clazz = Java.class
/**@type {Internal.Class<$ScriptManager_>} */
let $ScriptManager = clazz.getClassLoader().loadClass("dev.latvian.mods.kubejs.script.ScriptManager")
let classFilterField = $ScriptManager.getDeclaredField('classFilter')
classFilterField.setAccessible(true)
let ClassFilter = classFilterField.get(ScriptManagers.SERVER)
ClassFilter.allow("java.io.File")
ClassFilter.allow("java.lang.String")
ClassFilter.allow("java.nio.file.Files")
ClassFilter.allow("java.nio.file.Path")
ClassFilter.allow("java.nio.file.Paths")
ClassFilter.allow("net.minecraftforge.fml.loading.FMLPaths")
ClassFilter.allow("java.nio.charset.StandardCharsets")
ClassFilter.allow("java.nio.file.StandardCopyOption")
ClassFilter.allow("java.nio.file.SimpleFileVisitor")
ClassFilter.allow("java.nio.file.FileVisitResult")
ClassFilter.allow("java.util.Arrays")
ClassFilter.allow("java.nio.file.StandardOpenOption")



//
    