//funções avançadas
function escreverNomes(nome){
    return nome;
}
//executando a função 
let nNome = escreverNomes("Senac");
let sobreNome = escreverNomes("Largo Treze");
console.log(`Olá ${nNome} seu sobrenome é ${sobreNome}`);

//função como uma expressão
const area = function (base,altura){
    return  base * altura;
}
let x = area(10,20);
console.log("A área é " , x);

const pi = 3.14;

let result = area(40,50) * pi;
console.log(`A área vezes pi é ${result}`);

//função anônima
const resp = function(num1,num2){
    return (num1 + num2);
}

let valor = resp(10,50);

//array fuction ou funções de seta
const v = () => {
    console.log(`Olá mundo!!!`);    

}
    
v();

//construindo arrow function com parãmentros
const raiz = (q) => {
    return q*q ;
}
//executando arrow fuction
let r = (4);

console.log(`Raiz quadrada do número 4 é ${r}`);

//funções predefinidas
let seno = Math.sin(30);
let quad = Math.sqrt(4);
let aleatorio = Math.random();
console.log("O seno de 30 é ", seno);
console.log("O quadrado de 4 é ", quad);
console.log("Aleatótio ", aleatorio );

