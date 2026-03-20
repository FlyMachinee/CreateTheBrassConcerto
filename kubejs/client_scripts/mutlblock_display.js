const MultiBlockRecipe = {
	"kubejs:blasting_compressor": ['dut_create:blasting_compressor/coal_block'],
	'kubejs:blueprint_builder': ['dut_create:blueprint_builder/alloy_furnace'],
	'kubejs:trading_station': ['dut_create:trading_station/fluid'],
	"kubejs:large_difference_engine": ['dut_create:large_difference_engine/common'],
	"kubejs:electron_tube_computer": ['dut_create:electron_tube_computer/common'],
	"kubejs:space_elevator_controller": ["dut_create:space_elevator_controller/empty"],
	"kubejs:launch_pad_controller": ["dut_create:launch_pad_controller/empty"],
	"kubejs:satellite_station": ["dut_create:satellite_station/empty"],
	'kubejs:airdrop_station': ["dut_create:airdrop_station/empty"],
	"kubejs:condenser": ['dut_create:condenser/overworld/air_fluid_liquefaction'],
	"kubejs:hydropress": ["dut_create:hydropress/get_fluid"],
	"kubejs:alloy_furnace": ["dut_create:alloy_furnace/industrial_iron"],
	"kubejs:huge_crusher": ["dut_create:huge_crusher/fluid"],
	"kubejs:shaft_furnace": ["dut_create:shaft_furnace/desh"],
	"kubejs:infinity_fetching_pool": ["dut_create:infinity_fetching_pool/empty"],
	"kubejs:electrolytic_cell": ['dut_create:electrolytic_cell/water'],
	'kubejs:electro_hydro_resonant_tower': ['dut_create:electro_hydro_resonant_tower/electro_hydro'],
	"kubejs:assembling_machine": ["dut_create:assembling_machine/circuit_board"],
	"kubejs:construction_station": ["dut_create:construction_station/lime_circuit_board"]
}
let $CustomMachineRenderer = Java.loadClass('fr.frinn.custommachinery.client.render.CustomMachineRenderer')
let $GogglesItem = Java.loadClass('com.simibubi.create.content.equipment.goggles.GogglesItem')
PlayerEvents.tick(event => {
	let Item = event.player.offHandItem
	if (Item == null) { return }
	if (!Item.hasTag('dut_create:multiblock_display')) { return }
	if (event.level.time % 10 != 0) { return }
	else {
		$CustomMachineRenderer.addBlocksRenderById(MultiBlockRecipe[Item.id][0], 1000, false)
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
		$CustomMachineRenderer.addBlocksRenderById(MultiBlockRecipe[viewBlock.id][0], 24000, false)
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