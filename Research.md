Research Documentation:

a) **Research Process**
- Technologies explored:
1. NFC Keyless Entry - The BYD Shark 6 features an NFC card reader for keyless entry and vehicle access. This allows you to unlock and lock the vehicle effortlessly by simply tapping the NFC card on the designated reader. Ideal for quick access during busy city commutes or weekend getaways.
2. Remote Vehicle Control - With the MY BYD app, you can remotely lock/unlock the vehicle, control air conditioning, and monitor vehicle status. This ensures convenience and control, whether you're preparing for a drive or checking on your car from afar.
3. Digital Key Functionality - The Shark 6 supports digital key functionality, enabling your smartphone to act as a key. This feature is perfect for tech-savvy users who prefer a streamlined, gadget-free experience during daily drives.
4. OTA Software Updates - The vehicle offers Over The Air (OTA) updates, ensuring your car stays up to date with the latest features and improvements. This eliminates the need for service visits, making it ideal for busy professionals. These are wireless updates that can be downloaded and installed automatically over a wireless connection. No need to visit the dealership site also to install new updates.
5. Real Time Vehicle Monitoring - The MY BYD app provides real time updates on battery status, tire pressure, and vehicle location. This feature is especially useful for long trips or ensuring your car is always in optimal condition.
6. Voice Assistant and ADAS (Advanced driver assisted system). The various voice assistant features, voice commands, and the DMS (driver monitoring system). State of the art ADAS system with high quality in cabin cameras and IR sensors.
7. Autopilot and Auto steering features - Lane Keeping Assist which vibrates the steering wheel to alert the driver when the vehicle drifts out of its lane. This ensures the car stays on course, especially during emergencies, enhancing safety on UAE highways. Emergency Lane Keeping Assist (ELKA) actively intervenes by steering the vehicle back into its lane if it detects an unintended departure. The Automatic Emergency Braking (AEB) system detects potential collisions and applies brakes automatically to avoid or reduce impact. This is particularly useful in heavy traffic or unexpected situations in city driving. Electronic Stability Control (ESC) adjusts braking and throttle to maintain vehicle stability during sharp turns or slippery conditions. This feature is vital for safe cornering and avoiding skids in challenging terrains. Blind Spot Assist uses sensors to monitor areas not visible to the driver and alerts them of nearby vehicles. This feature is especially helpful during lane changes or merging in busy UAE traffic.

- Existing Solutions in BYD Tech (Brief):
1. DiPilot driver assistance system with DeepSeek AI integration, available across all models from budget to premium.
2. DiLink intelligent cockpit with voice control ("Hi BYD"), rotatable touchscreen, and Android based system.
3. XUANJI Architecture - integrated vehicle intelligence platform combining electrification with AI.
4. Voice recognition for climate control, screen rotation, sunroof, windows etc.
5. Driver Monitoring System (DMS) Camera - BYD's DMS system uses an OmniVision OV9284 CMOS image sensor with infrared capability and includes a simple processor, with signals processed by an external CPU.
6. Front Camera - The BYD Shark 6 camera enhances visibility and safety during driving. It is part of the 360 degree camera system, providing a comprehensive view of the surroundings for easier navigation in tight spaces or busy city streets. This tech is the core of Adaptive Cruise Control. The front camera works in conjunction with the radar system to enable adaptive cruise control. This ensures a safe distance from the vehicle ahead, making highway driving in the UAE and foreign roadways more comfortable and stress free.

- Key findings in the BYD AI tech:
1. The "Integrated Vehicle Intelligence" Doctrine - BYD's strategy reimagines the car as a single unified intelligent system rather than isolated modules. Instead of relying on fragmented ECUs, it consolidates vehicle wide data into a central AI "brain" that perceives and reacts in milliseconds. This unified architecture enhances safety, comfort, personalization, and sets the direction for next gen intelligent vehicles.
2. Xuanji Architecture: The Central Nervous System - BYD's Xuanji Architecture is a centralized intelligent platform standard on all models with God's Eye ADAS that acts as the vehicle's "brain and neural network". Its "1 brain, 2 ends, 3 networks, 4 chains" structure unifies computing, connectivity, sensing, and control into a single real time decision system. This centralized design enables advanced coordinated behaviors, OTA evolution, and positions BYD to compete on AI capability rather than hardware alone.
3. The "God's Eye" (DiPilot) System - BYD's "God's Eye" ADAS (Advanced Driver Assisted System) platform uses a three tier DiPilot structure that scales sensor and compute hardware while keeping the core Xuanji intelligence architecture consistent across models. DiPilot 100 targets mass market cars with camera centric sensing and ~100 TOPS compute, DiPilot 300 adds LiDAR and stronger compute for premium models, and DiPilot 600 delivers multi LiDAR + 600 TOPS power for ultra luxury vehicles. This tiering maximizes market reach while enabling advanced autonomous functions at every price point.
4. The Vertical Powerhouse - BYD's aggressive AI strategy is enabled by its exceptional vertical integration, which gives it unmatched control over cost, components, and innovation speed. With around 75% of vehicle parts made in house including batteries, motors, and electronics, BYD far surpasses competitors like Tesla in internal production share. This deep integration, extending even to its own shipping fleet, strengthens supply chain resilience and lets BYD rapidly scale and optimize its intelligent vehicle platform.

