class Vector2 {

  constructor(x, y) {
    this.x = parseFloat(x);
    this.y = parseFloat(y);
  }

  get direction() {
    return Math.atan2(this.y, this.x);
  }

  get magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  get length() {
    return this.magnitude;
  }

  angleTo(vector) {
    return Math.atan2(vector.y - this.y, vector.x - this.x);
  }

  degreesTo(vector) {
    return this.angleTo(vector) * 180 / Math.PI;
  }

  add(vector) {
    this.x += vector.x;
    this.y += vector.y;

    return this;
  }

  toString() {
    return this.x + ',' + this.y;
  }

  toArray() {
    return [this.x, this.y];
  }

  clone() {
    return new Vector2(this.x, this.y);
  }

  copy(vector) {
    this.x = vector.x;
    this.y = vector.y;

    return this;
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

  strokeRect(context) {
    context.save();
    context.strokeRect(this.x, this.y, this.width, this.height);
    context.restore();
  }

  contains(vector) {
    return vector.x >= this.x &&
      vector.x <= this.x + this.width &&
      vector.y >= this.y &&
      vector.y <= this.y + this.height;
  }
}

export { Vector2, Rectangle }