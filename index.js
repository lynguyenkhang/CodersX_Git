var Dog = require('./Dog.js');
var Cat = require('./Cat.js');
var Mouse = require('./Mouse.js');

var cat = new Cat();
var mouse = new Mouse('Mickey');
var dog = new Dog();

try {
	cat.eat(dog);
} catch(err){
	console.log('Error: Cat can not eat Dog');
}

console.log(cat);