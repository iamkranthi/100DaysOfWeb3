function Shape(x, y) {
    this.position = { x, y }
}

Shape.prototype.move = function(x,y) {
    this.position.x += x;
    this.position.y += y;
}