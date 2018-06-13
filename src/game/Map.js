class Map {
  constructor(atlas) {
    this.atlas = atlas;


    this.map = [];

    for (let y = 0; y < 30; y++) {
      this.map.push([
        'tileGrass1', 'tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1',
        'tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1',
        'tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1',
        'tileGrass1', 'tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1',
        'tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1',
        'tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1','tileGrass1',
      ])
    }
  }

  draw(ctx) {
    let x = 0, y = 0;
    this.map.forEach(row => {
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