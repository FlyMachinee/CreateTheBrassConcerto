const $KeyMapping = Java.loadClass("net.minecraft.client.KeyMapping");
const $GLFWkey = Java.loadClass("org.lwjgl.glfw.GLFW");
const $KeyMappingRegistry = Java.loadClass("dev.architectury.registry.client.keymappings.KeyMappingRegistry")
/**@type {Internal.KeyMapping} */
global.FreeCam = new $KeyMapping(
    "key.kubejs.freecam",//按键名
    $GLFWkey.GLFW_KEY_F4,//具体按键名字
    "key.keybinding.brass_concerto"//按键类名
)
//客户端初始化时注册按键
ClientEvents.init(() => {
    $KeyMappingRegistry.register(global.FreeCam)
})