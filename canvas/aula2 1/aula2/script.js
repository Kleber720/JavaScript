
const jogador=document.getElementById("jogador");
const btn_jogar=document.querySelector("#btn_jogar");

let dados = [];

function cadastrarUsuario(usuario){
    const user={
        "id":1,
        "nome":`${jogador.value}`
    }
    dados.push(user)
    alert("Cadastrado com sucesso !")
}

function validarUsuario(usuario){
    if(usuario.length>2){
        return true
    }
    return false
}


btn_jogar.addEventListener("click", ()=>{

        if(validarUsuario(jogador.value)){
            cadastrarUsuario(jogador.value)
        }
        
        jogador.value="";
        window.location.href="jogo.html"


});