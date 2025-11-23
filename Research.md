# BYD Shark 6: AI Enhanced Driver Safety System Research Documentation

## Executive Summary

This document presents comprehensive research findings on the BYD Shark 6's existing intelligent systems and proposes an enhanced touchless safety feature that leverages the vehicle's existing Driver Monitoring System (DMS) infrastructure. The proposed solution integrates contextual awareness and gaze tracking capabilities with the current IR sensor array to create a proactive, intelligent safety mechanism.

---

## 1. Research Process

### 1.1 Technologies Explored in BYD Shark 6

#### 1.1.1 NFC Keyless Entry
The BYD Shark 6 incorporates an NFC card reader for keyless entry and vehicle access, enabling users to unlock and lock the vehicle through a simple tap gesture on the designated reader. This technology provides convenient access during urban commutes and leisure travel scenarios.

#### 1.1.2 Remote Vehicle Control
Through the MY BYD application, users can remotely manage vehicle functions including lock/unlock operations, climate control systems, and comprehensive vehicle status monitoring. This connectivity ensures convenient vehicle management regardless of physical proximity to the vehicle.

#### 1.1.3 Digital Key Functionality
The Shark 6 supports digital key technology, allowing smartphones to function as primary vehicle keys. This feature caters to technology-oriented users seeking a streamlined, device-consolidated access experience during daily operations.

#### 1.1.4 Over-The-Air (OTA) Software Updates
The vehicle implements OTA update capabilities, enabling wireless download and installation of software improvements and feature enhancements. This eliminates the necessity for dealership service visits, providing continuous system evolution without user intervention. Updates are downloaded and installed automatically over wireless connections, removing the need for physical dealership visits for software maintenance.

#### 1.1.5 Real-Time Vehicle Monitoring
The MY BYD application delivers real-time telemetry including battery status, tire pressure monitoring, and vehicle location tracking. This functionality proves particularly valuable for extended journeys and maintaining optimal vehicle condition throughout the ownership lifecycle.

#### 1.1.6 Voice Assistant and Advanced Driver Assistance Systems (ADAS)
The vehicle features comprehensive voice command capabilities integrated with a state-of-the-art ADAS system. This includes high-quality in-cabin cameras, infrared sensors, and the Driver Monitoring System (DMS), providing multiple layers of intelligent assistance and safety monitoring.

#### 1.1.7 Autonomous Driving Features

The BYD Shark 6 implements several advanced safety and autonomous driving features:

**Lane Keeping Assist (LKA)**: Provides haptic feedback through steering wheel vibration when the vehicle deviates from its designated lane. This system ensures proper lane positioning, particularly beneficial during emergency situations on highways including UAE roadways.

**Emergency Lane Keeping Assist (ELKA)**: Actively intervenes by steering the vehicle back into the correct lane upon detecting unintended lane departure, providing an additional layer of active safety intervention.

**Automatic Emergency Braking (AEB)**: Detects potential collision scenarios and automatically applies braking force to avoid or mitigate impact severity. This feature proves particularly beneficial in high-density traffic conditions and unexpected urban driving situations.

**Electronic Stability Control (ESC)**: Dynamically adjusts braking force distribution and throttle response to maintain vehicle stability during sharp maneuvers or adverse road conditions. This feature is essential for safe cornering and skid prevention in challenging terrain environments.

**Blind Spot Assist**: Utilizes sensor arrays to monitor vehicle blind spots and provides alerts regarding nearby vehicles. This feature enhances safety during lane changes and merging operations, particularly in high-density UAE traffic conditions.

### 1.2 Existing BYD Technology Solutions

#### 1.2.1 DiPilot Driver Assistance System
BYD's DiPilot system integrates DeepSeek AI technology across the entire model range, from budget-tier to premium vehicles, providing consistent intelligent assistance capabilities regardless of price point.

#### 1.2.2 DiLink Intelligent Cockpit
The DiLink system features voice activation through "Hi BYD" commands, a rotatable touchscreen interface, and an Android-based operating system providing comprehensive vehicle control and connectivity.

#### 1.2.3 XUANJI Architecture
This integrated vehicle intelligence platform serves as the foundational framework combining electrification with artificial intelligence, creating a unified intelligent vehicle ecosystem.

