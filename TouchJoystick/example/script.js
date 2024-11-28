"use strict";
let counter = 0;
const outputElement = document.getElementById("output");
const joystick = new TouchJoystick.Joystick(document.getElementsByClassName("joystick-wrapper")[0], { positioning: "fixed", handle: { limit: 1, round: true }, following: true, limitToParentElement: true });
joystick.addEventListener(TouchJoystick.EVENT.CHANGE, eventHandler);
joystick.addEventListener(TouchJoystick.EVENT.PRESSED, eventHandler);
joystick.addEventListener(TouchJoystick.EVENT.RELEASED, eventHandler);
function eventHandler(_event) {
    console.log(_event.type, _event.detail);
    outputElement.innerText = `Latest Event: ${_event.type}, x: ${_event.detail?.x.toFixed(2)}, y: ${_event.detail?.y.toFixed(2)}`;
}
joystick.element.classList.add("stick-" + counter++);
for (let element of document.querySelectorAll("select, input")) {
    element.addEventListener("change", updateJoystickWithFormData);
}
function updateJoystickWithFormData() {
    const fd = new FormData(document.forms[0]);
    joystick.limitInput = fd.get("limitInput");
    joystick.positioning = fd.get("positioning");
    joystick.limitToParentElement = !!fd.get("limitToParentElement");
    joystick.following = !!fd.get("following");
    joystick.invertY = !!fd.get("invertY");
    joystick.handle = { limit: Number(fd.get("handle.limit")), round: !!fd.get("handle.round") };
}
updateJoystickWithFormData();
//# sourceMappingURL=script.js.map