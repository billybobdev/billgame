
const maps = [
  require('./assets/map1.json'),
  //require('./assets/map2.json')
];

class Map {

  constructor(atlas) {
    this.atlas = atlas;

    this.loadMap(0);
  }

  loadMap(index) {
    this.tiles = maps[index].tiles;
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