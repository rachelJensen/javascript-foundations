class Roadrace {
  constructor(raceInfo) {
    this.name = raceInfo.title;
    this.location = raceInfo.city;
    this.participants = [];
  }

  setDistance(distance) {
    this.distance = distance;
    return `The ${this.name} in ${this.location} is a ${distance} mile race.`;
  }

  registerParticipants(runner) {
    this.participants.push(runner);
  }

  completeRace() {
    for (var i = 0; i < this.participants.length; i++){
      this.participants[i].runRace(this.name, this.distance);
    }
  }
}

module.exports = Roadrace;
