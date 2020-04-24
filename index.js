var Dog = require('./Dog.js');
var Cat = require('./Cat.js');

var kiki = new Dog('kiki');
var tom = new Cat('tom');

kiki.sayHi();
tom.sayHi();

kiki.eat(tom);
console.log(kiki);
