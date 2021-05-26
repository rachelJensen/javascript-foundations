var Snowman = require('./Snowman');

class Human {
  constructor(humanName) {
    this.name = humanName;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    };
    this.wantsToBuildASnowman = true;
  }

  gatherMaterials(material, amount) {
    this.materials[material] += amount;
  }

  buildASnowman() {
    var snowman = new Snowman(this.materials);
    return snowman;
  }
 
  placeMagicHat() {
    var snowman = this.buildASnowman();
    snowman.canWearMagicHat();

    if (snowman.magicHat) {
      return 'Woah, this snowman is coming to life!';
    } else {
      return 'I guess I didn\'t build it correctly.';
    }
  }
}

module.exports = Human;
