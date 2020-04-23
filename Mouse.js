function Mouse(){
	this.name = '';
	this.Death = false;
}

Mouse.prototypes.die = function(){
	this.Death = true;
}

module.exports = Mouse;