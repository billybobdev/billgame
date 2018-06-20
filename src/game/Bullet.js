import { clone } from 'lodash';
import { Rectangle } from './Primatives';

class Bullet {

  constructor(atlas, spriteName, position, angle) {
    this.atlas = atlas;
    this.spriteName = spriteName;
    this.position = clone(position);
    this.angle = angle;

    this.moveSpeed = .4;
  }

  get bounds() {
    return new Rectangle(this.position.x, this.position.y, 12, 24);
  }

  update(delta) {
    this.position.x += this.moveSpeed * Math.cos(this.angle) * delta;
    this.position.y += this.moveSpeed * Math.sin(this.angle) * delta;
  }

  draw() {
    this.atlas.context.save();
    this.atlas.context.translate(this.position.x, this.position.y);
    this.atlas.context.rotate(this.angle + Math.PI / 180 * 90);
    this.atlas.drawImage(this.spriteName, -6, -50);
    this.atlas.context.restore();
    this.bounds.strokeRect(this.atlas.context);
  }
}

export default Bullet;