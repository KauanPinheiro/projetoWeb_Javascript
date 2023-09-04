

console.log("Alguma coisa em aspas duplas");
console.log('Alguma coisa em apostrofo') ;
//console.log(`Alguma coisa em ${variavel}`) ;
let variavel = 20;
let nome = 'Senac'
console.log(nome)
nome = 18 ;

console.log(nome);

function somaValor(){
    let valor;
    valor = 50 ;
    console.log("valor");
}

//Declaração de variáveis com let e const 

let  email, telefone, cpf

//Inicializar as variáveis 
email = 'sac@sp.senac.br';
telefone = 1137373900 ;
cpf = "258.952.528-77" ;

console.log("Seu e-mail é: ", email)
console.log(`Seu e-mail é: ${telefone}`)
console.log(`Seu e-mail é: ${cpf}`)
//variável que o seu valor não
//mmuda em tempo de execução
const pi = 1.1416152325
console.log(`Valor do ${pi}`)
//pi = "senac"
//console.log("Valor do pi ", pi);

const meuNome = "Senac Largo Treze"
console.log("Meu nome é: ",meuNome);

const primeiroNome = "Senac"
const segundoNome = "Largo Treze"

console.log(`primeiro nome ${primeiroNome} sobrenome é ${segundoNome}`)

//operadores

let num1,num2,resp=0
num1=10
num2=20

resp = num1 + num2;
console.log("A soma: ",resp);
resp = num1 - num2;
console.log("A subtração: ",resp);
resp = num1 * num2;
console.log("A multipicação: ",resp);
resp = num1 / num2;
console.log("A divisão: ",resp);
resp = num1 % num2
console.log("O resto da divisão: ", resp)

//Expressões numéricas

let a = 3;

let x = (100+50) * a ;

console.log(`O valor da expressão é ${x}`)

//Operadores de ingremento e degremento 

//incrementando o z 
let z = 5;
z++
let y = z ;
console.log("Valor de y: ",y);

//dncrementando o w 
let  w= 5;
w--
let n = w ;
console.log("Valor de w: ",n);

//Exponeciação 
let exp = 5;
let op = exp ** 2;
let mat = Math.pow(exp,2);
console.log(`Exponeneciação ${op}`)
console.log(`Exponeneciação com classe matemática: ${mat}`)

//Operadores de atribuição Javascript 

let r = 10;

let s = 10+r;
console.log(`Valor de s : ${r}`); 

let m = 10-r;
console.log(`Valor de s : ${m}`);

//operadores relacionais retona true/false

let b ="true";
let q ="true";

//Operador and só vai ser verdadeiro se os dois lados forem verdadeiros
let v = b && q
console.log(`Valor de v é ${v}`);

//operador ou vai ser verdadeiro quando um dos lados ou dois forem verdadeiro
let i = b || q
console.log(`Valor de v é ${i}`);

//Variável di tipo objeto
const pessoa = {
    name:"Senac",
        lastname:"Largo Treze"

}
console.log(`O nome da pessoa ${pessoa.name} e seu sobrenome é ${pessoa.lastname    }`)

//Variáveis do tipo array (vetores)
const car = [
    "wV",
    "Ford",
    "Chevrolet"

];
console.log(`O carro escolhido ${car[2]}`);