#### 1.2.4 Voice Recognition Capabilities
The system supports voice commands for climate control, screen rotation, sunroof operation, window control, and additional vehicle functions, enabling hands-free operation of primary comfort and convenience features.

#### 1.2.5 Driver Monitoring System (DMS) Camera
BYD's DMS utilizes an OmniVision OV9284 CMOS image sensor with infrared capabilities and integrated processing. The system includes a dedicated processor with signals managed by an external CPU for comprehensive driver monitoring and analysis.

#### 1.2.6 Front Camera System
The Shark 6's front camera enhances visibility and safety as part of an integrated 360-degree camera system, providing comprehensive environmental awareness for navigation in confined spaces and dense urban environments. This camera serves as the primary sensor for Adaptive Cruise Control functionality, working in conjunction with radar systems to maintain safe following distances. This integration ensures comfortable and stress-free highway driving on UAE and international roadways.

### 1.3 Key Findings in BYD AI Technology

#### 1.3.1 The "Integrated Vehicle Intelligence" Doctrine
BYD's strategic approach reconceptualizes the vehicle as a unified intelligent system rather than a collection of discrete modules. Instead of relying on fragmented Electronic Control Units (ECUs), this architecture consolidates vehicle-wide data into a centralized AI processing core capable of millisecond-level perception and response. This unified architecture enhances safety, comfort, and personalization capabilities while establishing a framework for next-generation intelligent vehicles.

#### 1.3.2 XUANJI Architecture: The Central Nervous System
BYD's XUANJI Architecture functions as a centralized intelligent platform standardized across all models equipped with God's Eye ADAS, acting as the vehicle's computational brain and neural network. Its "1 brain, 2 ends, 3 networks, 4 chains" structural framework unifies computing, connectivity, sensing, and control into a single real-time decision-making system. This centralized design enables advanced coordinated behaviors, OTA evolution capabilities, and positions BYD to compete on AI capability rather than hardware specifications alone.

#### 1.3.3 The "God's Eye" (DiPilot) System
BYD's "God's Eye" ADAS platform implements a three-tier DiPilot structure that scales sensor and computational hardware while maintaining core XUANJI intelligence architecture consistency across models:

- **DiPilot 100**: Targets mass-market vehicles with camera-centric sensing and approximately 100 TOPS computational power
- **DiPilot 300**: Incorporates LiDAR capability and enhanced computing resources for premium model segments
- **DiPilot 600**: Delivers multi-LiDAR configuration with 600 TOPS computational power for ultra-luxury vehicle applications

This tiered approach maximizes market reach while enabling advanced autonomous functions across all price points.

#### 1.3.4 The Vertical Powerhouse
BYD's aggressive AI strategy is enabled by exceptional vertical integration, providing unmatched control over cost structures, component sourcing, and innovation velocity. With approximately 75% of vehicle components manufactured in-house—including batteries, motors, and electronics—BYD significantly exceeds competitors such as Tesla in internal production share. This deep integration extends to proprietary shipping operations, strengthening supply chain resilience and enabling rapid scaling and optimization of the intelligent vehicle platform.

### 1.4 Identified Technology Gaps

#### 1.4.1 Absence of Gesture Control and Gaze Tracking Analysis
Despite the DMS camera's capability to capture comprehensive driver behavior data (eye tracking, head movement, facial expressions), no gesture control or gaze tracking analysis system is currently implemented. The existing camera infrastructure features high-quality sensors with IR technology and highly sensitive functional sensors, providing robust functionality in both daylight and nighttime conditions.

#### 1.4.2 Limited Voice Agent Intelligence
While a voice agent exists (activated via "Hi BYD" command) with functionality for sunroof, climate system, radio, and cruise control operations, the system lacks contextual awareness and intelligent processing capabilities beyond basic command execution.

#### 1.4.3 Basic Driver Distraction Monitoring
The current in-cabin camera system monitors driver distraction through basic attention detection mechanisms. For example, when driver attention deviates from the road, the system provides dashboard notifications to redirect attention. However, the system lacks integration with a contextually aware voice assistant connected to the DMS for comprehensive assessment of driver medical conditions, limiting implementation of advanced safety features.

