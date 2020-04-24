var Dog = require('./Dog.js');
var Cat = require('./Cat.js');

var dog = new Dog('dog');
var tom = new Cat();

dog.eat(tom);
dog.sayHi();
console.log(dog);