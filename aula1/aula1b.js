const titulo=document.querySelector("#titulo");
const btnMover=document.querySelector("button");
const card= document.querySelector("#card");

// innerText vai modificar o valor que esta dentro da tag
// titulo.innerText="srsrsrsr"

// Criando a primeira função
function handleMover(){
   titulo.innerText="Mudei o titulo";
   titulo.style="color:red";
   card.style="animation: mover 2s "
}

// Primeiro evento em button
btnMover.addEventListener("click",handleMover)