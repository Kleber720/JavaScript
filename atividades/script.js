const valor1=document.querySelector("#valor1");
const valor2=document.querySelector("#valor2");
const btn=document.querySelector("#btn");

function somar(entrada1,entrada2){
    return Number (entrada1)+Number(entrada2);
}


btn.addEventListener("click",()=>{
    resposta.innerText=somar(valor1.value, valor2.value)

})