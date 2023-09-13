//Métodos e objetos
const pessoa = {
    primeiroNome: "José",
    sobreNome: "Antunes",
    codigo: "1578",
    fullName: function(){
        return this.primeiroNome + "" + this.sobreNome;
    }
};

let pnome = pessoa.primeiroNome = "Senac";
let psobre = pessoa.sobreNome = "Largo treze";

console.log(`O seu nome completo é ${pessoa.fullName(pnome,psobre)}`);




/*
const calculadora = {
    num1: 10.50,
    num2: 20.50,
}

const sub = (num1,num2) => {
    return num1 + num2 ;
}
*/
