class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];

  }

  checkInGroup(players) {
    var howMany = players.length;

    if (howMany <= this.openings) {
      this.openings -= howMany;
      for (var i = 0; i < howMany; i++) {
        console.log(players[i].name);
        this.currentlyPlaying.unshift(players[i].name);
      }
      return 'You\'re checked in. Have fun!';
    } else {
      return 'Sorry, we are currently booked! Please come back later.';
    }
  }
}

module.exports = GolfCourse;
