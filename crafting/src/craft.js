class Craft {
  constructor(craftInfo) {
    this.name = craftInfo.type;
    this.materials = craftInfo.materials;
    this.completed = false;
  }

  completeCraft() {
    this.completed = true;
    return 'All done! It looks great!';
  }

  calculateProjectTotal() {
    var cost = 0;
    for (var i = 0; i < this.materials.length; i++) {
      cost += (this.materials[i].amount * this.materials[i].price);
    }
    return cost;
  }
}

module.exports = Craft;
