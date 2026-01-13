const app = {
    state: {
        mode: 'default', // tunarungu, tunanetra, tunagrahita, adhd
        age: '6-8',      // 6-8, 9-12, 13-15
        package: 'A',    // A, B, C
        score: 0,
        currentQuestionIndex: 0,
        questions: [],
        audioEnabled: true,
        fontSize: 1,
        theme: 'default'
    },

    elements: {
        panels: {
            landing: document.getElementById('landing-section'),
            age: document.getElementById('age-selection'),
            package: document.getElementById('package-selection'),
            quiz: document.getElementById('quiz-interface'),
            result: document.getElementById('result-section'),
            settings: document.getElementById('settings-panel')
        },
        display: {
            ageTitle: document.getElementById('age-title-display'),
            score: document.getElementById('score-display'),
            questionText: document.getElementById('question-text'),
            optionsContainer: document.getElementById('options-container'),
            progressFill: document.getElementById('progress-fill'),
            feedbackArea: document.getElementById('feedback-area'),
            feedbackText: document.getElementById('feedback-text'),
            finalScore: document.getElementById('final-score-val'),
            finalMessage: document.getElementById('final-message'),
            resultDetails: document.getElementById('result-details')
        },
        audio: {
            correct: document.getElementById('sfx-correct'),
            wrong: document.getElementById('sfx-wrong'),
            success: document.getElementById('sfx-success')
        },
        controls: {
            settingsBtn: document.getElementById('btn-settings'),
            closeSettingsBtn: document.getElementById('close-settings'),
            soundBtn: document.getElementById('btn-sound'),
            fontSlider: document.getElementById('font-size-range'),
            themeBtns: document.querySelectorAll('.theme-btn')
        }
    },

    init() {
        this.setupEventListeners();
        this.checkBrowserSupport();
    },

    setupEventListeners() {
        // Settings & Accessibility
        this.elements.controls.settingsBtn.addEventListener('click', () => {
            const isHidden = this.elements.panels.settings.classList.contains('hidden');
            if (isHidden) {
                this.elements.panels.settings.classList.remove('hidden');
                this.elements.panels.settings.setAttribute('aria-hidden', 'false');
                this.elements.controls.closeSettingsBtn.focus();
            } else {
                this.closeSettings();
            }
        });

        this.elements.controls.closeSettingsBtn.addEventListener('click', () => this.closeSettings());

        this.elements.controls.soundBtn.addEventListener('click', () => {
            this.state.audioEnabled = !this.state.audioEnabled;
            this.updateSoundIcon();
        });

        this.elements.controls.fontSlider.addEventListener('input', (e) => {
            this.state.fontSize = e.target.value;
            document.body.style.setProperty('--font-scale', this.state.fontSize);
        });

        this.elements.controls.themeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const theme = btn.dataset.theme;
                this.setTheme(theme);
            });
        });
    },

    updateSoundIcon() {
        this.elements.controls.soundBtn.textContent = this.state.audioEnabled ? '🔊' : '🔇';
        this.elements.controls.soundBtn.setAttribute('aria-pressed', !this.state.audioEnabled);
    },

    setTheme(themeName) {
        document.body.setAttribute('data-theme', themeName);
        this.state.theme = themeName;
    },

    closeSettings() {
        this.elements.panels.settings.classList.add('hidden');
        this.elements.panels.settings.setAttribute('aria-hidden', 'true');
        this.elements.controls.settingsBtn.focus();
    },

    checkBrowserSupport() {
        if (!window.speechSynthesis) {
            console.warn("Text-to-Speech not supported.");
        }
    },

    // --- NAVIGATION FLOW ---

    switchPanel(panelName) {
        // Turn off all sections first
        Object.values(this.elements.panels).forEach(el => {
            if (el !== this.elements.panels.settings) {
                el.classList.add('hidden-section');
                el.classList.remove('active-section');
            }
        });

        // Turn on target
        const target = this.elements.panels[panelName];
        if (target) {
            target.classList.remove('hidden-section');
            target.classList.add('active-section');
            // Focus header for accessibility
            const h = target.querySelector('h1, h2');
            if (h) { h.setAttribute('tabindex', '-1'); h.focus(); }
        }
    },

    // STEP 1: Select Mode
    selectMode(modeName) {
        this.state.mode = modeName;
        document.body.setAttribute('data-mode', modeName);

        // Apply Mode Specific Defaults (as requested)
        if (modeName === 'tunarungu') {
            this.state.audioEnabled = false; // Disable audio dependencies
        } else if (modeName === 'tunanetra') {
            this.state.audioEnabled = true;  // Ensure audio is ON
        }
        this.updateSoundIcon();

        // Audio Feedback
        if (this.state.audioEnabled && modeName !== 'tunarungu') {
            this.speak(`Mode ${modeName} dipilih. Silakan pilih rentang usia.`);
        }

        this.switchPanel('age');
    },

    // STEP 2: Select Age
    selectAge(ageRange) {
        this.state.age = ageRange;
        if (this.state.audioEnabled && this.state.mode !== 'tunarungu') {
            this.speak(`Usia ${ageRange} tahun dipilih. Pilih paket soal.`);
        }
        this.switchPanel('package');
    },

    goBackToAge() {
        this.switchPanel('age');
    },

    // STEP 3: Select Package -> Start Quiz
    selectPackage(pkg) {
        this.state.package = pkg;
        this.startQuiz();
    },

    goHome() {
        this.switchPanel('landing');
        document.body.removeAttribute('data-mode');
        this.stopSpeaking();
    },

    // --- QUIZ LOGIC ---

    startQuiz() {
        this.state.score = 0;
        this.state.currentQuestionIndex = 0;

        // Fetch Data from data.js helper
        const rawQuestions = getQuestions(this.state.age, this.state.mode, this.state.package);

        if (!rawQuestions || rawQuestions.length === 0) {
            alert("Maaf, soal untuk kombinasi ini belum tersedia di bank soal.");
            this.goBackToAge();
            return;
        }

        // Shuffle questions
        this.state.questions = this.shuffleArray([...rawQuestions]);

        this.switchPanel('quiz');

        if (this.state.audioEnabled && this.state.mode !== 'tunarungu') {
            this.speak(`Memulai latihan paket ${this.state.package}. Semangat!`);
        }

        this.showQuestion();
    },

    restartPackage() {
        this.startQuiz();
    },

    shuffleArray(array) {
        let arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },

    showQuestion() {
        const qData = this.state.questions[this.state.currentQuestionIndex];

        // Reset UI
        this.elements.display.feedbackArea.classList.add('hidden');
        this.elements.display.optionsContainer.innerHTML = '';
        this.elements.display.score.textContent = this.state.score;

        // Update Progress
        const progressPct = ((this.state.currentQuestionIndex) / this.state.questions.length) * 100;
        this.elements.display.progressFill.style.width = `${progressPct}%`;

        // Render Question
        this.elements.display.questionText.textContent = `${this.state.currentQuestionIndex + 1}. ${qData.q}`;

        // Check if question asks about color
        const isColorQuestion = qData.q.toLowerCase().includes('warna') || qData.q.toLowerCase().includes('warnanya');

        // Options Handling
        let optionsWithIndex = qData.options.map((opt, i) => ({ text: opt, originalIndex: i }));
        // Randomize options
        this.shuffleArray(optionsWithIndex).forEach((optObj) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';

            // Logic to remove icons for color questions
            let displayText = optObj.text;
            if (isColorQuestion) {
                // Regex to remove emojis or strictly keep text? 
                // Assuming emoji + text format like "🟢 Hijau", we remove the emoji.
                // This regex removes typical emoji ranges and symbols at start
                displayText = displayText.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\s?/g, '');
            }

            btn.innerHTML = displayText;
            btn.onclick = () => this.checkAnswer(optObj.originalIndex, btn, qData);
            this.elements.display.optionsContainer.appendChild(btn);
        });

        if (this.state.mode === 'tunanetra' && this.state.audioEnabled) {
            this.stopSpeaking();
            // Read question + options
            let readText = `Pertanyaan nomor ${this.state.currentQuestionIndex + 1}. ${qData.q}. Pilihan jawaban: `;
            optionsWithIndex.forEach((opt, idx) => {
                let optText = opt.text;
                // Strip emojis for reading if needed, but usually TTS handles them or ignores. 
                // For 'color' questions we strip visual icons but TTS might want color names.
                readText += `Pilihan ${idx + 1}, ${optText}. `;
            });
            setTimeout(() => this.speak(readText), 500);
        } else if (this.state.audioEnabled && this.state.mode !== 'tunarungu') {
            // Default behavior: just read question
            this.stopSpeaking();
            setTimeout(() => this.speak(qData.q), 500);
        }
    },

    checkAnswer(selectedIndex, btnElement, qData) {
        // Disable buttons
        const allBtns = this.elements.display.optionsContainer.querySelectorAll('button');
        allBtns.forEach(b => b.disabled = true);

        const isCorrect = selectedIndex === qData.correct;

        if (isCorrect) {
            btnElement.classList.add('correct');
            this.state.score += 20; // Assume 5 questions per set = 100
            this.playAudio('correct');
            this.showFeedback(true, qData.feedback);
        } else {
            btnElement.classList.add('wrong');
            this.playAudio('wrong');
            // Add vibration if supported (Mobile/Tablet)
            if (navigator.vibrate) navigator.vibrate(500); // 500ms vibration

            this.showFeedback(false, qData.feedback || "Jawaban kurang tepat.");
        }

        this.elements.display.score.textContent = this.state.score;
    },

    showFeedback(isCorrect, text) {
        const fbArea = this.elements.display.feedbackArea;
        const fbText = this.elements.display.feedbackText;
        const nextBtn = document.getElementById('next-btn');

        fbArea.classList.remove('hidden');


        // Robust cleaning: Remove common prefixes and "itu" to avoid double words
        let cleanText = text.replace(/^(Betul!|Benar!|Ya,|Maaf,|Salah!)\s*/i, '');
        cleanText = cleanText.replace(/^itu\s+/i, '');

        // Capitalize first letter
        if (cleanText.length > 0) {
            cleanText = cleanText.charAt(0).toUpperCase() + cleanText.slice(1);
        }

        let fullMessage = "";

        if (isCorrect) {
            // "Betul! Itu [Content]"
            fullMessage = `Betul! Itu ${cleanText}`;
        } else {
            // "Salah. Jawabannya yaitu [Content]"
            fullMessage = `Salah. Jawabannya yaitu ${cleanText}`;
        }

        fbText.textContent = fullMessage;

        if (this.state.audioEnabled && this.state.mode !== 'tunarungu') {
            this.speak(fbText.textContent);
        }

        setTimeout(() => nextBtn.focus(), 100);
    },

    nextQuestion() {
        this.state.currentQuestionIndex++;
        if (this.state.currentQuestionIndex < this.state.questions.length) {
            this.showQuestion();
        } else {
            this.finishQuiz();
        }
    },

    finishQuiz() {
        this.playAudio('success');
        this.switchPanel('result');
        this.elements.display.finalScore.textContent = this.state.score;
        this.elements.display.progressFill.style.width = '100%';

        let msg = "Kamu hebat sudah menyelesaikan latihan ini!";
        if (this.state.score === 100) msg = "Sempurna! Kamu menjawab semua dengan benar!";
        else if (this.state.score >= 60) msg = "Bagus sekali! Terus berlatih ya.";
        else msg = "Jangan menyerah, kamu pasti bisa! Coba lagi ya!"; // Low score encouragement

        this.elements.display.finalMessage.textContent = msg;

        if (this.state.audioEnabled && this.state.mode !== 'tunarungu') {
            this.speak(`Latihan selesai. Skor kamu ${this.state.score}. ${msg}`);
        }
    },

    exitQuiz() {
        if (confirm("Keluar dari latihan? Progres akan hilang.")) {
            this.goHome();
        }
    },

    // --- UTILS ---
    speak(text) {
        if (!this.state.audioEnabled || !window.speechSynthesis) return;
        window.speechSynthesis.cancel(); // Stop only speech

        // Math replacement
        let spokenText = text.replace(/\+/g, ' ditambah '); // Replace + with "ditambah"

        const utterance = new SpeechSynthesisUtterance(spokenText);
        utterance.lang = 'id-ID';
        // User requested: "jangan terlalu lambat dan jangan terlalu cepat"
        // 0.9 is standard. 1.0 is normal. 
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    },

    stopAllAudio() {
        if (window.speechSynthesis) window.speechSynthesis.cancel();

        // Stop all SFX
        Object.values(this.elements.audio).forEach(audio => {
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        });
    },

    // Legacy support if needed, or alias
    stopSpeaking() {
        this.stopAllAudio();
    },

    playAudio(type) {
        if (!this.state.audioEnabled) return;
        const audio = this.elements.audio[type];
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(e => { });
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();
}); s
