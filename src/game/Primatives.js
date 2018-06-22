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
    return Math.round(this.x * 100) / 100 + ',' + Math.round(this.y * 100) / 100;
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

  constructor(x, y, width, height, angle) {
    super(x, y);

    angle = angle || 0;

    this.width = parseFloat(width);
    this.height = parseFloat(height);
    this.angle = parseFloat(angle);
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
    context.translate(this.centerX, this.centerY);
    context.rotate(this.angle);
    context.strokeRect(-this.width / 2, -this.height / 2, this.width, this.height);
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