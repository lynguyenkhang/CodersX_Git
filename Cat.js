
var chalk = require('chalk')
function Cat(name){
	this.name = name;
	this.stomach = [];
};

Cat.prototype.eat = function(mouse){
	this.stomach.push(mouse);
}

Cat.prototype.sayHi = function() {
	console.log('Hi! My name is ' + chalk.yellow(this.name))
}
module.exports = Cat;