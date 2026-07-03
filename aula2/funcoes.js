var i=0;
// Operadores unarios
/*   
++
--
+=
-=
*=
/=
*/
// console.log(i)
// i--;
// console.log(i)


// for(var i=0;i<10;i++){
//     for(var j=0;j<10;j++){
//       console.log(`${i}x${j}=${j*i}`)  
//     }
//     console.log("---------------------------")
// }

// for(var i=10;i>=0;i--){
//     console.log(i)
// }

// let cont=0;

// while(cont<10){


//     cont++;
// }

// while(true){
//     console.log("Bem vindo");
//     console.log("1)Cadastrar\n2)Sair");
//     const opcao=prompt("Escolha uma opção");
//     const flag=false;
   
//     switch(opcao){

//         case "1":
//             console.log("Tela cadastrar")
//             break
//         case "2":
//             console.log("Sair")
//             flag=true;
//             break

//     }

//     if(flag){
//         break
//     }
// }
// let resposta= NaN;

// do{
//     console.log("dentro do loop Do While.");
//     resposta=prompt("deseja sair SIM ou NÃO");
// }while(resposta=="SIM");

// function somar(valor1,valor2){

//     return valor1+valor2;
// }
// console.log(somar(34,87))
function calcular(valor,operacao){

    return operacao(valor);
}
// Operações
function percentual(valor){
    return Number(valor)*0.45
}
function subtrair(valor){
    return Number(valor)-10;
}

console.log(calcular(100,percentual))