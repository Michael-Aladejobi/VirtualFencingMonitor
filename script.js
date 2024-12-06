// script.js

// Simulate real-time data (this will be replaced with Firebase later)
function updateSensorData() {
  const sensors = [1, 2, 3, 4];
  sensors.forEach((sensor) => {
    const sensorCard = document.getElementById(`sensor-${sensor}`);
    const status = sensorCard.querySelector(".status");
    const buzzerIcon = sensorCard.querySelector(".buzzer-icon");

    // Simulate detection (replace this with actual data)
    const isBreaching = Math.random() > 0.8;

    if (isBreaching) {
      sensorCard.classList.add("alert");
      status.textContent = `Alert: Cattle Detected!`;
      buzzerIcon.classList.remove("hidden"); // Show buzzer icon
    } else {
      sensorCard.classList.remove("alert");
      status.textContent = "Normal";
      buzzerIcon.classList.add("hidden"); // Hide buzzer icon
    }
  });
}

// Update every 2 seconds
setInterval(updateSensorData, 2000);
