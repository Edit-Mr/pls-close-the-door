input.onButtonPressed(Button.A, function () {
    closed = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    basic.showIcon(IconNames.Yes)
})
let closed = 0
closed = sonar.ping(
DigitalPin.P2,
DigitalPin.P1,
PingUnit.Centimeters
)
let count = 0
let wait = 1000
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (Math.abs(sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    ) - closed) > 5) {
        count += 1
        if (closed > 5) {
            wait = 100
            music.ringTone(1024)
            basic.showIcon(IconNames.Angry)
        }
    } else {
        music.stopAllSounds()
        basic.clearScreen()
        count = 0
        wait = 1000
    }
    basic.pause(wait)
})
