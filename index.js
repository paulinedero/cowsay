const id = require('./information.js');

var cowsay = require("cowsay");

console.log(cowsay.say({
	text : id(),
	e : "oO",
	T : "U "
}));
