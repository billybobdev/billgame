import path from 'path';
import { Rectangle } from './Primatives';
import { forOwn } from 'lodash';

class TextureAtlas {

  constructor(context, xmlString, imgData) {

    this.context = context;

    this.atlas = {};

    const doc = new DOMParser().parseFromString(xmlString, 'text/xml');

    const textures = doc.getElementsByTagName('SubTexture');

    for (let i = 0; i < textures.length; i++) {
      let name = textures[i].getAttribute('name');
      name = path.basename(name, path.extname(name));

      this.atlas[name] = new Rectangle(
        textures[i].getAttribute('x'), textures[i].getAttribute('y'),
        textures[i].getAttribute('width'), textures[i].getAttribute('height')
      );
    }

    this.texture = new Image();
    this.texture.src = imgData;
  }

  get Atlas() {
    return this.atlas;
  }

  findSpriteByPoint(point) {
    let found;

    forOwn(this.atlas, (value, key) => {
      if (value.contains(point)) {
        found = key;
      }
    });

    return found;
  }

  drawImage(sprite, x, y) {
    this.context.drawImage(this.texture, this.atlas[sprite].x, this.atlas[sprite].y, this.atlas[sprite].width, this.atlas[sprite].height, x, y, this.atlas[sprite].width, this.atlas[sprite].height);
  }
}

export default TextureAtlas;