const pianoKeys = document.querySelectorAll(".piano-keys .keys");

let audio = new  Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`; /* play each piano key */
    audio.play();
};

pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
})