function Cat(){
	this.name = '';
	this.stomach = [];
};

Cat.prototype.eat = function(mouse){
	this.stomach.push(mouse);
}

module.exports = Cat;