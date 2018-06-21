import MainLoop from 'mainloop.js';
import { Vector2 } from './Primatives';
import Input from './Input';
import TextureAtlas from './TextureAtlas';
import Map from './Map';
import Player from './Player';
import Bot from './Bot';
import Bullet from './Bullet';

class Game {

  constructor(context) {
    this.context = context;
    this.canvas = context.canvas;

    this.testMode = false;
    this.debugMode = false;

    window.addEventListener('resize', this.resizeCanvas.bind(this), false);
    this.resizeCanvas();

    this.atlas = new TextureAtlas(this.context, require('./assets/allSprites_default.xml'), require('./assets/allSprites_default.png'));

    this.map = new Map(this.atlas);

    this.projectiles = [];

    this.player = new Player(this.atlas);

    this.bot = new Bot(this.atlas, new Vector2(64 * 12 + 14, 200));

    this.player.on('fire', (origin, angle) => {
      this.projectiles.push(new Bullet(this.atlas, 'specialBarrel3_outline', origin, angle));
    });

    this.mainLoop = MainLoop;

    MainLoop
      .setBegin(this.begin.bind(this))
      .setUpdate(this.update.bind(this))
      .setDraw(this.draw.bind(this))
      .setEnd(this.end.bind(this));
  }

  begin(timestamp, delta) {
    this.player.begin(timestamp, delta);

    if (Input.IsPressed('F1')) {
      this.testMode = !this.testMode;
    }

    if (Input.IsPressed('F2')) {
      this.debugMode = !this.debugMode;
    }

    Input.begin(timestamp, delta);
  }

  update(delta) {
    if (!this.testMode) {
      this.projectiles.forEach(bullet => bullet.update(delta));
      this.projectiles = this.projectiles.filter(bullet => this.map.bounds.contains(bullet.bounds));
      this.bot.update(delta);
      this.player.update(delta);
    }
  }

  draw() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

    if (!this.testMode) {
      this.map.draw();
      this.bot.draw();
      this.player.draw();

      if (this.debugMode) {
        this.bot.bounds.strokeRect(this.context);
        this.player.bounds.strokeRect(this.context);
      }

      this.projectiles.forEach(bullet => {
        bullet.draw();

        if (this.debugMode)
          bullet.bounds.strokeRect(this.context);
      });
    } else {
      this.context.font = '40px serif';
      this.context.fillText('Test Mode', this.canvas.width / 2, 60);

      this.context.drawImage(this.atlas.texture, 0, 0);

      this.context.font = '16px serif';

      const spriteName = this.atlas.findSpriteByPoint(new Vector2(Input.MouseState.x, Input.MouseState.y));

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