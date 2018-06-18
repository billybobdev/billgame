class Point {

  constructor(x, y) {
    this.x = parseInt(x);
    this.y = parseInt(y);
  }

  angleTo(point) {
    return Math.atan2(point.y - this.y, point.x - this.x) * 180 / Math.PI;
  }
}

class Rectangle extends Point {

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
    return new Point(this.centerX, this.centerY);
  }

  contains(point) {
    return point.x >= this.x &&
      point.x <= this.x + this.width &&
      point.y >= this.y &&
      point.y <= this.y + this.height;
  }
}

export { Point, Rectangle }