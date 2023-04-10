const Hero = require('./Hero');

class Warrior extends Hero {
    constructor(health) {
        super(health);
        this.rage = 0;
    }

    takeDamage(damage) {
        super.takeDamage(damage);
        this.rage += 1;
    }
}