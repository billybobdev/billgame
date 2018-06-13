import Input from './Input';
import TextureAtlas from './TextureAtlas';
import Map from './Map';

class Game {

  constructor(selector) {

    this.canvas = document.querySelector(selector);

    window.addEventListener('resize', this.resizeCanvas.bind(this), false);
    this.resizeCanvas();

    this.context = this.canvas.getContext('2d');

    this.atlas = new TextureAtlas(require('./assets/allSprites_default.xml'), require('./assets/allSprites_default.png'));

    this.map = new Map(this.atlas);

    requestAnimationFrame(this.mainLoop.bind(this));
  }

  mainLoop() {

    this.map.draw(this.context);

    requestAnimationFrame(this.mainLoop.bind(this));
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
}

Game.Input = Input;

export default Game;