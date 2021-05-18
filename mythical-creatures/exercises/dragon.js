class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungryCount = 0;
    this.hungry = true;


  }

  greet() {
    return `Hi, ${this.rider}!`
  }

  eat() {
    this.hungryCount += 1;
    if (this.hungryCount >= 3) {
      this.hungry = false;
    }
  }
}


module.exports = Dragon;
