//Trabalhando com o dom

document.getElementById("exemplo").innerHTML = "Senac largo treze";


//usando o dom com função
function calcula(){

    let num = document.getElementById("number").value;

    alert(num * num * num);
}