var input = require('fs').readFileSync('stdin', 'utf8');

var salario = parseFloat(input);

if (salario >= 0 && salario <= 2000){
    console.log("Isento");
}else if(salario >= 2000.01 && salario <= 3000){
    x = salario - 2000;
    tax = (x*0.08);
    console.log("R$ "+ tax.toFixed(2));
}else if(salario >=3000.01 && salario <= 4500){
    x = salario - 2000;                                                     
    y = x - 1000; 
    tax = ((x - y)*0.08 + (y*0.18));
    console.log("R$ " + tax.toFixed(2));
}else if(salario > 4500){
    x = salario - 2000;
    y = x - 1000;
    z = y - 1500;
    tax = ((x - y)*0.08 + (y - z)*0.18 + (z*0.28));
    console.log("R$ " + tax.toFixed(2));
}