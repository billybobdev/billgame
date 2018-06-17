class Map {

  constructor(atlas) {
    this.atlas = atlas;

    const map = require('./assets/map1.json');

    this.tiles = map.tiles;
  }

  draw() {
    let x = 0, y = 0;
    this.tiles.forEach(row => {
      row.forEach(sprite => {
        this.atlas.drawImage(sprite, x, y);
        x += 64;
      });
      x = 0;
      y += 64;
    })
  }
}

export default Map;