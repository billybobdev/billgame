class Map {
  constructor(atlas) {
    this.atlas = atlas;


    this.map = [];

    for (let y = 0; y < 30; y++) {
      this.map.push([
        'tileGrass1', 'tileGrass_roadCornerLL','tileGrass_roadCornerLR','tileGrass_roadCornerUL','tileGrass_roadCornerUR','tileGrass_roadCrossing','tileGrass_roadCrossingRound','tileGrass1','tileGrass1','tileGrass1',
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
      row.forEach(col => {
        this.atlas.drawImage(ctx, col, x, y);
        x += 64;
      });
      x = 0;
      y += 64;
    })
  }
}

export default Map;