import { Rectangle } from './Primatives';

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
    this.objects = maps[index].objects;
  }

  get bounds() {
    return new Rectangle(0, 0, 64 * this.tiles[0].length, 64 * this.tiles.length);
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
    });

    this.objects.forEach(obj => {
      this.atlas.drawImage(obj.sprite, obj.x, obj.y);
    });
  }
}

export default Map;