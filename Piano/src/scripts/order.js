const pianoKeys = document.querySelectorAll(".piano-keys .keys");

let mapedKeys = [];
let audio = new  Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`; /* play each piano key */
    audio.play();

const clickedkey = document.querySelector(`[data-key="${key}"]`);
    clickedkey.classList.add("active");
    setTimeout(() => {
        clickedkey.classList.remove("active");
    }, 150);
};

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
}); // Whem I click on keys, play the song

document.addEventListener("keydown", 
    (e) => {

        if (mapedKeys.includes(e.key)) {
            playTune(e.key);
        }
       // When I click on the keybord, the song out
    });