ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("malypha", "colreg72")
basic.forever(function () {
    basic.showIcon(IconNames.Chessboard)
    ESP8266_IoT.connectThingSpeak()
    ESP8266_IoT.setData(
    "",
    Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C),
    Environment.octopus_BME280(Environment.BME280_state.BME280_humidity),
    Environment.octopus_BME280(Environment.BME280_state.BME280_pressure),
    Environment.ReadDust(DigitalPin.P16, AnalogPin.P1)
    )
    ESP8266_IoT.uploadData()
    basic.showIcon(IconNames.Yes)
    basic.pause(60000)
})
