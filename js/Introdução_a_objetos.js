//criando objetos
const car ={
    marca: "Ford",
    cor: "Amarelo",
    ano: 2000,
    modelo: "Fiesta",
    km: 1500,
    acelerando: 100,
    combustivel: "Gasolina",
    escolhaCor: function (cor){
        return cor;
    },
    ace: function(velocidade){
        return velocidade = velocidade +1 
    };
};
//executando um objeto
car.ano = 2012;
car.combustivel = "Gasolina";
car.cor = "Vermelho";
car.km = 18000;
car.marca = "poshe";
car.modelo = "voyage";

//acessando 
console.log(`O ano do carro é ${car.ano}\n o combustivel é ${car.combustivel}\n da cor ${car.cor}\n
com ${car.km}\n marca ${car.marca}\n modelo ${car.modelo}`);

let escolhaCor = car.escolhaCor("Vermelho");
console.log("A cor escolhida" , escolhaCor);

let ace = car.ace







