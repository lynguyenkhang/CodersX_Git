var Mouse = require('./Mouse')
var chalk = require('chalk')
function Cat(name){
	this.name = name;
	this.stomach = [];
};

Cat.prototype.eat = function(animal){

	if (animal instanceof Mouse){
		this.stomach.push(animal);
	} else {
		throw new Error('Can can only eat mouse !');
	}
}



Cat.prototype.sayHi = function() {
	console.log('Hi! My name is ' + chalk.yellow(this.name))
}
module.exports = Cat;