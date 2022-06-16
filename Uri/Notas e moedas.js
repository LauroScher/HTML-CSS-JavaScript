var input = require('fs').readFileSync('stdin', 'utf8'); 

var valor = parseFloat(input);


const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01];

console.log("NOTAS:");
for (var nota of notas){
    var quant = valor / nota; 
    console.log(`${parseInt(quant)} nota(s) de R$ ${nota.toFixed(2)}`);
    valor = valor % nota; 

}

console.log("MOEDAS:");
for (var moeda of moedas){
    var quantM = valor / moeda; 
    console.log(`${parseInt(quantM)} moeda(s) de R$ ${moeda.toFixed(2)}`);
    valor = valor % moeda;
}
