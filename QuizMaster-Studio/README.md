# ⚡ QuizMaster Studio

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.10%2B-blue?style=for-the-badge&logo=python" alt="Python Version" />
  <img src="https://img.shields.io/badge/UI-CustomTkinter-00f2fe?style=for-the-badge" alt="CustomTkinter" />
  <img src="https://img.shields.io/badge/OS-Windows%20%7C%20macOS-informational?style=for-the-badge&logo=windows" alt="Platform" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/Database-SQLite%20(WAL)-orange?style=for-the-badge&logo=sqlite" alt="Database" />
</p>

> **QuizMaster Studio** is a standalone, modern desktop study portal and interactive exam suite. Designed with a curved **Floating Sidebar**, native **Windows 11 Mica / Acrylic Glassmorphism**, and an active recall engine powered by the **SM-2 Spaced Repetition Algorithm**.

---

## ✨ Features

- **📖 Practise Mode (Flashcards)**: Active recall flashcards with animated flip mechanics and SM-2 spaced repetition interval rating (`Again`, `Hard`, `Good`, `Easy`).
- **✏️ Fill Practise**: Interactive type-in answer practice mode with real-time feedback and hints.
- **🚀 Quiz Start (MCQ Exam)**: Timed or untimed multiple-choice exams featuring randomized distractors and question shuffling.
- **✍️ Fill the Quiz**: High-intensity recall exam requiring exact keyword inputs.
- **🏆 Full-Screen Performance Dashboard**: Comprehensive post-quiz analytics featuring custom dynamic canvas score rings, letter grades, time tracking, and missed-question reviews.
- **📚 Question Bank**: Built-in CRUD interface to search, filter, edit, delete, and add custom questions.
- **🎨 Glassmorphic Aesthetic**: Native Windows 11 Mica blur integration (`pywinstyles`), pill-shaped buttons, and glowing hover borders.
- **📦 Single-Click Installer**: Automated bootstrap tool installs dependencies, compiles the app, and launches it seamlessly.

---

## 🚀 Quick Start & Installation

### Option 1: Windows Single-Click Setup (Recommended)
Simply clone the repository and run:
```cmd
Setup_And_Run.exe
```
*(Or double-click `setup.bat`)*

This automated installer will:
1. Detect your Python environment.
2. Install all required dependencies from `requirements.txt`.
3. Compile `dist/QuizMasterStudio.exe`.
4. Launch the application immediately.

---

### Option 2: macOS / Linux (MacBook Pro)
1. **Open Terminal** in the project directory:
   ```bash
   cd QuizMaster-Studio
   ```
2. **Make the launch script executable & run**:
   ```bash
   chmod +x setup.sh
   ./setup.sh
   ```
   *Or launch directly via Python*:
   ```bash
   pip3 install -r requirements.txt
   python3 app.py
   ```

---

## 🎓 Integrated Question Bank & Curriculum

QuizMaster Studio comes pre-loaded with **311 categorized questions** for systematic revision:

| Category | Topics Covered | Total Questions |
| :--- | :--- | :--- |
| **🧪 Class 10th: Acids, Bases and Salts** | Indicators (Turmeric, Litmus, Phenolphthalein, Methyl orange, Olfactory), Metal & Carbonate reactions, Neutralisation, Oxides, pH scale, Acid rain, Tooth decay, Commercial salts (Brine, Bleaching powder, Baking soda, Washing soda, Plaster of Paris). | **124 Questions** |
| **🔬 Class 9th: Biology** | Cell microscopy (0.1 mm limit, 400X magnification), Selective permeability, Osmosis (hypotonic, hypertonic, plasmolysis), Organelles (ER, Golgi, Mitochondria, Plastids), Mitosis & Meiosis, Cell Theory. | **71 Questions** |
| **💻 Class 9th: Computer Science** | Touch typing ergonomics, Home row (`ASDF JKL;`), Guide keys (`F`, `J`, `5`), WPM/KPM/CPM metrics, Rapid Typing software, LibreOffice Writer (`.odt`), Mail Merge, IT/ITeS (BPO, BPM, KPO, GIC, Sourcing models). | **116 Questions** |

---

## 📁 Repository Structure

```
QuizMaster-Studio/
├── Setup_And_Run.exe          # Single-click Windows installer & launcher
├── setup.bat                  # Windows batch launcher fallback
├── setup.sh                   # macOS / Linux launch script
├── app.py                     # Main application entry point
├── build_exe.py               # Standalone PyInstaller executable builder
├── installer.py               # Automated installer logic
├── requirements.txt           # Project dependencies
├── README.md                  # Master documentation
└── src/
    ├── config.py              # Application configuration & constants
    ├── core/
    │   ├── database.py        # SQLite Database Manager & SM-2 Engine (311 questions)
    │   └── models.py          # Dataclasses (Question, QuizSession, QuizResult)
    ├── theme/
    │   ├── theme_manager.py   # Live theme switcher (Cyber Dark, Obsidian, Slate)
    │   └── themes.json        # Palette definitions
    └── ui/
        ├── main_window.py     # Main Window (Floating Sidebar + Windows Mica)
        ├── components/
        │   ├── card.py        # ModernCard (glow borders) & StatBadge
        │   ├── pill_button.py # Rounded pill buttons
        │   └── score_ring.py  # Circular canvas progress ring
        └── views/
            ├── practice_view.py       # Flashcards active recall view
            ├── fill_practice_view.py  # Fill-in-the-blank practice view
            ├── quiz_start_view.py     # MCQ exam launcher & engine
            ├── fill_quiz_view.py      # Fill-in exam launcher & engine
            ├── quiz_summary_view.py   # Full-screen performance summary
            └── question_bank_view.py  # Question management CRUD
```

---

## ⌨️ Keyboard Shortcuts & Navigation

| Screen | Shortcut / Key | Action |
| :--- | :--- | :--- |
| **Practise (Flashcards)** | `Spacebar` / `Click` | Flip flashcard between Prompt & Answer |
| **Practise (Flashcards)** | `1`, `2`, `3`, `4` | Rate recall (Again, Hard, Good, Easy) |
| **MCQ Quiz** | `Enter` | Submit selected option & advance to next question |
| **Fill Quiz** | `Enter` | Submit typed answer & advance to next question |
| **General** | `Esc` | Return to Dashboard / Setup Screen |

---

## 🛠️ Building Standalone Binaries Manually

To manually build the standalone Windows `.exe`:
```bash
python build_exe.py
```
The compiled binary will be generated at `dist/QuizMasterStudio.exe`.

---

## 📄 License

This project is distributed under the **MIT License**. Feel free to modify, distribute, and integrate it into your own learning workflows.

