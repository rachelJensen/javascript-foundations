var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim) {
    var newStatue = new Statue(victim.name);
    if (this.statues.length < 3) {
      this.statues.push(newStatue);
    } else {
      var freePerson = this.statues[0];
      this.statues.shift();
      this.statues.push(newStatue);

      var personAgain = new Person(freePerson.name);
      personAgain.mood = 'relieved';
      return personAgain;
    }
  }
}


module.exports = Medusa;
