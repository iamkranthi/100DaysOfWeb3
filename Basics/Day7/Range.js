const Hero = require("./Hero");

class Warrior extends Hero {
  constructor() {
    super();
    this.rage = 0;
  }

  takeDamage(damage) {
    super.takeDamage(damage);
    this.rage += 1;
  }
}
