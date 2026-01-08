let score = 0;
    let modelReady = false;

    const btn = document.getElementById("countBtn");
    const scoreDisplay = document.getElementById("score");
    const model = document.getElementById("fakemogus");
    const videoOverlay = document.getElementById("videoOverlay");
    const finalVideo = document.getElementById("finalVideo");
    const scene = document.querySelector("a-scene");
    const ui = document.getElementById("ui");

    model.addEventListener("model-loaded", () => {
      modelReady = true;
    });

    btn.addEventListener("click", () => {
      if (!modelReady) return;

      score++;
      scoreDisplay.textContent = score;

      // Animación del modelo
      model.removeAttribute("animation-mixer");
      model.setAttribute("animation-mixer", {
        clip: "take.001",
        loop: "once",
        clampWhenFinished: true
      });

      // Sonido
      const sound = model.components.sound;
      if (sound) {
        sound.stopSound();
        sound.playSound();
      }

      // LLEGÓ A 10 → VIDEO
      if (score >= 10) {
        ui.style.display = "none";
        scene.style.display = "none";

        videoOverlay.style.display = "block";
        finalVideo.play();
      }
    });