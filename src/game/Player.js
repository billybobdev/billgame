import Tank from './Tank';
import {Vector2} from "./Primatives";
import Input from "./Input";

class Player extends Tank {

  constructor(atlas) {
    super(atlas);
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
}

export default Player;