class Input {

  constructor() {
    console.log('Initialize input');
    const body = document.querySelector('body');

    this.keyState = {};
    this.mouseState = {
      x: 0,
      y: 0
    };

    body.addEventListener('keydown', this.handleKeyboard.bind(this), false);
    body.addEventListener('keyup', this.handleKeyboard.bind(this), false);

    body.addEventListener('mousemove', this.handleMouse.bind(this), false);
  }

  handleKeyboard(event) {
    switch(event.type) {
      case 'keydown':
        this.keyState[event.code] = true;
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
    return this.keyState[key];
  }
}

export default new Input();