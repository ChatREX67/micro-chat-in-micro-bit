input.onButtonPressed(Button.A, function () {
    radio.sendString("My name is Rex Graziano!")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
