const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// Steps:
// 1. create a btn for each sound
// 2. add the class "btn" and the innerText for each button
// 3. add eventListener to each button that will stop all other sounds and play the current sound that was pressed
// 4. add the button as a child to the "buttons" container

sounds.forEach(sound => {
  const btn = document.createElement("button");

  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSound();

    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSound() {
  // for each sound, pause the audio and reset the track to the beginning
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);

    audio.pause();
    audio.currentTime = 0; // resets audio clip to start at the beginning
  });
}
