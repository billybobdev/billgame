import path from 'path';

class TextureAtlas {

  constructor(context, xmlString, imgData) {

    this.context = context;

    this.atlas = {};

    const doc = new DOMParser().parseFromString(xmlString, 'text/xml');


    var textures = doc.getElementsByTagName('SubTexture');

    for (let i = 0; i < textures.length; i++) {
      let name = textures[i].getAttribute('name');
      name = path.basename(name, path.extname(name));

      this.atlas[name] = {
        x: textures[i].getAttribute('x'),
        y: textures[i].getAttribute('y'),
        width: textures[i].getAttribute('width'),
        height: textures[i].getAttribute('height')
      };
    }

    this.texture = new Image();
    this.texture.src = imgData;
  }

  drawImage(sprite, x, y) {
    this.context.drawImage(this.texture, this.atlas[sprite].x, this.atlas[sprite].y, this.atlas[sprite].width, this.atlas[sprite].height, x, y, this.atlas[sprite].width, this.atlas[sprite].height);
  }
}

export default TextureAtlas;