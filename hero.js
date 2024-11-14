//Código destinado a mostrar o XP de seu Heroí,consequentemente seu nível
//Declarando as variáveis
let nome  = "John Smith"
let xp  = 8000
let nivel 


while (true) {
    
    //Enquanto essa estrutura for verdadeira, ela vai verificar o XP
    if(xp <= 1000 ){
        nivel = "Ferro"   
    } else if( xp > 1001 && xp <= 2000) {
        nivel = "Bronze"
    } else if(xp > 2001 && xp <= 5000) {
        nivel = "Prata"
    } else if (xp > 5001 && xp <= 7000) {
        nivel = "Ouro"
    } else if ( xp > 7001 && xp <= 8000){
        nivel = "Platina"
    } else if(xp > 8001 && xp <= 9000){
        nivel ="Ascendente"
     } else if(xp > 9001 && xp <= 10000) {
        nivel = "Imortal"
      } else if(xp >= 10001) {
        nivel = "Radiante"
      } else {
        console.log("Digitou errado,tente Novamente");
        
      }
    break
    
}
// faz o console.log da saída
console.log("O Herói de nome " + nome, "está no nível de " + nivel);