Technology Gaps I Noticed:
1. No gesture control analysis system or gaze tracking analysis system currently implemented even though camera is capturing everything that the driver does (Eye tracking, head movement, facial expressions etc). The camera features are very good and highly functional with the use of IR technology with highly sensitive and functional sensors, this facilitates not just during the day but during night also.

2. Voice Agent is present, but not intelligent and contextually aware. The voice agent activates when user says "Hi BYD". The voice agent has functionalities that is used for sunroof, climate system, radio, cruise control etc. 

3. Enhanced security measures. This specifically concerns to a safety feature where the in cabin camera looks at the driver only for distraction, for eg. if a driver looks somewhere else except the road, you get a notification on the dashboard of the car to pay attention on the road. The car has this feature of basic distraction mechanism, but it needs a contextually aware voice assistant that is connected to the DMS (driver monitoring system) to assess not just attention, but medical condition also to facilitate the best safety feature.

Considering the technology at hand, BYD can easily integrate emotional awareness + gaze tracking with its IR sensors to make its voice assitant more responsive, more safer during any medical issues faced by drivers (anxiety, heart attack, drowsiness, panic attack, drunk, or concussed).
This integration makes the AI communication more enhanced and increases the safety measures. With its Xuanji architecture, makes the integration seamless and cost effective. Currently the BYD tech is focussed on safety measures alone, with this they can make their security system to be more responsive and active. 

- Sources and references:
1.https://www.sciencedirect.com/science/article/pii/S0160791X21002712
2.https://www.cnbc.com/2025/02/11/byd-rolls-out-driver-assist-tech-for-evs-with-deepseeks-ai-help.html
3.https://www.byd.com/us/news-list/BYD-Launches-BYD-World-in-Partnership-with-AI-and-Metaverse-Company-MeetKai
4.https://www.klover.ai/byd-ai-strategy-analysis-of-dominance-in-automotive/
5.https://www.byd.com/en-hk/support/dilink
6. youtube videos, youtube shorts.


b) **Design Decisions**
- Why did you choose this specific touchless feature?
Invisible Safety Net:- This touchless feature is a great feature for BYD to implement in their vehicles. They have the tech stack for it, the resources, camera, sensors. By implementing this safety net, the voice assistant becomes contextually aware of the driver's current state and is more prepared and proactive towards safety measure. Great leap in BYD tech and safety system.

- What user problems does it solve?
1. Information overload - if there is any features that the driver cannot find, the gaze shows what they are looking at. The voice assistant can ask the driver what information are they curious about and conversate with them. This is a great step in building conversational AI within vehicles.
2. Stress during driving - Sometimes when drivers are in a stressed situation or worried about something, the voice assitant can help with normalizing the mood and its responses.
3. Context awareness - Current voice assitants are not contextually aware,  therefore in matters of urgency the emotion detection can lead the way for a seamless experience and BYD has the technology to make their emotion detection algorithm to be a State of the art mechanism.

- Why is it better than the current v1 experience?
The current ADA (Advanced Driver Assistance) - The car includes a suite of driver assistance features like Lane Departure Warning and Emergency Lane Keeping Assist. These systems enhance safety and convenience, especially during long commutes or highway travel.
Current version of voice assitant is good but limited to only voice features. 
Version 2 Connects the voice assistant to the in cabin camera to also look at the drivers behavioral state. This makes it:
1. Proactive
2. anticipates needs (through driver behavior detection)
3. voice assistant becomes contextually aware for safety measures ensuring quick response, enhancing the BYD DMS features.
4. the auto pilot connection works with voice assistant to provide instant response.

why this feature?
Hardware exists - BYD already has DMS camera with required capabilities
Software only solution - No new sensors needed, cost effective
Fills capability gap - DMS hardware underutilized (only safety, not assistance)

- What are the technical trade-offs?
1. Reliability vs. Lighting Conditions (The "Night Drive" Problem) - This is a huge vulnerability in the current architecture due to the use of webcam rather than a high quality camera with IR sensor technology that can accurately map a persons features, scenarios in the night time can be tricky due to poor quality.
System relies on visible light.
Standard webcams cannot see through dark sunglasses also. An IR sensor can see the eyes through the tint.
we are using standard RGB input (webcam) instead of infrared (IR).

