import { EventEmitter } from 'events';
import { Vector2, Rectangle } from './Primatives';

class Tank extends EventEmitter {

  constructor(atlas, position) {
    super();

    position = position || new Vector2(200, 200);

    this.atlas = atlas;
    this.context = this.atlas.context;

    this.bodySprite = this.atlas.Atlas['tankBody_dark'];
    this.turretSprite = this.atlas.Atlas['tankDark_barrel1'];

    this.position = new Rectangle(position.x, position.y, this.bodySprite.width, this.bodySprite.height);
    this.orientation = 0;
    this.turnSpeed = .2;
    this.moveSpeed = .1;
    this.turretAngle = 90;
  }

  get bounds() {
    return this.position;
  }

  begin(timestamp, delta) {
  }

  update(delta) {
  }

  draw() {
    this.context.save();
    this.context.translate(this.position.centerX, this.position.centerY);
    this.context.rotate(Math.PI / 180 * ( this.orientation + 90 ));
    this.atlas.drawImage('tankBody_dark', -this.bodySprite.width / 2, -this.bodySprite.height / 2);

    this.context.restore();
    this.context.save();

    this.context.translate(this.position.centerX, this.position.centerY);
    this.context.rotate(this.turretAngle + Math.PI / 180 * 90);
    this.atlas.drawImage('tankDark_barrel1', -this.turretSprite.width / 2, -this.turretSprite.height + 6);

    this.context.restore();
  }
}

export default Tank;