import { EventEmitter } from 'events';
import Input from './Input';
import { Vector2, Rectangle } from './Primatives';

class Tank extends EventEmitter {

  constructor(atlas) {
    super();
    this.atlas = atlas;
    this.context = this.atlas.context;

    this.bodySprite = this.atlas.Atlas['tankBody_dark'];
    this.turretSprite = this.atlas.Atlas['tankDark_barrel1'];

    this.position = new Rectangle(200, 200, this.bodySprite.width, this.bodySprite.height);
    this.orientation = 0;
    this.turnSpeed = .2;
    this.moveSpeed = .1;
    this.turretAngle = 90;
  }

  get bounds() {
    return this.position;
  }

  begin(timestamp, delta) {
    if (Input.IsDown('KeyA')) {
      this.orientation -= this.turnSpeed * delta;
    }

    if (Input.IsDown('KeyD')){
      this.orientation += this.turnSpeed * delta;
    }

    if (Input.IsDown('KeyW')) {
      this.position.x += this.moveSpeed * Math.cos(this.orientation * Math.PI / 180) * delta;
      this.position.y += this.moveSpeed * Math.sin(this.orientation * Math.PI / 180) * delta;
    }

    if (Input.IsDown('KeyS')) {
      this.position.x -= this.moveSpeed * Math.cos(this.orientation * Math.PI / 180) * delta;
      this.position.y -= this.moveSpeed * Math.sin(this.orientation * Math.PI / 180) * delta;
    }

    if (Input.IsPressed('Space')) {
      this.emit('fire', this.position.center, this.turretAngle);
    }

    if (Input.IsDown('ArrowRight')) {
      this.turretAngle += this.turnSpeed * delta;
    }

    if (Input.IsDown('ArrowLeft')) {
      this.turretAngle -= this.turnSpeed * delta;
    }

    this.turretAngle = this.position.center.angleTo(new Vector2(Input.mouseState.x, Input.mouseState.y));
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