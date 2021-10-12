input.onGesture(Gesture.TiltRight, function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 2)
        basic.pause(100)
        led.unplot(index, 2)
        basic.pause(100)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    for (let index = 0; index < 4; index++) {
        led.plot(2, 2)
        basic.pause(100)
        led.unplot(2, 2)
        basic.pause(100)
    }
})
basic.forever(function () {
	
})
