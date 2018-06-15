import Input from './Input';

class Tank {

  constructor(atlas) {
    this.atlas = atlas;

    this.x = 200;
    this.y = 200;
    this.orientation = 0;
    this.turnSpeed = .2;
    this.moveSpeed = .1;
    this.turretAngle = 0;
  }

  update(delta) {

    this.turretAngle += 1;

    if (Input.KeyDown('KeyA')) {
      this.orientation -= this.turnSpeed * delta;
    }

    if (Input.KeyDown('KeyD')){
      this.orientation += this.turnSpeed * delta;
    }

    if (Input.KeyDown('KeyW')) {
      this.x += this.moveSpeed * Math.cos(this.orientation * Math.PI / 180) * delta;
      this.y += this.moveSpeed * Math.sin(this.orientation * Math.PI / 180) * delta;
    }

    if (Input.KeyDown('KeyS')) {
      this.x -= this.moveSpeed * Math.cos(this.orientation * Math.PI / 180) * delta;
      this.y -= this.moveSpeed * Math.sin(this.orientation * Math.PI / 180) * delta;
    }

  }

  draw() {
    const context = this.atlas.context;

    const sprite = this.atlas.Atlas['tankBody_dark'];

    context.save();
    context.translate(this.x, this.y);
    context.translate(sprite.width / 2, sprite.height / 2);
    context.rotate(Math.PI / 180 * ( this.orientation + 90 ));
    this.atlas.drawImage('tankBody_dark', - sprite.width / 2, - sprite.height / 2);
    //context.translate(32, 32);
    //context.rotate(Math.PI / 180 * this.turretAngle);
    //this.atlas.drawImage('tankSand_barrel1', 0, 0);

    context.restore();
  }
}

export default Tank;