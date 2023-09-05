//Estrutura de repetição while

let contador = 0

while(contador < 10){

    contador = contador + 1 
    
    console.log(`O contador vale ${contador} vocês viram`)
}


//Estrutura de repetição do " while "
let cont = 0
do{

    cont = cont + 1
    console.log("Executando do while...")

}while(cont <=10)


//Estrutura de repetição " For "
let i 
for(i=0;i<10;i++){
    //repete
    console.log(`Imprimindo o valor de i ${i}`)
}

for(let linha=0; linha<5; linha++){
    for(let coluna=0; coluna<2; coluna++){

        console.log(`Linha ${linha} | coluna ${coluna}`)
    }
}