import Input from './Input';

class Tank {

  constructor(atlas) {
    this.atlas = atlas;

    this.bodySprite = this.atlas.Atlas['tankBody_dark'];
    this.turretSprite = this.atlas.Atlas['tankDark_barrel1'];

    this.x = 200;
    this.y = 200;
    this.orientation = 0;
    this.turnSpeed = .2;
    this.moveSpeed = .1;
    this.turretAngle = 90;
  }

  begin(timestamp, delta) {
    if (Input.KeyDown('KeyA')) {
      this.orientation -= this.turnSpeed * delta;
      this.turretAngle -= this.turnSpeed * delta;
    }

    if (Input.KeyDown('KeyD')){
      this.orientation += this.turnSpeed * delta;
      this.turretAngle += this.turnSpeed * delta;
    }

    if (Input.KeyDown('KeyW')) {
      this.x += this.moveSpeed * Math.cos(this.orientation * Math.PI / 180) * delta;
      this.y += this.moveSpeed * Math.sin(this.orientation * Math.PI / 180) * delta;
    }

    if (Input.KeyDown('KeyS')) {
      this.x -= this.moveSpeed * Math.cos(this.orientation * Math.PI / 180) * delta;
      this.y -= this.moveSpeed * Math.sin(this.orientation * Math.PI / 180) * delta;
    }

    if (Input.KeyDown('ArrowRight')) {
      this.turretAngle += this.turnSpeed * delta;
    }

    if (Input.KeyDown('ArrowLeft')) {
      this.turretAngle -= this.turnSpeed * delta;
    }
  }

  update(delta) {
  }

  draw() {
    const context = this.atlas.context;

    context.save();
    context.translate(this.x, this.y);
    context.translate(this.bodySprite.width / 2, this.bodySprite.height / 2);
    context.rotate(Math.PI / 180 * ( this.orientation + 90 ));
    this.atlas.drawImage('tankBody_dark', -this.bodySprite.width / 2, -this.bodySprite.height / 2);

    context.restore();
    context.save();

    context.translate(this.x, this.y);
    context.translate(this.bodySprite.width / 2, this.bodySprite.height / 2);
    context.rotate(Math.PI / 180 * this.turretAngle);
    this.atlas.drawImage('tankDark_barrel1', -this.turretSprite.width / 2, -this.turretSprite.height + 6);

    context.restore();
  }
}

export default Tank;