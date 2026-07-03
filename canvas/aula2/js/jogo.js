// Importando elementos 
import personagem  from "./personagem.js";
const tela=document.querySelector("#tela");
const ctx=tela.getContext("2d");

tela.width=window.innerWidth;
tela.height = window.innerHeight;

const quadrado=64;
let pos_x=0;
let pos_y=0;

document.addEventListener("keypress",(tecla)=>{
    switch(tecla.key){
        case "d":
            pos_x+=quadrado;
            break;
        case "a":
            pos_x-=quadrado;
            break;
        case "w":
            pos_y-=quadrado;
            break;
        case "s":
            pos_y+=quadrado;
            break;
    }

})


function desenharGrid(){
    ctx.font = "9px Arial";
    ctx.fillStyle = "#000";
    ctx.strokeStyle = "blue";

    for(let y = 0; y <= tela.height ; y += quadrado){

        for(let x = 0; x <= tela.width; x += quadrado){

            ctx.strokeRect(
                x + 0.5,
                y + 0.5,
                quadrado,
                quadrado
            );
            ctx.fillText(`x:${x} y:${y}`,x,y)
        }


    }

}



function desenhar(){
    ctx.clearRect(0,0,tela.width,tela.height)
    desenharGrid();
    personagem(ctx,pos_x,pos_y,quadrado)

    requestAnimationFrame(desenhar)
};

desenhar()




