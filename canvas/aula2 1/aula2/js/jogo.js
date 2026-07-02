const tela=document.querySelector("#tela");
const ctx=tela.getContext("2d");
//importando elementos
import personagem from "./personagem.js";
 
tela.width=window.innerWidth;
tela.height = window.innerHeight;
 
const quadrado=64;
let pos_x=0;
let pos_y=0;

document.addEventListener("keypress",(tecla)=>{
 
    //mexendo no eixo x e y do personagem para andar
 switch(tecla.key){
    case "d":
            posicaoX+=10;
        break
    case "a":
            posicaoX-=10;
        break
    case "w":
            posicaoY-=10;
        break
    case "s":
         posicaoY+=10;
    break
    
    default:
        console.log("nao esta pegando")
 }
 
})
 
function desenharGrid(){
 
    ctx.strokeStyle = "blue";

    ctx.font = "10px Arial";
    ctx.fillStyle = "#000";
 
    for(let y = 0; y <= tela.height ; y += quadrado){
 
        for(let x = 0; x <= tela.width; x += quadrado){
 
            ctx.strokeRect(
                x + 0.5,
                y + 0.5,
                quadrado,
                quadrado
            );
            ctx.fillText(`x:${x} y:${y}`,x,y);
        }
        
 
    }
 
}
 
function desenhar(){
    ctx.clearRect(0,0,tela.width,tela.height,ctx)
    desenharGrid();
    personagem(ctx,pos_x,pos_y,quadrado,tela.width,tela.height,);

    requestAnimationFrame(desenhar)
}

desenhar()
