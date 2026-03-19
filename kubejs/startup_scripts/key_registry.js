if (Platform.isClientEnvironment()){
let $KeyMapping = Java.loadClass("net.minecraft.client.KeyMapping");
let $GLFWkey = Java.loadClass("org.lwjgl.glfw.GLFW");
let $KeyMappingRegistry = Java.loadClass("dev.architectury.registry.client.keymappings.KeyMappingRegistry")
/**@type {Internal.KeyMapping} */
global.FreeCam = new $KeyMapping(
    "key.kubejs.freecam",//按键名
    $GLFWkey.GLFW_KEY_F4,//具体按键名字
    "key.keybinding.brass_concerto"//按键类名
)
global.SwitchUp = new $KeyMapping(
    "key.kubejs.switch_up",
    $GLFWkey.GLFW_KEY_UP,
    "key.keybinding.brass_concerto"
)
global.SwitchDown = new $KeyMapping(
    "key.kubejs.switch_down",
    $GLFWkey.GLFW_KEY_DOWN,
    "key.keybinding.brass_concerto"
)
global.SwitchLeft = new $KeyMapping(
    "key.kubejs.switch_left",
    $GLFWkey.GLFW_KEY_LEFT,
    "key.keybinding.brass_concerto"
)
global.SwitchRight = new $KeyMapping(
    "key.kubejs.switch_right",
    $GLFWkey.GLFW_KEY_RIGHT,
    "key.keybinding.brass_concerto"
)
//客户端初始化时注册按键
ClientEvents.init(() => {
    $KeyMappingRegistry.register(global.FreeCam)
    $KeyMappingRegistry.register(global.SwitchUp)
    $KeyMappingRegistry.register(global.SwitchDown)
    $KeyMappingRegistry.register(global.SwitchLeft)
    $KeyMappingRegistry.register(global.SwitchRight)
})
}