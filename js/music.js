
const musicList = [
"../music/lofichill.mp3",
"../music/text07-wn.mp3",
];
const audio = document.getElementById("bgMusic");
let currentTrack = parseInt(localStorage.getItem("currentTrack")) || 0;;
const source = document.getElementById("audioSource");
function loadMusic(shouldPlay) {
    source.src = musicList[currentTrack];
    audio.load();
    if (shouldPlay) audio.play();
  }

  function changeMusic() {
    const wasPlaying = !audio.paused;

    currentTrack = (currentTrack + 1) % musicList.length;
    localStorage.setItem("currentTrack", currentTrack);

    loadMusic(wasPlaying);
  }