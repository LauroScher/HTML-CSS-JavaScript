var input = require('fs').readFileSync('stdin', 'utf8');
var num = input.split("\n").map(item => parseFloat(item));
var quantNum = num.length;
var positivos = 0;
for (contador = 0; contador < quantNum; contador++){
    var aux = num.shift();
    if (aux >= 0){
        positivos++;
    }
}
console.log(positivos + " valores positivos");