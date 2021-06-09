class TrickOrTreater {
  constructor(theCostume, theBag) {
    this.dressedUpAs = theCostume.style;
    this.bag = theBag;
    this.hasCandy = false;
    this.countCandies = 0;
  }

  putCandyInBag(candy) {
    this.bag.fill(candy);
    this.hasCandy = true;
    this.countCandies = this.bag.count;
  }

  eat() {
    this.countCandies -= 1;
    this.bag.candies.pop();
  }
}
module.exports = TrickOrTreater;