### 1.5 Proposed Enhancement: Intelligent Safety Integration

Considering the existing technology infrastructure, BYD can integrate contextual awareness and gaze tracking capabilities with its IR sensors to create a more responsive and enhanced safety oriented voice assistant system. This enhancement would enable detection and appropriate response to medical conditions including anxiety, cardiac events, drowsiness, panic attacks, impairment, or concussion.

This integration significantly enhances AI communication capabilities and safety measures. The existing XUANJI architecture facilitates seamless and cost effective integration. While current BYD technology focuses primarily on passive safety measures, this enhancement would transform the security system into a proactive, actively responsive safety platform.

### 1.6 Research Sources and References

1. ScienceDirect: https://www.sciencedirect.com/science/article/pii/S0160791X21002712
2. CNBC: https://www.cnbc.com/2025/02/11/byd-rolls-out-driver-assist-tech-for-evs-with-deepseeks-ai-help.html
3. BYD Press Release: https://www.byd.com/us/news-list/BYD-Launches-BYD-World-in-Partnership-with-AI-and-Metaverse-Company-MeetKai
4. Klover AI Analysis: https://www.klover.ai/byd-ai-strategy-analysis-of-dominance-in-automotive/
5. BYD DiLink Documentation: https://www.byd.com/en-hk/support/dilink
6. Video documentation and analysis from YouTube platform

---

## 2. Design Decisions

### 2.1 Feature Selection Rationale: The Invisible Safety Net

The proposed touchless safety feature represents an optimal enhancement opportunity for BYD vehicles based on existing technological infrastructure. With the complete technology stack already deployed—including cameras, sensors, and processing capabilities—implementing this safety net enables the voice assistant to become contextually aware of the driver's current physiological and psychological state, facilitating proactive safety interventions. This advancement represents a significant evolution in BYD's technology portfolio and safety system capabilities.

### 2.2 User Problems Addressed

#### 2.2.1 Information Overload Management
Gaze tracking capabilities enable identification of interface elements capturing driver attention. The voice assistant can proactively query the driver regarding specific information needs and engage in contextual conversation, representing a significant advancement in conversational AI implementation within vehicle environments.

#### 2.2.2 Stress Mitigation During Operation
When drivers experience stressful situations or heightened concern levels, the voice assistant can assist with mood normalization through appropriate response modulation and supportive interactions.

#### 2.2.3 Contextual Awareness Enhancement
Current voice assistants lack contextual awareness capabilities, limiting their effectiveness in urgent situations. Advanced detection capabilities enable seamless emergency response experiences. BYD possesses the technological foundation to develop state of the art detection algorithms leveraging existing hardware infrastructure.

### 2.3 Advantages Over Current Implementation (Version 1)

#### 2.3.1 Current Advanced Driver Assistance (ADA) Capabilities
The existing system includes a comprehensive suite of driver assistance features including Lane Departure Warning and Emergency Lane Keeping Assist. These systems enhance safety and convenience during extended commutes and highway travel scenarios. However, the current voice assistant implementation is limited to basic voice-activated functions without behavioral awareness.

#### 2.3.2 Proposed Version 2 Enhancements
The enhanced system integrates the voice assistant with the in-cabin camera to analyze driver behavioral states in real-time, creating a system characterized by:

1. **Proactive Operation**: The system anticipates driver needs through behavioral pattern detection and analysis
2. **Enhanced Anticipation**: Driver behavior detection enables needs anticipation before explicit requests
3. **Contextual Awareness**: Voice assistant becomes contextually aware for safety-focused responses, ensuring rapid reaction capabilities and enhancing existing BYD DMS features
4. **Integrated Response**: Autopilot system connection enables instant coordinated emergency response capabilities

#### 2.3.3 Implementation Advantages

**Existing Hardware Infrastructure** BYD's DMS camera possesses all required sensing and processing capabilities for the proposed enhancement.

**Software Only Solution** Implementation requires no additional sensor hardware, ensuring cost effectiveness through software based enhancement of existing capabilities.

**Capability Gap Resolution** Current DMS hardware is underutilized, focusing solely on passive safety monitoring rather than active driver assistance and intervention.

### 2.4 Technical Trade-offs

