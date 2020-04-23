function Cat(){
	this.name = '';
	this.stomach = [];
};

Cat.prototypes.eat = function(mouse){
	this.stomach.push(mouse);
}

module.exports = Cat;