// Importando elementos
import Personagem from "../entity/personagens.js";

import Plataforma from "../entity/plataforma.js";

const tela = document.querySelector("#tela");
const ctx = tela.getContext("2d");

tela.width = window.innerWidth;
tela.height = window.innerHeight;

const quadrado = 64;

// Cria o personagem
const jogador = new Personagem(0, 0);

//Cenario 1
const plataforma= new Plataforma(192,128,"assets/plataforma/p_1/1.png")
const plataforma2= new Plataforma(256,128,"assets/plataforma/p_1/2.png")
// Estado do teclado
const input = {
    direita: false,
    esquerda: false,
    cima: false,
    baixo: false
};

// Quando aperta a tecla
document.addEventListener("keydown", (e) => {

    switch (e.key) {

        case "d":
            input.direita = true;
            break;

        case "a":
            input.esquerda = true;
            break;

        case "w":
            input.cima = true;
            break;

        case "s":
            input.baixo = true;
            break;

    }

});

// Quando solta a tecla
document.addEventListener("keyup", (e) => {

    switch (e.key) {

        case "d":
            input.direita = false;
            break;

        case "a":
            input.esquerda = false;
            break;

        case "w":
            input.cima = false;
            break;

        case "s":
            input.baixo = false;
            break;

    }

});

function desenharGrid() {

    ctx.font = "9px Arial";
    ctx.fillStyle = "#000";
    ctx.strokeStyle = "blue";

    for (let y = 0; y <= tela.height; y += quadrado) {

        for (let x = 0; x <= tela.width; x += quadrado) {

            ctx.strokeRect(
                x + 0.5,
                y + 0.5,
                quadrado,
                quadrado
            );

            ctx.fillText(`x:${x} y:${y}`, x + 2, y + 10);

        }

    }

}

function desenhar() {

    ctx.clearRect(0, 0, tela.width, tela.height);

    desenharGrid();

    // Atualiza o personagem
    jogador.atualizar(input);

    plataforma.desenhar(ctx)
    plataforma2.desenhar(ctx)
    // Desenha o personagem
    jogador.desenhar(ctx);
   

    requestAnimationFrame(desenhar);

}

desenhar();