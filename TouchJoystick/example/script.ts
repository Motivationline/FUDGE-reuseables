let counter = 0;

for(let element of document.getElementsByClassName("joystick-wrapper")){
    let joystick = new TouchJoystick.Joystick(<HTMLElement>element, { positioning: "fixed", handle: {limit: 1, round: true}, following: true })
    
    joystick.addEventListener(TouchJoystick.EVENT.CHANGE, (_event: CustomEvent) => {
        console.log(TouchJoystick.EVENT.CHANGE, _event.detail);
    })
    joystick.addEventListener(TouchJoystick.EVENT.PRESSED, (_event: CustomEvent) => {
        console.log(TouchJoystick.EVENT.PRESSED, _event.detail);
    })
    joystick.addEventListener(TouchJoystick.EVENT.RELEASED, (_event: CustomEvent) => {
        console.log(TouchJoystick.EVENT.RELEASED, _event.detail);
    })

    joystick.element.classList.add("stick-" + counter++);
}
