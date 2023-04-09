const { assert } = require('chai');
const Rectangle = require('../Rectangle');
const Shape = require('../Shape');

describe('Rectangle', () => {
    let rectangle;
    let x = 10;
    let y = 15;
    let height = 15;
    let width = 20;
    describe('instance', () => {
        beforeEach(() => {
            rectangle = new Rectangle(x, y, height, width);
        });

        it('should set the properties', () => {
            assert.equal(rectangle.position.x, x);
            assert.equal(rectangle.position.y, y);
            assert.equal(rectangle.height, height);
            assert.equal(rectangle.width, width);
        });

        it('should refer to the Shape prototype in the prototype chain', () => {
            assert(Shape.prototype.isPrototypeOf(rectangle));
        });

        it('should have move and flip functions', () => {
            assert.equal(typeof rectangle.move, "function");
            assert.equal(typeof rectangle.flip, "function", "Could not find a function flip on rectangle");
        });

        it('should flip height and width', () => {
            rectangle.flip();
            assert.equal(rectangle.height, width);
            assert.equal(rectangle.width, height);
        });
    });
});

describe('Shape', () => {
    let shape;
    describe('instance', () => {
        beforeEach(() => {
            shape = new Shape(0,0);
        });
        it('should not have a flip function', () => {
            assert(!shape.flip, "Did not expect to find a function flip on shape");
        });
    });
});