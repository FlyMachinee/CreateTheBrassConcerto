ServerEvents.recipes(event => {
    //
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "dut:filling_machine",
        "time": 1,
        "priority": 0,
        "hidden": true,
        "error": true,
        "requirements": []
    }).id("dut_create:filling_machine/empty")

})