const buttons = document.getElementById("buttons");
const soundNames = new Set();
let nowPlaying;
document.querySelectorAll("audio[id]").forEach((audio) => {
    soundNames.add(audio.id);
});
function stopSong() {
    if (!(nowPlaying instanceof HTMLAudioElement)) {
        return;
    }
    nowPlaying.pause();
    nowPlaying.currentTime = 0;
}
function buttonPlayEvent(button, audioElement) {
    button.addEventListener("click", () => {
        stopSong();
        void audioElement.play();
        nowPlaying = audioElement;
    });
}
for (const sound of soundNames) {
    const audioElement = document.getElementById(sound);
    if (!(audioElement instanceof HTMLAudioElement)) {
        continue;
    }
    const button = document.createElement("button");
    button.innerText = sound;
    buttonPlayEvent(button, audioElement);
    buttons?.append(button);
}
export {};
//# sourceMappingURL=index.js.map