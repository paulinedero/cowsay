const id = require('./information.js');
id();

var cowsay = require("cowsay");

console.log(cowsay.say({
	text : id(),
	e : "oO",
	T : "U "
}));
