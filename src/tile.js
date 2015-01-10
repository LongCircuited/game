var thomas = require('thomas');

function Tile(x, y, w, h,image) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.image = image;
	//this.image.src = "http://the-shame.co.uk/wp-content/uploads/2013/05/Ainsley+Harriott.jpeg";
	this.rect = new thomas.Rectangle(this.x, this.y, this.w, this.h);
}

Tile.prototype.render = function(display) {
	display.drawImage(this.image, this.x, this.y, this.w, this.h);
}

Tile.prototype.update = function(x, y) {
	this.x = x;
	this.y = y;
}

module.exports = exports = Tile;