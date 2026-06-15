const soundToggle = document.querySelector("#soundToggle");
const ambientAudio = document.querySelector("#ambientAudio");

if (soundToggle && ambientAudio) {
  ambientAudio.volume = 0.22;

  soundToggle.addEventListener("click", async () => {
    try {
      if (ambientAudio.paused) {
        await ambientAudio.play();
        soundToggle.classList.add("is-playing");
        soundToggle.setAttribute("aria-pressed", "true");
      } else {
        ambientAudio.pause();
        soundToggle.classList.remove("is-playing");
        soundToggle.setAttribute("aria-pressed", "false");
      }
    } catch (error) {
      soundToggle.textContent = "Tap again";
    }
  });
}
