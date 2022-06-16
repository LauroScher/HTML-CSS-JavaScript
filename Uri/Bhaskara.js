var input = require('fs').readFileSync('stdin', 'utf8'); 

var [A, B, C] = input.split(" ").map(item => parseFloat(item));

var delta = (Math.pow(B, 2) - (4*A*C));
var raiz = Math.sqrt(delta);
if (delta > 0 && A != 0 ){
    var R1 = (-B + raiz) / (2*A); 
    var R2 = (-B - raiz) / (2*A);
    console.log("R1 = " + R1.toFixed(5));
    console.log("R2 = " + R2.toFixed(5));
}else{
    console.log("Impossivel calcular");
}