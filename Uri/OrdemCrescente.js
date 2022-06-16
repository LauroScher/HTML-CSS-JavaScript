var input = require('fs').readFileSync('stdin', 'utf8');

var [N1, N2, N3] = input.split(" ").map(item => parseInt(item));

if (N1 < N2 && N1 < N3){
    console.log(N1);
    if (N2 < N3){
        console.log(N2 + "\n" + N3 + "\n");
    }else{
        console.log(N3 + "\n" + N2 + "\n");
    }

}else if (N2 < N1 && N2 < N3){
    console.log(N2);
    if (N1 < N3){
        console.log(N1 + "\n" + N3 + "\n");
    }else{
        console.log(N3 + "\n" + N1 + "\n");
    }
}else if (N3 < N1 && N3 < N2){
    console.log(N3);
    if (N1 < N2){
        console.log(N1 + "\n" + N2 + "\n");
    }else{
        console.log(N2 + "\n" + N1 + "\n");
    }
}
console.log(N1 + "\n" + N2  + "\n" + N3);