2. Privacy vs. Performance (The "Edge" Problem)
You are doing all inference On Device (Edge) via WebGL.
The Upside (Privacy): No video data is sent to a server. This is a massive selling point for users paranoid about "spy cars."
Garbage Collection - JavaScript is garbage collected. You might see "microstutters" or "flickering" where the video freezes for 200ms while the browser clears memory. In a safety system, 200ms is a long time.

3. Latency vs. Accuracy (The Model Size)
You are likely using the lite version of the model for speed, but the range might be limited.
If the driver leans back in the seat (increasing distance from camera) or turns their head 45 degrees (profile view), the Lite model often loses the tracking mesh completely. A heavier model handles rotation better but destroys frame rate. In real scenario the cars IR sensors would provide a much clearer tracking mesh resulting in higher accuracy.

====================================================
c) **Implementation Approach**
- What technologies/libraries/APIs did you use?
Tech used: 
1. Core AI Engine - Tensorflow.js with WebGL backend for GPU acceleration.
2. Computer Vision Model - MediaPipe FaceMesh.
3. Gemini2.0-flash model as LLM to provide context aware responses with. 
4. WebRTC for webcam access.
5. Web Speech API for TTS alerts.

- Architecture and Design Patterns.
Application is a simple structured security safety net for demonstration purposes. This application has 2 modes of checking.. 
1. a video player access - for demo purposes, it shows a real time video where a content creator almost falls asleep while driving.
2. few simulation scenarios like anxiety attack, heart attack, etc. This mode simulates the behavioral pattern of these scenarios to alert the system for safety measures.

- Key technical challenges you encountered
1. Problem - Signal Noise & False Positives:- Due to the webcamera as the in cabin camera, the raw landmark detection is jittery sometimes and there is no accurate information passed to the computer vision model and hence there are chances where false positives can occur.
Solution - implemented buffer decay system, instead of triggering an immediate alert, it increments a counter, if the counter exceeds a specific threshold, the trigger is fired. This is useful in scenarios where the driver might just yawn or open their mouth randomly.

2. Problem - Translating geometry to behavior Psychology:- The AI engine provides us points like this type of data -> (e.g., "Lip Top: [x,y], Lip Bottom: [x,y]"), but we need to detect abstract concepts with accurate behavioral patterns. In real scenario the IR sensors provide much better information to map out to behavioral traits (ML model is also possible, but will result in a heavier architecture to integrate with vehicle).
Solution - EAR (eye aspect ratio) and MAR (mouth aspect ratio). These calculate the openness of the eye to detect various patterns like being drunk, being sleepy, fatigue, mouth patterns etc. It measures head movement also to detect erratic behavior.

3. Problem - Dataset curation for training and for testing :- There is very less public data (real time data) for testing any medical issues occured during driving. The datasets that were available are very large and require formatting, long training and testing scenarios for the model to detect all scenarios accurately.  
Solution - Simulations of scenarios like driver being drunk, driver having a panic or an anxiety attack, driver having a heart attack etc is used for detecting behavioral response.
Video uploading for demonstration purpose- real life content creator sleeps (fatigued) during car driving (real time feed to test the system)

d) **Learnings & Insights**
- What did you learn during this research?
1. BYD has made a feat of innovation in vehicle manufacturing in the automotive industry. Blending in house manufacturing with intelligence by implementing technology at its best for all features for the car. Using the concept of NFC keyless entry, MY BYD app for all time monitoring of car performance, the OTA updates etc. puts BYD at the forefront of intelligent autonomous vehicles. The concept of unit economics that BYD has cracked, from manufacturing all their parts to integrating the vehicles with cameras, sensors, state of the art intelligent cockpit system, DMS(driver monitoring software) and much more.

2. How well the BYD has utilized maximum technologies in the vehicle to maintain safety checks, software updates. Integrating appropriate tech into vehicles to make them truly intelligent autonomous vehicles. The most fascinating part is they have not left any place for something new and innovative. It was very difficult to find out the in cabin safety loop hole. Best implementation of tech to blend with automotive fundamentals to bring out the best innovations in automotive industry that also with lower costs compared to market competitors like Mercedez Benz, BMW, Hyundai/Kia, Toyota etc. 

