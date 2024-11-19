

//fazendo comentários
/*
estou mostrando como faz comentário
*/

//programa que calcula quanto será gasto numa viagem

let combustivel // valor do combustível
let distancia = 10; // valor da distância em KM da viagem
let gastoMedio = 2048; // gasto médio de combustível por KM
const resultado = gastoMedio / distancia
let tipocombustivel = "etanol"



if( tipocombustivel == "gasolina") { // dependendo do tipo de combustível, muda o valor da viagem
    combustivel = 6.10
    const medio = resultado * combustivel
    console.log( "O valor gasto nessa viagem será de  R$ " + medio.toFixed(2) + " combustível do carro por KM ");
} else if( tipocombustivel == "etanol") {
    combustivel = 4.04
    const medio = resultado * combustivel
    console.log( "O valor gasto nessa viagem será de  R$ " + medio.toFixed(2) + " combustível do carro por KM ");
} else {
    console.log("valor inválido")
}





