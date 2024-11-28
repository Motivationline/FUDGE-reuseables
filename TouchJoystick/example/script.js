"use strict";
let counter = 0;
for (let element of document.getElementsByClassName("joystick-wrapper")) {
    let joystick = new TouchJoystick.Joystick(element, { positioning: "fixed", handle: { limit: 1, round: true }, following: false });
    joystick.addEventListener(TouchJoystick.EVENT.CHANGE, (_event) => {
        console.log(TouchJoystick.EVENT.CHANGE, _event.detail);
    });
    joystick.addEventListener(TouchJoystick.EVENT.PRESSED, (_event) => {
        console.log(TouchJoystick.EVENT.PRESSED, _event.detail);
    });
    joystick.addEventListener(TouchJoystick.EVENT.RELEASED, (_event) => {
        console.log(TouchJoystick.EVENT.RELEASED, _event.detail);
    });
    joystick.element.classList.add("stick-" + counter++);
}
//# sourceMappingURL=script.js.map