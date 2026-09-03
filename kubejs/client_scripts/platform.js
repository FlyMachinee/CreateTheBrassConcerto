let cachedPos = new $HashMap();

function outlineRecord() {
    return { ticks: 0, slots: [new Object(), new Object(), new Object()] };
}

PlayerEvents.tick(event => {
	let viewBlock = event.player.rayTrace(event.player.getAttributeValue("forge:block_reach") + 1, true).block;
	if (viewBlock == null || !viewBlock.hasTag("dut_create:industrial_platform"))
		return;
	cachedPos.computeIfAbsent(viewBlock.pos.asLong(), k => outlineRecord());
});

ClientEvents.tick(event => {
	let player = Client.player;
	if (player == null)
		return;
	let level = player.level;
	if (level == null)
		return;
	let it = cachedPos.entrySet().iterator();
	while(it.hasNext()) {
		let entry = it.next();
		let pos = BlockPos.of(entry.getKey());
		let data = entry.getValue();
		if (pos.distToCenterSqr(player.position()) > 16384) {
			it.remove();
			continue;
		}
		let block = level.getBlock(pos);
		if (!block.hasTag("dut_create:industrial_platform")) {
			it.remove();
			continue;
		}
		
		let facing = block.getBlockState().getValue($BlockStateProperties.HORIZONTAL_FACING);
		let stepX = facing.getAxisDirection().getStep() * -1;
		let stepZ = facing.getClockWise().getAxisDirection().getStep();
		let area1 = AABB.ofBlock(pos).setMaxY(pos.y);
		let area2 = AABB.ofBlock(pos).setMaxY(pos.y);
		if (data.ticks > 0) {
			area1 = area1.expandTowards(stepX * 48, 11, stepZ * 48);
			area2 = area2.expandTowards(stepX * 48, -5, stepZ * 48)
		}
		
		$CreateClient.OUTLINER.chaseAABB(data.slots[0], area1)
			.withFaceTexture($AllSpecialTextures.CHECKERED)
			.colored(0x00FF00)
			.lineWidth(0.1);
		$CreateClient.OUTLINER.chaseAABB(data.slots[1], area2)
			.withFaceTexture($AllSpecialTextures.CHECKERED)
			.colored(0x0000FF)
			.lineWidth(0.11);
		
		if (data.ticks % 80 <= 60) {
			let area3 = AABB.ofBlock(pos).setMaxY(pos.y)
				.expandTowards(stepX * 48, 0, stepZ * 48)
				.move(0, 11 * (data.ticks % 80) / 60.0, 0);
			$CreateClient.OUTLINER.chaseAABB(data.slots[2], area3)
				.withFaceTexture($AllSpecialTextures.SELECTION)
				.colored(0xFF0000)
				.lineWidth(0.1);
		}
		
		data.ticks++;
	}
});