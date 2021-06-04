class Centaur {
  constructor(centaurInfo) {
    this.name = centaurInfo.name;
    this.breed = centaurInfo.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.crankyCount = 0;
  }

  shootBow() {
    return this.checkCranky('Twang!!!');
  }

  run() {
     return this.checkCranky('Clop clop clop clop!!!');
  }

  checkCranky(response) {
    this.crankyCount++;

    if (this.crankyCount >= 3) {
      this.cranky = true;
    }

    if (this.cranky || this.layingDown) {
      return 'NO!';
    } else {
      return response;
    }
  }

  sleep(){
    if (this.standing) {
      return 'NO!'
    } else {
      this.cranky = false;
      this.crankyCount = 0;
      return 'ZZZZ';
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.layingDown) {
      return 'Not while I\'m laying down!';
    } else {
      this.cranky = false;
    }
  }
}

module.exports = Centaur;
