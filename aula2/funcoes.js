
var i=0;
//operadores unarios
/**
++
--
*/


//loops
for(var i=0;i<10;i++){
    for(var j=0;j<10;j++){
        console.log(`${i}x${j}=${j*i}`)
    }
    console.log("-----------------------")
}

let cont=0

while(cont<10){


    cont++;
}

while(true){

    console.log("Bem vindo")
    console.log("1)Cadastrar\n2)sair")
    const opcao=prompt("Escolha uma opção")
    const flag=false;

    switch(opcao){
        case "1":
            console.log("Tela Cadastrar")
            break
        case "2":
            console.log("Sair")
            flag=true;
            break
    }

    if(flag){
        break
    }
}
let resposta=NaN

do{
    console.log("dentro do loop")
    const resposta=prompt("deseja sair SIM ou NÃO")
}while(resposta==="SIM");

//função

function somar(valor1,valor2){


    return valor1+valor2;
}

console.log(somar(34,87));

function calcular(valor,operacao){

    return operacao(valor)
}

//operações
function percentual(valor){
    return Number(valor)*0.45;
}

function subtrair(valor){

    return Number(valor)-10;
}

calcular(23,percentual)