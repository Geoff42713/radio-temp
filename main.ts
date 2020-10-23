radio.onReceivedNumber(function (receivedNumber) {
    serial.writeNumber(radio.receivedPacket(input.temperature()))
})
radio.setGroup(69)
basic.forever(function () {
    radio.sendNumber(input.temperature())
    basic.pause(700)
})
