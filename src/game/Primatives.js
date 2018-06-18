class Vector2 {

  constructor(x, y) {
    this.x = parseInt(x);
    this.y = parseInt(y);
  }

  angleTo(vector) {
    return Math.atan2(vector.y - this.y, vector.x - this.x) * 180 / Math.PI;
  }
}

class Rectangle extends Vector2 {

  constructor(x, y, width, height) {
    super(x, y);

    this.width = parseInt(width);
    this.height = parseInt(height);
  }

  get right() {
    return this.x + this.width;
  }

  get bottom() {
    return this.y + this.height;
  }

  get centerX() {
    return this.x + Math.floor(this.width / 2);
  }

  get centerY() {
    return this.y + Math.floor(this.height / 2);
  }

  get center() {
    return new Vector2(this.centerX, this.centerY);
  }

  contains(vector) {
    return vector.x >= this.x &&
      vector.x <= this.x + this.width &&
      vector.y >= this.y &&
      vector.y <= this.y + this.height;
  }
}

export { Vector2, Rectangle }