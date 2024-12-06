const alertSound = new Audio("assets/audio/alert-sound.mp3");
alertSound.load();

// Sound toggle state
let soundEnabled = true;

// Handle sound toggle
document.getElementById("sound-toggle").addEventListener("change", (event) => {
  soundEnabled = event.target.checked;
  console.log(`Sound enabled: ${soundEnabled}`);
});

function updateSensorData() {
  const sensors = [1, 2, 3, 4];
  sensors.forEach((sensor) => {
    const sensorCard = document.getElementById(`sensor-${sensor}`);
    const status = sensorCard.querySelector(".status");

    let buzzerImage = sensorCard.querySelector(".buzzer");
    if (!buzzerImage) {
      buzzerImage = document.createElement("img");
      buzzerImage.src = "assets/buzzer.gif";
      buzzerImage.alt = "Buzzer Active";
      buzzerImage.className = "buzzer";
      sensorCard.appendChild(buzzerImage);
    }

    const isBreaching = Math.random() > 0.8;

    if (isBreaching) {
      sensorCard.classList.add("alert");
      status.textContent = `Warning: Cattle is too close!`;
      buzzerImage.style.display = "block";

      // Play sound if enabled
      if (soundEnabled) {
        alertSound.currentTime = 0;
        alertSound
          .play()
          .catch((error) => console.error("Audio playback failed:", error));
      }
    } else {
      sensorCard.classList.remove("alert");
      status.textContent = "Normal";
      buzzerImage.style.display = "none";
    }
  });
}

// Update every 4 seconds
setInterval(updateSensorData, 4000);
