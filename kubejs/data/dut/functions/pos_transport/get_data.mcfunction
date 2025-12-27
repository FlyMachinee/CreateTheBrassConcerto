data remove storage dut:pos_data positionData
data modify storage dut:pos_data positionData.dimensionID set from block ~ ~ ~ componentManager.items[{slotID:"position_data"}].tag.dimensionID
data modify storage dut:pos_data positionData.position set from block ~ ~ ~ componentManager.items[{slotID:"position_data"}].tag.position