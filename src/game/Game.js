import MainLoop from 'mainloop.js';
import { Point } from './Primatives';
import Input from './Input';
import TextureAtlas from './TextureAtlas';
import Map from './Map';
import Tank from './Tank';

class Game {

  constructor(context) {
    this.context = context;
    this.canvas = context.canvas;

    this.testMode = false;

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
    this.tank.begin(timestamp, delta);

    if (Input.IsPressed('F1')) {
      this.testMode = !this.testMode;
    }

    Input.begin(timestamp, delta);
  }

  update(delta) {
    if (!this.testMode) {
      this.tank.update(delta);
    }
  }

  draw() {
    this.map.draw();

    if (!this.testMode) {
      this.tank.draw();
    } else {
      this.context.font = '40px serif';
      this.context.fillText('Test Mode', this.canvas.width / 2, 60);

      this.context.drawImage(this.atlas.texture, 0, 0);

      this.context.font = '16px serif';

      const spriteName = this.atlas.findSpriteByPoint(new Point(Input.MouseState.x, Input.MouseState.y));

      if (spriteName) {
        const texture = this.atlas.Atlas[spriteName];

        this.context.strokeRect(texture.x, texture.y, texture.width, texture.height);

        this.context.fillText('"' + spriteName + '" ' + texture.x + ',' + texture.y + ' ' + texture.width + 'x' + texture.height, this.atlas.texture.width + 20, 20);
      }
    }
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