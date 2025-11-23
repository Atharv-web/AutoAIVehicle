Project Structure:
/demo
│— index.html              # UI + script loading
│— app.js               # Main logic (inference + behavior analysis)
│— config.js               # Thresholds, API keys, tuning parameters
│— assets/                 # Demo video 
│— README.md               # Documentation

-------------------------------------------------------------

Installation & Setup
Steps:
1. Clone the repository : git clone <https://github.com/Atharv-web/AutoAIVehicle>
2. Open in VS Code or Cursor
3. Configure config.js
4. Insert your LLM API key
5. Set EAR and MAR threshold values
6. Adjust sensitivity values
7. Open index.html

Run via Live Server ("Go Live")
Start the local development server and test the system.

-------------------------------------------------------------

Dependencies:
- Runtime Libraries:
1. TensorFlow.js
2. MediaPipe FaceMesh
3. WebRTC (for camera access)
4. Web Speech API (TTS)
5. OpenAI API (LLM)

- Browser Requirements:
1. Chrome or Chromium based browsers recommended
2. WebGL enabled

- Hardware Requirements
1. Webcam (minimum 720p recommended)
2. Stable CPU/GPU for real time inference

-------------------------------------------------------------