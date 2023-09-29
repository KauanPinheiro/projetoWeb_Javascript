//variavel que irá representar os elementos ho html no javascript.
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const res  = document.querySelector("#result");



function cal(){
    let val1,val2, resp=0;

        val1 = parseFloat(num1.value);
        val2 = parseFloat(num2.value);
    
    if(num1.value == "" || num2.value == ""){
        res.innerHTML =  `Insíra valores números.`;  
        lim();  
    }else{
        //realizar o calculo
        resp = val1 + val2  ;
        //mostrando o resultado no HMTL
        res.innerHTML =  `o resultado da soma é ${resp}`;
    }
}
function lim(){
    num1.value = "";
    num2.value = "";
    res.innerHTML = "";
    num1.focus();
}