import Input from './Input';
import TextureAtlas from './TextureAtlas';
import Map from './Map';

class Game {

  constructor(context) {
    this.context = context;
    this.canvas = context.canvas;

    window.addEventListener('resize', this.resizeCanvas.bind(this), false);
    this.resizeCanvas();

    this.atlas = new TextureAtlas(require('./assets/allSprites_default.xml'), require('./assets/allSprites_default.png'));

    this.map = new Map(this.atlas);

    this.mainLoop = this.mainLoop.bind(this);
  }

  mainLoop() {

    this.map.draw(this.context);

    requestAnimationFrame(this.mainLoop);
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
}

Game.Input = Input;

export default Game;