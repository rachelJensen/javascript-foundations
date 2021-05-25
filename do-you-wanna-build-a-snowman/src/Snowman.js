class Snowman {
  constructor(snowmanInfo) {
    this.carrots = snowmanInfo.carrots;
    this.coal = snowmanInfo.coal;
    this.buttons = snowmanInfo.buttons;
    this.snowballs = snowmanInfo.snowballs;
    this.magicHat = false;
  }

  canWearMagicHat() {
  if (this.coal >= 2 && this.buttons >= 5 && this.carrots >= 1 && this.snowballs >= 2) {
      this.magicHat = true;
    }
  }
}

module.exports = Snowman;
