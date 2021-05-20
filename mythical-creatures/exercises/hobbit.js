class Hobbit {
  constructor(name) {
    this.name = name.name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    if (this.name === 'Frodo') {
      this.hasRing = true;
    } else {
      this.hasRing = false;
    }
  }

  celebrateBirthday() {
    this.age++;
    if (this.age > 32) {
      this.adult = true;
    }
    if (this.age > 100) {
      this.old = true;
    }
   }

   getRing() {
     if (this.hasRing === true) {
       return 'Here is the ring!'
     } else {
       return 'You can\'t have it!'
     }
   }
}

module.exports = Hobbit;
