const MultiBlockRecipe = {
	"kubejs:blasting_compressor": ['main'],
	'kubejs:blueprint_builder': ['main'],
	'kubejs:trading_station': ['main'],
	"kubejs:large_difference_engine": ['main'],
	"kubejs:electron_tube_computer": ['main'],
	"kubejs:space_elevator_controller": ['main'],
	"kubejs:launch_pad_controller": ['main'],
	"kubejs:satellite_station": ['main'],
	'kubejs:airdrop_station': ['main'],
	"kubejs:condenser": ['main'],
	"kubejs:hydropress": ['main'],
	"kubejs:alloy_furnace": ['main'],
	"kubejs:huge_crusher": ['main'],
	"kubejs:shaft_furnace": ['main'],
	"kubejs:infinity_fetching_pool": ['main'],
	"kubejs:electrolytic_cell": ['main'],
	'kubejs:electro_hydro_resonant_tower': ['main'],
	"kubejs:assembling_machine": ['main'],
	"kubejs:construction_station": ['main']
}
let $CustomMachineRenderer = Java.loadClass('fr.frinn.custommachinery.client.render.CustomMachineRenderer')
let $GogglesItem = Java.loadClass('com.simibubi.create.content.equipment.goggles.GogglesItem')
PlayerEvents.tick(event => {
	let Item = event.player.offHandItem
	if (Item == null) { return }
	if (!Item.hasTag('dut_create:multiblock_display')) { return }
	if (event.level.time % 10 != 0) { return }
	else {
		$CustomMachineRenderer.addGeneralStructureRenderById('dut:'+Item.id.split(":")[1], MultiBlockRecipe[Item.id][0], 1000)
	}
})
{
	let i = false
	let i1 = 0
	PlayerEvents.tick(event => {
		if (i1 > 0) { i1 -= 1 }
		if (!$GogglesItem.isWearingGoggles(event.player)) { return }
		let viewBlock = event.player.rayTrace(event.player.getAttributeValue("forge:block_reach") + 1, true).block
		if (viewBlock == null) { return }
		if (!viewBlock.hasTag('dut_create:multiblock_display')) { return }
		if (!Client.isAltDown()) {
			i = false
			if (event.level.time % 10 === 0) {
				event.player.setStatusMessage(Text.translate("kubejs.message.multiblock_display"))
			}
			return
		}
		if (i == false) {
			event.player.sendData("multiblockDisplay", { id: MultiBlockRecipe[viewBlock.id][0], pos: { x: viewBlock.x, y: viewBlock.y, z: viewBlock.z } })
			i = true
		}
		if (i1 > 0) {
			return
		}
		$CustomMachineRenderer.addGeneralStructureRenderById('dut:'+viewBlock.id.split(":")[1], MultiBlockRecipe[viewBlock.id][0], 24000)
		i1 = 360
	})
}
/*
let $Outliner = Java.loadClass("com.simibubi.create.foundation.outliner.Outliner")
let $AllSpecialTextures = Java.loadClass('com.simibubi.create.AllSpecialTextures')
BlockEvents.rightClicked('kubejs:emergency_industrial_platform', event => {
	if (!event.level.isClientSide()) { return }
	let liner = new $Outliner()
	let b = event.block
	let e = b.getEntity()
	let area = AABB.ofBlock(b.pos).expandTowards(6, 6, 6).expandTowards(-1, -1, -1)
	Client.scheduleRepeatingInTicks(120, ev => {
		liner.showAABB(e, area)
			.withFaceTextures($AllSpecialTextures.CHECKERED, $AllSpecialTextures.HIGHLIGHT_CHECKERED)
			.colored(0x708090)
			.disableLineNormals()
			.lineWidth(0.7)
	})
})
*/