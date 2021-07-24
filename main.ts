let 步數 = 0
input.onButtonPressed(Button.A, function () {
    步數 = 0
})
input.onGesture(Gesture.Shake, function () {
    步數 += 1
})
basic.forever(function () {
    basic.showNumber(步數)
})
