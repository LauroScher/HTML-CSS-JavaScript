var linha = input.split("\n");

var [x1, y1] = linha.shift().split(" ").map(item => parseFloat(item));
var [x2, y2] = linha.shift().split(" ").map(item => parseFloat(item));

var distancia = Math.sqrt((Math.pow((x2 - x1), 2)  + Math.pow((y2 - y1), 2)));

console.log(distancia.toFixed(4)); 