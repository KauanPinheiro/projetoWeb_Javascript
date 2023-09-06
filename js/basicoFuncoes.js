//FUNÇÃO 

function somaNumero(){
    let num1,num2,resp=0
    num1=10
    num2=20

    resp=num1+num2

    console.log(`O valor é ${resp}`)

}
//executando ultilizando uma função
somaNumero()

//criando funções com paramento 

function somaValorParamento(num3,num4){
    let resp=0
    resp = num3+num4 
    console.log(`O resultado da soma é ${resp}`)
}
// executando funçôes com parâmento
somaValorParamento(20,30)

//executando funçôes com return 
    function somaNum(num5,num6){
        let resp=0
        resp = num5+num6
        return resp
    }
let resposta = somaNum(60,30)
console.log(`O resultado da some é ${resposta}`)


function somaValores(num7,num8){
    return(num7+num8)

}
console.log(`O resultado é ${somaValores(70,90)}`)