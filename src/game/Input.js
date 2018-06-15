import { clone } from 'lodash';

class Input {

  constructor() {
    const body = document.querySelector('body');

    this.keyState = {};
    this.prevKeyState = {};
    this.mouseState = {
      x: 0,
      y: 0
    };

    body.addEventListener('keydown', this.handleKeyboard.bind(this), false);
    body.addEventListener('keyup', this.handleKeyboard.bind(this), false);

    body.addEventListener('mousemove', this.handleMouse.bind(this), false);
  }

  begin(timestamp, delta) {
    this.prevKeyState = clone(this.keyState);
  }

  handleKeyboard(event) {

    event.preventDefault();
    event.stopPropagation();

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
    this.mouseState = {
      x: event.clientX,
      y: event.clientY
    }
  }

  get MouseState() {
    return this.mouseState;
  }

  KeyDown(key) {
    return !!this.keyState[key];
  }

  IsPressed(key) {
    return this.prevKeyState[key] && !this.keyState[key];
  }
}

export default new Input();