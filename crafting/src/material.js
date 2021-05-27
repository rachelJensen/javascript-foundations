class Material {
  constructor(material, price, amount, units) {
    this.name = material;
    this.price = price;
    this.amount = amount;
    this.units = units;
  }

  useMaterial(amtUsed) {
    if (amtUsed < this.amount) {
      this.amount -= amtUsed;
      return `You now have ${this.amount} ${this.units} of ${this.name} left.`
    } else {
      return `You don't have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
    }
  }

  calculateMaterialCost() {
    var cost = this.price * this.amount;
    return cost;
  }
}

module.exports = Material;
