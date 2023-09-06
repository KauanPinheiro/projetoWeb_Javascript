console.log(`Calculadora`)

function soma(n1,n2){
    return (n1+n2)
}
function sub(n1,n2){
    return (n1-n2)
}
function divi(n1,n2){
    return (n1/n2)
}
function multi(n1,n2){
    return (n1*n2)
}

console.log("Escolha uma das operações: \n1-Soma \n2-Subtração \n3-Divisão \n4-Multipicação");
dig = 3 ;

console.log(`Insíra dois números`);
n1 = 50;
n2 = 20;

if(dig==1){
    op = "Adição";
    resp = soma(n1,n2);
}else if(dig==2){
    op = "Subtração";
    resp = sub(n1,n2);
}else if(dig==3){
    op = "Divisão";
    resp = divi(n1,n2);
}else if(dig==4){
    op = "Multiplicação";
    resp = multi(n1,n2);
}
console.log(`Os números digitados foram ${n1} e ${n2}`)
console.log(`A operação escolhida foi ${op}`)
console.log(`O resultado da operação foi ${resp}`)