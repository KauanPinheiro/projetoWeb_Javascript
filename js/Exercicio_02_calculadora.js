//Exercício da calculadora ultilizando métodos

console.log("Calculadora")

console.log("Escolha uma das operações: \n1- Soma \n2-Subtração \n3- Multipicação \n4- Divisão ")
dig = 3; 

console.log("Insíra dois números:")

x = 10
y = 2
let opcao , op

const calculadora = {
    num1 : 40,
    num2 : 2,
    
    soma : (x,y) => {
        this.num1 = x;
        this.num2 = y;
        return this.num1 + this.num2;
    },
    sub : (x,y) => {
        this.num1 = x;
        this.num2 = y;
        return this.num1 - this.num2;
    },
    mult : (x,y) => {
        this.num1 = x;
        this.num2 = y;
        return this.num1 * this.num2;
    },
    div :  (x,y) => {
        this.num1 = x;
        this.num2 = y;
        return this.num1 / this.num2;
    }
}


switch (opcao) {
    case 1:
    resp = calculadora.soma(x, y);
    op = "Soma";
    break;
    case 2:
    resp = subtracao(x, y);
    op = "Subtração";
    break;
    case 3:
    resp = multiplicacao(x, y);
    op = "Multiplicação";
    break;
    case 4:
    resp = divisao(x, y);
    op = "Divisão";
    break;
}







console.log(calculadora.soma(x,y))
console.log(calculadora.sub(x,y))
console.log(calculadora.mult(x,y))
console.log(calculadora.div(x,y))