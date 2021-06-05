class Golfer {
  constructor(golferInfo) {
    this.name = golferInfo.name;
    this.handicap = golferInfo.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }

  calculateAvg(par) {
    var average = par + this.handicap;
    return `I usually shoot a ${average} on average.`
  }

  playRound(golfCourse) {
    if (golfCourse.difficulty === 'hard') {
      this.frustration = 500;
    } else {
      this.frustration = 100;
    }
  }

  hitTheRange() {
    this.confidence += 10;
  }

  marvel(golfCourse) {
    return `I love the ${golfCourse.features[0]} and ${golfCourse.features[1]} on this course!`
  }

  whatYaShoot(score) {
    if (score >= 1) {
      this.frustration += 20;
      return 'Doh!';
    } else if (score === 0) {
      this.frustration -= 10;
      return 'Booyah!';
    } else {
      this.frustration -= 30;
      if (this.frustration < 0) {
        this.frustration = 0;
        return 'I AM THE GREATEST GOLFER ALIVE!';
      } else {
        return '';
      }
    }
  }
}

module.exports = Golfer;
