const tela=document.querySelector("#tela");
 
var context=tela.getContext("2d");
 
context.fillStyle="#00f";
 
//  X ; Y ; largura ; altura
// context.fillRect(0,0,20,20);
// context.clearRect();
 
context.fillRect(0,0,20,20);
let posicaoX=0;
let posicaoY=0;

const tamanho=40;

function desenharGrid(){
    context.strokeStyle = "#999";
    context.font = "10px Arial";
    context.fillStyle = "#000";

    for(let y=0;y<tela.height;y+=tamanho){
        for(let x=0;x<tela.width;x+=tamanho){
            context.strokeRect(x,y,tamanho,tamanho);
            context.fillText(`x:${x} y:${y}`,x,y)
        }
        
    }
    
}

function plataforma(y,x){
    context.fillStyle="rgb(100,85,90)";
    context.fillRect(x,y,20,20);
    
}



function desenharPersonagem(){
    context.clearRect(0,0,tela.width,tela.height);/* Limpando a tela*/
    desenharGrid()
    plataforma(40,80);
    context.fillRect(posicaoX,posicaoY,20,20);
    requestAnimationFrame(desenharPersonagem);
};


 
 desenharPersonagem()
document.addEventListener("keypress",(tecla)=>{
 
    //mexendo no eixo x e y do personagem para andar
 switch(tecla.key){
    case "d":
        if(posicaoX+20<tela.width){
            posicaoX+=10;
        }
        
       
        
        break
    case "a":
        if(posicaoX>0){
            posicaoX-=10;
        }
       
        
       
        
        break
    case "w":
        if(posicaoY>0){
            posicaoY-=10;
        }
        
        
        break
    case "s":
        if(posicaoY+20<tela.height){
            posicaoY+=10;
        }
    
    
    break
    
    default:
        console.log("nao esta pegando")

 
 
 }
 
})