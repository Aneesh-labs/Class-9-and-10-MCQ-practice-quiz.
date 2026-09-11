// ⚡ Mobile Quiz Application Logic
document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const setupScreen = document.getElementById("setupScreen");
    const quizScreen = document.getElementById("quizScreen");
    const summaryScreen = document.getElementById("summaryScreen");
    const categorySelect = document.getElementById("categorySelect");
    const questionCountSelect = document.getElementById("questionCountSelect");
    const startQuizBtn = document.getElementById("startQuizBtn");
    const categoryBadge = document.getElementById("categoryBadge");

    const progressBar = document.getElementById("progressBar");
    const questionCounter = document.getElementById("questionCounter");
    const scoreCounter = document.getElementById("scoreCounter");
    const questionText = document.getElementById("questionText");
    const optionsGrid = document.getElementById("optionsGrid");
    const explanationBox = document.getElementById("explanationBox");
    const explanationText = document.getElementById("explanationText");
    const nextBtn = document.getElementById("nextBtn");

    const scoreCircle = document.getElementById("scoreCircle");
    const summaryText = document.getElementById("summaryText");
    const restartBtn = document.getElementById("restartBtn");

    // Quiz State
    let activeQuestions = [];
    let currentIndex = 0;
    let score = 0;
    let answered = false;

    // Populate Categories (Filter for valid MCQs only)
    const validMCQs = QUESTIONS.filter(q => Array.isArray(q.options) && q.options.length >= 2);
    const categories = ["All Categories", ...new Set(validMCQs.map(q => q.category).filter(Boolean))];
    categorySelect.innerHTML = categories.map(cat => `<option value="${cat}">${cat}</option>`).join("");

    // Start Quiz Handler
    startQuizBtn.addEventListener("click", () => {
        const selectedCat = categorySelect.value;
        let filtered = selectedCat === "All Categories"
            ? [...validMCQs]
            : validMCQs.filter(q => q.category === selectedCat);

        // Shuffle questions
        filtered.sort(() => 0.5 - Math.random());

        const limit = questionCountSelect.value === "all" ? filtered.length : parseInt(questionCountSelect.value, 10);
        activeQuestions = filtered.slice(0, Math.min(limit, filtered.length));

        if (activeQuestions.length === 0) {
            alert("No questions found for this category!");
            return;
        }

        currentIndex = 0;
        score = 0;
        categoryBadge.textContent = selectedCat.split(":")[0] || selectedCat;

        setupScreen.classList.add("hidden");
        summaryScreen.classList.add("hidden");
        quizScreen.classList.remove("hidden");

        renderQuestion();
    });

    // Render Current Question
    function renderQuestion() {
        answered = false;
        explanationBox.style.display = "none";
        nextBtn.classList.add("hidden");

        const q = activeQuestions[currentIndex];

        // Progress & Headers
        const total = activeQuestions.length;
        const pct = ((currentIndex) / total) * 100;
        progressBar.style.width = `${pct}%`;
        questionCounter.textContent = `Question ${currentIndex + 1}/${total}`;
        scoreCounter.textContent = `Score: ${score}`;

        questionText.textContent = q.prompt;

        // Shuffle Options
        const options = [...q.options];
        options.sort(() => 0.5 - Math.random());

        optionsGrid.innerHTML = "";
        options.forEach(opt => {
            const btn = document.createElement("button");
            btn.className = "option-btn";
            btn.textContent = opt;
            btn.addEventListener("click", () => handleSelectOption(btn, opt, q.answer, q.explanation));
            optionsGrid.appendChild(btn);
        });
    }

    // Handle Option Click
    function handleSelectOption(selectedBtn, selectedOpt, correctOpt, explanation) {
        if (answered) return;
        answered = true;

        const allButtons = optionsGrid.querySelectorAll(".option-btn");
        allButtons.forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === correctOpt) {
                btn.classList.add("correct");
            }
        });

        if (selectedOpt === correctOpt) {
            score++;
            scoreCounter.textContent = `Score: ${score}`;
        } else {
            selectedBtn.classList.add("wrong");
        }

        if (explanation) {
            explanationText.textContent = explanation;
            explanationBox.style.display = "block";
        }

        nextBtn.classList.remove("hidden");
    }

    // Next Button Handler
    nextBtn.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex < activeQuestions.length) {
            renderQuestion();
        } else {
            showSummary();
        }
    });

    // Show Summary Screen
    function showSummary() {
        quizScreen.classList.add("hidden");
        summaryScreen.classList.remove("hidden");

        const total = activeQuestions.length;
        const pct = Math.round((score / total) * 100);
        scoreCircle.textContent = `${pct}%`;
        summaryText.textContent = `You scored ${score} out of ${total} questions correctly!`;
    }

    // Restart Quiz Handler
    restartBtn.addEventListener("click", () => {
        summaryScreen.classList.add("hidden");
        setupScreen.classList.remove("hidden");
    });
});

