import { clone } from 'lodash';

class Input {

  constructor() {
    const body = document.querySelector('body');

    this.keyState = {};
    this.prevKeyState = {};
    this.mouseState = {
      x: 0,
      y: 0,
      'MouseLeft': false,
      'MouseRight': false,
      'MouseMiddle': false
    };
    this.prevMouseState = clone(this.mouseState);

    body.addEventListener('keydown', this.handleKeyboard.bind(this), false);
    body.addEventListener('keyup', this.handleKeyboard.bind(this), false);

    body.addEventListener('mousemove', this.handleMouse.bind(this), false);
    body.addEventListener('mousedown', this.handleMouse.bind(this), false);
  }

  begin(timestamp, delta) {
    this.prevKeyState = clone(this.keyState);
    this.prevMouseState = clone(this.mouseState);
  }

  handleKeyboard(event) {

    if (event.code === 'F1') {
      event.preventDefault();
    }

    switch(event.type) {
      case 'keydown':
        this.keyState[event.code] = event.timeStamp;
        break;
      case 'keyup':
        this.keyState[event.code] = false;
        break;
      default:
        break;
    }
  }

  handleMouse(event) {
    this.mouseState.x = event.clientX;
    this.mouseState.y = event.clientY;
  }

  get MouseState() {
    return this.mouseState;
  }

  IsDown(key) {
    return !!this.keyState[key];
  }

  IsPressed(key) {
    return !this.prevKeyState[key] && this.keyState[key];
  }

  IsReleased(key) {
    return this.prevKeyState[key] && !this.keyState[key];
  }
}

export default new Input();