// script.js

// Simulate real-time data (this will be replaced with Firebase later)
function updateSensorData() {
  const sensors = [1, 2, 3, 4];
  sensors.forEach((sensor) => {
    const sensorCard = document.getElementById(`sensor-${sensor}`);
    const status = sensorCard.querySelector(".status");

    // Create a buzzer image dynamically if not already present
    let buzzerImage = sensorCard.querySelector(".buzzer");
    if (!buzzerImage) {
      buzzerImage = document.createElement("img");
      buzzerImage.src = "assets/buzzer.gif"; // Path to your buzzer image
      buzzerImage.alt = "Buzzer Active";
      buzzerImage.className = "buzzer";
      sensorCard.appendChild(buzzerImage);
    }

    // Simulate detection (replace this with actual data)
    const isBreaching = Math.random() > 0.8;

    if (isBreaching) {
      sensorCard.classList.add("alert");
      status.textContent = `Warning: Cattle is too close!`;
      buzzerImage.style.display = "block"; // Show the buzzer image
    } else {
      sensorCard.classList.remove("alert");
      status.textContent = "Normal";
      buzzerImage.style.display = "none"; // Hide the buzzer image
    }
  });
}

// Update every 2 seconds
setInterval(updateSensorData, 2000);