3. The Nuance of Computer Vision Logic:- 
Geometry vs. AI Models: While deep learning models are powerful, simple geometric heuristics (like Eye Aspect Ratio or Mouth Aspect Ratio) are often faster, more  interpretable, and easier to tune for real time browser applications than heavy neural networks.
Calibration is Critical: A static threshold (e.g "EAR < 0.2") fails in the real world because every camera, face shape, and lighting condition is different. Building dynamic calibration tools is essential for usability.
Video Forensics: Handling pre recorded video requires different logic (requestVideoFrameCallback) than a live webcam stream (requestAnimationFrame) to ensure frame perfect analysis without skipping critical data points.

- What surprised you?
1. Why hasnt BYD done this safety net idea yet in all their models, they have high quality cameras, high level sensors and Gods Eye, with amazing state of the art intelligence core for their vehicles. The in cabin safety system in sync with their voice asssistant is a great step ahead in safety regards of autonomous vehicles.

2. XUANJI Architecture is a vehicular intelligent architecture that serves as both the brain and neural network of the vehicle, enabling an efficient blend of electrification and intelligence.
This architecture is made up of:
1 Brain -> Self developed smart central control chip
2 Ends -> (Dual AI System): Cloud AI - Backend processing, large scale data training, Vehicle AI:- Real time onboard decision making. Industry's first dual AI large model application in whole vehicle BYD
3 Networks -> Vehicle network (V2V, V2I communication), 5G network (high speed connectivity), Satellite network (global coverage)
4 Chains -> Sensor Chain: Cameras, LiDAR, radar, ultrasonic sensors, Controller Chain: ECUs, domain controllers, Data Chain: Real time data collection and processing, Mechanical Chain: Motors, steering, braking systems.

3. How well organized the safety measures are integrated into the vehicles. It also consists of a 360 view of outside the car, that is a great feature in a vehicle. Best use while overtaking on international roadways. You get the front and back view to adjust your speed and have a clear vision and judgement between the vehicles ahead and behind you. This would cause a significant reduction in road rage accidents.

- What would you do differently in v3?
1. Try to develop a distilled DL Model that detects the drivers behavioral pattern and aims to be precise at differentiating casual gestures and movements to real medical related issues (like seizures etc.)
2. Using deepseek model as inference for demonstration. But due to latency issues of local deepseek model (from ollama) conflicting with  
the video and webcam feed, resulting in lag response by the voice assistant, it is not implemented in the current version.
3. Figure out a way to use trained DL model without having a major tradeoff with RAM space and fast response mechansim, at the edge level. Currently BYD uses deepseek AI tech at edge level with their vehicles using their dual AI application.

- Limitations of your current prototype
1. Hardware & Performance:
Camera dependency: The entire system relies heavily on a single webcam input. Performance will degrade significantly in poor lighting conditions (night driving, tunnels, shadows).
Field of view: A standard webcam might not capture the driver's full face if they turn their head significantly, leading to loss of tracking.
Resolution/frame rate: Lower quality webcams will produce noisy data, affecting the accuracy of facial landmark detection and vital sign estimation.
Browser based limitations: Running complex computer vision (TensorFlow.js) and physics simulations in a browser tab is resource intensive. It may cause lag or battery drain on mobile devices or lower end laptops.

2. Algorithm & accuracy:
Simulations: The heart rate (HR) and breathing rate (BR) are simulated estimates, not medical level measurements. They are derived from facial cues (mouth open, eyes closed) and a logic model, not actual sensors. This means it can be inaccurate also at times. Adrenaline/Stress Model: The adrenaline variable is a simplified heuristic. Real physiological stress is far more complex and doesn't always correlate directly with mouth openness or eye closure.

Facial Landmark Reliance :- 
Occlusion: Glasses, sunglasses, masks, or facial hair could obstruct key landmarks (eyes, mouth), breaking the detection logic.
Pose Sensitivity: Extreme head angles (looking down at a phone, looking back) might cause the face mesh detection to fail or produce erratic results.
Thresholds are Hardcoded: Values like PANIC_THRESHOLD_MAR (0.45) and FAINT_THRESHOLD_EAR (0.40) in config.js are static. Different people have different resting face shapes. A person with naturally smaller eyes might trigger false drowsiness alerts.

- Future enhancement possibilities
1. Edge AI optimization - optimize models to run efficiently on specialized automotive chips.
2. Offline capability - providing offline capability to ensure all safety features work (not just landmarks detection, but also local inferencing)
3. Privacy and Security enhancements - usage of local data processing techniques so that sensitive info like biometric data dont leak and leave the vehicle.
4. Maybe add augmented reality HUD - project safety alerts and navigation arrows directly into windshield, but again that has to sit well with the security protocols and regulations of BYD.
5. Multi person tracking - If feasible in cost and architecture wise then expand the system to monitor all passengers. Either a larger field view for the camera near driver or another small camera on top of the touchscreen pad or integrated into the pad. 