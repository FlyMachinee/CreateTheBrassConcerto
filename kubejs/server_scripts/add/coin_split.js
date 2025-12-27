ServerEvents.recipes(event => {
  event.shapeless('10x kubejs:coin_emerald', ['kubejs:coin_netherite']).id("dut_create:coin/n_to_e")
  event.shapeless('10x kubejs:coin_diamond', ['kubejs:coin_emerald']).id("dut_create:coin/e_to_d")
  event.shapeless('10x kubejs:coin_gold', ['kubejs:coin_diamond']).id("dut_create:coin/d_to_g")
  event.shapeless('10x kubejs:coin_iron', ['kubejs:coin_gold']).id("dut_create:coin/g_to_i")
  event.shapeless('10x kubejs:coin_copper', ['kubejs:coin_iron']).id("dut_create:coin/i_to_c")
})