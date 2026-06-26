const titulo=document.querySelector("h1");

const btnMover=document.querySelector("button")

const card= document.querySelector("#card")

//titulo.innerText="ssrssrsrsr" //para alterar coisas no html

//criando a primeira função
function handleMover(){
    titulo.innerText="Mudei o titulo";
    titulo.style="color:red";
    card.style="animation: mover 2s linear"
}

//primeiro evento em button

btnMover.addEventListener("click",handleMover)
