---

# **Virtual Fencing Monitor**

A **Real-Time IoT-Based Virtual Fencing System for Effective Livestock Management** using **Proximity Sensors** and **ESP32**.

## **Overview**
This project leverages IoT technology to design and implement a **virtual fencing system** for livestock management. By using ultrasonic sensors, ESP32 microcontrollers, and Firebase for real-time data storage, the system provides an efficient, scalable, and environmentally friendly alternative to traditional physical fencing.

The system monitors livestock within a predefined rectangular boundary, detects breaches, and triggers alerts to notify the farmer via a web-based monitoring platform.

---

## **Features**

1. **Real-Time Monitoring**:

   - Tracks livestock proximity using ultrasonic sensors.
   - Updates the status (`Normal` or `Alert`) for each sensor on a **mobile-friendly webpage**.

2. **Dynamic Alerts**:

   - Visual alerts (buzzer images) indicate which sensor has detected livestock near the boundary.
   - Ready for audio alert integration for enhanced notifications.

3. **Web-Based Interface**:

   - Beautiful, user-friendly dashboard designed for mobile and desktop views.
   - Real-time updates using Firebase as the backend.

4. **Cost-Effective Design**:
   - Utilizes affordable components like ESP32 microcontrollers and ultrasonic sensors.
   - Eliminates the need for expensive GPS-based virtual fencing systems.

---

## **Project Workflow**

1. **Data Collection**:

   - Ultrasonic sensors detect object proximity and send data to the ESP32 microcontroller.
   - The ESP32 sends this data to a Firebase Firestore database.

2. **Real-Time Updates**:

   - The web app fetches sensor data from Firebase and updates the interface dynamically.

3. **Alerts and Notifications**:

   - The buzzer is triggered when livestock breaches a boundary.
   - Visual indicators on the webpage show the activated sensor and its status.

4. **Data Storage**:
   - Firebase stores real-time sensor data for monitoring and historical analysis.

---

## **Technologies Used**

### **Hardware**

- **ESP32 Microcontroller**: Handles sensor data and communicates with Firebase.
- **Ultrasonic Sensors**: Detect livestock within a predefined boundary.
- **Buzzer**: Provides audio alerts for breaches.

### **Software**

- **HTML, CSS, JavaScript**: For the mobile-friendly web interface.
- **Firebase**: Real-time database for storing and fetching sensor data.
- **Async JavaScript**: Ensures seamless updates to the webpage.

---

## **Installation Guide**

### **1. Hardware Setup**

- Connect **ultrasonic sensors** to the ESP32 microcontroller.
- Configure the sensors to detect proximity and send data to the ESP32.

### **2. Firebase Configuration**

- Create a **Firebase Project**.
- Set up a **Firestore Database** with the following structure:
  ```
  sensors/
    sensor-1/
      status: "Normal" | "Alert"
      timestamp: <last updated>
    sensor-2/
    sensor-3/
    sensor-4/
  ```
- Obtain Firebase credentials and include them in your ESP32 program.

### **3. Web Interface Setup**

1. Clone this repository:
   ```bash
   git clone https://github.com/Michael-Aladejobi/VirtualFencingMonitor.git
   ```
2. Navigate to the project directory and add the necessary assets (sensor icons, buzzer images).
3. Open `index.html` in your browser to test the interface.

### **4. ESP32 Integration**

- Upload the ESP32 code (integrating Firebase credentials) to your ESP32 microcontroller.
- Test data flow between the hardware and Firebase.

---

## **How to Use**

1. **Farm Setup**:

   - Place the ultrasonic sensors at the boundary corners of the rectangular farm area.
   - Measure the farm dimensions and set them as thresholds in the ESP32 code.

2. **Monitoring**:

   - Open the webpage on your device.
   - Monitor the real-time status of all sensors.

3. **Alerts**:
   - Receive visual alerts (and optional audio notifications) when livestock breaches the virtual boundary.

---

## **Future Enhancements**

1. **Livestock Health Monitoring**:

   - Integrate additional sensors to monitor animal health and behavior.
   - GPS Tracking System

2. **Advanced Notifications**:

   - Add email or SMS alerts for boundary breaches.

3. **Mobile App**:
   - Develop a dedicated mobile app for enhanced accessibility and functionality.

---

## **Contributing**

Feel free to contribute by submitting pull requests or suggesting features via issues. Contributions are always welcome!

---

## **License**

This project is developed under the guidance and supervision of Prof. Mrs. Arogudade- The HOD of Computer Science Department, FUNAAB, and adheres to the university's intellectual property guidelines. For inquiries about licensing or usage, please contact the author or the Computer Science Department at FUNAAB.

---

## **Acknowledgments**

I would like to express my heartfelt gratitude to my supervisor, PROF. MRS AROGUNDADE, Head of Department, Computer Science, FUNAAB, for her invaluable guidance, insights, and encouragement throughout this project. Your support has been instrumental in shaping the success of this work.

Special thanks also go to the Computer Science Department at FUNAAB for providing the resources and platform to develop this innovative solution.
My Acknowlegement also go to ETTRONICS HIGHTECH LIMITED at https://www.ettronics.com for the knowledge impacting during my industrial training.
