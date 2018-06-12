import TextureAtlas from './TextureAtlas';
import Map from './Map';

class Game {

  constructor(selector) {
    this.canvas = document.querySelector(selector);
    this.resizeCanvas();

    window.addEventListener('resize', this.resizeCanvas.bind(this), false);

    this.context = this.canvas.getContext('2d');

    this.atlas = new TextureAtlas(require('./assets/allSprites_default.xml'), require('./assets/allSprites_default.png'));

    this.map = new Map(this.atlas);

    setInterval(() => {
      this.map.draw(this.context);
    }, 1000 / 60)
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
}

export default Game;