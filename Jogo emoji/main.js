const emojis = [
    "💲",
    "💲",
    "😂",
    "😂",
    "😡",
    "😡",
    "🤡",
    "🤡",
    "👻",
    "👻",
    "💀",
    "💀",
    "👽",
    "👽",
    "🐍",
    "🐍"
];
let openCards =[];

let shuffleEmojis = emojis.sort(()=>(  /*  Faz o sorteio dos emojis com a função random*/
    Math.random() > 0.5 ? 2: -1));

for(let i=0;i < emojis.length; i++) 
 {
    let box =document.createElement("div"); /* aqui cria -se um elemento que possua uma tag div*/
    box.className = "item";  /* A variável box vai pegar uma classe com nome de item*/
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box); /* Variável box adquiri o classe game que está no documento html*/
 }

 function handleClick() {
    if(openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if(openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
 }

function checkMatch(){}
