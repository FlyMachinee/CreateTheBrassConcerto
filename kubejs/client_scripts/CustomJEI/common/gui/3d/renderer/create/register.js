// priority: 5000
{
  /**
   * 
   * @param {Internal.BlockEntry<Internal.Block>} blockEntry 
   * @param {BlockInfoRenderer} renderer
   * @returns 
   */
  let register = (blockEntry, renderer) => blockExtraRendererMapping.put(blockEntry.get(), renderer);

  [
    $AllBlocks.ANDESITE_ENCASED_SHAFT,
    $AllBlocks.BRASS_ENCASED_SHAFT,
    $AllBlocks.ENCASED_CHAIN_DRIVE,
    $AllBlocks.METAL_GIRDER_ENCASED_SHAFT,
    $AllBlocks.ADJUSTABLE_CHAIN_GEARSHIFT,
  ].forEach((e) => register(e, new ShaftRenderer()));

  register($AllBlocks.MECHANICAL_PUMP, new PumpRenderer());
  register($AllBlocks.DEPLOYER, new DeployerRenderer());
  register($AllBlocks.GEARBOX, new GearboxRenderer());

  [
    $AllBlocks.SHAFT,
    $AllBlocks.COGWHEEL,
    $AllBlocks.LARGE_COGWHEEL,
  ].forEach((e) => register(e, new BracketedKineticBlockInfoRenderer()));

  [
    $AllBlocks.ANDESITE_ENCASED_COGWHEEL,
    $AllBlocks.BRASS_ENCASED_COGWHEEL,
  ].forEach((e) => register(e, EncasedCogRenderer.small()));
  [
    $AllBlocks.ANDESITE_ENCASED_LARGE_COGWHEEL,
    $AllBlocks.BRASS_ENCASED_LARGE_COGWHEEL,
  ].forEach((e) => register(e, EncasedCogRenderer.large()));

  register($AllBlocks.PLACARD, new PlacardRenderer());

  [
    $AllBlocks.BRASS_FUNNEL,
    $AllBlocks.BRASS_BELT_FUNNEL,
    $AllBlocks.ANDESITE_FUNNEL,
		$AllBlocks.ANDESITE_BELT_FUNNEL,
  ].forEach((e) => register(e, new FunnelRenderer()));

  register($AllBlocks.HOSE_PULLEY, new HosePulleyRenderer());
}
