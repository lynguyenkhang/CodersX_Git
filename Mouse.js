function Mouse(){
	this.name = '';
	this.isDeath = false;
}

Mouse.prototype.die = function(){
	this.Death = true;
}

module.exports = Mouse;