#### 2.4.1 Reliability versus Lighting Conditions: The Night Drive Challenge
This represents a significant vulnerability in webcam based prototype implementations due to reliance on visible light spectrum. Standard webcams exhibit performance degradation in low light conditions and cannot function effectively with dark sunglasses, as the system relies on visible light input. The prototype utilizes standard RGB input from webcam sensors instead of infrared technology. In contrast, BYD's IR sensor technology can accurately map facial features and detect eye position through tinted eyewear, providing superior performance in nighttime driving scenarios.

#### 2.4.2 Privacy versus Performance: The Edge Computing Challenge
The prototype implements edge based inference using WebGL for on device processing.

**Privacy Advantages** No video data transmission to external servers occurs, addressing privacy concerns regarding vehicle surveillance and representing a significant value proposition for privacy conscious users.

**Performance Challenges** JavaScript garbage collection can introduce micro stutters or flickering with approximately 200ms freeze durations during memory cleanup operations. In safety critical systems, 200ms delays represent significant timing concerns that could impact response effectiveness.

#### 2.4.3 Latency versus Accuracy: The Model Size Challenge
The prototype likely utilizes a lightweight model variant for performance optimization, potentially limiting operational range and accuracy. Driver movements such as leaning backward (increasing camera distance) or 45 degree head rotation (profile view) can cause complete tracking mesh loss in lite models. While heavier models provide improved rotation handling and tracking stability, they significantly impact frame rate performance. In production implementations, BYD's IR sensors would provide superior tracking mesh quality with enhanced depth perception, resulting in substantially higher accuracy across varied driver positions and movements.

---

## 3. Implementation Approach

### 3.1 Technologies, Libraries, and APIs Utilized

The prototype implementation incorporates the following technology stack:

1. **Core AI Engine** TensorFlow.js with WebGL backend for GPU acceleration
2. **Computer Vision Model** MediaPipe FaceMesh for facial landmark detection
3. **Large Language Model** Gemini 2.0 flash model for context aware response generation
4. **Video Capture** WebRTC for webcam access and real time video stream processing
5. **Audio Output** Web Speech API for text to speech alert generation

### 3.2 Architecture and Design Patterns

The application implements a structured security safety demonstration system with dual operational modes:

**Mode 1: Video Player Analysis** Demonstrates real time analysis capabilities using recorded content showing a driver experiencing fatigue related drowsiness during actual driving conditions. This mode validates the system's detection algorithms against real world scenarios.

**Mode 2: Simulation Scenarios** Simulates behavioral patterns for various medical emergency scenarios including anxiety attacks and cardiac events, enabling systematic testing of safety measure activation protocols and response mechanisms.

### 3.3 Key Technical Challenges and Solutions

#### 3.3.1 Challenge: Signal Noise and False Positives

**Problem Statement** Raw landmark detection from webcam sources exhibits jitter and instability, resulting in inaccurate data transmission to the computer vision model. This inconsistency increases the probability of false positive detections, potentially triggering inappropriate alerts.

**Solution Implemented** A buffer decay system was implemented utilizing incremental counters. Rather than immediate alert triggering upon detection, the system increments a counter that must exceed a defined threshold before alert activation. This approach effectively filters transient behaviors such as yawning or random mouth opening, reducing false positive rates while maintaining sensitivity to sustained behavioral changes.

#### 3.3.2 Challenge: Translating Geometric Data to Behavioral Psychology

**Problem Statement** The AI engine provides geometric coordinate data (for example, "Lip Top: [x,y], Lip Bottom: [x,y]"), but the system must detect abstract behavioral concepts and accurate psychological patterns. In production scenarios, IR sensors provide substantially improved information for mapping to behavioral traits. While machine learning models represent an alternative approach, they would result in heavier computational architecture requirements for vehicle integration.

**Solution Implemented** Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR) algorithms were implemented. These geometric heuristics calculate the openness levels of eyes and mouth to detect various behavioral patterns including impairment, drowsiness, and fatigue. The system also measures head movement patterns to detect erratic behavior indicative of medical distress or attention loss.

#### 3.3.3 Challenge: Dataset Curation for Training and Testing

