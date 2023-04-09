const { assert } = require('chai');
const Circle = require('../Circle');

describe('Circle', () => {
    let circle;
    let x = 10;
    let y = 15;
    let radius = 15;
    describe('instance', () => {
        beforeEach(() => {
            circle = new Circle(x, y, radius);
        });

        it('should set the properties', () => {
            assert.equal(circle.position.x, x);
            assert.equal(circle.position.y, y);
            assert.equal(circle.radius, radius);
        });
    });
}); 