const tela = document.querySelector("#tela");

var context = tela.getContext("2d");

context.fillStyle = "#00f";
tela.width=800;
tela.height=600;


//  X ; Y ; largura ; altura
// context.fillRect(0,0,20,20);
// context.clearRect();

context.fillRect(0, 0, 20, 20);
let posicaoX = 0;
let posicaoY = 0;



const tamanho=40;
function desenharGrid(){
    context.strokeStyle = "#999";
    context.font = "9px Arial";
    context.fillStyle = "#000";

    for(let y=0;y<tela.height; y+=tamanho){
        for(let x=0;x<tela.width;x+=tamanho){
            context.strokeRect(
                x + 0.5,
                y + 0.5,
                tamanho,
                tamanho
            );
            context.fillText(`x:${x} y:${y}`,x,y)
        }
        
    }
    

}


function plataforma(y,x){
    context.fillStyle = "rgb(100,85,90)";
    context.fillRect(x, y, 40, 40);

}

function desenharPersonagem(){
    context.clearRect(0, 0, tela.width, tela.height);
    desenharGrid();
    plataforma(40,80)
    context.fillRect(posicaoX, posicaoY, tamanho, tamanho);
    requestAnimationFrame(desenharPersonagem);
};
desenharPersonagem()


document.addEventListener("keypress", (tecla) => {

    switch (tecla.key) {
        case "d":
            if(posicaoX+tamanho<tela.width){
                posicaoX += tamanho;
            }
            
            break

        case "a":
            if(posicaoX>0){
                posicaoX -= tamanho;
            }
            
            break

        case "w":
            if(posicaoY>0){
                posicaoY -= tamanho;
            }
            
            break

        case "s":
            if(posicaoY+tamanho<tela.height){
                posicaoY += tamanho;
            }
            
            break
        default:
            console.log("não esta funcionando")

    }

})



