import Input from './Input';
import { Point } from './Primatives';

class Tank {

  constructor(atlas) {
    this.atlas = atlas;
    this.context = this.atlas.context;

    this.bodySprite = this.atlas.Atlas['tankBody_dark'];
    this.turretSprite = this.atlas.Atlas['tankDark_barrel1'];

    this.position = new Point(200, 200);
    this.orientation = 0;
    this.turnSpeed = .2;
    this.moveSpeed = .1;
    this.turretAngle = 90;
  }

  begin(timestamp, delta) {
    if (Input.IsDown('KeyA')) {
      this.orientation -= this.turnSpeed * delta;
      this.turretAngle -= this.turnSpeed * delta;
    }

    if (Input.IsDown('KeyD')){
      this.orientation += this.turnSpeed * delta;
      this.turretAngle += this.turnSpeed * delta;
    }

    if (Input.IsDown('KeyW')) {
      this.position.x += this.moveSpeed * Math.cos(this.orientation * Math.PI / 180) * delta;
      this.position.y += this.moveSpeed * Math.sin(this.orientation * Math.PI / 180) * delta;
    }

    if (Input.IsDown('KeyS')) {
      this.position.x -= this.moveSpeed * Math.cos(this.orientation * Math.PI / 180) * delta;
      this.position.y -= this.moveSpeed * Math.sin(this.orientation * Math.PI / 180) * delta;
    }

    if (Input.IsDown('ArrowRight')) {
      this.turretAngle += this.turnSpeed * delta;
    }

    if (Input.IsDown('ArrowLeft')) {
      this.turretAngle -= this.turnSpeed * delta;
    }

    const center = new Point(
      this.position.x + this.bodySprite.width / 2,
      this.position.y + this.bodySprite.height / 2
    );

    this.turretAngle = center.angleTo(new Point(Input.mouseState.x, Input.mouseState.y)) + 90;
  }

  update(delta) {
  }

  draw() {
    this.context.save();
    this.context.translate(this.position.x, this.position.y);
    this.context.translate(this.bodySprite.width / 2, this.bodySprite.height / 2);
    this.context.rotate(Math.PI / 180 * ( this.orientation + 90 ));
    this.atlas.drawImage('tankBody_dark', -this.bodySprite.width / 2, -this.bodySprite.height / 2);

    this.context.restore();
    this.context.save();

    this.context.translate(this.position.x, this.position.y);
    this.context.translate(this.bodySprite.width / 2, this.bodySprite.height / 2);
    this.context.rotate(Math.PI / 180 * this.turretAngle);
    this.atlas.drawImage('tankDark_barrel1', -this.turretSprite.width / 2, -this.turretSprite.height + 6);

    this.context.restore();
  }
}

export default Tank;