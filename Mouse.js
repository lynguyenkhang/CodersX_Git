function Mouse(){
	this.name = '';
	this.Death = false;
}

Mouse.prototype.die = function(){
	this.Death = true;
}

module.exports = Mouse;