**Problem Statement** Public availability of real time driving data depicting medical emergencies is extremely limited. Available datasets are voluminous and require extensive formatting, prolonged training cycles, and comprehensive testing scenarios for the model to accurately detect all emergency conditions.

**Solution Implemented** Simulation based approach for scenarios including driver impairment, panic or anxiety attacks, and cardiac events was utilized for detecting behavioral response patterns. Additionally, video upload functionality was implemented for demonstration purposes, utilizing real life content where a content creator experiences fatigue induced drowsiness during actual vehicle operation, providing authentic real time feed data for system validation.

---

## 4. Learnings and Insights

### 4.1 Key Research Learnings

#### 4.1.1 BYD's Innovation Achievement in Vehicle Manufacturing

BYD has achieved a remarkable feat of innovation in the automotive industry by seamlessly blending in house manufacturing with intelligent systems implementation. The integration of technologies including NFC keyless entry, the MY BYD application for continuous vehicle performance monitoring, and OTA update capabilities positions BYD at the forefront of intelligent autonomous vehicle development. The unit economics model that BYD has successfully implemented, encompassing manufacturing of proprietary components to vehicle integration with cameras, sensors, state of the art intelligent cockpit systems, and Driver Monitoring Software, demonstrates comprehensive vertical integration excellence.

#### 4.1.2 Comprehensive Technology Utilization

BYD has demonstrated exceptional utilization of available technologies within vehicle systems to maintain safety checks and enable continuous software updates. The integration of appropriate technologies transforms vehicles into genuinely intelligent autonomous systems. The most notable aspect is the comprehensive nature of BYD's implementation, leaving minimal opportunities for additional innovation. Identifying the in cabin safety enhancement opportunity proved challenging given the thorough existing implementation. BYD represents best in class implementation of technology integration with automotive fundamentals, delivering superior innovations at lower costs compared to market competitors including Mercedes Benz, BMW, Hyundai/Kia, and Toyota.

#### 4.1.3 Computer Vision Logic Nuances

**Geometry versus AI Models** While deep learning models possess significant power, simple geometric heuristics (such as Eye Aspect Ratio or Mouth Aspect Ratio) often provide faster execution, greater interpretability, and easier tuning for real time browser applications compared to computationally intensive neural networks.

**Calibration Criticality** Static thresholds (for example "EAR < 0.2") fail in real world deployment because every camera, facial structure, and lighting condition presents unique characteristics. Building dynamic calibration tools is essential for system usability and accuracy across diverse user populations.

**Video Forensics Requirements** Handling pre recorded video requires different processing logic (requestVideoFrameCallback) compared to live webcam streams (requestAnimationFrame) to ensure frame perfect analysis without skipping critical data points that could indicate emergency conditions.

### 4.2 Surprising Discoveries

#### 4.2.1 Unexplored Safety Net Opportunity

The primary surprise centers on why BYD has not yet implemented this safety net concept across all model variants. The company possesses high quality cameras, advanced sensor arrays, the God's Eye system, and state of the art intelligence cores throughout their vehicle lineup. The synchronization of in cabin safety systems with voice assistant capabilities represents a significant advancement in autonomous vehicle safety protocols.

#### 4.2.2 XUANJI Architecture Sophistication

The XUANJI Architecture functions as a vehicular intelligent architecture serving simultaneously as both the computational brain and neural network of the vehicle, enabling an efficient synthesis of electrification and intelligence. This architecture comprises:

**1 Brain** Self developed smart central control chip providing centralized processing

**2 Ends (Dual AI System)** Cloud AI handles backend processing and large scale data training, while Vehicle AI manages real time onboard decision making. This represents the industry's first dual AI large model application in whole vehicle systems by BYD.

**3 Networks** Vehicle network (V2V, V2I communication), 5G network (high speed connectivity), and Satellite network (global coverage) providing comprehensive connectivity across all operational environments.

**4 Chains** Sensor Chain (cameras, LiDAR, radar, ultrasonic sensors), Controller Chain (ECUs, domain controllers), Data Chain (real time data collection and processing), and Mechanical Chain (motors, steering, braking systems) enabling complete vehicle integration.

#### 4.2.3 Comprehensive Safety Measure Integration

