import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Extract the head section
head_match = re.search(r'(<head>.*?</head>)', html, re.DOTALL)
head_content = head_match.group(1) if head_match else '<head></head>'

new_body = '''<body>
    <div class="app-container">
        <header>
            <h1>📚 QuizMaster Mobile</h1>
            <span class="badge" id="categoryBadge">Quiz Mode</span>
        </header>

        <!-- Mode Navigation Tabs -->
        <nav class="nav-tabs" aria-label="Study Modes">
            <button class="nav-tab active" id="tabQuizBtn" type="button">📝 Practice Quiz</button>
            <button class="nav-tab" id="tabFlashcardsBtn" type="button">🗂️ Flashcards (50-60%)</button>
        </nav>

        <!-- ============================================== -->
        <!-- VIEW 1: PRACTICE QUIZ SECTION                  -->
        <!-- ============================================== -->
        <main id="quizSectionView">
            
            <!-- Setup Screen -->
            <div id="setupScreen" class="card controls-card">
                <div>
                    <label for="categorySelect">Select Subject / Category</label>
                    <select id="categorySelect" style="margin-top: 6px;"></select>
                </div>
                <div>
                    <label for="questionCountSelect">Number of Questions</label>
                    <select id="questionCountSelect" style="margin-top: 6px;">
                        <option value="10">10 Questions</option>
                        <option value="20" selected>20 Questions</option>
                        <option value="50">50 Questions</option>
                        <option value="100">100 Questions</option>
                        <option value="all">All Available Questions</option>
                    </select>
                </div>
                <button id="startQuizBtn" class="primary-btn">▶ Start Quiz</button>
                <div style="margin-top: 15px; text-align: center;">
                    <button id="openFlashcardsFromQuizBtn" class="secondary-btn" style="width: 100%;">🗂️ Study Flashcards Instead</button>
                </div>
            </div>

            <!-- Quiz Play Screen -->
            <div id="quizScreen" class="hidden">
                <div class="progress-container">
                    <div class="progress-bar" id="progressBar"></div>
                </div>
                
                <div class="header-stats">
                    <span id="questionCounter">Question 1/20</span>
                    <span id="scoreCounter" class="score-text">Score: 0</span>
                </div>

                <div class="card" style="margin-bottom: 20px;">
                    <div id="sectionBadge" class="badge" style="margin-bottom: 12px; display: inline-block;">🏷️ General</div>
                    <div id="questionText" class="question-prompt"></div>
                </div>

                <div id="optionsGrid" class="options-container">
                    <!-- Options populated by JS -->
                </div>

                <div id="explanationBox" class="explanation-box" style="display: none;">
                    <strong>💡 Explanation:</strong> <span id="explanationText"></span>
                </div>

                <button id="nextBtn" class="primary-btn hidden" style="margin-top: 20px;">Next Question ▶</button>
            </div>

            <!-- Summary Screen -->
            <div id="summaryScreen" class="card hidden" style="text-align: center; padding: 40px 20px;">
                <div class="score-circle" id="scoreCircle">0%</div>
                <h2>Quiz Complete!</h2>
                <p id="summaryText" style="color: var(--text-secondary); margin: 15px 0 30px;">You scored 0 out of 0 questions correctly.</p>
                <button id="restartBtn" class="primary-btn" style="margin-bottom: 15px;">↺ Take Another Quiz</button>
                <button id="quizSummaryToFlashcardsBtn" class="secondary-btn" style="width: 100%;">🗂️ Review with Flashcards</button>
            </div>
        </main>

        <!-- ============================================== -->
        <!-- VIEW 2: FLASHCARDS SECTION                     -->
        <!-- ============================================== -->
        <main id="flashcardsSectionView" class="hidden">
            
            <!-- Setup Screen -->
            <div id="fcSetupScreen" class="card controls-card">
                <h3>🗂️ Flashcard Study Mode</h3>
                <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 15px;">
                    Review a random 50%–60% sample of questions from each category as study cards.
                </p>

                <div>
                    <label for="fcCategorySelect">Select Section / Subject</label>
                    <select id="fcCategorySelect" style="margin-top: 6px;"></select>
                </div>
                
                <div id="fcReshuffleNotice" class="hidden" style="color: var(--success); font-weight: 500; font-size: 0.9rem; text-align: center; margin-bottom: 15px;"></div>

                <button id="startFlashcardsBtn" class="primary-btn">▶ Start Studying Deck</button>
                <button id="reshuffleSampleBtn" class="secondary-btn" style="width: 100%; margin-top: 12px;">🎲 Reshuffle 50% Sample</button>
                
                <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 20px 0;">
                
                <button id="fcSwitchToQuizBtn" class="secondary-btn" style="width: 100%;">📝 Take a Quiz Instead</button>
            </div>

            <!-- Study Play Screen -->
            <div id="fcStudyScreen" class="hidden">
                <div class="progress-container">
                    <div class="progress-bar" id="fcProgressBar" style="background: var(--accent-color);"></div>
                </div>
                
                <div class="header-stats" style="margin-bottom: 10px;">
                    <span id="fcCounter">Card 1 / 10</span>
                    <button id="fcBackToSetupBtn" class="secondary-btn" style="padding: 6px 12px; font-size: 0.85rem; width: auto; margin: 0;">Back to Deck</button>
                </div>

                <div class="card flashcard-container" id="flashcardWrapper">
                    <div class="flashcard" id="flashcardCard">
                        <!-- Front Face -->
                        <div class="flashcard-face flashcard-front">
                            <div id="fcSectionBadge" class="badge" style="margin-bottom: 15px;">🏷️ General</div>
                            <div id="fcPromptText" class="question-prompt" style="flex-grow: 1; display: flex; align-items: center; justify-content: center; text-align: center;"></div>
                            
                            <!-- Optional Hint -->
                            <div style="margin-top: 15px;">
                                <button id="fcHintToggleBtn" class="secondary-btn hidden" style="padding: 6px 12px; font-size: 0.85rem; width: auto;">💡 Show Hint</button>
                                <div id="fcHintBox" class="explanation-box hidden" style="margin-top: 10px; font-size: 0.9rem; text-align: left;"></div>
                            </div>

                            <p class="flip-hint">Tap card or press Space to flip ↺</p>
                        </div>
                        
                        <!-- Back Face -->
                        <div class="flashcard-face flashcard-back">
                            <div class="badge" style="background: var(--success); color: white; border: none; margin-bottom: 15px;">Answer</div>
                            <div id="fcAnswerText" style="font-size: 1.3rem; font-weight: 700; color: var(--text-primary); text-align: center; margin-bottom: 20px;"></div>
                            <div id="fcExplanationText" class="explanation-box" style="display: block; text-align: left; font-size: 0.95rem; width: 100%;"></div>
                        </div>
                    </div>
                </div>

                <!-- Flashcard Controls -->
                <div style="display: flex; gap: 10px; margin-top: 20px;">
                    <button id="fcPrevBtn" class="secondary-btn" style="flex: 1;" disabled>◀ Prev</button>
                    <button id="fcFlipBtn" class="primary-btn" style="flex: 1.5; background: var(--accent-color);">↺ Flip</button>
                    <button id="fcNextBtn" class="primary-btn" style="flex: 1;">Next ▶</button>
                </div>
                <div style="text-align: center; margin-top: 15px;">
                    <button id="fcShuffleCurrentBtn" class="secondary-btn" style="width: auto; padding: 8px 20px; font-size: 0.9rem;">🔀 Shuffle Current Deck</button>
                </div>
            </div>

            <!-- Flashcard Completion Screen -->
            <div id="fcCompleteScreen" class="card hidden" style="text-align: center; padding: 40px 20px;">
                <div class="score-circle" id="fcCompleteCircle" style="border-color: var(--accent-color); color: var(--accent-color);">100%</div>
                <h2>Deck Complete!</h2>
                <p id="fcCompleteText" style="color: var(--text-secondary); margin: 15px 0 30px;">You reviewed all cards in this section.</p>
                <button id="fcRestartSectionBtn" class="primary-btn" style="margin-bottom: 15px; background: var(--accent-color);">↺ Study Deck Again</button>
                <button id="fcPickAnotherBtn" class="secondary-btn" style="width: 100%;">🗂️ Pick Another Deck</button>
            </div>

        </main>
    </div>

    <!-- Load data first, then app logic -->
    <script src="questions.js"></script>
    <script src="app.js"></script>
</body>'''

new_html = f"<!DOCTYPE html>\n<html lang=\"en\">\n{head_content}\n{new_body}\n</html>"

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

print("index.html rewritten successfully.")
