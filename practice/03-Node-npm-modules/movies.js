/*var titanic = require("./movie.js");
titanic.set("title","TItanic");
console.log(titanic.get("title"));*/

var Movie = require("./movie.js");
var Director = require("./director.js");
var titanic = new Movie();
titanic.set("title","Titanic");
console.log(titanic.get("title"));

var ridleyScott = new Director("Ridley Scott");
console.log(ridleyScott.get("name"));
ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);

titanic.set("director",ridleyScott);
console.log(titanic.get("director").get("name"));
//titanic.get("director").speak();

var $ = require('jquery'); 
$(function(){ 
    titanic.get("director").speak(); 
});
