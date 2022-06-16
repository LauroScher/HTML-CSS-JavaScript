var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split(" ").map(item => parseFloat(item)); 
valores.sort((a,b) => a - b);

var C = valores.shift();
var B = valores.shift();
var A = valores.shift();

if (A >= B + C){
    console.log("NAO FORMA TRIANGULO");
}else{ 
    if (Math.pow(A,2) == (Math.pow(B,2) + Math.pow(C,2))){
        console.log("TRIANGULO RETANGULO");

    }

    if (Math.pow(A,2) > Math.pow(B,2) + Math.pow(C,2)){
       console.log("TRIANGULO OBTUSANGULO");
    }

    if (Math.pow(A,2) < Math.pow(B,2) + Math.pow(C,2)){
        console.log("TRIANGULO ACUTANGULO");
   } 

    if (A == B && A == C && C == B){
        console.log("TRIANGULO EQUILATERO");
   }

    if ((A == B && A != C) || (A == C && A != B) || (B == C && C != A)){
        console.log("TRIANGULO ISOSCELES");
   }
}