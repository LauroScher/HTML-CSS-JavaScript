var input = require('fs').readFileSync('stdin', 'utf8');

var palavras = input.split("\n");
let tiposseo = palavras.shift().trim(); // trim() - tira espaço em branco em ambos os lados de uma string.
let classe = palavras.shift().trim();
let tipoalimentar = palavras.shift().trim();

switch (tiposseo){
    case "vertebrado":
        switch (classe){
            case "ave":
                switch(tipoalimentar){
                    case "carnivoro":
                        console.log("aguia");
                        break;
    
                    case "onivoro":
                        console.log("pomba");
                        break;
                }
                break;
            
            case "mamifero":
                switch(tipoalimentar){
                    case "onivoro":
                        console.log("homem");
                        break;
    
                    case "herbivoro":
                        console.log("vaca");
                        break;
                }
                break;
        }
        break;
    case "invertebrado":
        switch (classe){
            case "inseto":
                switch(tipoalimentar){
                    case "hematofago":
                        console.log("pulga");
                        break;
    
                    case "herbivoro":
                        console.log("lagarta");
                        break;
                }
                break;
            
            case "anelideo":
                switch(tipoalimentar){
                    case "hematofago":
                        console.log("sanguessuga");
                        break;
    
                    case "onivoro":
                        console.log("minhoca");
                        break;
                }
                break;
        }
        break;
    }


    // Ex : invertebrado, anelideo, onivoro  = minhoca