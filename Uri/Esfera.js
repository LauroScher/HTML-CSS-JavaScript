var input = require('fs').readFileSync('stdin', 'utf8'); 

var valores = input.split();
var raio = parseInt(valores.shift());
var PI = 3.14159;

var volume = (4.0/3.0) * PI * Math.pow(raio, 3);

console.log("VOLUME = " + volume.toFixed(3));