import MainLoop from 'mainloop.js';
import Input from './Input';
import TextureAtlas from './TextureAtlas';
import Map from './Map';
import Tank from './Tank';

class Game {

  constructor(context) {
    this.context = context;
    this.canvas = context.canvas;

    window.addEventListener('resize', this.resizeCanvas.bind(this), false);
    this.resizeCanvas();

    this.atlas = new TextureAtlas(this.context, require('./assets/allSprites_default.xml'), require('./assets/allSprites_default.png'));

    this.map = new Map(this.atlas);

    this.tank = new Tank(this.atlas);

    this.mainLoop = MainLoop;

    MainLoop
      .setBegin(this.begin.bind(this))
      .setUpdate(this.update.bind(this))
      .setDraw(this.draw.bind(this))
      .setEnd(this.end.bind(this));
  }

  begin(timestamp, delta) {

  }

  update(delta) {
    this.tank.update(delta);
  }

  draw() {
    this.map.draw();
    this.tank.draw();
  }

  end(fps, panic) {
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
}

Game.Input = Input;

export default Game;