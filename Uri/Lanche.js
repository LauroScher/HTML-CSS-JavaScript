var input = require('fs').readFileSync('stdin', 'utf8'); 

var [codigo, quantidade] = input.split(" ").map(item => parseFloat(item));

switch (codigo){
    case 1: 
    console.log("Total: R$ " + (4*quantidade).toFixed(2));
    break;

    case 2: 
    console.log("Total: R$ " + (4.50*quantidade).toFixed(2));
    break;

    case 3:  
    console.log("Total: R$ " + (5*quantidade).toFixed(2));
    break;
    

    case 4: 
    console.log("Total: R$ " + (2*quantidade).toFixed(2));
    break;

    case 5: 
    console.log("Total: R$ " + (1.50*quantidade).toFixed(2));
    break;
}
