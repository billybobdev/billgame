import { clone } from 'lodash';
import { Rectangle } from './Primatives';

class Bullet {

  constructor(atlas, spriteName, position, angle) {
    this.atlas = atlas;
    this.spriteName = spriteName;

    this.texture = this.atlas.Atlas[spriteName];

    this.position = new Rectangle(position.x, position.y,
    this.texture.width, this.texture.height, angle);

    this.moveSpeed = .4;
  }

  get bounds() {
    return this.position;
  }

  update(delta) {
    this.position.x += this.moveSpeed * Math.cos(this.position.angle) * delta;
    this.position.y += this.moveSpeed * Math.sin(this.position.angle) * delta;
  }

  draw() {
    this.atlas.context.save();
    this.atlas.context.translate(this.position.x, this.position.y);
    this.atlas.context.rotate(this.position.angle + Math.PI / 180 * 90);
    this.atlas.drawImage(this.spriteName, 0, 0);
    this.atlas.context.restore();
  }
}

export default Bullet;