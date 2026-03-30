// priority: 16384
// 代码来自忆然
const $ClassFilter = Java.loadClass('dev.latvian.mods.kubejs.util.ClassFilter');
const $ServerScriptManager = Java.loadClass('dev.latvian.mods.kubejs.server.ServerScriptManager');
const $KubeJS = Java.loadClass('dev.latvian.mods.kubejs.KubeJS');
const ScriptManagers = {
  CLIENT: $KubeJS.getClientScriptManager(),
  SERVER: $ServerScriptManager.instance,
  STARTUP: $KubeJS.getStartupScriptManager(),
};
/**@type {Internal.Class<$JavaWrapper_>} */
const clazz = Java.class;
/**@type {Internal.Class<$ScriptManager_>} */
const $ScriptManager = clazz.getClassLoader().loadClass('dev.latvian.mods.kubejs.script.ScriptManager');
const classFilterField = $ScriptManager.getDeclaredField('classFilter');
classFilterField.setAccessible(true);
const ClassFilter = classFilterField.get(ScriptManagers.CLIENT);
ClassFilter.allow('java.nio.file.Files');
ClassFilter.allow('java.nio.file.Paths');
ClassFilter.allow('net.minecraftforge.fml.loading.FMLPaths');
ClassFilter.allow('java.io.DataInputStream')
ClassFilter.allow('java.io.BufferedInputStream')
ClassFilter.allow('java.util.zip.GZIPInputStream')
ClassFilter.allow('java.nio.file.StandardOpenOption')

const $FMLPaths = Java.loadClass('net.minecraftforge.fml.loading.FMLPaths');
const $FilePaths = Java.loadClass('java.nio.file.Paths');
const $Files = Java.loadClass('java.nio.file.Files');
const $DataInputStream = Java.loadClass('java.io.DataInputStream')
const $BufferedInputStream = Java.loadClass('java.io.BufferedInputStream')
const $GZIPInputStream = Java.loadClass('java.util.zip.GZIPInputStream')
const $StandardOpenOption = Java.loadClass('java.nio.file.StandardOpenOption')
