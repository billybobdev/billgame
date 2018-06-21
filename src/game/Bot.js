import Tank from './Tank';

class Bot extends Tank {

  constructor(atlas, position) {
    super(atlas, position);

    this.turretSprite = this.atlas.Atlas['specialBarrel6_outline'];

    this.moveUp = false;
  }

  update(delta) {
    if (!this.moveUp) {
      if (this.position.y <= 500) {
        this.position.y += this.moveSpeed * delta;
      } else {
        this.moveUp = true;
      }
    } else {
      if (this.position.y >= 100) {
        this.position.y -= this.moveSpeed * delta;
      } else {
        this.moveUp = false;
      }
    }

    this.turretAngle += Math.PI / 180 * 2;
  }

}

export default Bot;