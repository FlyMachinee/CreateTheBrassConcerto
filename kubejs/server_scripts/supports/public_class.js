// priority: 16384
//Java
let $Object=Java.loadClass("java.lang.Object")
//File
let $RootPath = Java.loadClass("net.minecraftforge.fml.loading.FMLPaths")
//
let $File = Java.loadClass("java.io.File")
let $FilePath = Java.loadClass("java.nio.file.Path")
let $FilePaths = Java.loadClass("java.nio.file.Paths")
let $Files = Java.loadClass("java.nio.file.Files")
let $StandardCharsets = Java.loadClass("java.nio.charset.StandardCharsets")
//跨维度传送
let $TravelToDimension = Java.loadClass("net.minecraftforge.event.entity.EntityTravelToDimensionEvent")
//死亡
let $LivingDeath = Java.loadClass("net.minecraftforge.event.entity.living.LivingDeathEvent")
//CuriosApi-操你妈Curios写的什么b玩意
//let Curios=$CuriosApi().getCuriosHelper().getEquippedCurios(event.player).resolve().get()
//for(let curios=0;curios<Curios.getSlots();curios++){if (!Curios.getStackInSlot(curios).isEmpty()){isCuriosEmpty=falsebreak}}
//let $CuriosApi = Java.loadClass("top.theillusivec4.curios.api.CuriosApi")
//let $CuriosGetItem = Java.loadClass("top.theillusivec4.curios.common.CuriosHelper")