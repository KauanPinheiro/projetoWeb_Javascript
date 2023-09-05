//Estrutura de decisão

//if basico
let a = 10;
let b = 20;

if(b>a){
    console.log("Entrou na estrutura");

}

//if alinhado
if(a<b){
    if(b>a){
        if(a!=b){
            console.log("Entoru na estrutura")

        }
    }
}

//utilizando o else para responder a parte fals
else{
}

//ultilizando o " else if "

let saudaCao,periodo;

console.log(`Digite: \n1- Bom dia \n1- Bom tarde  \n1- Bom noite `)

periodo = 3;

if(periodo == 1){
    saudaCao = "Bom diaa"
}else if(periodo == 2){
    saudaCao = "Boa tarde"
}else if(periodo == 3){
    saudaCao = "Boa noite"
}else{
    saudaCao = "Nenhum perído selecionado"
}
console.log(`você selecionou ${saudaCao}`)



//    " \n para pular linha "
//     " \t para da tabe na linha " 