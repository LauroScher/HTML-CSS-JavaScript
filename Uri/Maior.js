var input = require('fs').readFileSync('stdin', 'utf8'); 

var [A, B, C] = input.split(" ").map(item => parseInt(item));

MaiorAB = (A + B + Math.abs(A - B)) / 2; 
MaiorABC = (MaiorAB + C + Math.abs(MaiorAB - C)) / 2; 

console.log(MaiorABC + " eh o maior");