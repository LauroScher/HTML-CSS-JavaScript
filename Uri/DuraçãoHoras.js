var input = require('fs').readFileSync('stdin', 'utf8');

var [horainicial,minutoinicial,horafinal, minutofinal] = input.split(" ").map(item => parseInt(item)); 
var hora = 0;
var minuto = 0;
if (horainicial >= horafinal){
    while (horainicial < 24){
       hora++;
       horainicial ++;
   }
    while (horafinal > 0){
       hora++;
       horafinal--;
   }
}else{
    while (horainicial < horafinal){
        hora++;
        horainicial++;
    }
}

if (minutoinicial <= minutofinal){
    minuto = minutofinal - minutoinicial;
    if(hora === 24 && minutoinicial < minutofinal){
        hora *= 0;
    }
}else{
    while(minutoinicial < (60 + minutofinal)){
        minuto++;
        minutoinicial++;
    }
    hora--;
}

if (minuto >= 1 || hora <= 24 ){
    console.log(`O JOGO DUROU ${hora} HORA(S) E ${minuto} MINUTO(S)`);
}