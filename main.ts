input.onGesture(Gesture.Shake, function () {
    STEPS += 1
    if (STEPS % 20 == 0) {
        basic.clearScreen()
        basic.pause(100)
        basic.showIcon(IconNames.Chessboard)
        basic.pause(100)
        basic.clearScreen()
    }
})
let STEPS = 0
STEPS = 0
basic.forever(function () {
    basic.showNumber(STEPS)
})
