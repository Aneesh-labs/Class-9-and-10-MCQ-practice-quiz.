// ⚡ Mobile Quiz & Flashcard Application Logic
document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // DOM Elements - Navigation & Modes
    // ==========================================
    const tabQuizBtn = document.getElementById('tabQuizBtn');
    const tabFlashcardsBtn = document.getElementById('tabFlashcardsBtn');
    const quizSectionView = document.getElementById('quizSectionView');
    const flashcardsSectionView = document.getElementById('flashcardsSectionView');
    const categoryBadge = document.getElementById('categoryBadge');
    const openFlashcardsFromQuizBtn = document.getElementById('openFlashcardsFromQuizBtn');
    const quizSummaryToFlashcardsBtn = document.getElementById('quizSummaryToFlashcardsBtn');
    const fcSwitchToQuizBtn = document.getElementById('fcSwitchToQuizBtn');

    // ==========================================
    // DOM Elements - Quiz Mode
    // ==========================================
    const setupScreen = document.getElementById('setupScreen');
    const quizScreen = document.getElementById('quizScreen');
    const summaryScreen = document.getElementById('summaryScreen');
    const categorySelect = document.getElementById('categorySelect');
    const questionCountSelect = document.getElementById('questionCountSelect');
    const startQuizBtn = document.getElementById('startQuizBtn');

    const progressBar = document.getElementById('progressBar');
    const questionCounter = document.getElementById('questionCounter');
    const scoreCounter = document.getElementById('scoreCounter');
    const sectionBadge = document.getElementById('sectionBadge');
    const questionText = document.getElementById('questionText');
    const optionsGrid = document.getElementById('optionsGrid');
    const explanationBox = document.getElementById('explanationBox');
    const explanationText = document.getElementById('explanationText');
    const nextBtn = document.getElementById('nextBtn');

    const scoreCircle = document.getElementById('scoreCircle');
    const summaryText = document.getElementById('summaryText');
    const restartBtn = document.getElementById('restartBtn');

    // ==========================================
    // DOM Elements - Flashcard Mode
    // ==========================================
    const fcSetupScreen = document.getElementById('fcSetupScreen');
    const fcStudyScreen = document.getElementById('fcStudyScreen');
    const fcCompleteScreen = document.getElementById('fcCompleteScreen');
    const fcCategorySelect = document.getElementById('fcCategorySelect');
    const startFlashcardsBtn = document.getElementById('startFlashcardsBtn');
    const reshuffleSampleBtn = document.getElementById('reshuffleSampleBtn');
    const fcReshuffleNotice = document.getElementById('fcReshuffleNotice');

    const fcProgressBar = document.getElementById('fcProgressBar');
    const fcCounter = document.getElementById('fcCounter');
    const fcSectionBadge = document.getElementById('fcSectionBadge');
    const fcBackToSetupBtn = document.getElementById('fcBackToSetupBtn');

    const flashcardCard = document.getElementById('flashcardCard');
    const flashcardWrapper = document.getElementById('flashcardWrapper');
    const fcPromptText = document.getElementById('fcPromptText');
    const fcHintToggleBtn = document.getElementById('fcHintToggleBtn');
    const fcHintBox = document.getElementById('fcHintBox');
    const fcAnswerText = document.getElementById('fcAnswerText');
    const fcExplanationText = document.getElementById('fcExplanationText');

    const fcPrevBtn = document.getElementById('fcPrevBtn');
    const fcFlipBtn = document.getElementById('fcFlipBtn');
    const fcNextBtn = document.getElementById('fcNextBtn');
    const fcShuffleCurrentBtn = document.getElementById('fcShuffleCurrentBtn');

    const fcCompleteCircle = document.getElementById('fcCompleteCircle');
    const fcCompleteText = document.getElementById('fcCompleteText');
    const fcRestartSectionBtn = document.getElementById('fcRestartSectionBtn');
    const fcPickAnotherBtn = document.getElementById('fcPickAnotherBtn');

    // ==========================================
    // Core Data & State
    // ==========================================
    let activeQuestions = [];
    let currentIndex = 0;
    let score = 0;
    let answered = false;

    // Ensure QUESTIONS array is loaded and valid
    const validMCQs = (typeof QUESTIONS !== 'undefined' && Array.isArray(QUESTIONS))
        ? QUESTIONS.filter(q => q && q.prompt && q.answer && Array.isArray(q.options) && q.options.length >= 2)
        : [];

    // Populate Quiz Categories
    const quizCategories = ['All Categories', ...new Set(validMCQs.map(q => q.category).filter(Boolean))];
    categorySelect.innerHTML = quizCategories.map(cat => `<option value="${cat}">${cat}</option>`).join('');

    // ==========================================
    // Flashcard State & 50%-60% Sampling Engine
    // ==========================================
    let flashcardsBySection = {};
    let allFlashcardsCombined = [];
    let currentFcDeck = [];
    let currentFcIndex = 0;
    let isFlipped = false;
    let currentFcSectionName = '';

    function sampleFlashcards() {
        flashcardsBySection = {};
        allFlashcardsCombined = [];

        const grouped = {};
        validMCQs.forEach(q => {
            const cat = q.category || 'General Knowledge';
            if (!grouped[cat]) grouped[cat] = [];
            grouped[cat].push(q);
        });

        Object.keys(grouped).forEach(cat => {
            const pool = [...grouped[cat]];

            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }

            const ratio = 0.50 + (Math.random() * 0.10);
            const count = Math.max(1, Math.round(pool.length * ratio));
            const selected = pool.slice(0, count);

            flashcardsBySection[cat] = selected;
            allFlashcardsCombined.push(...selected);
        });

        for (let i = allFlashcardsCombined.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allFlashcardsCombined[i], allFlashcardsCombined[j]] = [allFlashcardsCombined[j], allFlashcardsCombined[i]];
        }

        populateFlashcardCategorySelect();
    }

    function populateFlashcardCategorySelect() {
        const options = [];
        const totalSampled = allFlashcardsCombined.length;
        const totalOverall = validMCQs.length;
        const overallPct = Math.round((totalSampled / totalOverall) * 100);

        options.push(
            `<option value="__ALL__">All Sections Combined (${totalSampled} cards — ${overallPct}%)</option>`
        );

        Object.keys(flashcardsBySection).forEach(cat => {
            const sampledCount = flashcardsBySection[cat].length;
            const totalInCat = validMCQs.filter(q => q.category === cat).length;
            const pct = Math.round((sampledCount / totalInCat) * 100);
            options.push(
                `<option value="${cat}">${cat} (${sampledCount} cards — ${pct}%)</option>`
            );
        });

        fcCategorySelect.innerHTML = options.join('');
    }

    sampleFlashcards();

    // ==========================================
    // Mode Switching
    // ==========================================
    let currentMode = 'quiz';

    function switchMode(mode) {
        currentMode = mode;
        if (mode === 'quiz') {
            quizSectionView.classList.remove('hidden');
            flashcardsSectionView.classList.add('hidden');
            tabQuizBtn.classList.add('active');
            tabFlashcardsBtn.classList.remove('active');
            categoryBadge.textContent = 'Quiz Mode';
        } else {
            quizSectionView.classList.add('hidden');
            flashcardsSectionView.classList.remove('hidden');
            tabQuizBtn.classList.remove('active');
            tabFlashcardsBtn.classList.add('active');
            categoryBadge.textContent = 'Flashcards';
        }
    }

    tabQuizBtn.addEventListener('click', () => switchMode('quiz'));
    tabFlashcardsBtn.addEventListener('click', () => switchMode('flashcards'));
    openFlashcardsFromQuizBtn.addEventListener('click', () => switchMode('flashcards'));
    quizSummaryToFlashcardsBtn.addEventListener('click', () => switchMode('flashcards'));
    fcSwitchToQuizBtn.addEventListener('click', () => switchMode('quiz'));

    reshuffleSampleBtn.addEventListener('click', () => {
        sampleFlashcards();
        fcReshuffleNotice.textContent = `✨ Generated fresh 50%–60% sample! (${allFlashcardsCombined.length} cards across ${Object.keys(flashcardsBySection).length} sections)`;
        fcReshuffleNotice.classList.remove('hidden');
        setTimeout(() => {
            fcReshuffleNotice.classList.add('hidden');
        }, 3500);
    });

    // ==========================================
    // Flashcard Interactions
    // ==========================================
    startFlashcardsBtn.addEventListener('click', () => {
        const selectedValue = fcCategorySelect.value;
        if (selectedValue === '__ALL__') {
            currentFcDeck = [...allFlashcardsCombined];
            currentFcSectionName = 'All Sections Combined';
        } else {
            currentFcDeck = [...(flashcardsBySection[selectedValue] || [])];
            currentFcSectionName = selectedValue;
        }

        if (currentFcDeck.length === 0) {
            alert('No flashcards found for this section.');
            return;
        }

        currentFcDeck.sort(() => 0.5 - Math.random());
        currentFcIndex = 0;

        fcSetupScreen.classList.add('hidden');
        fcCompleteScreen.classList.add('hidden');
        fcStudyScreen.classList.remove('hidden');

        renderFlashcard();
    });

    function renderFlashcard() {
        if (!currentFcDeck || currentFcDeck.length === 0) return;

        isFlipped = false;
        flashcardCard.classList.remove('is-flipped');

        const card = currentFcDeck[currentFcIndex];
        const total = currentFcDeck.length;

        const progressPct = ((currentFcIndex + 1) / total) * 100;
        fcProgressBar.style.width = `${progressPct}%`;
        fcCounter.textContent = `Card ${currentFcIndex + 1} / ${total}`;
        fcSectionBadge.textContent = card.category ? `🏷️ ${card.category}` : '';

        fcPromptText.textContent = card.prompt || 'No question provided';

        fcHintBox.classList.add('hidden');
        if (card.hint && card.hint.trim()) {
            fcHintToggleBtn.classList.remove('hidden');
            fcHintBox.textContent = `💡 Hint: ${card.hint}`;
            fcHintToggleBtn.textContent = '💡 Show Hint';
        } else {
            fcHintToggleBtn.classList.add('hidden');
        }

        fcAnswerText.textContent = card.answer || 'No answer provided';
        fcExplanationText.innerHTML = card.explanation
            ? `<strong>💡 Rationale:</strong> ${card.explanation}`
            : `<strong>💡 Rationale:</strong> Review your notes for key concepts in this topic.`;

        fcPrevBtn.disabled = currentFcIndex === 0;
        fcPrevBtn.style.opacity = currentFcIndex === 0 ? '0.45' : '1';
        fcNextBtn.textContent = (currentFcIndex === total - 1) ? 'Finish ➔' : 'Next ▶';
    }

    function toggleCardFlip() {
        isFlipped = !isFlipped;
        flashcardCard.classList.toggle('is-flipped', isFlipped);
    }

    flashcardWrapper.addEventListener('click', (e) => {
        if (e.target.closest('#fcHintToggleBtn')) return;
        toggleCardFlip();
    });

    fcFlipBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleCardFlip();
    });

    fcHintToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isHidden = fcHintBox.classList.contains('hidden');
        if (isHidden) {
            fcHintBox.classList.remove('hidden');
            fcHintToggleBtn.textContent = '🙈 Hide Hint';
        } else {
            fcHintBox.classList.add('hidden');
            fcHintToggleBtn.textContent = '💡 Show Hint';
        }
    });

    fcPrevBtn.addEventListener('click', () => {
        if (currentFcIndex > 0) {
            currentFcIndex--;
            renderFlashcard();
        }
    });

    fcNextBtn.addEventListener('click', () => {
        if (currentFcIndex < currentFcDeck.length - 1) {
            currentFcIndex++;
            renderFlashcard();
        } else {
            showFlashcardCompletion();
        }
    });

    fcShuffleCurrentBtn.addEventListener('click', () => {
        currentFcDeck.sort(() => 0.5 - Math.random());
        currentFcIndex = 0;
        renderFlashcard();
    });

    fcBackToSetupBtn.addEventListener('click', () => {
        fcStudyScreen.classList.add('hidden');
        fcCompleteScreen.classList.add('hidden');
        fcSetupScreen.classList.remove('hidden');
    });

    function showFlashcardCompletion() {
        fcStudyScreen.classList.add('hidden');
        fcCompleteScreen.classList.remove('hidden');
        fcCompleteCircle.textContent = '100%';
        fcCompleteText.textContent = `Awesome! You studied all ${currentFcDeck.length} flashcards in "${currentFcSectionName}".`;
    }

    fcRestartSectionBtn.addEventListener('click', () => {
        currentFcDeck.sort(() => 0.5 - Math.random());
        currentFcIndex = 0;
        fcCompleteScreen.classList.add('hidden');
        fcStudyScreen.classList.remove('hidden');
        renderFlashcard();
    });

    fcPickAnotherBtn.addEventListener('click', () => {
        fcCompleteScreen.classList.add('hidden');
        fcSetupScreen.classList.remove('hidden');
    });

    document.addEventListener('keydown', (e) => {
        if (currentMode !== 'flashcards' || fcStudyScreen.classList.contains('hidden')) return;

        if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'ArrowDown') {
            e.preventDefault();
            toggleCardFlip();
        } else if (e.code === 'ArrowRight') {
            e.preventDefault();
            fcNextBtn.click();
        } else if (e.code === 'ArrowLeft') {
            e.preventDefault();
            if (currentFcIndex > 0) fcPrevBtn.click();
        }
    });

    let touchStartX = 0;
    let touchStartY = 0;

    flashcardWrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    flashcardWrapper.addEventListener('touchend', (e) => {
        const diffX = e.changedTouches[0].screenX - touchStartX;
        const diffY = e.changedTouches[0].screenY - touchStartY;

        if (Math.abs(diffX) > 55 && Math.abs(diffY) < 45) {
            if (diffX < 0) {
                fcNextBtn.click();
            } else if (diffX > 0 && currentFcIndex > 0) {
                fcPrevBtn.click();
            }
        }
    }, { passive: true });

    // ==========================================
    // Quiz Logic
    // ==========================================
    startQuizBtn.addEventListener('click', () => {
        const selectedCat = categorySelect.value;
        let filtered = selectedCat === 'All Categories'
            ? [...validMCQs]
            : validMCQs.filter(q => q.category === selectedCat);

        filtered.sort(() => 0.5 - Math.random());

        const limit = questionCountSelect.value === 'all' ? filtered.length : parseInt(questionCountSelect.value, 10);
        activeQuestions = filtered.slice(0, Math.min(limit, filtered.length));

        if (activeQuestions.length === 0) {
            alert('No questions found for this category!');
            return;
        }

        currentIndex = 0;
        score = 0;
        categoryBadge.textContent = selectedCat.split(':')[0] || selectedCat;

        setupScreen.classList.add('hidden');
        summaryScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');

        renderQuestion();
    });

    function renderQuestion() {
        answered = false;
        explanationBox.style.display = 'none';
        nextBtn.classList.add('hidden');

        const q = activeQuestions[currentIndex];

        const total = activeQuestions.length;
        const pct = ((currentIndex) / total) * 100;
        progressBar.style.width = `${pct}%`;
        questionCounter.textContent = `Question ${currentIndex + 1}/${total}`;
        scoreCounter.textContent = `Score: ${score}`;

        questionText.textContent = q.prompt;
        if (sectionBadge) {
            sectionBadge.textContent = q.tags ? `🏷️ ${q.tags}` : '';
        }

        const options = [...q.options];
        options.sort(() => 0.5 - Math.random());

        optionsGrid.innerHTML = '';
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.addEventListener('click', () => handleSelectOption(btn, opt, q.answer, q.explanation));
            optionsGrid.appendChild(btn);
        });
    }

    function handleSelectOption(selectedBtn, selectedOpt, correctOpt, explanation) {
        if (answered) return;
        answered = true;

        const allButtons = optionsGrid.querySelectorAll('.option-btn');
        allButtons.forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === correctOpt) {
                btn.classList.add('correct');
            }
        });

        if (selectedOpt === correctOpt) {
            score++;
            scoreCounter.textContent = `Score: ${score}`;
        } else {
            selectedBtn.classList.add('wrong');
        }

        if (explanation) {
            explanationText.textContent = explanation;
            explanationBox.style.display = 'block';
        }

        nextBtn.classList.remove('hidden');
    }

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex < activeQuestions.length) {
            renderQuestion();
        } else {
            showSummary();
        }
    });

    function showSummary() {
        quizScreen.classList.add('hidden');
        summaryScreen.classList.remove('hidden');

        const total = activeQuestions.length;
        const pct = Math.round((score / total) * 100);
        scoreCircle.textContent = `${pct}%`;
        summaryText.textContent = `You scored ${score} out of ${total} questions correctly!`;
    }

    restartBtn.addEventListener('click', () => {
        summaryScreen.classList.add('hidden');
        setupScreen.classList.remove('hidden');
    });
});
