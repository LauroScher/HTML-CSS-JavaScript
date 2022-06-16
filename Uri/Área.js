var input = require('fs').readFileSync('stdin', 'utf8'); 

var valores = input.split(" ");

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var C = parseFloat(valores.shift());
var PI = 3.14159;

var areaT = (A * C) / 2; 
var areaC =  PI * Math.pow(C, 2);
var areaTrap = ((A + B) * C ) / 2;
var areaQ = Math.pow(B, 2); 
var areaR = A*B; 


console.log("TRIANGULO: "+ areaT.toFixed(3));
console.log("CIRCULO: "+ areaC.toFixed(3));
console.log("TRAPEZIO: "+ areaTrap.toFixed(3));
console.log("QUADRADO: "+ areaQ.toFixed(3));
console.log("RETANGULO: "+ areaR.toFixed(3));