The exceptional organization and integration of safety measures throughout BYD vehicles is noteworthy. The system includes a 360 degree external view capability, representing an excellent feature for vehicle operation. This proves particularly valuable during overtaking maneuvers on international roadways, providing simultaneous front and rear visibility to adjust speed with clear judgment regarding surrounding vehicle positions. This capability could contribute to significant reduction in road rage related accidents through improved situational awareness.

### 4.3 Future Version 3 Improvements

#### 4.3.1 Distilled Deep Learning Model Development
Development of a distilled deep learning model that detects driver behavioral patterns with precision in differentiating casual gestures and movements from genuine medical emergency issues (such as seizures and other acute medical conditions).

#### 4.3.2 DeepSeek Model Integration
Exploration of DeepSeek model implementation for inference in the demonstration system. However, latency issues with local DeepSeek model deployment (from Ollama) conflict with video and webcam feed processing, resulting in laggy voice assistant responses. Consequently, this integration was not implemented in the current version.

#### 4.3.3 Edge Level Deep Learning Optimization
Investigation of methods to utilize trained deep learning models without major trade offs between RAM space consumption and rapid response mechanisms at the edge computing level. Currently, BYD utilizes DeepSeek AI technology at edge level within their vehicles through their dual AI application architecture.

### 4.4 Current Prototype Limitations

#### 4.4.1 Hardware and Performance Constraints

**Camera Dependency** The entire system relies heavily on single webcam input. Performance will degrade significantly in poor lighting conditions including night driving, tunnels, and shadowed environments.

**Field of View Limitations** A standard webcam may not capture the driver's complete facial structure if they turn their head significantly, leading to tracking loss and detection failures.

**Resolution and Frame Rate** Lower quality webcams produce noisy data, negatively affecting the accuracy of facial landmark detection and vital sign estimation algorithms.

**Browser Based Limitations** Running complex computer vision operations (TensorFlow.js) and physics simulations within a browser environment is resource intensive. This may cause performance lag or battery drain on mobile devices or lower specification laptops.

#### 4.4.2 Algorithm and Accuracy Limitations

**Simulated Measurements** Heart rate and breathing rate represent simulated estimates rather than medical grade measurements. These metrics are derived from facial cues (mouth opening, eye closure) and logic model analysis rather than actual physiological sensors. This approach can produce inaccuracies in certain scenarios.

**Adrenaline and Stress Modeling** The adrenaline variable represents a simplified heuristic. Real physiological stress responses are far more complex and do not always correlate directly with mouth openness or eye closure patterns.

**Facial Landmark Reliance** The system exhibits several dependencies:

Occlusion issues arise when glasses, sunglasses, masks, or facial hair obstruct key landmarks (eyes, mouth), potentially breaking detection logic.

Pose sensitivity problems occur when extreme head angles (looking down at mobile devices, looking backward) cause face mesh detection failures or produce erratic results.

Hardcoded thresholds such as PANIC_THRESHOLD_MAR (0.45) and FAINT_THRESHOLD_EAR (0.40) in configuration files are static values. Different individuals possess different resting facial structures. A person with naturally smaller eyes might trigger false drowsiness alerts despite being fully alert.

### 4.5 Future Enhancement Possibilities

#### 4.5.1 Edge AI Optimization
Optimize models to execute efficiently on specialized automotive processing chips, improving performance while reducing power consumption and latency.

#### 4.5.2 Offline Capability
Provide comprehensive offline capability ensuring all safety features remain operational (not limited to landmark detection, but including local inferencing) even without network connectivity.

#### 4.5.3 Privacy and Security Enhancements
Implement local data processing techniques ensuring sensitive information including biometric data does not leak beyond the vehicle boundary, maintaining user privacy and data security.

#### 4.5.4 Augmented Reality Head Up Display (HUD)
Potential integration of augmented reality HUD to project safety alerts and navigation guidance directly onto the windshield. However, this enhancement must align with security protocols and regulatory requirements specific to BYD's operational markets.

#### 4.5.5 Multi Person Tracking
If feasible from cost and architectural perspectives, expand the system to monitor all vehicle passengers. Implementation could utilize either a larger field of view camera positioned near the driver or an additional compact camera integrated into or mounted atop the touchscreen display panel.