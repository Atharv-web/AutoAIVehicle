const App = {
    // Core references
    video: null,
    canvas: null,
    ctx: null,
    model: null,
    
    // State
    isRunning: false,
    isProcessing: false,
    hasApiKey: false,
    warmupFrames: 0,
    lastTriggerTime: 0, // COOLDOWN TIMER
    
    // Simulation State
    simulationMode: null,
    simulationStart: 0,
    
    // Performance tracking
    frameCount: 0,
    lastFrameTime: performance.now(),
    lastInferenceAt: 0,
    
    // Tracking data
    lastNose: null,
    
    // Smoothing buffers
    smoothBuffers: {
      ear: [],
      mar: [],
      agitation: []
    },
    
    // Detection counters
    buffer: {
      drowsyFrames: 0,
      yawnFrames: 0
    },
    
    // UI elements
    graphBars: [],
    aiLog: null,
  
    // ============= INITIALIZATION =============
    init: async function() {
      try {
        if (window.lucide) lucide.createIcons();
        
        this.video = document.getElementById('video');
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.aiLog = document.getElementById('ai_log');
        
        // Initialize graph
        const graph = document.getElementById('graph_container');
        graph.innerHTML = '';
        for (let i = 0; i < 50; i++) {
          const bar = document.createElement('div');
          bar.className = 'graph-bar';
          bar.style.height = '2%';
          graph.appendChild(bar);
          this.graphBars.push(bar);
        }
        
        this.log("Loading Face Mesh model...");
        this.setSystemState("LOADING MODEL...");
        
        await tf.ready();
        this.model = await faceLandmarksDetection.load(
          faceLandmarksDetection.SupportedPackages.mediapipeFacemesh,
          { maxFaces: 1 }
        );
        
        this.log("✓ Model loaded successfully");

        // Validate API Key
        if (typeof CONFIG !== 'undefined' && CONFIG.API_KEY && CONFIG.API_KEY.length > 10) {
            this.hasApiKey = true;
            this.log("✓ API Key detected");
        } else {
            this.hasApiKey = false;
            this.log("⚠ No API Key - Offline Mode Active");
        }

        this.log("Ready. Select Input.");
        this.setSystemState("STANDBY");
        
        window.addEventListener('resize', () => this.resizeCanvas());
        
      } catch (error) {
        this.log("ERROR: " + error.message);
        this.setSystemState("ERROR");
        console.error(error);
      }
    },

    // ============= STATE MANAGEMENT =============
    resetState() {
        // 1. Reset Logic Flags
        this.simulationMode = null;
        this.simulationStart = 0;
        this.warmupFrames = 0;
        
        // Note: We DO NOT reset lastTriggerTime here, 
        // to prevent spamming by quickly switching modes.
        
        // 2. Stop Webcam
        if (this.video.srcObject) {
            const tracks = this.video.srcObject.getTracks();
            tracks.forEach(track => track.stop());
            this.video.srcObject = null;
        }
        
        // 3. Stop Video File
        this.video.pause();
        this.video.src = "";
        this.video.removeAttribute('src');
        this.video.load();
        
        // 4. Reset Buffers
        this.smoothBuffers.ear = [];
        this.smoothBuffers.mar = [];
        this.smoothBuffers.agitation = [];
        this.buffer.drowsyFrames = 0;
        this.buffer.yawnFrames = 0;
        
        // 5. Reset UI
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        document.getElementById('alert_box').style.display = 'none';
        this.setSystemState("STANDBY");
    },
  
    // ============= INPUT HANDLERS =============
    async loadVideo(input) {
      if (!input.files || !input.files[0]) return;
      this.resetState(); // Force Clean State
      
      const file = input.files[0];
      const url = URL.createObjectURL(file);
      
      this.video.src = url;
      this.video.loop = false;
      this.video.muted = true;
      
      this.setSystemState("CALIBRATING...");
      this.warmupFrames = 60; 
      
      try {
          await this.video.play();
          this.startLoop();
          this.resizeCanvas();
          this.log(`Video loaded: ${file.name}`);
      } catch (e) {
          this.log("Error: " + e.message);
      }
    },
  
    async startWebcam() {
      this.resetState(); // Force Clean State
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480 } });
        this.video.srcObject = stream;
        this.video.style.transform = "scaleX(-1)";
        this.canvas.style.transform = "scaleX(-1)";
        
        this.setSystemState("CALIBRATING...");
        this.warmupFrames = 60;

        await this.video.play();
        this.startLoop();
        this.resizeCanvas();
        this.log("✓ Webcam activated");
      } catch (error) {
        alert("Camera error: " + error.message);
        this.resetState();
      }
    },

    simulate(scenario) {
      if (scenario === 'STOP') {
          this.resetState();
          this.log("Simulation stopped.");
          return;
      }
      this.resetState(); // Force Clean State
      
      this.simulationMode = scenario;
      this.simulationStart = performance.now();
      
      this.startLoop();
      this.resizeCanvas();
      
      let msg = "";
      if (scenario === 'PANIC') msg = "Sim: Panic Attack (4s buildup)...";
      if (scenario === 'HEART_ATTACK') msg = "Sim: Heart Attack (4s buildup)...";
      if (scenario === 'SEIZURE') msg = "Sim: Seizure (2s buildup)...";
      this.log(msg);
      this.setSystemState("SIMULATING...");
    },

    // ============= PROCESS LOOP =============
    startLoop() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.loop();
        }
    },
  
    loop() {
      if (!this.isRunning) return;
      this.process();
      requestAnimationFrame(() => this.loop());
    },
  
    async process() {
      const now = performance.now();
      const hasVideo = this.video.videoWidth > 0 && !this.video.paused && !this.video.ended;
      
      if (!this.simulationMode && !hasVideo) return;

      if (this.canvas.width === 0) this.resizeCanvas();
      
      // Clear & Draw
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      if (hasVideo) {
         this.ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
      } else if (this.simulationMode) {
         this.ctx.fillStyle = "#000";
         this.ctx.fillRect(0,0, this.canvas.width, this.canvas.height);
         this.ctx.font = "20px Courier New";
         this.ctx.fillStyle = "#00f2ff";
         this.ctx.fillText("SIMULATION MODE ACTIVE", 20, 40);
      }
      
      // Update FPS
      const dt = now - this.lastFrameTime;
      this.frameCount++;
      if (dt >= 1000) {
        document.getElementById('fps_val').innerText = Math.round(this.frameCount) + " FPS";
        this.frameCount = 0;
        this.lastFrameTime = now;
      }
      
      // Inference (Throttled 150ms)
      if (!this.isProcessing && (now - this.lastInferenceAt >= CONFIG.INFERENCE_INTERVAL_MS)) {
        this.isProcessing = true;
        this.lastInferenceAt = now;
        
        try {
          if (this.warmupFrames > 0) {
             this.warmupFrames--;
             this.isProcessing = false;
             return; 
          }

          let ear = 0.3;
          let mar = 0.0;
          let agitation = 0;
          let landmarks = null;
          
          // REAL DATA
          if (!this.simulationMode && hasVideo && this.model) {
              try {
                const predictions = await this.model.estimateFaces({ input: this.video });
                if (predictions.length > 0) {
                    landmarks = predictions[0].scaledMesh;
                    ear = this.median(this.pushToBuffer('ear', this.calculateEAR(landmarks)));
                    mar = this.median(this.pushToBuffer('mar', this.calculateMAR(landmarks)));
                    agitation = this.median(this.pushToBuffer('agitation', this.getHeadVelocity(landmarks[CONFIG.LANDMARKS.NOSE])));
                }
              } catch (e) { /* ignore */ }
          }
          
          // SIMULATION DATA (STABILIZED)
          if (this.simulationMode) {
             const elapsed = (now - this.simulationStart) / 1000;
             
             if (this.simulationMode === 'PANIC') {
                 if (elapsed < 2) { agitation = 1.9 + elapsed; } 
                 // Fix: Ensure value is ALWAYS > 5.0 when triggering (5.5 - 6.5)
                 else if (elapsed < 4.0) { agitation = 19.8 + Math.random(); ear = 0.35; mar = 0.4; } 
                 else { agitation = 24.5; } 
             } 
             else if (this.simulationMode === 'HEART_ATTACK') {
                 if (elapsed < 2) { agitation = 4.0 + Math.random(); mar = 0.5; }
                 else if (elapsed < 4.0) { 
                     agitation = Math.max(0, 4.0 - (elapsed - 2)); 
                     ear = Math.max(0.1, 0.25 - ((elapsed - 2) * 0.1));
                 } 
                 else { 
                     ear = 0.12; agitation = 0; 
                     this.buffer.drowsyFrames = CONFIG.THRESHOLDS.FRAMES_ASLEEP + 10;
                 }
             }
             else if (this.simulationMode === 'SEIZURE') {
                 if (elapsed < 1) { agitation = 2.0; }
                 // Fix: Ensure value is ALWAYS > 5.0
                 else if (elapsed < 2.0) { agitation = 26.0 + Math.random() * 5; mar = 0.5; }
                 else { agitation = 29.0; }
             }
          }
          
          if (!this.simulationMode || this.simulationMode === 'HEART_ATTACK') {
              if (agitation > CONFIG.SMOOTHING.OUTLIER_CLIP) agitation = CONFIG.SMOOTHING.OUTLIER_CLIP;
          }

          this.analyzeDrowsiness({ ear, mar, agitation });
          
          if (landmarks && hasVideo) this.drawLandmarks(landmarks, ear);

        } catch (error) {
          console.warn(error);
        } finally {
          this.isProcessing = false;
        }
      }
    },
  
    // ============= UTILS =============
    calculateEAR(landmarks) {
      const L = CONFIG.LANDMARKS.LEFT_EYE;
      const R = CONFIG.LANDMARKS.RIGHT_EYE;
      const leftV = (this.dist(landmarks[L.TOP_1], landmarks[L.BOTTOM_1]) + this.dist(landmarks[L.TOP_2], landmarks[L.BOTTOM_2])) / 2;
      const rightV = (this.dist(landmarks[R.TOP_1], landmarks[R.BOTTOM_1]) + this.dist(landmarks[R.TOP_2], landmarks[R.BOTTOM_2])) / 2;
      const leftH = this.dist(landmarks[L.LEFT_CORNER], landmarks[L.RIGHT_CORNER]);
      const rightH = this.dist(landmarks[R.LEFT_CORNER], landmarks[R.RIGHT_CORNER]);
      return ((leftV / leftH) + (rightV / rightH)) / 2;
    },
    calculateMAR(landmarks) {
      const M = CONFIG.LANDMARKS.MOUTH;
      return this.dist(landmarks[M.TOP], landmarks[M.BOTTOM]) / this.dist(landmarks[M.LEFT], landmarks[M.RIGHT]);
    },
    getHeadVelocity(nose) {
      if (!this.lastNose) { this.lastNose = nose; return 0; }
      const velocity = this.dist(nose, this.lastNose);
      this.lastNose = nose;
      return velocity;
    },
    median(arr) {
      if (arr.length === 0) return 0;
      const sorted = arr.slice().sort((a, b) => a - b);
      const mid = Math.floor(sorted.length / 2);
      return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    },
    pushToBuffer(bufferName, value) {
      const buffer = this.smoothBuffers[bufferName];
      buffer.push(value);
      while (buffer.length > CONFIG.SMOOTHING.WINDOW_SIZE) buffer.shift();
      return buffer;
    },
    dist(p1, p2) { return Math.hypot(p1[0] - p2[0], p1[1] - p2[1]); },

    resizeCanvas() {
        const viewport = document.querySelector('.viewport');
        const vw = viewport.clientWidth;
        const vh = viewport.clientHeight;
        if (this.video.videoWidth) {
          this.canvas.width = this.video.videoWidth;
          this.canvas.height = this.video.videoHeight;
          const videoRatio = this.video.videoWidth / this.video.videoHeight;
          const viewRatio = vw / vh;
          let finalW, finalH;
          if (viewRatio > videoRatio) { finalH = vh; finalW = vh * videoRatio; } 
          else { finalW = vw; finalH = vw / videoRatio; }
          this.canvas.style.width = `${finalW}px`;
          this.canvas.style.height = `${finalH}px`;
          this.canvas.style.position = 'absolute';
          this.canvas.style.left = `${(vw - finalW) / 2}px`;
          this.canvas.style.top = `${(vh - finalH) / 2}px`;
          this.video.style.display = 'none'; 
        } else {
          this.canvas.width = 640;
          this.canvas.height = 480;
        }
    },
    
    // ============= ANALYSIS ENGINE (FIXED) =============
    analyzeDrowsiness(vitals) {
        const { ear, mar, agitation } = vitals;
        
        // 1. Update UI Visuals
        this.updateGraph(agitation);
        this.setBar('bar_ear', 'val_ear', ear * 100, ear < CONFIG.THRESHOLDS.EAR_DROWSY ? 'var(--alert)' : 'var(--safe)');
        this.setBar('bar_agitation', 'val_agitation', agitation * 10, agitation > CONFIG.THRESHOLDS.AGITATION_HIGH ? 'var(--alert)' : 'var(--accent)');
        
        // 2. Buffer Logic (Update Counters)
        if (!this.simulationMode) {
            if (ear < CONFIG.THRESHOLDS.EAR_DROWSY) this.buffer.drowsyFrames++;
            else this.buffer.drowsyFrames = Math.max(0, this.buffer.drowsyFrames - 2);
        }
        
        if (mar > CONFIG.THRESHOLDS.MAR_YAWN && ear > CONFIG.THRESHOLDS.EAR_DROWSY) this.buffer.yawnFrames++;
        else this.buffer.yawnFrames = Math.max(0, this.buffer.yawnFrames - 1);
        
        // 3. Calculate Metrics & Define Flags (THIS WAS MISSING BEFORE)
        const drowsyConfidence = Math.min(100, (this.buffer.drowsyFrames / CONFIG.THRESHOLDS.FRAMES_DROWSY) * 100);
        
        const isAsleep = ear < CONFIG.THRESHOLDS.EAR_ASLEEP && this.buffer.drowsyFrames > CONFIG.THRESHOLDS.FRAMES_ASLEEP;
        const isHighAgitation = agitation > CONFIG.THRESHOLDS.AGITATION_HIGH; 
        
        this.setBar('bar_fatigue', 'val_fatigue', drowsyConfidence, 'var(--alert)');

        // 4. DETERMINE STATE
        let state = "MONITORING";
        let alertLevel = CONFIG.ALERT_LEVELS.NONE;
        let alertType = "";
        let subText = "";

        // --- SIMULATION OVERRIDES ---
        // Now 'isHighAgitation' is defined, so these checks will work
        if (this.simulationMode === 'SEIZURE' && isHighAgitation) {
            state = "WARNING: SEIZURE ACTIVITY DETECTED";
            alertLevel = CONFIG.ALERT_LEVELS.SEVERE;
            alertType = "SEIZURE DETECTED"; 
            subText = "MEDICAL EMERGENCY";
        }
        else if (this.simulationMode === 'PANIC' && isHighAgitation) {
            state = "WARNING: DRIVER DISTRESS (PANIC)";
            alertLevel = CONFIG.ALERT_LEVELS.SEVERE;
            alertType = "PANIC ATTACK"; 
            subText = "VITAL SIGNS UNSTABLE";
        }
        else if (this.simulationMode === 'HEART_ATTACK' && isAsleep) {
            state = "CRITICAL: CARDIAC EVENT SIMULATED";
            alertLevel = CONFIG.ALERT_LEVELS.CRITICAL;
            alertType = "CARDIAC EVENT"; 
            subText = "DRIVER UNRESPONSIVE";
        }
        // --- REAL WORLD DETECTION LOGIC ---
        else if (isAsleep) {
            state = "CRITICAL: DRIVER UNRESPONSIVE";
            alertLevel = CONFIG.ALERT_LEVELS.CRITICAL;
            alertType = "CRITICAL"; 
            subText = "EMERGENCY STOPPING";
        } 
        else if (isHighAgitation) {
            state = "WARNING: HIGH AGITATION";
            alertLevel = CONFIG.ALERT_LEVELS.SEVERE;
            alertType = "DISTRESS DETECTED"; 
            subText = "ABNORMAL MOVEMENT";
        }
        else if (drowsyConfidence > 80) {
            state = "WARNING: SEVERE FATIGUE";
            alertLevel = CONFIG.ALERT_LEVELS.SEVERE;
            alertType = "SEVERE DROWSINESS"; 
            subText = "PULL OVER IMMEDIATELY";
        } 
        else if (drowsyConfidence > 50) {
            state = "ALERT: DROWSINESS SIGNS";
            alertLevel = CONFIG.ALERT_LEVELS.MODERATE;
            alertType = "DROWSINESS DETECTED"; 
            subText = "TAKE A BREAK";
        }

        // 5. Update System Status Text
        this.setSystemState(state);
        
        // 6. Trigger Alerts
        const modal = document.getElementById('alert_box');
        
        if (alertLevel >= CONFIG.ALERT_LEVELS.MODERATE) {
            // Only trigger if not already displayed (or if type changed)
            if (modal.style.display !== 'block' || document.getElementById('alert_title').innerText !== alertType) {
                
                modal.style.display = 'block';
                document.getElementById('alert_title').innerText = alertType;
                document.getElementById('alert_sub').innerText = subText;
                
                // Trigger AI with distinct metadata
                this.triggerAI(alertType, { 
                    vitals, 
                    drowsyConfidence, 
                    isAsleep, 
                    isDistress: isHighAgitation 
                });
            }
        } else {
            modal.style.display = 'none';
        }
    },
  
    // ============= SOTA AI INTEGRATION (ELITE SAFETY CORE) =============
    async triggerAI(alertType, meta) {
        // 1. COOLDOWN GATE
        const now = Date.now();
        if (now - this.lastTriggerTime < 10000) {
            console.log("AI Throttled (Cooling down)");
            return; 
        }
        this.lastTriggerTime = now;

        const statusEl = document.getElementById('ai_status');
        
        // === SOTA FALLBACKS (If Offline / Error) ===
        const sotaResponses = {
        "SEIZURE DETECTED": "Medical anomaly detected. Seizure protocols active. Engaging autonomous pullover.",
        "PANIC ATTACK": "Driver distress detected. Stabilizing vehicle dynamics. Please breathe.",
        "CARDIAC EVENT": "Critical medical alert. Driver unresponsive. Broadcasting emergency signal.",
        "DISTRESS DETECTED": "Abnormal cabin movement. Engaging lane-keeping assist.",
        "CRITICAL": "Driver unresponsive. Hazard lights activated. Stopping vehicle safely.",
        "SEVERE DROWSINESS": "Critical fatigue levels. Driver capability compromised. Taking control.",
        "DROWSINESS DETECTED": "Fatigue markers identified. Route to nearest rest stop calculated."
        };
        
        const executeFallback = () => {
        const msg = sotaResponses[alertType] || "Safety alert. Systems taking control.";
        this.speak(msg);
        document.getElementById('alert_sub').innerText = "AUTOPILOT ENGAGED";
        statusEl.innerText = "STATUS: PROTOCOL ACTIVE";
        };

        // 2. OFFLINE CHECK
        if (!this.hasApiKey) {
        statusEl.innerText = "STATUS: OFFLINE MODE";
        executeFallback();
        return;
        }
        
        statusEl.innerText = "STATUS: SENTINEL CORE ANALYZING...";
        this.log(`CORE: Analyzing ${alertType}...`);
        
        // 3. ELITE SYSTEM PROMPT
        const prompt = `
        IDENTITY: You are SENTINEL, an elite Level 5 Autonomous Safety Core.
        
        TELEMETRY INPUT:
        - THREAT: ${alertType}
        - DRIVER STATUS: ${meta.isAsleep ? 'UNRESPONSIVE' : 'COMPROMISED/UNSTABLE'}
        - VITALS: ${meta.isDistress ? 'CRITICAL INSTABILITY' : 'DEGRADING'}
        
        MISSION:
        Generate a decisive, protective voice command to the cabin. 
        You are NOT asking permission. You are telling the driver what you are doing to save them.
        
        GUIDELINES:
        - Tone: Authoritative, Protective, Futuristic.
        - Action-Oriented
        - No "Please" or "Hello". Be direct.
        - Max 10 words.
        
        EXAMPLES:
        - "Biometric distress confirmed. Pulling over to the side safely, beginning safety procedure.."
        - "Driver unresponsive. Changing to autopilot mode. Initiating emergency braking sequence."
        - "Seizure activity detected. Autonomous takeover engaged. Calling emergency services."
        
        OUTPUT: JSON only. {"speech": "...", "action": "SYSTEM ACTION"}`;

        try {
        const response = await fetch(
            'https://api.openai.com/v1/chat/completions',
            {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${CONFIG.API_KEY}` 
            },
            body: JSON.stringify({
                model: CONFIG.MODEL,
                messages: [
                { role: "system", content: "You are Sentinel, a safety AI. Output valid JSON only." },
                { role: "user", content: prompt }
                ],
                temperature: 0.65, // Slightly higher creativity for varied responses
                max_tokens: 150
            })
            }
        );
        
        if (!response.ok) {
            const err = await response.json();
            throw new Error(`OpenAI Error: ${err.error?.message || response.status}`);
        }

        const data = await response.json();
        
        // Clean and Parse
        let text = data.choices[0].message.content.replace(/```json|```/g, '').trim();
        const jsonStart = text.indexOf('{');
        const jsonEnd = text.lastIndexOf('}');
        if (jsonStart !== -1 && jsonEnd !== -1) text = text.substring(jsonStart, jsonEnd + 1);
        
        const result = JSON.parse(text);
        
        this.log(`✓ SENTINEL: ${result.action}`);
        this.speak(result.speech);
        document.getElementById('alert_sub').innerText = result.action.toUpperCase();
        statusEl.innerText = "STATUS: PROTOCOL ACTIVE";
        
        } catch (error) {
        console.error("AI Error:", error);
        this.log(`⚠ AI ERROR. ENGAGING FALLBACK.`);
        executeFallback();
        }
    },
    
    speak(text) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(u);
    },
    
    log(message) {
      const t = new Date().toLocaleTimeString();
      this.aiLog.innerText = `[${t}] ${message}\n` + this.aiLog.innerText.substring(0, 1000);
    },
    
    setSystemState(state) {
      const el = document.getElementById('sys_state');
      el.innerText = state;
      el.style.color = state.includes('CRITICAL') ? 'var(--alert)' : 
                       state.includes('WARNING') ? '#ff6b00' : 
                       state.includes('ALERT') ? 'var(--warn)' : 'var(--safe)';
    },
    
    updateGraph(val) {
      for (let i = 0; i < this.graphBars.length - 1; i++) {
        this.graphBars[i].style.height = this.graphBars[i + 1].style.height;
        this.graphBars[i].style.background = this.graphBars[i + 1].style.background;
      }
      const last = this.graphBars[this.graphBars.length - 1];
      last.style.height = Math.min(100, val * 10) + '%';
      last.style.background = val > 5 ? 'var(--alert)' : 'var(--accent)';
    },
    
    setBar(id, txtId, val, col) {
      const bar = document.getElementById(id);
      bar.style.width = Math.min(100, val) + '%';
      bar.style.background = col;
      document.getElementById(txtId).innerText = txtId === 'val_ear' ? (val / 100).toFixed(2) : Math.floor(val) + '%';
    },
    
    drawLandmarks(landmarks, ear) {
      this.ctx.fillStyle = ear < CONFIG.THRESHOLDS.EAR_DROWSY ? '#ff0000' : '#00f2ff';
      const dp = (i) => { this.ctx.beginPath(); this.ctx.arc(landmarks[i][0], landmarks[i][1], 3, 0, 2 * Math.PI); this.ctx.fill(); };
      Object.values(CONFIG.LANDMARKS.LEFT_EYE).forEach(dp);
      Object.values(CONFIG.LANDMARKS.RIGHT_EYE).forEach(dp);
      this.ctx.fillStyle = '#00ff00';
      Object.values(CONFIG.LANDMARKS.MOUTH).forEach(dp);
      const n = landmarks[CONFIG.LANDMARKS.NOSE];
      this.ctx.strokeStyle = '#00ff00';
      this.ctx.strokeRect(n[0]-6, n[1]-6, 12, 12);
    }
};
  
window.addEventListener('load', () => App.init());