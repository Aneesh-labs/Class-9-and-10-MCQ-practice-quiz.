const QUESTIONS = [
  {
    "prompt": "What is touch typing?",
    "answer": "The practice of typing text without looking at the keyboard",
    "question_type": "both",
    "options": [
      "Typing using only two index fingers while looking at the screen",
      "The practice of typing text without looking at the keyboard",
      "Typing using speech-to-text software",
      "Pressing keys with maximum force to avoid errors"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Typing without looking down.",
    "explanation": "Touch typing is the skill of typing text accurately and swiftly without looking down at the keyboard keys.",
    "difficulty": 1
  },
  {
    "prompt": "Which of the following is a primary benefit of touch typing?",
    "answer": "Increased typing speed and reduced typing errors",
    "question_type": "both",
    "options": [
      "Increased typing speed and reduced typing errors",
      "Slower keystroke rate",
      "Elimination of the need for a keyboard",
      "Automatic correction of all grammar mistakes"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Speed and accuracy.",
    "explanation": "Touch typing builds muscle memory, allowing higher typing speed, greater accuracy, and reduced fatigue.",
    "difficulty": 1
  },
  {
    "prompt": "What are the Home row keys on a computer keyboard?",
    "answer": "The central row of keys where your fingers rest when not typing",
    "question_type": "both",
    "options": [
      "The top row containing numbers 1 to 0",
      "The central row of keys where your fingers rest when not typing",
      "The bottom row containing the spacebar",
      "The row containing function keys F1 to F12"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "The base resting row for fingers.",
    "explanation": "The Home row is the middle row on a standard keyboard where fingers rest in their default starting positions.",
    "difficulty": 1
  },
  {
    "prompt": "Which keys make up the Home keys on a standard QWERTY keyboard?",
    "answer": "A, S, D, F, J, K, L, ;",
    "question_type": "both",
    "options": [
      "Q, W, E, R, T, Y, U, I",
      "Z, X, C, V, B, N, M, ,",
      "A, S, D, F, J, K, L, ;",
      "1, 2, 3, 4, 7, 8, 9, 0"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "ASDF and JKL;",
    "explanation": "On a QWERTY keyboard, the left hand rests on A, S, D, F and the right hand rests on J, K, L, ;.",
    "difficulty": 1
  },
  {
    "prompt": "Which keys are designated as guide keys on a standard QWERTY keyboard?",
    "answer": "F and J",
    "question_type": "both",
    "options": [
      "A and ;",
      "G and H",
      "F and J",
      "C and M"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Index finger keys with bumps.",
    "explanation": "F and J are guide keys that have physical raised ridges/bumps to help typists place their index fingers correctly without looking.",
    "difficulty": 1
  },
  {
    "prompt": "Why are the F and J keys called guide keys?",
    "answer": "They have small, physical raised lines, ridges, or bumps on their surfaces",
    "question_type": "both",
    "options": [
      "They light up when the computer starts",
      "They have small, physical raised lines, ridges, or bumps on their surfaces",
      "They are larger than all other keys",
      "They automatically capitalize letters"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Tactile bumps/ridges.",
    "explanation": "Raised tactile markers on F and J guide the index fingers to the home position purely by touch.",
    "difficulty": 1
  },
  {
    "prompt": "Which digit serves as the guide key on the numeric keypad?",
    "answer": "5",
    "question_type": "both",
    "options": [
      "0",
      "1",
      "4",
      "5"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "The central number on the 3x3 grid.",
    "explanation": "On the numeric keypad, key '5' has a raised bump or dot to serve as the guide key for the middle finger.",
    "difficulty": 1
  },
  {
    "prompt": "Which finger or digit should be used to press the spacebar during touch typing?",
    "answer": "Right or Left thumb",
    "question_type": "both",
    "options": [
      "Left index finger only",
      "Right or Left thumb",
      "Little finger",
      "Middle finger"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Thumb.",
    "explanation": "The thumbs rest naturally over the spacebar and are used exclusively to press it.",
    "difficulty": 1
  },
  {
    "prompt": "What does the acronym WPM stand for in typing?",
    "answer": "Words per minute",
    "question_type": "both",
    "options": [
      "Words per minute",
      "Words per mark",
      "Whole print mode",
      "Working pace measurement"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Words / Minute.",
    "explanation": "WPM (Words Per Minute) is the standard metric used to calculate typing speed, where 1 word is typically counted as 5 characters.",
    "difficulty": 1
  },
  {
    "prompt": "What does the acronym KPM stand for?",
    "answer": "Keystrokes per minute",
    "question_type": "both",
    "options": [
      "Keyboard pace metric",
      "Keypad per minute",
      "Keystrokes per minute",
      "Known prints measured"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Keystrokes / Minute.",
    "explanation": "KPM stands for Keystrokes Per Minute, measuring total key presses made per minute.",
    "difficulty": 1
  },
  {
    "prompt": "What is the correct formula to calculate typing accuracy?",
    "answer": "(Number of Correct characters typed / Total number of characters typed) * 100",
    "question_type": "both",
    "options": [
      "(Total number of characters typed / Number of Correct characters typed) * 100",
      "(Number of Correct characters typed / Total number of characters typed) * 100",
      "(Number of Incorrect characters / Words per minute) * 100",
      "(Total keystrokes * Time in seconds) / 100"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "(Correct / Total) * 100",
    "explanation": "Typing accuracy is the percentage of correctly typed characters divided by total characters typed.",
    "difficulty": 1
  },
  {
    "prompt": "While sitting at a computer, at what angle should your elbows ideally be bent?",
    "answer": "90 to 100 degrees",
    "question_type": "both",
    "options": [
      "45 to 60 degrees",
      "90 to 100 degrees",
      "120 to 150 degrees",
      "180 degrees straight"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Right angle (approx 90°).",
    "explanation": "Ergonomics recommend keeping elbows bent at approximately 90 to 100 degrees with forearms parallel to the floor.",
    "difficulty": 1
  },
  {
    "prompt": "What is the recommended viewing distance from a standard 17-inch computer screen?",
    "answer": "45 to 70 cm",
    "question_type": "both",
    "options": [
      "10 to 20 cm",
      "25 to 35 cm",
      "45 to 70 cm",
      "90 to 120 cm"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Arm's length (45-70 cm).",
    "explanation": "The optimal ergonomic viewing distance from monitor to eyes is 45 to 70 cm (about an arm's length).",
    "difficulty": 1
  },
  {
    "prompt": "Which of the following is a correct wrist position while typing?",
    "answer": "Kept straight and level with the keyboard, hovering gently",
    "question_type": "both",
    "options": [
      "Bent sharply downwards against the table",
      "Resting heavily on a wrist-rest pad",
      "Bent upwards toward the screen",
      "Kept straight and level with the keyboard, hovering gently"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Straight and neutral.",
    "explanation": "Wrists should be kept straight, neutral, and relaxed, hovering above the keyboard without bending sharply.",
    "difficulty": 1
  },
  {
    "prompt": "Which of the following is an example of a toggle key on the keyboard?",
    "answer": "Caps Lock",
    "question_type": "both",
    "options": [
      "Shift",
      "Caps Lock",
      "Ctrl",
      "Alt"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Switches on and off.",
    "explanation": "Toggle keys alternate between two states (on/off) when pressed, such as Caps Lock, Num Lock, and Scroll Lock.",
    "difficulty": 1
  },
  {
    "prompt": "Which course is NOT part of the standard courses available in Rapid Typing Software?",
    "answer": "Professional Expert",
    "question_type": "both",
    "options": [
      "Introduction",
      "Beginner",
      "Professional Expert",
      "Advanced"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Not an included course tier.",
    "explanation": "Rapid Typing courses standardly include Introduction, Beginner, Experienced, Advanced, and Testing (not 'Professional Expert').",
    "difficulty": 1
  },
  {
    "prompt": "Which shortcut key opens the Student Statistics window in Rapid Typing Software?",
    "answer": "Ctrl + 2",
    "question_type": "both",
    "options": [
      "Ctrl + 1",
      "Ctrl + 2",
      "Ctrl + 3",
      "Ctrl + O"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Ctrl + 2",
    "explanation": "In Rapid Typing, Ctrl + 1 switches to Current Lesson, Ctrl + 2 switches to Student Statistics, and Ctrl + 3 switches to Lesson Editor.",
    "difficulty": 1
  },
  {
    "prompt": "In Rapid Typing Software, which key is used to Pause the current lesson?",
    "answer": "F5",
    "question_type": "both",
    "options": [
      "F5",
      "F6",
      "F7",
      "F8"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "F5",
    "explanation": "F5 is used to Pause/Resume a lesson, while F8 restarts the active lesson.",
    "difficulty": 1
  },
  {
    "prompt": "Why is monitoring your progress important in Rapid Typing?",
    "answer": "It gives an overall picture of your learning, showing your strengths and weaknesses",
    "question_type": "both",
    "options": [
      "It changes the keyboard layout automatically",
      "It gives an overall picture of your learning, showing your strengths and weaknesses",
      "It permanently deletes missed lessons",
      "It prevents the computer from going into sleep mode"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Identifies strengths and areas for improvement.",
    "explanation": "Statistics track speed, accuracy, and keystroke errors to target specific keys needing improvement.",
    "difficulty": 1
  },
  {
    "prompt": "What is the primary function of the Lesson Editor in Rapid Typing?",
    "answer": "To create custom typing courses, modify lessons, and import text files",
    "question_type": "both",
    "options": [
      "To monitor CPU usage and battery health",
      "To create custom typing courses, modify lessons, and import text files",
      "To format documents for final printing",
      "To play audio files during typing tests"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Customizes courses and lessons.",
    "explanation": "Lesson Editor allows teachers and students to customize course content, add lessons, and import custom text.",
    "difficulty": 1
  },
  {
    "prompt": "Which file formats can be imported into the Lesson Editor to practice custom text?",
    "answer": ".txt or .rtf",
    "question_type": "both",
    "options": [
      ".exe or .bat",
      ".txt or .rtf",
      ".mp3 or .wav",
      ".png or .jpg"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Text document formats (.txt, .rtf).",
    "explanation": "Text files (.txt) and Rich Text Format (.rtf) files can be imported directly into the Lesson Editor.",
    "difficulty": 1
  },
  {
    "prompt": "Which feature in Rapid Typing displays the results of a lesson that has already been completed?",
    "answer": "Student Statistics",
    "question_type": "both",
    "options": [
      "Lesson Editor",
      "Virtual Keyboard Preview",
      "Student Statistics",
      "Options Menu"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Statistics window.",
    "explanation": "Student Statistics displays detailed charts and metrics (WPM, accuracy, errors) for completed lessons.",
    "difficulty": 1
  },
  {
    "prompt": "What is the standard default file extension for a LibreOffice Writer document?",
    "answer": ".odt",
    "question_type": "both",
    "options": [
      ".docx",
      ".odt",
      ".txt",
      ".rtf"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "OpenDocument Text (.odt)",
    "explanation": "LibreOffice Writer uses OpenDocument Text (.odt) as its native default document file format.",
    "difficulty": 1
  },
  {
    "prompt": "What does the acronym WYSIWYG stand for?",
    "answer": "What You See Is What You Get",
    "question_type": "both",
    "options": [
      "What You See Is What You Get",
      "What You Send Is What You Gather",
      "Where You Start Is Where You Go",
      "When You Save It Will Generate"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "What You See Is...",
    "explanation": "WYSIWYG describes word processors where the on-screen display precisely matches the printed output.",
    "difficulty": 1
  },
  {
    "prompt": "Which bar displays information such as the current page number, line number, and column number?",
    "answer": "Status bar",
    "question_type": "both",
    "options": [
      "Title bar",
      "Formatting toolbar",
      "Ruler bar",
      "Status bar"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Bottom bar showing document status.",
    "explanation": "The Status bar is located at the bottom of the window and provides page count, word count, zoom level, and language.",
    "difficulty": 1
  },
  {
    "prompt": "What is the shortcut key combination to view or toggle non-printing characters in LibreOffice Writer?",
    "answer": "Ctrl + F10",
    "question_type": "both",
    "options": [
      "Ctrl + F12",
      "Ctrl + Enter",
      "Ctrl + F10",
      "Alt + F8"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Ctrl + F10",
    "explanation": "Ctrl + F10 toggles formatting marks like paragraph breaks (¶), tab spaces (→), and spaces (·).",
    "difficulty": 1
  },
  {
    "prompt": "Which feature automatically shifts a word to the beginning of the next line when it does not fit on the current line?",
    "answer": "Word-Wrap",
    "question_type": "both",
    "options": [
      "Text Alignment",
      "Word-Wrap",
      "AutoText",
      "Page Break"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Word wrapping.",
    "explanation": "Word-wrap automatically moves words that exceed the right margin onto the next line without pressing Enter.",
    "difficulty": 1
  },
  {
    "prompt": "What type of indent occurs when the text of subsequent lines is indented farther inward than the first line of the paragraph?",
    "answer": "Hanging indent",
    "question_type": "both",
    "options": [
      "Positive indent",
      "Negative indent",
      "First line indent",
      "Hanging indent"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Hanging indent.",
    "explanation": "In a hanging indent, the first line starts at the margin, while all following lines in the paragraph are indented inward.",
    "difficulty": 1
  },
  {
    "prompt": "Which shortcut key is used to clear direct formatting (manual formatting) from selected text?",
    "answer": "Ctrl + M",
    "question_type": "both",
    "options": [
      "Ctrl + M",
      "Ctrl + D",
      "Ctrl + Y",
      "Ctrl + Shift + F8"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Ctrl + M",
    "explanation": "Ctrl + M resets selected text to its default paragraph style formatting.",
    "difficulty": 1
  },
  {
    "prompt": "Which keyboard shortcut activates 'Adding selection' mode to select non-consecutive text items?",
    "answer": "Shift + F8",
    "question_type": "both",
    "options": [
      "Alt + Shift + F8",
      "Shift + F8",
      "Ctrl + Shift + F10",
      "Ctrl + F8"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Shift + F8",
    "explanation": "Shift + F8 enables multi-selection / adding selection mode to highlight non-contiguous blocks of text.",
    "difficulty": 1
  },
  {
    "prompt": "What is the shortcut key used to open the Find and Replace dialog box?",
    "answer": "Ctrl + H",
    "question_type": "both",
    "options": [
      "Ctrl + F",
      "Ctrl + R",
      "Ctrl + H",
      "Ctrl + G"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Ctrl + H",
    "explanation": "In LibreOffice Writer, Ctrl + F opens Find, while Ctrl + H opens Find and Replace.",
    "difficulty": 1
  },
  {
    "prompt": "Which key starts the manual Spelling dialog box in LibreOffice Writer?",
    "answer": "F7",
    "question_type": "both",
    "options": [
      "F3",
      "F5",
      "F7",
      "F11"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "F7",
    "explanation": "F7 triggers the full Spelling and Grammar check dialog.",
    "difficulty": 1
  },
  {
    "prompt": "What is the purpose of the Thesaurus tool in LibreOffice Writer?",
    "answer": "Finding synonyms for selected words",
    "question_type": "both",
    "options": [
      "Checking document word count",
      "Finding synonyms for selected words",
      "Inserting mathematical equations",
      "Translating text into other languages"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Dictionary of synonyms.",
    "explanation": "The Thesaurus tool (Ctrl + F7) suggests synonyms and antonyms for words in your document.",
    "difficulty": 1
  },
  {
    "prompt": "Which keyboard shortcut inserts a manual Page Break?",
    "answer": "Ctrl + Enter",
    "question_type": "both",
    "options": [
      "Shift + Enter",
      "Ctrl + Enter",
      "Alt + Enter",
      "Ctrl + Shift + Enter"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Ctrl + Enter",
    "explanation": "Ctrl + Enter forces the text following the cursor to jump to the top of the next page.",
    "difficulty": 1
  },
  {
    "prompt": "What is the correct menu path to insert a page number into a document?",
    "answer": "Insert -> Field -> Page Number",
    "question_type": "both",
    "options": [
      "Format -> Page Style -> Page Number",
      "Tools -> Numbering -> Page Number",
      "Insert -> Field -> Page Number",
      "View -> Field Names -> Page Number"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Insert -> Field -> Page Number",
    "explanation": "In LibreOffice Writer, page numbers are dynamic fields added via Insert -> Field -> Page Number.",
    "difficulty": 1
  },
  {
    "prompt": "What are characters or symbols not found on a standard keyboard called?",
    "answer": "Special characters",
    "question_type": "both",
    "options": [
      "Toggle keys",
      "Guided keys",
      "Non-printing characters",
      "Special characters"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Special characters.",
    "explanation": "Special characters include symbols like ©, ®, π, accented letters, and mathematical operators.",
    "difficulty": 1
  },
  {
    "prompt": "What is the rectangular area formed by the intersection of a row and a column in a table called?",
    "answer": "Cell",
    "question_type": "both",
    "options": [
      "Border",
      "Cell",
      "Margin",
      "Tab stop"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Cell.",
    "explanation": "A cell is the fundamental box in a table where rows and columns intersect.",
    "difficulty": 1
  },
  {
    "prompt": "What is the keyboard shortcut to insert a table into a document?",
    "answer": "Ctrl + F12",
    "question_type": "both",
    "options": [
      "Ctrl + F12",
      "Alt + F12",
      "Ctrl + T",
      "Shift + F12"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Ctrl + F12",
    "explanation": "In LibreOffice Writer, Ctrl + F12 opens the Insert Table dialog box.",
    "difficulty": 1
  },
  {
    "prompt": "Dividing a single table cell into two or more distinct cells is known as what?",
    "answer": "Splitting Cells",
    "question_type": "both",
    "options": [
      "Merging Cells",
      "Wrapping Cells",
      "Splitting Cells",
      "Padding Cells"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Splitting.",
    "explanation": "Splitting cells divides one cell horizontally or vertically into multiple individual cells.",
    "difficulty": 1
  },
  {
    "prompt": "What is the shortcut key used to insert an AutoText entry?",
    "answer": "F3",
    "question_type": "both",
    "options": [
      "F2",
      "F3",
      "F5",
      "F8"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "F3",
    "explanation": "Type the AutoText shortcut code and press F3 to expand it into full formatted text.",
    "difficulty": 1
  },
  {
    "prompt": "Under which menu are the Spelling, Language, and AutoCorrect features located?",
    "answer": "Tools",
    "question_type": "both",
    "options": [
      "Edit",
      "Tools",
      "Format",
      "Insert"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Tools menu.",
    "explanation": "The Tools menu contains language utilities including Spelling, Language selection, and AutoCorrect options.",
    "difficulty": 1
  },
  {
    "prompt": "What is the file or database containing recipient information merged into a document called?",
    "answer": "Data source",
    "question_type": "both",
    "options": [
      "Main document",
      "Data source",
      "Master template",
      "Output draft"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Data source.",
    "explanation": "In Mail Merge, the data source is the spreadsheet, database, or address book holding recipient details.",
    "difficulty": 1
  },
  {
    "prompt": "What is the placeholder for individual recipient information in the main document called?",
    "answer": "Merge-field",
    "question_type": "both",
    "options": [
      "Merge-field",
      "Macro block",
      "Non-printing mark",
      "Anchor tag"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Merge-field.",
    "explanation": "Merge fields are dynamic placeholders (e.g. <First_Name>) in the main document replaced during merge.",
    "difficulty": 1
  },
  {
    "prompt": "Which menu contains the Mail Merge Wizard tool in LibreOffice Writer?",
    "answer": "Tools",
    "question_type": "both",
    "options": [
      "File",
      "Insert",
      "Tools",
      "Format"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Tools menu.",
    "explanation": "Mail Merge Wizard is located under Tools -> Mail Merge Wizard.",
    "difficulty": 1
  },
  {
    "prompt": "What does the acronym IT stand for?",
    "answer": "Information Technology",
    "question_type": "both",
    "options": [
      "Integrated Technology",
      "Information Technology",
      "Internet Telecommunications",
      "Information Transmission"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Information Technology.",
    "explanation": "IT encompasses the creation, management, processing, storage, and exchange of electronic information.",
    "difficulty": 1
  },
  {
    "prompt": "When information technology and its tools are used to enhance the efficiency of an organization's regular operations, it is known as:",
    "answer": "Information Technology enabled Services (ITeS)",
    "question_type": "both",
    "options": [
      "Information Technology enabled Services (ITeS)",
      "Internet Technical Services (ITS)",
      "Integrated Terminal Systems (ITS)",
      "Internal Tech Solutions (ITS)"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "IT enabled Services (ITeS).",
    "explanation": "ITeS refers to business processes and services delivered using information technology.",
    "difficulty": 1
  },
  {
    "prompt": "Which service involves converting voice-recorded medical reports dictated by healthcare professionals into written text?",
    "answer": "Medical Transcriptions",
    "question_type": "both",
    "options": [
      "GIS Mapping",
      "Medical Transcriptions",
      "Knowledge Archiving",
      "ERP Management"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Medical transcription.",
    "explanation": "Medical transcription converts doctors' voice recordings of medical histories and treatments into digital text records.",
    "difficulty": 1
  },
  {
    "prompt": "What is the business practice of hiring an outside party to perform services or create goods traditionally handled in-house?",
    "answer": "Outsourcing",
    "question_type": "both",
    "options": [
      "Archiving",
      "Telecommuting",
      "Outsourcing",
      "Downsizing"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Outsourcing.",
    "explanation": "Outsourcing delegating non-core or specific business activities to specialized third-party providers.",
    "difficulty": 1
  },
  {
    "prompt": "A company that outsources its business services to another service provider or vendor is called the:",
    "answer": "Contracting Company",
    "question_type": "both",
    "options": [
      "BPO Vendor",
      "Offshore Company",
      "Contracting Company",
      "Processing Agent"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Contracting Company.",
    "explanation": "The contracting company hires external vendors to handle specific operations.",
    "difficulty": 1
  },
  {
    "prompt": "How does Business Process Management (BPM) differ fundamentally from traditional BPO?",
    "answer": "BPM handles core, complex tasks like legal, medical, and workflow management",
    "question_type": "both",
    "options": [
      "BPM only deals with call logs and making customer calls",
      "BPM focuses entirely on manual paper filing",
      "BPM handles core, complex tasks like legal, medical, and workflow management",
      "BPM does not use any IT infrastructure"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Higher complexity and workflow management.",
    "explanation": "BPM involves advanced analytical, legal, and operational workflow optimization rather than routine voice tasks.",
    "difficulty": 1
  },
  {
    "prompt": "Which of the following is classified as a Back Office Service provided by a BPO?",
    "answer": "Billing and purchasing",
    "question_type": "both",
    "options": [
      "Technical customer support",
      "Telemarketing",
      "Direct product sales",
      "Billing and purchasing"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Non-client facing operations.",
    "explanation": "Back-office services include non-client-facing operations like accounting, billing, payroll, and data entry.",
    "difficulty": 1
  },
  {
    "prompt": "What is a BPO service provider called if it is located in a neighbouring country of the contracting company?",
    "answer": "Nearshore vendor",
    "question_type": "both",
    "options": [
      "Onshore vendor",
      "Offshore vendor",
      "Nearshore vendor",
      "Domestic vendor"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Nearshore.",
    "explanation": "Nearshore outsourcing contracts services to companies located in adjacent or nearby geographic countries.",
    "difficulty": 1
  },
  {
    "prompt": "If a US-based firm hires an Indian BPO firm to handle its operations, the Indian firm is an example of an:",
    "answer": "Offshore vendor",
    "question_type": "both",
    "options": [
      "Onshore vendor",
      "Offshore vendor",
      "In-house vendor",
      "Internal vendor"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Offshore vendor.",
    "explanation": "Offshoring refers to outsourcing business processes to overseas countries with different time zones and cost advantages.",
    "difficulty": 1
  },
  {
    "prompt": "What does the acronym KPO stand for?",
    "answer": "Knowledge Process Outsourcing",
    "question_type": "both",
    "options": [
      "Knowledge Process Outsourcing",
      "Key Performance Operation",
      "Keyboard Processing Output",
      "Knowledge Protocol Organization"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Knowledge Process Outsourcing.",
    "explanation": "KPO involves outsourcing knowledge-intensive business processes requiring advanced expertise and analysis.",
    "difficulty": 1
  },
  {
    "prompt": "What is the full form of GIC in the context of business services?",
    "answer": "Global In-house Centre",
    "question_type": "both",
    "options": [
      "General Information Centre",
      "Global In-house Centre",
      "Government Interface Channel",
      "Global Internet Connection"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Global In-house Centre.",
    "explanation": "GICs (Global In-house Centres) are offshore service delivery facilities owned and operated directly by the parent enterprise.",
    "difficulty": 1
  },
  {
    "prompt": "What does the diagnostic acronym MRI stand for in healthcare IT?",
    "answer": "Magnetic Resonance Imaging",
    "question_type": "both",
    "options": [
      "Medical Radiation Imaging",
      "Micro Resonance Instrument",
      "Magnetic Resonance Imaging",
      "Managed Radio Interface"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Magnetic Resonance Imaging.",
    "explanation": "MRI uses strong magnetic fields and radio waves to generate detailed cross-sectional images of the body.",
    "difficulty": 1
  },
  {
    "prompt": "What is the full form of CAD in engineering and computer applications?",
    "answer": "Computer Aided Design",
    "question_type": "both",
    "options": [
      "Centralized Automated Data",
      "Computer Aided Design",
      "Control Algorithm Device",
      "Calculation And Drafting"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Computer Aided Design.",
    "explanation": "CAD software is used by architects, engineers, and designers to create precise 2D drawings and 3D models.",
    "difficulty": 1
  },
  {
    "prompt": "What does the acronym CRM stand for in business and marketing?",
    "answer": "Customer Relationship Management",
    "question_type": "both",
    "options": [
      "Customer Relationship Management",
      "Centralized Resource Model",
      "Client Reporting Mechanism",
      "Consumer Routing Method"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Customer Relationship Management.",
    "explanation": "CRM systems manage customer interactions, leads, sales, and service across the customer lifecycle.",
    "difficulty": 1
  },
  {
    "prompt": "Which of the following is an integrated software system used by businesses to manage core day-to-day operational processes into one network?",
    "answer": "ERP (Enterprise Resource Planning)",
    "question_type": "both",
    "options": [
      "ERP (Enterprise Resource Planning)",
      "DTP (Desktop Publishing)",
      "GIS (Geographic Information System)",
      "ATM (Automated Teller Machine)"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Enterprise Resource Planning.",
    "explanation": "ERP software integrates supply chain, finance, HR, manufacturing, and commerce into a unified database.",
    "difficulty": 1
  },
  {
    "prompt": "What is a specially designed website that aggregates information from diverse sources in a uniform way called?",
    "answer": "Portal",
    "question_type": "both",
    "options": [
      "Data center",
      "Portal",
      "Transcriber",
      "Call log"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Portal.",
    "explanation": "A web portal provides a centralized point of access to aggregated news, email, services, and resources.",
    "difficulty": 1
  },
  {
    "prompt": "Which of the following represents a major factor behind the success of the BPO industry in India?",
    "answer": "Advanced technology and government support",
    "question_type": "both",
    "options": [
      "Lack of telecommunication infrastructure",
      "Exclusive reliance on manual processes",
      "Advanced technology and government support",
      "Restriction to domestic clients only"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Technology and government backing.",
    "explanation": "India's large English-speaking talent pool, advanced IT infrastructure, and favorable policies fueled BPO growth.",
    "difficulty": 1
  },
  {
    "prompt": "What diagnostic test record is represented by the medical abbreviation ECG?",
    "answer": "Electro Cardiogram",
    "question_type": "both",
    "options": [
      "Electro-Encephalography",
      "Electro Cardiogram",
      "External Cardiac Gauge",
      "Electronic Cellular Graph"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Electro Cardiogram (Heart).",
    "explanation": "An ECG (Electrocardiogram) records the electrical activity of the heart over time.",
    "difficulty": 1
  },
  {
    "prompt": "Computer systems used to analyze high-speed camera footage, interpret data, and perform pattern matching are widely applied in:",
    "answer": "Law enforcement",
    "question_type": "both",
    "options": [
      "Library barcode sorting",
      "Law enforcement",
      "Music composition",
      "Simple blood sugar testing"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Police and security.",
    "explanation": "Facial recognition, license plate scanning, and forensic image analysis are core IT tools in modern policing.",
    "difficulty": 1
  },
  {
    "prompt": "What is DigiLocker?",
    "answer": "A government mobile platform/app to store digital copies of official documents",
    "question_type": "both",
    "options": [
      "A physical bank vault for paper files",
      "A government mobile platform/app to store digital copies of official documents",
      "An offline software used strictly for accounting spreadsheets",
      "A paid proprietary antivirus tool"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Government digital document wallet.",
    "explanation": "DigiLocker is the Government of India's flagship initiative providing cloud storage for authentic electronic records.",
    "difficulty": 1
  },
  {
    "prompt": "What does the acronym DTP stand for in publishing and printing?",
    "answer": "Desktop Publishing",
    "question_type": "both",
    "options": [
      "Data Transmission Protocol",
      "Digital Text Processing",
      "Desktop Publishing",
      "Document Tracking Program"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Desktop Publishing.",
    "explanation": "DTP software (e.g., InDesign, Scribus) formats page layouts combining text and graphics for publications.",
    "difficulty": 1
  },
  {
    "prompt": "In sports, which of the following is an application of computer technology and IT?",
    "answer": "Decision review systems and fair judgment (such as 3rd umpire)",
    "question_type": "both",
    "options": [
      "Decision review systems and fair judgment (such as 3rd umpire)",
      "Manual ticket stamping at gates",
      "Stitching team jerseys",
      "Manufacturing standard cricket bats"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Decision review / 3rd umpire systems.",
    "explanation": "Hawk-Eye, UltraEdge, and ball-tracking video review systems provide objective refereeing and adjudication.",
    "difficulty": 1
  },
  {
    "prompt": "In Rapid Typing Software, which shortcut key is used to switch to the Lesson Editor window?",
    "answer": "Ctrl + 3",
    "question_type": "both",
    "options": [
      "Ctrl + 1",
      "Ctrl + 2",
      "Ctrl + 3",
      "Ctrl + 4"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Ctrl + 3",
    "explanation": "Ctrl + 3 opens the Lesson Editor to add, modify, or delete custom typing lessons.",
    "difficulty": 1
  },
  {
    "prompt": "What shortcut key is used to Restart the active lesson in Rapid Typing Software?",
    "answer": "F8",
    "question_type": "both",
    "options": [
      "F5",
      "F6",
      "F7",
      "F8"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "F8",
    "explanation": "F8 immediately restarts the current typing lesson from the beginning.",
    "difficulty": 1
  },
  {
    "prompt": "What is the full form of CPM in typing performance measurement?",
    "answer": "Characters per minute",
    "question_type": "both",
    "options": [
      "Clicks per minute",
      "Characters per minute",
      "Corrections per minute",
      "Codes processed monthly"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Characters per minute.",
    "explanation": "CPM measures the total number of characters (letters, numbers, spaces, symbols) typed per minute.",
    "difficulty": 1
  },
  {
    "prompt": "Which technology allows you to link or embed external objects like charts, equations, and shapes into a word processing document?",
    "answer": "OLE (Object Linking and Embedding)",
    "question_type": "both",
    "options": [
      "OLE (Object Linking and Embedding)",
      "GUI (Graphical User Interface)",
      "BPO (Business Process Outsourcing)",
      "CAD (Computer Aided Design)"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Object Linking and Embedding (OLE).",
    "explanation": "OLE allows embedding dynamic objects created in other applications directly into your document.",
    "difficulty": 1
  },
  {
    "prompt": "Which document view in LibreOffice Writer displays the page exactly as it will appear online when viewed in a web browser?",
    "answer": "Web Layout View",
    "question_type": "both",
    "options": [
      "Print Layout View",
      "Web Layout View",
      "Full Screen View",
      "Normal View"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Web Layout View.",
    "explanation": "Web Layout View displays the document formatted for online viewing without print page breaks.",
    "difficulty": 1
  },
  {
    "prompt": "What is the keyboard shortcut to select a vertical block of text (Block Area selection) in LibreOffice Writer?",
    "answer": "Alt + Shift + F8",
    "question_type": "both",
    "options": [
      "Ctrl + Shift + F8",
      "Alt + Shift + F8",
      "Shift + F10",
      "Ctrl + Alt + B"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Alt + Shift + F8",
    "explanation": "Alt + Shift + F8 activates Block Selection mode to select rectangular columns of text.",
    "difficulty": 1
  },
  {
    "prompt": "What is the keyboard shortcut to move the cursor directly to the very beginning of a document in LibreOffice Writer?",
    "answer": "Ctrl + Home",
    "question_type": "both",
    "options": [
      "Home",
      "Ctrl + Home",
      "Alt + Home",
      "Shift + Home"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Ctrl + Home",
    "explanation": "Home moves to the start of the line, whereas Ctrl + Home navigates directly to the start of the document.",
    "difficulty": 1
  },
  {
    "prompt": "When text is set slightly above the normal line of text (such as an exponent like X²), what formatting is applied?",
    "answer": "Superscript",
    "question_type": "both",
    "options": [
      "Subscript",
      "Superscript",
      "Strikethrough",
      "Overline"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Superscript (above).",
    "explanation": "Superscript positions text above the baseline (e.g. 1st, X²), while Subscript sets text below (e.g. H₂O).",
    "difficulty": 1
  },
  {
    "prompt": "What type of list uses numbers or letters sequentially and is best suited for procedures where order is critical?",
    "answer": "Numbered list",
    "question_type": "both",
    "options": [
      "Bulleted list",
      "Numbered list",
      "Multilevel icon list",
      "Unordered list"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Numbered list.",
    "explanation": "Numbered (ordered) lists present sequential steps, instructions, or rankings.",
    "difficulty": 1
  },
  {
    "prompt": "When printing or displaying text widthwise rather than lengthwise, what is the page orientation called?",
    "answer": "Landscape",
    "question_type": "both",
    "options": [
      "Portrait",
      "Landscape",
      "Vertical",
      "Narrow"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Landscape (horizontal).",
    "explanation": "Landscape orientation sets horizontal width greater than vertical height (opposite of Portrait).",
    "difficulty": 1
  },
  {
    "prompt": "Which typing mode in a word processor replaces existing text with newly typed text instead of pushing it to the right?",
    "answer": "Overtype Mode",
    "question_type": "both",
    "options": [
      "Insert Mode",
      "Overtype Mode",
      "Block Mode",
      "Append Mode"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Overtype Mode.",
    "explanation": "Overtype (Overwrite) mode replaces characters ahead of the cursor rather than inserting between them.",
    "difficulty": 1
  },
  {
    "prompt": "What does the medical diagnostic abbreviation EEG stand for?",
    "answer": "Electro-Encephalography",
    "question_type": "both",
    "options": [
      "Electro-Echo Graphic",
      "Electro-Encephalography",
      "Electron Emission Gauge",
      "Emergency Energy Generator"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Brain electrical recording (Electro-Encephalography).",
    "explanation": "An EEG (Electroencephalogram) records the electrical activity of the brain.",
    "difficulty": 1
  },
  {
    "prompt": "What does the manufacturing abbreviation CAM stand for in industrial IT applications?",
    "answer": "Computer Aided Manufacturing",
    "question_type": "both",
    "options": [
      "Computer Aided Manufacturing",
      "Centralized Automated Machinery",
      "Control Algorithm Module",
      "Calculated Assembly Method"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Computer Aided Manufacturing.",
    "explanation": "CAM utilizes software and computer-controlled machinery to automate manufacturing processes.",
    "difficulty": 1
  },
  {
    "prompt": "A vendor located within the same country as the contracting company (e.g., an Indian firm outsourcing to another Indian firm) is an:",
    "answer": "Onshore vendor",
    "question_type": "both",
    "options": [
      "Offshore vendor",
      "Nearshore vendor",
      "Onshore vendor",
      "External foreign vendor"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Onshore (domestic) vendor.",
    "explanation": "Onshore outsourcing involves third-party vendors operating within the same national borders.",
    "difficulty": 1
  },
  {
    "prompt": "What is the non-printing formatting symbol used in LibreOffice Writer to represent a Tab space?",
    "answer": "A rightward arrow (→)",
    "question_type": "both",
    "options": [
      "A small dot (.)",
      "A curved arrow",
      "A rightward arrow (→)",
      "A pilcrow mark (¶)"
    ],
    "category": "Class 9th: Computer Science",
    "tags": "study,curriculum",
    "hint": "Rightward arrow (→).",
    "explanation": "When non-printing characters are shown (Ctrl + F10), a tab stop is displayed as a right arrow (→).",
    "difficulty": 1
  },
  {
    "prompt": "What is the limit of resolution of the unaided human eye at the near point (about 25 cm)?",
    "answer": "0.1 mm",
    "question_type": "both",
    "options": [
      "1 mm",
      "0.1 mm",
      "0.01 mm",
      "1 µm"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "About one-tenth of a millimetre.",
    "explanation": "Two points closer than 0.1 mm merge and appear as one to the naked human eye.",
    "difficulty": 1
  },
  {
    "prompt": "Which combination of lenses is used in a standard light microscope to magnify objects?",
    "answer": "Objective lens and eyepiece lens",
    "question_type": "both",
    "options": [
      "Concave lens and convex lens",
      "Two concave lenses",
      "Objective lens and eyepiece lens",
      "Cylindrical lens and spherical lens"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Objective and Eyepiece.",
    "explanation": "Compound light microscopes rely on this combination of convex lenses.",
    "difficulty": 1
  },
  {
    "prompt": "If a light microscope has an eyepiece marked 10X and an objective lens marked 40X, what is its total magnification?",
    "answer": "400X",
    "question_type": "both",
    "options": [
      "50X",
      "400X",
      "40X",
      "4000X"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Multiply 10 by 40.",
    "explanation": "Total magnification = Magnification of eyepiece × Magnification of objective (10 × 40 = 400).",
    "difficulty": 1
  },
  {
    "prompt": "What does an electron microscope use instead of light to produce magnified images?",
    "answer": "Beam of electrons",
    "question_type": "both",
    "options": [
      "Laser beam",
      "X-ray beam",
      "Beam of electrons",
      "Ultrasonic waves"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Electrons.",
    "explanation": "Electron microscopes use accelerated electrons rather than light rays to achieve nanometre-scale resolution.",
    "difficulty": 1
  },
  {
    "prompt": "How many micrometres (µm) are there in 1 millimetre (mm)?",
    "answer": "1,000 µm",
    "question_type": "both",
    "options": [
      "10 µm",
      "100 µm",
      "1,000 µm",
      "10,000 µm"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "1,000",
    "explanation": "1 mm = 1,000 µm.",
    "difficulty": 1
  },
  {
    "prompt": "If the visible diameter of a microscope field is 3000 µm and 15 cells fit end-to-end across this diameter, what is the estimated length of one cell?",
    "answer": "200 µm",
    "question_type": "both",
    "options": [
      "150 µm",
      "200 µm",
      "300 µm",
      "450 µm"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "3000 divided by 15.",
    "explanation": "Size of one cell = Diameter / Number of cells = 3000 µm / 15 = 200 µm.",
    "difficulty": 1
  },
  {
    "prompt": "Which of the following is a universal feature present in ALL living cells?",
    "answer": "Plasma membrane",
    "question_type": "both",
    "options": [
      "Cell wall",
      "Chloroplast",
      "Plasma membrane",
      "Well-defined nucleus"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Outer membrane enclosing cytoplasm.",
    "explanation": "Present in all prokaryotic and eukaryotic cells, setting the cellular boundary.",
    "difficulty": 1
  },
  {
    "prompt": "Why is the cell membrane described as 'selectively permeable'?",
    "answer": "It allows some substances to cross while preventing others",
    "question_type": "both",
    "options": [
      "It allows all liquids to pass but stops all solids",
      "It allows some substances to cross while preventing others",
      "It allows only water molecules to pass",
      "It is completely impermeable to all solutes"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Selects what passes through.",
    "explanation": "It regulates entry and exit strictly.",
    "difficulty": 1
  },
  {
    "prompt": "What happens to a fresh potato piece when placed in plain water (dilute medium)?",
    "answer": "It swells and increases in weight because water enters it",
    "question_type": "both",
    "options": [
      "It shrinks because water leaves the potato",
      "It swells and increases in weight because water enters it",
      "It dissolves completely",
      "Its weight remains completely unchanged"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Water enters by endosmosis.",
    "explanation": "Plain water is hypotonic to the potato cells, causing endosmosis.",
    "difficulty": 1
  },
  {
    "prompt": "Osmosis is specifically defined as the:",
    "answer": "Net diffusion of water across a selectively permeable membrane along its concentration gradient",
    "question_type": "both",
    "options": [
      "Movement of solute particles from low to high concentration",
      "Net diffusion of water across a selectively permeable membrane along its concentration gradient",
      "Active transport of ions without a membrane",
      "Movement of gas particles into liquids"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Diffusion of water across a membrane.",
    "explanation": "Water moves towards higher solute concentration across a membrane.",
    "difficulty": 1
  },
  {
    "prompt": "When a cell is placed in a solution that has a higher solute concentration than the cell's interior, the solution is called:",
    "answer": "Hypertonic",
    "question_type": "both",
    "options": [
      "Hypotonic",
      "Isotonic",
      "Hypertonic",
      "Saturated"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Hyper = higher solute.",
    "explanation": "A hypertonic medium has higher solute concentration relative to the cell interior.",
    "difficulty": 1
  },
  {
    "prompt": "A plant cell placed in a hypotonic solution does not burst because of its:",
    "answer": "Rigid and permeable cell wall",
    "question_type": "both",
    "options": [
      "Flexible plasma membrane",
      "Rigid and permeable cell wall",
      "Large central vacuole",
      "Dense cytoplasm"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Rigid outer wall.",
    "explanation": "The rigid wall exerts wall pressure counteracting internal turgor pressure.",
    "difficulty": 1
  },
  {
    "prompt": "What is the approximate thickness of the plasma membrane?",
    "answer": "7 to 10 nm",
    "question_type": "both",
    "options": [
      "1 to 2 nm",
      "7 to 10 nm",
      "50 to 100 nm",
      "1 µm"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "7 to 10 nanometres.",
    "explanation": "Standard thickness of the phospholipid bilayer is 7 to 10 nm.",
    "difficulty": 1
  },
  {
    "prompt": "According to the fluid-mosaic model, the plasma membrane is primarily composed of:",
    "answer": "Lipids and proteins",
    "question_type": "both",
    "options": [
      "Cellulose and pectin",
      "Lipids and proteins",
      "Starch and glycogen",
      "Nucleic acids and chitin"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Lipid bilayer with proteins.",
    "explanation": "The fluid mosaic consists of a lipid bilayer with mobile proteins.",
    "difficulty": 1
  },
  {
    "prompt": "In the lipid bilayer of a cell membrane, how are the lipid molecules arranged?",
    "answer": "Water-attracting heads point outward, water-repelling tails point inward",
    "question_type": "both",
    "options": [
      "Water-attracting heads point inward, water-repelling tails point outward",
      "Water-attracting heads point outward, water-repelling tails point inward",
      "Tails and heads are randomly mixed together",
      "Alternating protein and carbohydrate layers"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Heads out, tails in.",
    "explanation": "Hydrophilic heads face external and internal aqueous environments, shielding hydrophobic tails inside.",
    "difficulty": 1
  },
  {
    "prompt": "The primary structural carbohydrate that makes up the plant cell wall is:",
    "answer": "Cellulose",
    "question_type": "both",
    "options": [
      "Glycogen",
      "Cellulose",
      "Peptidoglycan",
      "Starch"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Cellulose.",
    "explanation": "A polysaccharide composed of glucose chains providing structural tensile strength.",
    "difficulty": 1
  },
  {
    "prompt": "When a Rhoeo leaf peel is treated with a concentrated sugar solution, what change is observed under the microscope?",
    "answer": "The cell membrane pulls away from the cell wall as the internal content shrinks",
    "question_type": "both",
    "options": [
      "The cell wall expands and bursts",
      "The cell wall shrinks and crushes the cytoplasm",
      "The cell membrane pulls away from the cell wall as the internal content shrinks",
      "The cell divides rapidly"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Plasmolysis.",
    "explanation": "Hypertonic conditions lead to exosmosis (plasmolysis); the rigid wall retains shape while protoplast contracts.",
    "difficulty": 1
  },
  {
    "prompt": "Why are human cheek cells more flexible and able to change shape easily compared to onion peel cells?",
    "answer": "Cheek cells lack a cell wall",
    "question_type": "both",
    "options": [
      "Cheek cells have a very thick cell wall",
      "Cheek cells lack a cell wall",
      "Cheek cells contain more cellulose",
      "Cheek cells possess large central vacuoles"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Lack of cell wall.",
    "explanation": "Animal cells are bounded only by a flexible plasma membrane.",
    "difficulty": 1
  },
  {
    "prompt": "Which stain is commonly used to prepare and observe human cheek cells under a light microscope?",
    "answer": "Methylene blue",
    "question_type": "both",
    "options": [
      "Safranin",
      "Methylene blue",
      "Iodine",
      "Acetocarmine"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Blue stain.",
    "explanation": "Standard basic stain used to view animal cheek epithelial cells clearly.",
    "difficulty": 1
  },
  {
    "prompt": "Which of the following features is typical of a prokaryotic cell?",
    "answer": "Genetic material contained in an unmembraned region called the nucleoid",
    "question_type": "both",
    "options": [
      "Presence of a nuclear envelope",
      "Presence of membrane-bound organelles",
      "Genetic material contained in an unmembraned region called the nucleoid",
      "Typical diameter of 10 to 100 µm"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Nucleoid.",
    "explanation": "Prokaryotes lack a nuclear membrane; genetic material lies in the nucleoid.",
    "difficulty": 1
  },
  {
    "prompt": "What is the typical diameter of a prokaryotic cell?",
    "answer": "1 to 10 µm",
    "question_type": "both",
    "options": [
      "0.01 to 0.1 µm",
      "1 to 10 µm",
      "10 to 100 µm",
      "1 mm"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "1 to 10 micrometres.",
    "explanation": "Prokaryotic cells are typically 1 to 10 µm, much smaller than eukaryotic cells (10 to 100 µm).",
    "difficulty": 1
  },
  {
    "prompt": "Non-living stored substances in plant cytoplasm, such as starch grains or calcium oxalate crystals, are termed:",
    "answer": "Cell inclusions",
    "question_type": "both",
    "options": [
      "Cell organelles",
      "Cell inclusions",
      "Cytoskeletons",
      "Nucleosomes"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Cell inclusions.",
    "explanation": "Non-living stored materials like starch grains and crystals are cell inclusions.",
    "difficulty": 1
  },
  {
    "prompt": "Ribosomal subunits are assembled inside which dense region of the nucleus?",
    "answer": "Nucleolus",
    "question_type": "both",
    "options": [
      "Chromatin",
      "Nucleolus",
      "Nuclear pore",
      "Cristae"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Nucleolus.",
    "explanation": "Site of ribosomal subunit synthesis and assembly in the eukaryotic nucleus.",
    "difficulty": 1
  },
  {
    "prompt": "What are the functional segments of DNA called?",
    "answer": "Genes",
    "question_type": "both",
    "options": [
      "Chromatin",
      "Genes",
      "Histones",
      "Nucleosomes"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Genes.",
    "explanation": "Functional units of heredity on a DNA chain.",
    "difficulty": 1
  },
  {
    "prompt": "In a non-dividing eukaryotic cell, genetic material appears as an entangled mass of thread-like structures called:",
    "answer": "Chromatin",
    "question_type": "both",
    "options": [
      "Chromosomes",
      "Chromatin",
      "Spindle fibres",
      "Microtubules"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Chromatin.",
    "explanation": "Uncoiled, thread-like DNA-protein complex in interphase nuclei.",
    "difficulty": 1
  },
  {
    "prompt": "Why do mature human red blood cells (RBCs) lack a nucleus?",
    "answer": "To provide more interior space to carry haemoglobin and oxygen",
    "question_type": "both",
    "options": [
      "To reduce their weight for faster flow",
      "To provide more interior space to carry haemoglobin and oxygen",
      "To enable them to divide rapidly",
      "Because they are prokaryotic cells"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Space for haemoglobin.",
    "explanation": "Enucleation maximizes oxygen carriage capacity.",
    "difficulty": 1
  },
  {
    "prompt": "What is the primary function of ribosomes in a cell?",
    "answer": "Synthesis of proteins",
    "question_type": "both",
    "options": [
      "Synthesis of lipids",
      "Synthesis of proteins",
      "Packaging of waste materials",
      "Production of ATP"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Protein synthesis.",
    "explanation": "Ribosomes translate mRNA sequences into polypeptide chains (proteins).",
    "difficulty": 1
  },
  {
    "prompt": "Which cell organelle is physically continuous with the outer membrane of the nuclear envelope?",
    "answer": "Endoplasmic reticulum",
    "question_type": "both",
    "options": [
      "Golgi apparatus",
      "Endoplasmic reticulum",
      "Lysosome",
      "Chloroplast"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Endoplasmic reticulum.",
    "explanation": "The lumen and outer membrane of the nuclear envelope are continuous with the ER.",
    "difficulty": 1
  },
  {
    "prompt": "What gives the Rough Endoplasmic Reticulum (RER) its characteristic rough appearance?",
    "answer": "Attached ribosomes",
    "question_type": "both",
    "options": [
      "Embedded enzymes",
      "Attached ribosomes",
      "Pores on its surface",
      "Folded cristae"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Ribosomes.",
    "explanation": "Ribosomes studding the outer membrane make RER appear rough.",
    "difficulty": 1
  },
  {
    "prompt": "Which organelle is primarily responsible for the synthesis and storage of lipids and steroid hormones?",
    "answer": "Smooth Endoplasmic Reticulum",
    "question_type": "both",
    "options": [
      "Rough Endoplasmic Reticulum",
      "Smooth Endoplasmic Reticulum",
      "Golgi apparatus",
      "Nucleolus"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Smooth ER.",
    "explanation": "Synthesizes non-protein molecules including lipids and steroids.",
    "difficulty": 1
  },
  {
    "prompt": "Which organelle functions as the packaging, sorting, and dispatching centre of the cell?",
    "answer": "Golgi apparatus",
    "question_type": "both",
    "options": [
      "Lysosome",
      "Golgi apparatus",
      "Vacuole",
      "Ribosome"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Golgi apparatus.",
    "explanation": "Modifies, packs, and routes ER products via secretory vesicles.",
    "difficulty": 1
  },
  {
    "prompt": "Lysosomes are membrane-bound sacs filled with powerful enzymes that break down worn-out cellular parts. Where are these digestive enzymes synthesized?",
    "answer": "Rough Endoplasmic Reticulum",
    "question_type": "both",
    "options": [
      "Smooth Endoplasmic Reticulum",
      "Rough Endoplasmic Reticulum",
      "Golgi apparatus",
      "Mitochondria"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Rough ER.",
    "explanation": "Digestive enzymes are proteins; thus, they are synthesized on ribosomes of the RER before Golgi packaging.",
    "difficulty": 1
  },
  {
    "prompt": "Why is the inner mitochondrial membrane extensively folded into cristae?",
    "answer": "To increase surface area for ATP-generating chemical reactions",
    "question_type": "both",
    "options": [
      "To store excess food granules",
      "To increase surface area for ATP-generating chemical reactions",
      "To protect its circular DNA",
      "To keep the outer membrane porous"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Increase surface area for ATP synthesis.",
    "explanation": "Inward folds (cristae) maximize area for cellular respiration enzymes.",
    "difficulty": 1
  },
  {
    "prompt": "What is the molecule known as the 'energy currency' of the cell, generated during cellular respiration?",
    "answer": "ATP",
    "question_type": "both",
    "options": [
      "DNA",
      "RNA",
      "ATP",
      "Glucose"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "ATP.",
    "explanation": "Adenosine Triphosphate stores and releases biological energy.",
    "difficulty": 1
  },
  {
    "prompt": "Which two organelles contain their own DNA and ribosomes, enabling them to make some of their own proteins?",
    "answer": "Mitochondria and plastids",
    "question_type": "both",
    "options": [
      "Lysosomes and Golgi apparatus",
      "Mitochondria and plastids",
      "Endoplasmic reticulum and vacuoles",
      "Ribosomes and centrosomes"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Mitochondria and plastids.",
    "explanation": "Semi-autonomous organelles containing circular DNA and prokaryote-like ribosomes.",
    "difficulty": 1
  },
  {
    "prompt": "The semi-fluid matrix filling the interior of a chloroplast is called the:",
    "answer": "Stroma",
    "question_type": "both",
    "options": [
      "Cristae",
      "Matrix",
      "Stroma",
      "Nucleoplasm"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Stroma.",
    "explanation": "Fluid-filled interior matrix enclosing thylakoid membranes in chloroplasts.",
    "difficulty": 1
  },
  {
    "prompt": "Plastids responsible for giving bright orange, yellow, or red colours to flower petals and fruits are:",
    "answer": "Chromoplasts",
    "question_type": "both",
    "options": [
      "Leucoplasts",
      "Chloroplasts",
      "Chromoplasts",
      "Amyloplasts"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Chromo = color.",
    "explanation": "Contain carotenoid pigments giving colour to petals and fruits.",
    "difficulty": 1
  },
  {
    "prompt": "Which type of plastid lacks pigments and primarily functions to store starch, oils, or proteins?",
    "answer": "Leucoplast",
    "question_type": "both",
    "options": [
      "Chloroplast",
      "Chromoplast",
      "Leucoplast",
      "Thylakoid"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Leuco = white/colorless.",
    "explanation": "Non-pigmented plastids dedicated to reserve nutrient storage.",
    "difficulty": 1
  },
  {
    "prompt": "The watery fluid stored inside the large central vacuole of a mature plant cell is known as:",
    "answer": "Cell sap",
    "question_type": "both",
    "options": [
      "Cytoplasm",
      "Cell sap",
      "Nucleoplasm",
      "Stroma"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Cell sap.",
    "explanation": "Solution of water, sugars, salts, and waste filling the central vacuole.",
    "difficulty": 1
  },
  {
    "prompt": "Why does a herbaceous plant wilt when it does not receive adequate water?",
    "answer": "The central vacuole loses water, lowering internal pressure and turgidity",
    "question_type": "both",
    "options": [
      "The cell walls dissolve",
      "The central vacuole loses water, lowering internal pressure and turgidity",
      "Mitochondria stop synthesizing proteins",
      "Chloroplasts lose all their chlorophyll"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Loss of turgidity.",
    "explanation": "Turgor pressure drops when water availability is depleted.",
    "difficulty": 1
  },
  {
    "prompt": "Which tissue region in an onion root is ideal for observing active cell division under a microscope?",
    "answer": "Actively growing root tip",
    "question_type": "both",
    "options": [
      "Base of the bulb",
      "Fully elongated root region",
      "Actively growing root tip",
      "Dry outer scales"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Root tip.",
    "explanation": "Meristematic cells divide continuously at the root tip.",
    "difficulty": 1
  },
  {
    "prompt": "What is the purpose of treating root tips with dilute hydrochloric acid during slide preparation?",
    "answer": "To soften the tissue by dissolving the middle lamella",
    "question_type": "both",
    "options": [
      "To stain chromosomes dark purple",
      "To soften the tissue by dissolving the middle lamella",
      "To preserve the roots permanently",
      "To provide nutrients to dividing cells"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Dissolves middle lamella.",
    "explanation": "Mild acid treatment breaks intercellular adhesion to facilitate making a flat monolayer squash.",
    "difficulty": 1
  },
  {
    "prompt": "A single round of mitotic cell division produces:",
    "answer": "Two genetically identical daughter cells with the same chromosome number",
    "question_type": "both",
    "options": [
      "Four daughter cells with half the original chromosome number",
      "Two genetically identical daughter cells with the same chromosome number",
      "Two daughter cells with double the original chromosome number",
      "Four genetically diverse gametes"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Two identical daughter cells.",
    "explanation": "Mitosis is equational division.",
    "difficulty": 1
  },
  {
    "prompt": "What is the biological significance of mitosis in multicellular organisms?",
    "answer": "Body growth, maintenance, and repair of damaged tissues",
    "question_type": "both",
    "options": [
      "Production of sperm and egg cells",
      "Body growth, maintenance, and repair of damaged tissues",
      "Halving the chromosome number",
      "Creating extensive genetic variation"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Growth and repair.",
    "explanation": "Produces somatic cells throughout life for growth and repair.",
    "difficulty": 1
  },
  {
    "prompt": "In human males, meiosis occurs specifically in which organ?",
    "answer": "Testes",
    "question_type": "both",
    "options": [
      "Skin",
      "Liver",
      "Testes",
      "Bone marrow"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Male reproductive organ.",
    "explanation": "Specialized reproductive organs where reductional division generates haploid sperm.",
    "difficulty": 1
  },
  {
    "prompt": "How many daughter cells are produced at the end of meiosis, and what is their chromosome content relative to the parent cell?",
    "answer": "Four cells, half the original chromosome number",
    "question_type": "both",
    "options": [
      "Two cells, identical chromosome number",
      "Four cells, half the original chromosome number",
      "Two cells, half the original chromosome number",
      "Four cells, double the original chromosome number"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Four haploid cells.",
    "explanation": "Meiosis involves two successive divisions forming 4 haploid daughter cells.",
    "difficulty": 1
  },
  {
    "prompt": "Uncontrolled mitotic cell divisions resulting from a failure in regular cellular regulation lead to the formation of:",
    "answer": "Tumours",
    "question_type": "both",
    "options": [
      "Gametes",
      "Tumours",
      "Additional organelles",
      "Red blood cells"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Tumours.",
    "explanation": "Unchecked cell division forms cell masses (tumours).",
    "difficulty": 1
  },
  {
    "prompt": "In classical Cell Theory, who stated that 'all cells arise from pre-existing cells'?",
    "answer": "Rudolf Virchow",
    "question_type": "both",
    "options": [
      "Matthias Schleiden",
      "Theodor Schwann",
      "Rudolf Virchow",
      "Robert Hooke"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Virchow.",
    "explanation": "Stated 'Omnis cellula-e-cellula' in 1855.",
    "difficulty": 1
  },
  {
    "prompt": "Normal animal cells stop dividing when they make physical contact with neighbouring cells. This phenomenon is called:",
    "answer": "Contact inhibition",
    "question_type": "both",
    "options": [
      "Plasmolysis",
      "Osmoregulation",
      "Contact inhibition",
      "Programmed cell death"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Contact inhibition.",
    "explanation": "Protective regulatory mechanism lost by malignant cells.",
    "difficulty": 1
  },
  {
    "prompt": "The genetically regulated and organized process of natural, selective cell elimination (such as the separation of fingers in an embryo) is called:",
    "answer": "Programmed Cell Death (PCD)",
    "question_type": "both",
    "options": [
      "Mitosis",
      "Contact inhibition",
      "Programmed Cell Death (PCD)",
      "Meiosis"
    ],
    "category": "Class 9th: Biology",
    "tags": "biology,cell,class-9",
    "hint": "Programmed Cell Death.",
    "explanation": "Natural cellular suicide mechanism essential for tissue sculpting and development.",
    "difficulty": 1
  },
  {
    "prompt": "A person suffering from acidity after overeating should be treated with:",
    "answer": "Baking soda solution",
    "question_type": "both",
    "options": [
      "Lemon juice",
      "Vinegar",
      "Baking soda solution",
      "Dilute hydrochloric acid"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Mild basic substance.",
    "explanation": "Baking soda is a mild basic substance that safely neutralises excess stomach acid.",
    "difficulty": 1
  },
  {
    "prompt": "Which of the following is a natural acid-base indicator?",
    "answer": "Turmeric",
    "question_type": "both",
    "options": [
      "Methyl orange",
      "Phenolphthalein",
      "Turmeric",
      "Universal indicator solution"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Natural plant-based dye.",
    "explanation": "Turmeric is a natural plant-based indicator.",
    "difficulty": 1
  },
  {
    "prompt": "What colour does curry stain turn when soap (basic in nature) is rubbed on it?",
    "answer": "Reddish-brown",
    "question_type": "both",
    "options": [
      "Yellow",
      "Reddish-brown",
      "Blue",
      "Green"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Reddish hue.",
    "explanation": "Curcumin in turmeric turns reddish-brown in contact with a base (soap).",
    "difficulty": 1
  },
  {
    "prompt": "When a reddish-brown soap-curry stain on a white shirt is washed with plenty of water, it turns back to:",
    "answer": "Yellow",
    "question_type": "both",
    "options": [
      "White",
      "Yellow",
      "Blue",
      "Pink"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Original turmeric color.",
    "explanation": "Washing off the alkaline soap restores the neutral yellow colour of turmeric.",
    "difficulty": 1
  },
  {
    "prompt": "What is the colour of phenolphthalein in an acidic medium?",
    "answer": "Colourless",
    "question_type": "both",
    "options": [
      "Pink",
      "Red",
      "Colourless",
      "Yellow"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "No color.",
    "explanation": "Phenolphthalein remains colourless in neutral and acidic solutions.",
    "difficulty": 1
  },
  {
    "prompt": "What is the colour of phenolphthalein in a basic medium?",
    "answer": "Pink",
    "question_type": "both",
    "options": [
      "Pink",
      "Colourless",
      "Orange",
      "Yellow"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Bright pink.",
    "explanation": "Phenolphthalein turns bright pink in basic solutions.",
    "difficulty": 1
  },
  {
    "prompt": "Methyl orange indicator turns which colour in an acidic solution?",
    "answer": "Red",
    "question_type": "both",
    "options": [
      "Yellow",
      "Red",
      "Blue",
      "Colourless"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Red.",
    "explanation": "Methyl orange indicator imparts a red/pinkish colour in acidic conditions.",
    "difficulty": 1
  },
  {
    "prompt": "Methyl orange turns which colour in a basic solution?",
    "answer": "Yellow",
    "question_type": "both",
    "options": [
      "Red",
      "Pink",
      "Yellow",
      "Orange"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Yellow.",
    "explanation": "Methyl orange changes to yellow in basic media.",
    "difficulty": 1
  },
  {
    "prompt": "Litmus solution is extracted from which organism belonging to the Thallophyta division?",
    "answer": "Lichen",
    "question_type": "both",
    "options": [
      "Amoeba",
      "Lichen",
      "Spirogyra",
      "Yeast"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Symbiotic thallophyte.",
    "explanation": "Litmus is derived from lichens (symbiotic thallophytes).",
    "difficulty": 1
  },
  {
    "prompt": "What is the natural colour of litmus solution when it is neither acidic nor basic?",
    "answer": "Purple",
    "question_type": "both",
    "options": [
      "Red",
      "Blue",
      "Purple",
      "Yellow"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Purple.",
    "explanation": "In pure, neutral solution, natural litmus dye exhibits a purple colour.",
    "difficulty": 1
  },
  {
    "prompt": "Which of the following flowers' coloured petals can serve as a natural acid-base indicator?",
    "answer": "Hydrangea",
    "question_type": "both",
    "options": [
      "Rose",
      "Hydrangea",
      "Sunflower",
      "Marigold"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Hydrangea.",
    "explanation": "Petals of Hydrangea, Petunia, and Geranium change colour based on acidity/basicity.",
    "difficulty": 1
  },
  {
    "prompt": "Substances whose smell/odour changes in acidic or basic media are known as:",
    "answer": "Olfactory indicators",
    "question_type": "both",
    "options": [
      "Visual indicators",
      "Universal indicators",
      "Olfactory indicators",
      "Radioactive tracers"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Relating to sense of smell.",
    "explanation": "Olfactory indicators alter their odour when exposed to acidic or basic conditions.",
    "difficulty": 1
  },
  {
    "prompt": "Which of the following behaves as an olfactory indicator?",
    "answer": "Onion",
    "question_type": "both",
    "options": [
      "Turmeric",
      "Onion",
      "Blue litmus",
      "Red cabbage extract"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Common kitchen vegetable.",
    "explanation": "Onion strips change their characteristic scent in an alkaline environment.",
    "difficulty": 1
  },
  {
    "prompt": "What happens to the characteristic smell of onion cloth strips when treated with dilute NaOH solution?",
    "answer": "The smell cannot be detected (destroyed)",
    "question_type": "both",
    "options": [
      "The smell becomes stronger",
      "The smell cannot be detected (destroyed)",
      "It turns into a fruity smell",
      "Remains completely unchanged"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Smell vanishes.",
    "explanation": "Strong bases like NaOH destroy the characteristic sulphur smell of onions.",
    "difficulty": 1
  },
  {
    "prompt": "Vanilla essence loses its pleasant characteristic smell when mixed with:",
    "answer": "Dilute NaOH",
    "question_type": "both",
    "options": [
      "Dilute HCl",
      "Dilute H₂SO₄",
      "Dilute NaOH",
      "Distilled water"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Basic solution.",
    "explanation": "The pleasant scent of vanilla vanishes when treated with a base (NaOH), but persists in acids.",
    "difficulty": 1
  },
  {
    "prompt": "Which gas is typically liberated when dilute sulphuric acid reacts with granulated zinc?",
    "answer": "Hydrogen",
    "question_type": "both",
    "options": [
      "Oxygen",
      "Carbon dioxide",
      "Hydrogen",
      "Sulphur dioxide"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Hydrogen.",
    "explanation": "Metals displace hydrogen ions from dilute acids: Zn + H₂SO₄ -> ZnSO₄ + H₂.",
    "difficulty": 1
  },
  {
    "prompt": "The confirmatory test for the presence of hydrogen gas is:",
    "answer": "It burns with a 'pop' sound near a flame",
    "question_type": "both",
    "options": [
      "It turns lime water milky",
      "It supports combustion vigorously",
      "It burns with a 'pop' sound near a flame",
      "It changes blue litmus to red"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Pop sound.",
    "explanation": "Hydrogen burns explosively with oxygen in small volumes with a distinct 'pop' sound.",
    "difficulty": 1
  },
  {
    "prompt": "The general word equation for the reaction of an active metal with an acid is:",
    "answer": "Metal + Acid -> Salt + Hydrogen gas",
    "question_type": "both",
    "options": [
      "Metal + Acid -> Oxide + Water",
      "Metal + Acid -> Salt + Hydrogen gas",
      "Metal + Acid -> Base + Carbon dioxide",
      "Metal + Acid -> Salt + Water"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Salt + Hydrogen.",
    "explanation": "Standard single displacement: Metal + Acid -> Salt + H₂.",
    "difficulty": 1
  },
  {
    "prompt": "Granulated zinc reacts with heated concentrated sodium hydroxide solution to yield:",
    "answer": "Sodium zincate and hydrogen gas",
    "question_type": "both",
    "options": [
      "Zinc hydroxide and water",
      "Sodium zincate and hydrogen gas",
      "Sodium oxide and zinc",
      "Zinc oxide and steam"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Sodium zincate + H₂.",
    "explanation": "Zinc reacts with hot caustic soda: 2NaOH + Zn -> Na₂ZnO₂ + H₂.",
    "difficulty": 1
  },
  {
    "prompt": "What is the correct chemical formula of sodium zincate?",
    "answer": "Na₂ZnO₂",
    "question_type": "both",
    "options": [
      "NaZnO₂",
      "Na₂ZnO₂",
      "Na₂ZnO₃",
      "Na(ZnO)₂"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Na₂ZnO₂.",
    "explanation": "Sodium zincate is represented as Na₂ZnO₂.",
    "difficulty": 1
  },
  {
    "prompt": "Why are curd and other sour foodstuffs not stored in brass or copper containers?",
    "answer": "Acids react with copper/brass to form toxic metallic salts",
    "question_type": "both",
    "options": [
      "Copper neutralises lactic acid completely",
      "Acids react with copper/brass to form toxic metallic salts",
      "Brass absorbs the organic acids",
      "The sour taste evaporates rapidly"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Forms toxic salts.",
    "explanation": "Organic acids in curd react with copper and zinc to create poisonous metallic salts.",
    "difficulty": 1
  },
  {
    "prompt": "Which of the following metals does NOT readily evolve hydrogen gas with dilute NaOH?",
    "answer": "Copper",
    "question_type": "both",
    "options": [
      "Zinc",
      "Aluminium",
      "Copper",
      "All amphoteric metals"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Copper.",
    "explanation": "Copper is below hydrogen in the reactivity series and does not displace hydrogen from bases.",
    "difficulty": 1
  },
  {
    "prompt": "When dilute hydrochloric acid is added to magnesium ribbon, the observed gas evolved is:",
    "answer": "Hydrogen",
    "question_type": "both",
    "options": [
      "Chlorine",
      "Hydrogen",
      "Oxygen",
      "Nitrogen dioxide"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Hydrogen.",
    "explanation": "Mg + 2HCl -> MgCl₂ + H₂.",
    "difficulty": 1
  },
  {
    "prompt": "What is observed on the surface of zinc granules during their reaction with dilute H₂SO₄?",
    "answer": "Formation of bubbles of hydrogen gas",
    "question_type": "both",
    "options": [
      "Deposition of copper layer",
      "Formation of bubbles of hydrogen gas",
      "A deep red film forms",
      "Rapid melting of zinc granules"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Gas bubbles.",
    "explanation": "Bubbles of evolved hydrogen gas form on the surface of the granules.",
    "difficulty": 1
  },
  {
    "prompt": "Pass-through bubbles formed in soap solution during the zinc-acid reaction float because:",
    "answer": "Hydrogen gas inside is lighter than air",
    "question_type": "both",
    "options": [
      "Carbon dioxide is denser than air",
      "Hydrogen gas inside is lighter than air",
      "Soap solution decreases gas temperature",
      "Air enters the bubbles"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Hydrogen is lighter than air.",
    "explanation": "Hydrogen has a very low density compared to ambient air.",
    "difficulty": 1
  },
  {
    "prompt": "What gas is liberated when dilute HCl reacts with sodium carbonate (Na₂CO₃)?",
    "answer": "Carbon dioxide",
    "question_type": "both",
    "options": [
      "Hydrogen",
      "Oxygen",
      "Carbon dioxide",
      "Chlorine"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Carbon dioxide.",
    "explanation": "Metal carbonates react with acids to liberate carbon dioxide gas.",
    "difficulty": 1
  },
  {
    "prompt": "Chemical formula of baking soda is:",
    "answer": "NaHCO₃",
    "question_type": "both",
    "options": [
      "Na₂CO₃",
      "NaHCO₃",
      "NaOH",
      "Na₂SO₄"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "NaHCO₃.",
    "explanation": "Baking soda is sodium hydrogencarbonate (NaHCO₃).",
    "difficulty": 1
  },
  {
    "prompt": "Lime water is an aqueous solution of:",
    "answer": "Ca(OH)₂",
    "question_type": "both",
    "options": [
      "CaO",
      "CaCO₃",
      "Ca(OH)₂",
      "CaCl₂"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Calcium hydroxide.",
    "explanation": "Slaked lime dissolved in water is calcium hydroxide, Ca(OH)₂.",
    "difficulty": 1
  },
  {
    "prompt": "Passing carbon dioxide gas through freshly prepared lime water turns it milky due to the precipitation of:",
    "answer": "Calcium carbonate",
    "question_type": "both",
    "options": [
      "Calcium hydrogencarbonate",
      "Calcium carbonate",
      "Calcium chloride",
      "Calcium sulphate"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "CaCO₃.",
    "explanation": "Insoluble white calcium carbonate (CaCO₃) precipitates out.",
    "difficulty": 1
  },
  {
    "prompt": "What happens when excess carbon dioxide gas is continuously bubbled through milky lime water?",
    "answer": "The milkiness disappears because soluble Ca(HCO₃)₂ is formed",
    "question_type": "both",
    "options": [
      "The milkiness disappears because soluble Ca(HCO₃)₂ is formed",
      "The precipitate turns red",
      "Lime water decomposes into metallic calcium",
      "A black precipitate forms"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Milkiness disappears.",
    "explanation": "Excess CO₂ converts insoluble CaCO₃ to water-soluble Ca(HCO₃)₂.",
    "difficulty": 1
  },
  {
    "prompt": "Which of the following mineral forms is chemically identical to calcium carbonate (CaCO₃)?",
    "answer": "All of these",
    "question_type": "both",
    "options": [
      "Limestone",
      "Chalk",
      "Marble",
      "All of these"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "All of these.",
    "explanation": "Limestone, chalk, and marble are geological/mineral forms of CaCO₃.",
    "difficulty": 1
  },
  {
    "prompt": "The primary chemical constituent of crushed eggshells is:",
    "answer": "Calcium carbonate",
    "question_type": "both",
    "options": [
      "Calcium sulphate",
      "Calcium phosphate",
      "Calcium carbonate",
      "Calcium oxide"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "CaCO₃.",
    "explanation": "Avian eggshells are primarily composed of calcium carbonate.",
    "difficulty": 1
  },
  {
    "prompt": "Metal compound 'A' reacts with dilute HCl to produce effervescence. The gas extinguishes a candle and one product formed is CaCl₂. What is compound 'A'?",
    "answer": "Calcium carbonate",
    "question_type": "both",
    "options": [
      "Calcium hydroxide",
      "Calcium carbonate",
      "Calcium oxide",
      "Calcium nitrate"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Calcium carbonate.",
    "explanation": "CaCO₃ + 2HCl -> CaCl₂ + H₂O + CO₂ (extinguishes flame).",
    "difficulty": 1
  },
  {
    "prompt": "The reaction: Metal carbonate + Acid -> ? produces:",
    "answer": "Salt + Carbon dioxide + Water",
    "question_type": "both",
    "options": [
      "Salt + Hydrogen",
      "Salt + Carbon dioxide + Water",
      "Base + Water",
      "Salt + Oxygen"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Salt + CO₂ + H₂O.",
    "explanation": "Carbonates give salt, CO₂, and H₂O.",
    "difficulty": 1
  },
  {
    "prompt": "Which of the following does NOT produce carbon dioxide on treatment with dilute acid?",
    "answer": "Lime water",
    "question_type": "both",
    "options": [
      "Marble",
      "Lime water",
      "Baking soda",
      "Limestone"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Lime water.",
    "explanation": "Lime water is a hydroxide (Ca(OH)₂); it gives salt and water without releasing CO₂.",
    "difficulty": 1
  },
  {
    "prompt": "The balanced equation for the reaction of sodium hydrogencarbonate with hydrochloric acid is:",
    "answer": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂",
    "question_type": "both",
    "options": [
      "NaHCO₃ + HCl -> NaCl + H₂O + CO₂",
      "2NaHCO₃ + 2HCl -> 2NaCl + 2H₂O + CO₂",
      "NaHCO₃ + 2HCl -> NaCl₂ + H₂O + CO₂",
      "NaHCO₃ + HCl -> NaH + Cl₂ + CO₂"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂.",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂.",
    "difficulty": 1
  },
  {
    "prompt": "When lime water turns milky, the colour is caused by:",
    "answer": "A white suspension of CaCO₃",
    "question_type": "both",
    "options": [
      "A soluble complex ion",
      "A white suspension of CaCO₃",
      "Escaping micro-bubbles of steam",
      "Formation of calcium chloride crystals"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "White suspension of CaCO₃.",
    "explanation": "Precipitation of microscopic particles of insoluble CaCO₃ makes the liquid turbid/milky.",
    "difficulty": 1
  },
  {
    "prompt": "The reaction between an acid and a base to produce salt and water is known as:",
    "answer": "Neutralisation",
    "question_type": "both",
    "options": [
      "Oxidation",
      "Neutralisation",
      "Displacement",
      "Decomposition"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Neutralisation.",
    "explanation": "Neutralisation is the reaction of an acid with a base.",
    "difficulty": 1
  },
  {
    "prompt": "When a few drops of phenolphthalein are added to dilute NaOH solution, the colour observed is:",
    "answer": "Pink",
    "question_type": "both",
    "options": [
      "Red",
      "Pink",
      "Yellow",
      "Colourless"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Pink.",
    "explanation": "Phenolphthalein turns pink in basic solutions like NaOH.",
    "difficulty": 1
  },
  {
    "prompt": "If dilute HCl is added drop by drop to pink phenolphthalein-containing NaOH solution until excess acid is present:",
    "answer": "The pink colour disappears and solution becomes colourless",
    "question_type": "both",
    "options": [
      "The mixture turns deep purple",
      "The pink colour disappears and solution becomes colourless",
      "The solution becomes milky white",
      "The solution turns yellow"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Turns colourless.",
    "explanation": "As the base is neutralised and the medium becomes acidic, phenolphthalein turns colourless.",
    "difficulty": 1
  },
  {
    "prompt": "In terms of ions, neutralisation can be fundamentally represented as:",
    "answer": "H+(aq) + OH-(aq) -> H₂O(l)",
    "question_type": "both",
    "options": [
      "H+(aq) + Cl-(aq) -> HCl(aq)",
      "Na+(aq) + OH-(aq) -> NaOH(aq)",
      "H+(aq) + OH-(aq) -> H₂O(l)",
      "Na+(aq) + Cl-(aq) -> NaCl(s)"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "H+ + OH- -> H₂O.",
    "explanation": "The net ionic equation of neutralisation is always H+(aq) + OH-(aq) -> H₂O(l).",
    "difficulty": 1
  },
  {
    "prompt": "When black copper oxide (CuO) powder is stirred with dilute hydrochloric acid, the resulting solution is:",
    "answer": "Blue-green",
    "question_type": "both",
    "options": [
      "Colourless",
      "Blue-green",
      "Reddish-brown",
      "Bright yellow"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Blue-green.",
    "explanation": "Black copper oxide dissolves to form a blue-green cupric chloride solution.",
    "difficulty": 1
  },
  {
    "prompt": "The blue-green colour in the copper oxide-hydrochloric acid reaction is due to the formation of:",
    "answer": "Copper(II) chloride (CuCl₂)",
    "question_type": "both",
    "options": [
      "Copper sulphate",
      "Copper(I) oxide",
      "Copper(II) chloride (CuCl₂)",
      "Copper carbonate"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "CuCl₂.",
    "explanation": "Formation of hydrated copper(II) chloride ions produces the characteristic blue-green hue.",
    "difficulty": 1
  },
  {
    "prompt": "Since metallic oxides react with acids to form salt and water, they are classified as:",
    "answer": "Basic oxides",
    "question_type": "both",
    "options": [
      "Acidic oxides",
      "Basic oxides",
      "Neutral oxides",
      "Amphipathic oxides"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Basic oxides.",
    "explanation": "Metallic oxides react with acids to yield salt and water, establishing their basic character.",
    "difficulty": 1
  },
  {
    "prompt": "Non-metallic oxides (such as CO₂ and SO₂) react with bases to give salt and water; this indicates that they are:",
    "answer": "Acidic in nature",
    "question_type": "both",
    "options": [
      "Basic in nature",
      "Acidic in nature",
      "Neutral in nature",
      "Amphoteric in nature"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Acidic in nature.",
    "explanation": "Non-metallic oxides react with bases to yield salt and water, establishing their acidic character.",
    "difficulty": 1
  },
  {
    "prompt": "Calcium hydroxide reacts with carbon dioxide to give calcium carbonate and water. This proves that CO₂ is:",
    "answer": "An acidic oxide",
    "question_type": "both",
    "options": [
      "A basic oxide",
      "An acidic oxide",
      "A neutral gas",
      "An inert substance"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Acidic oxide.",
    "explanation": "The base Ca(OH)₂ is neutralised by CO₂, proving CO₂ is an acidic oxide.",
    "difficulty": 1
  },
  {
    "prompt": "Which of the following is an example of a basic oxide?",
    "answer": "Na₂O",
    "question_type": "both",
    "options": [
      "SO₂",
      "CO₂",
      "Na₂O",
      "NO₂"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Na₂O.",
    "explanation": "Metal oxides like Na₂O are basic; SO₂, CO₂, NO₂ are non-metal acidic oxides.",
    "difficulty": 1
  },
  {
    "prompt": "Which of the following pairs represents an acid and a base that react to form potassium chloride?",
    "answer": "KOH and HCl",
    "question_type": "both",
    "options": [
      "KOH and H₂SO₄",
      "KOH and HCl",
      "NaOH and HCl",
      "Ca(OH)₂ and HCl"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "KOH and HCl.",
    "explanation": "KOH + HCl -> KCl + H₂O.",
    "difficulty": 1
  },
  {
    "prompt": "An aqueous solution of which of the following compounds will conduct an electric current?",
    "answer": "Hydrochloric acid (HCl)",
    "question_type": "both",
    "options": [
      "Glucose (C₆H₁₂O₆)",
      "Ethanol (C₂H₅OH)",
      "Hydrochloric acid (HCl)",
      "Urea"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "HCl.",
    "explanation": "Only HCl ionises into mobile charge carriers (H+ and Cl-) in water.",
    "difficulty": 1
  },
  {
    "prompt": "The electric current through an aqueous acid solution is carried by:",
    "answer": "Hydrated ions",
    "question_type": "both",
    "options": [
      "Free electrons",
      "Hydrated ions",
      "Undissociated acid molecules",
      "Neutrons"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Hydrated ions.",
    "explanation": "Ions flowing toward electrodes carry electric charge through solutions.",
    "difficulty": 1
  },
  {
    "prompt": "Which cation is common to all aqueous acid solutions?",
    "answer": "H+(aq) or H₃O+",
    "question_type": "both",
    "options": [
      "Na+",
      "OH-",
      "H+(aq) or H₃O+",
      "Cl-"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "H+(aq) or H₃O+.",
    "explanation": "Acids furnish solvated protons: H+(aq) or hydronium (H₃O+) ions.",
    "difficulty": 1
  },
  {
    "prompt": "A dry blue litmus paper brought near dry HCl gas:",
    "answer": "Does not change colour",
    "question_type": "both",
    "options": [
      "Turns bright red",
      "Does not change colour",
      "Turns green",
      "Bleaches to white"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "No change.",
    "explanation": "Without water, no ionization occurs; dry litmus paper remains unaffected.",
    "difficulty": 1
  },
  {
    "prompt": "Why does dry HCl gas not show acidic properties on dry litmus paper?",
    "answer": "H+ ions can only be generated in the presence of water",
    "question_type": "both",
    "options": [
      "Dry HCl gas is basic",
      "H+ ions can only be generated in the presence of water",
      "Litmus paper is contaminated",
      "HCl requires oxygen to form acids"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "H+ generated only with water.",
    "explanation": "Acidic properties require H+ ion formation, which only occurs upon hydration in water.",
    "difficulty": 1
  },
  {
    "prompt": "A guard tube containing calcium chloride (CaCl₂) is used during the preparation of HCl gas to:",
    "answer": "Dry the evolved gas by absorbing moisture",
    "question_type": "both",
    "options": [
      "Absorb acidic fumes",
      "Dry the evolved gas by absorbing moisture",
      "Neutralise unreacted salt",
      "Test for presence of chlorine"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Dry the gas.",
    "explanation": "Anhydrous CaCl₂ acts as a drying/desiccating agent to remove water vapor.",
    "difficulty": 1
  },
  {
    "prompt": "A hydrogen ion (H+) combines with a water molecule to form:",
    "answer": "Hydronium ion (H₃O+)",
    "question_type": "both",
    "options": [
      "Hydroxide ion (OH-)",
      "Hydronium ion (H₃O+)",
      "Hydride ion (H-)",
      "Peroxide ion (O₂²-)"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Hydronium ion.",
    "explanation": "Free protons attach to water molecules: H+ + H₂O -> H₃O+.",
    "difficulty": 1
  },
  {
    "prompt": "Bases that are completely soluble in water are specifically known as:",
    "answer": "Alkalis",
    "question_type": "both",
    "options": [
      "Neutral salts",
      "Alkalis",
      "Insoluble bases",
      "Amphoteric bases"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Alkalis.",
    "explanation": "Water-soluble bases are called alkalis.",
    "difficulty": 1
  },
  {
    "prompt": "Which of the following is an example of an alkali?",
    "answer": "NaOH",
    "question_type": "both",
    "options": [
      "Cu(OH)₂",
      "Fe(OH)₃",
      "NaOH",
      "Al(OH)₃"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "NaOH.",
    "explanation": "NaOH dissolves completely in water, classifying it as an alkali.",
    "difficulty": 1
  },
  {
    "prompt": "Which ion is produced by all soluble bases (alkalis) in aqueous solution?",
    "answer": "OH-",
    "question_type": "both",
    "options": [
      "H+",
      "H₃O+",
      "OH-",
      "O²-"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "OH-.",
    "explanation": "Alkalis produce free hydroxide ions (OH-) in aqueous media.",
    "difficulty": 1
  },
  {
    "prompt": "The process of dissolving concentrated sulphuric acid in water is:",
    "answer": "Highly exothermic",
    "question_type": "both",
    "options": [
      "Strongly endothermic",
      "Highly exothermic",
      "Non-spontaneous",
      "Completely isothermal"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Highly exothermic.",
    "explanation": "Dilution of strong acids is an exothermic reaction that releases significant heat.",
    "difficulty": 1
  },
  {
    "prompt": "While diluting a concentrated mineral acid, the correct procedure is:",
    "answer": "Add acid slowly to water with constant stirring",
    "question_type": "both",
    "options": [
      "Add water drop by drop into the concentrated acid",
      "Add acid slowly to water with constant stirring",
      "Mix equal volumes rapidly in a closed bottle",
      "Boil water and then add the acid"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Add acid to water slowly.",
    "explanation": "Acid must always be added slowly to water with constant stirring to dissipate heat safely.",
    "difficulty": 1
  },
  {
    "prompt": "What danger arises if water is poured directly into concentrated sulphuric acid?",
    "answer": "Excessive local heat generation causes acid to splash out and may break the glass",
    "question_type": "both",
    "options": [
      "It causes immediate precipitation of sulphur",
      "Excessive local heat generation causes acid to splash out and may break the glass",
      "The acid decomposes into toxic chlorine gas",
      "The solution becomes completely inert"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Acid splattering & glass breakage.",
    "explanation": "Adding water to concentrated acid can cause dangerous boiling, splashing, and shattering of the container.",
    "difficulty": 1
  },
  {
    "prompt": "Dilution of an acid or a base causes a decrease in:",
    "answer": "Concentration of H₃O+ or OH- ions per unit volume",
    "question_type": "both",
    "options": [
      "Total volume of the solution",
      "Concentration of H₃O+ or OH- ions per unit volume",
      "The number of water molecules per unit volume",
      "The total mass of the solvent"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Ion concentration per unit volume.",
    "explanation": "Dilution increases volume, decreasing the density of H+ or OH- ions per unit volume.",
    "difficulty": 1
  },
  {
    "prompt": "What does the letter 'p' stand for in the abbreviation pH?",
    "answer": "Potenz",
    "question_type": "both",
    "options": [
      "Power",
      "Potenz",
      "Proton",
      "Potential"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "German word 'potenz'.",
    "explanation": "'p' stands for the German word potenz, meaning power.",
    "difficulty": 1
  },
  {
    "prompt": "A neutral aqueous solution at 25 °C has a pH value of:",
    "answer": "7",
    "question_type": "both",
    "options": [
      "0",
      "14",
      "7",
      "1"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "pH 7.",
    "explanation": "Pure neutral water contains equal H+ and OH- concentrations, corresponding to pH = 7.",
    "difficulty": 1
  },
  {
    "prompt": "As the pH of a solution increases from 7 to 14, it represents:",
    "answer": "An increase in OH- ion concentration",
    "question_type": "both",
    "options": [
      "An increase in H+ ion concentration",
      "An increase in OH- ion concentration",
      "A decrease in basic strength",
      "No change in ionic concentrations"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Increase in OH- ions.",
    "explanation": "Values between 7 and 14 denote increasing hydroxide ion concentration and basicity.",
    "difficulty": 1
  },
  {
    "prompt": "Which of the following solutions has the highest concentration of H+(aq) ions?",
    "answer": "Solution with pH = 1",
    "question_type": "both",
    "options": [
      "Solution with pH = 1",
      "Solution with pH = 6",
      "Solution with pH = 8",
      "Solution with pH = 14"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Lowest pH number.",
    "explanation": "Lower pH values indicate higher H+ ion concentrations (pH = -log[H+]).",
    "difficulty": 1
  },
  {
    "prompt": "Between 1 M HCl and 1 M CH₃COOH, HCl is considered a stronger acid because:",
    "answer": "It dissociates completely to yield a higher concentration of H+ ions",
    "question_type": "both",
    "options": [
      "It contains more oxygen atoms",
      "It dissociates completely to yield a higher concentration of H+ ions",
      "It has a higher molar mass",
      "It turns universal indicator blue"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Dissociates completely.",
    "explanation": "Strong acids like HCl ionise completely; weak acids ionise only partially.",
    "difficulty": 1
  },
  {
    "prompt": "The human body works optimally within which narrow pH range?",
    "answer": "7.0 to 7.8",
    "question_type": "both",
    "options": [
      "2.0 to 3.5",
      "5.5 to 6.8",
      "7.0 to 7.8",
      "9.0 to 10.5"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "7.0 to 7.8.",
    "explanation": "Biological processes in human tissues function within a narrow pH range of 7.0 to 7.8.",
    "difficulty": 1
  },
  {
    "prompt": "Rain is termed 'acid rain' when its pH drops below:",
    "answer": "5.6",
    "question_type": "both",
    "options": [
      "7.0",
      "6.5",
      "5.6",
      "4.0"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "5.6.",
    "explanation": "Atmospheric pollutants lower rain pH; precipitation below 5.6 is designated acid rain.",
    "difficulty": 1
  },
  {
    "prompt": "The atmosphere of planet Venus is composed of thick white and yellowish clouds of:",
    "answer": "Sulphuric acid",
    "question_type": "both",
    "options": [
      "Hydrochloric acid",
      "Sulphuric acid",
      "Nitric acid",
      "Phosphoric acid"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Sulphuric acid.",
    "explanation": "The thick cloud deck of Venus contains high concentrations of sulphuric acid.",
    "difficulty": 1
  },
  {
    "prompt": "Which acid is naturally produced in the human stomach to facilitate protein digestion?",
    "answer": "Hydrochloric acid",
    "question_type": "both",
    "options": [
      "Sulphuric acid",
      "Hydrochloric acid",
      "Citric acid",
      "Acetic acid"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Hydrochloric acid.",
    "explanation": "Gastric glands produce dilute HCl to activate pepsin and digest food.",
    "difficulty": 1
  },
  {
    "prompt": "Milk of magnesia, a common antacid suspension, chemically consists of:",
    "answer": "Magnesium hydroxide [Mg(OH)₂]",
    "question_type": "both",
    "options": [
      "Magnesium chloride",
      "Magnesium hydroxide [Mg(OH)₂]",
      "Magnesium carbonate",
      "Magnesium sulphate"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Mg(OH)₂.",
    "explanation": "Milk of magnesia is a basic suspension of magnesium hydroxide, Mg(OH)₂.",
    "difficulty": 1
  },
  {
    "prompt": "Dental enamel, the hardest substance in the human body, is chemically made of:",
    "answer": "Calcium hydroxyapatite (crystalline calcium phosphate)",
    "question_type": "both",
    "options": [
      "Calcium carbonate",
      "Calcium hydroxyapatite (crystalline calcium phosphate)",
      "Calcium sulphate dihydrate",
      "Calcium chloride"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Calcium hydroxyapatite.",
    "explanation": "Tooth enamel is made of calcium hydroxyapatite, a crystalline form of calcium phosphate.",
    "difficulty": 1
  },
  {
    "prompt": "Tooth decay starts when the pH inside the oral cavity drops below:",
    "answer": "5.5",
    "question_type": "both",
    "options": [
      "7.0",
      "6.5",
      "5.5",
      "3.2"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "5.5.",
    "explanation": "Bacterial acid production lowers mouth pH below 5.5, which begins demineralising enamel.",
    "difficulty": 1
  },
  {
    "prompt": "Honey-bee sting injects an acidic liquid that causes intense pain. Relief can be obtained by applying:",
    "answer": "Baking soda paste",
    "question_type": "both",
    "options": [
      "Dilute hydrochloric acid",
      "Lemon juice",
      "Baking soda paste",
      "Vinegar"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Baking soda.",
    "explanation": "Bee stings inject acid; application of mild alkaline baking soda provides neutralisation relief.",
    "difficulty": 1
  },
  {
    "prompt": "Stinging hairs of nettle leaves inject which acid into human skin, causing burning pain?",
    "answer": "Methanoic acid (formic acid)",
    "question_type": "both",
    "options": [
      "Methanoic acid (formic acid)",
      "Oxalic acid",
      "Tartaric acid",
      "Citric acid"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Methanoic acid.",
    "explanation": "Stinging nettle trichomes inject methanoic (formic) acid.",
    "difficulty": 1
  },
  {
    "prompt": "If a hiker accidentally brushes against nettle leaves, a traditional soothing remedy is to rub the area with leaves of:",
    "answer": "Dock plant",
    "question_type": "both",
    "options": [
      "Neem plant",
      "Dock plant",
      "Cactus",
      "Tulsi"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Dock plant.",
    "explanation": "Dock leaves contain mildly basic juices that neutralise methanoic acid from nettles.",
    "difficulty": 1
  },
  {
    "prompt": "Which of the following natural source-acid pairs is INCORRECTLY matched?",
    "answer": "Tamarind - Oxalic acid",
    "question_type": "both",
    "options": [
      "Vinegar - Acetic acid",
      "Orange - Citric acid",
      "Tamarind - Oxalic acid",
      "Tomato - Oxalic acid"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Tamarind has tartaric acid.",
    "explanation": "Tamarind contains tartaric acid; oxalic acid is found in tomatoes.",
    "difficulty": 1
  },
  {
    "prompt": "Sour milk (curd) contains which naturally occurring organic acid?",
    "answer": "Lactic acid",
    "question_type": "both",
    "options": [
      "Lactic acid",
      "Tartaric acid",
      "Citric acid",
      "Methanoic acid"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Lactic acid.",
    "explanation": "Fermentation of lactose produces lactic acid in curd and sour milk.",
    "difficulty": 1
  },
  {
    "prompt": "What acid is present in ant sting?",
    "answer": "Methanoic acid",
    "question_type": "both",
    "options": [
      "Lactic acid",
      "Methanoic acid",
      "Citric acid",
      "Tartaric acid"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Methanoic acid.",
    "explanation": "Formic or methanoic acid is present in ant stings.",
    "difficulty": 1
  },
  {
    "prompt": "If soil is excessively acidic, a farmer can neutralise it by adding:",
    "answer": "Quicklime (CaO) or slaked lime [Ca(OH)₂]",
    "question_type": "both",
    "options": [
      "Gypsum",
      "Quicklime (CaO) or slaked lime [Ca(OH)₂]",
      "Common salt",
      "Urea"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Quicklime or slaked lime.",
    "explanation": "Quicklime (CaO) and slaked lime [Ca(OH)₂] are bases used to neutralise acidic soil.",
    "difficulty": 1
  },
  {
    "prompt": "The salt formed by reacting a strong acid with a strong base (e.g., NaCl) produces an aqueous solution with a pH of:",
    "answer": "Exactly 7",
    "question_type": "both",
    "options": [
      "< 7",
      "> 7",
      "Exactly 7",
      "Exactly 0"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Exactly 7.",
    "explanation": "Salts from strong acid + strong base combinations produce neutral solutions with pH = 7.",
    "difficulty": 1
  },
  {
    "prompt": "An aqueous solution of ammonium chloride (NH₄Cl) is:",
    "answer": "Acidic (pH < 7)",
    "question_type": "both",
    "options": [
      "Neutral (pH = 7)",
      "Basic (pH > 7)",
      "Acidic (pH < 7)",
      "Strongly alkaline (pH = 14)"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Acidic (pH < 7).",
    "explanation": "Formed from strong acid (HCl) and weak base (NH₄OH), making the solution acidic (pH < 7).",
    "difficulty": 1
  },
  {
    "prompt": "Sodium carbonate (Na₂CO₃) is a basic salt because it is formed by the combination of:",
    "answer": "Weak acid (H₂CO₃) and strong base (NaOH)",
    "question_type": "both",
    "options": [
      "Strong acid and strong base",
      "Weak acid and weak base",
      "Weak acid (H₂CO₃) and strong base (NaOH)",
      "Strong acid (HCl) and weak base (NH₄OH)"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Weak acid + strong base.",
    "explanation": "Formed from a strong base (NaOH) and a weak acid (H₂CO₃).",
    "difficulty": 1
  },
  {
    "prompt": "Salts having the same positive or negative radical are said to belong to the same family. NaCl and Na₂SO₄ belong to the family of:",
    "answer": "Sodium salts",
    "question_type": "both",
    "options": [
      "Chloride salts",
      "Sodium salts",
      "Sulphate salts",
      "Calcium salts"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Sodium salts.",
    "explanation": "Both salts share the common sodium cation (Na+).",
    "difficulty": 1
  },
  {
    "prompt": "Deposits of solid rock salt often appear brown because of:",
    "answer": "Mineral impurities",
    "question_type": "both",
    "options": [
      "Presence of rust",
      "Trapped carbon deposits",
      "Mineral impurities",
      "High moisture content"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Mineral impurities.",
    "explanation": "Mineral impurities embedded during ancient geological sedimentation give rock salt its brown hue.",
    "difficulty": 1
  },
  {
    "prompt": "Which chemical compound served as an iconic symbol during Mahatma Gandhi's historic Dandi March?",
    "answer": "Sodium chloride",
    "question_type": "both",
    "options": [
      "Calcium carbonate",
      "Sodium chloride",
      "Potassium chlorate",
      "Sodium hydroxide"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Common salt (NaCl).",
    "explanation": "Salt Satyagraha focused on common salt (NaCl) to oppose the British salt tax.",
    "difficulty": 1
  },
  {
    "prompt": "An aqueous solution of sodium chloride used in industrial electrolysis is called:",
    "answer": "Brine",
    "question_type": "both",
    "options": [
      "Slag",
      "Brine",
      "Lime water",
      "Supernatant"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Brine.",
    "explanation": "A concentrated aqueous solution of sodium chloride is called brine.",
    "difficulty": 1
  },
  {
    "prompt": "In the chlor-alkali process, which gas is liberated at the anode?",
    "answer": "Chlorine gas",
    "question_type": "both",
    "options": [
      "Hydrogen gas",
      "Chlorine gas",
      "Oxygen gas",
      "Nitrogen gas"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Chlorine gas.",
    "explanation": "Chloride ions are oxidised to chlorine gas at the positive anode.",
    "difficulty": 1
  },
  {
    "prompt": "In the chlor-alkali process, hydrogen gas is collected at the:",
    "answer": "Cathode",
    "question_type": "both",
    "options": [
      "Anode",
      "Cathode",
      "Bottom of the cell",
      "Delivery column"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Cathode.",
    "explanation": "Hydrogen ions are reduced to hydrogen gas at the negative cathode.",
    "difficulty": 1
  },
  {
    "prompt": "Bleaching powder is manufactured by reacting chlorine gas with:",
    "answer": "Dry slaked lime [Ca(OH)₂]",
    "question_type": "both",
    "options": [
      "Quicklime [CaO]",
      "Dry slaked lime [Ca(OH)₂]",
      "Calcium carbonate [CaCO₃]",
      "Limestone"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Dry slaked lime.",
    "explanation": "Bleaching powder is prepared by passing chlorine gas over dry slaked lime: Ca(OH)₂ + Cl₂ -> CaOCl₂ + H₂O.",
    "difficulty": 1
  },
  {
    "prompt": "The representative chemical formula for bleaching powder is:",
    "answer": "Ca(ClO)₂ (often written as CaOCl₂)",
    "question_type": "both",
    "options": [
      "CaCl₂",
      "Ca(ClO)₂ (often written as CaOCl₂)",
      "Ca(ClO₃)₂",
      "CaClO₄"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "CaOCl₂.",
    "explanation": "Commonly written as CaOCl₂ or Ca(ClO)₂.",
    "difficulty": 1
  },
  {
    "prompt": "Which compound is widely used as a chemical disinfectant to make drinking water free from germs?",
    "answer": "Bleaching powder",
    "question_type": "both",
    "options": [
      "Sodium chloride",
      "Baking soda",
      "Bleaching powder",
      "Plaster of Paris"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Bleaching powder.",
    "explanation": "Bleaching powder releases chlorine in solution, acting as a germicide and disinfectant.",
    "difficulty": 1
  },
  {
    "prompt": "What are the raw materials used in the Solvay-type production of baking soda (NaHCO₃)?",
    "answer": "NaCl, H₂O, CO₂, NH₃",
    "question_type": "both",
    "options": [
      "NaCl, H₂O, CO₂, NH₃",
      "NaOH, HCl, CaO",
      "Na₂CO₃, H₂SO₄, HNO₃",
      "CaCl₂, NH₄OH, CO₂"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "NaCl, H₂O, CO₂, NH₃.",
    "explanation": "NaCl + H₂O + CO₂ + NH₃ -> NH₄Cl + NaHCO₃.",
    "difficulty": 1
  },
  {
    "prompt": "Baking powder is a mixture of baking soda (NaHCO₃) and a mild edible organic acid, usually:",
    "answer": "Tartaric acid",
    "question_type": "both",
    "options": [
      "Hydrochloric acid",
      "Tartaric acid",
      "Sulphuric acid",
      "Nitric acid"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Tartaric acid.",
    "explanation": "Tartaric acid neutralises sodium carbonate produced upon heating, preventing a bitter taste.",
    "difficulty": 1
  },
  {
    "prompt": "Bread or cake rises and becomes soft and spongy because of the evolution of:",
    "answer": "Carbon dioxide gas",
    "question_type": "both",
    "options": [
      "Hydrogen gas",
      "Carbon dioxide gas",
      "Oxygen gas",
      "Nitrogen gas"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Carbon dioxide gas.",
    "explanation": "Bubbles of trapped CO₂ expand during heating, causing dough to rise into a porous, spongy structure.",
    "difficulty": 1
  },
  {
    "prompt": "What is the chemical formula of washing soda crystals?",
    "answer": "Na₂CO₃·10H₂O",
    "question_type": "both",
    "options": [
      "Na₂CO₃·H₂O",
      "Na₂CO₃·5H₂O",
      "Na₂CO₃·10H₂O",
      "NaHCO₃·10H₂O"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Na₂CO₃·10H₂O.",
    "explanation": "Washing soda crystals contain 10 molecules of water of crystallisation: Na₂CO₃·10H₂O.",
    "difficulty": 1
  },
  {
    "prompt": "Which sodium compound is used industrially for removing permanent hardness of water?",
    "answer": "Sodium carbonate decahydrate (washing soda)",
    "question_type": "both",
    "options": [
      "Sodium chloride",
      "Sodium carbonate decahydrate (washing soda)",
      "Sodium hydrogencarbonate",
      "Sodium hydroxide"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "Washing soda.",
    "explanation": "Washing soda precipitates soluble calcium and magnesium ions as insoluble carbonates, softening hard water.",
    "difficulty": 1
  },
  {
    "prompt": "When blue copper sulphate crystals (CuSO₄·5H₂O) are strongly heated in a boiling tube, they turn:",
    "answer": "White",
    "question_type": "both",
    "options": [
      "Black",
      "White",
      "Green",
      "Yellow"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "White.",
    "explanation": "Heating drives off the 5 water molecules of crystallisation, leaving anhydrous white CuSO₄.",
    "difficulty": 1
  },
  {
    "prompt": "Plaster of Paris is produced by heating gypsum (CaSO₄·2H₂O) at which precise temperature?",
    "answer": "373 K (100 °C)",
    "question_type": "both",
    "options": [
      "273 K",
      "373 K (100 °C)",
      "473 K",
      "573 K"
    ],
    "category": "Class 10th: Acids, Bases and Salts",
    "tags": "class-10,chemistry,acids-bases-salts",
    "hint": "373 K.",
    "explanation": "Heating gypsum at 373 K (100 °C) yields calcium sulphate hemihydrate: CaSO₄·0.5H₂O.",
    "difficulty": 1
  },
  {
    "prompt": "Which of the following is NOT an observation indicating that a chemical reaction has taken place?",
    "answer": "Change in mass",
    "question_type": "both",
    "options": [
      "Change in state",
      "Change in temperature",
      "Change in mass",
      "Evolution of a gas"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Change in mass...",
    "explanation": "Mass is conserved during a chemical reaction (Law of conservation of mass); change in mass does not indicate a reaction.",
    "difficulty": 1
  },
  {
    "prompt": "Why is a magnesium ribbon cleaned with sandpaper before burning in air?",
    "answer": "To remove the protective layer of basic magnesium oxide/carbonate",
    "question_type": "both",
    "options": [
      "To reduce its ignition temperature",
      "To remove the protective layer of basic magnesium oxide/carbonate",
      "To make the ribbon flexible",
      "To increase its density"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of To remove the protective layer...",
    "explanation": "Sandpaper rubs away the inert layer of basic magnesium oxide/carbonate so that clean metal can react with atmospheric oxygen.",
    "difficulty": 1
  },
  {
    "prompt": "When magnesium ribbon burns in air, it produces a:",
    "answer": "Dazzling white flame and white powder",
    "question_type": "both",
    "options": [
      "Yellow flame with black residue",
      "Dazzling white flame and white powder",
      "Blue flame with brown residue",
      "Red flame and gas"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Dazzling white flame and white...",
    "explanation": "Magnesium burns with a brilliant, dazzling white light, leaving behind white magnesium oxide powder.",
    "difficulty": 1
  },
  {
    "prompt": "What is the chemical formula of the white powder formed when magnesium burns in air?",
    "answer": "MgO",
    "question_type": "both",
    "options": [
      "Mg(OH)2",
      "MgCO3",
      "MgO",
      "Mg3N2"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Think about the chemical reaction principles.",
    "explanation": "2Mg + O2 -> 2MgO.",
    "difficulty": 1
  },
  {
    "prompt": "What is observed when potassium iodide solution is added to lead nitrate solution?",
    "answer": "A yellow precipitate is formed",
    "question_type": "both",
    "options": [
      "A yellow precipitate is formed",
      "A white precipitate is formed",
      "A brown gas is evolved",
      "The solution turns colourless"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of A yellow precipitate is formed...",
    "explanation": "An insoluble bright yellow precipitate of lead iodide (PbI2) is formed.",
    "difficulty": 1
  },
  {
    "prompt": "The yellow precipitate formed in the reaction between lead nitrate and potassium iodide is:",
    "answer": "Lead iodide",
    "question_type": "both",
    "options": [
      "Potassium nitrate",
      "Lead oxide",
      "Lead iodide",
      "Lead sulphate"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Lead iodide...",
    "explanation": "Insoluble lead iodide (PbI2) precipitates out.",
    "difficulty": 1
  },
  {
    "prompt": "When dilute sulphuric acid or hydrochloric acid is added to zinc granules in a conical flask, which gas is evolved?",
    "answer": "Hydrogen",
    "question_type": "both",
    "options": [
      "Oxygen",
      "Hydrogen",
      "Sulphur dioxide",
      "Carbon dioxide"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Hydrogen...",
    "explanation": "Active metals like zinc displace hydrogen from dilute acids: Zn + H2SO4 -> ZnSO4 + H2^.",
    "difficulty": 1
  },
  {
    "prompt": "Touching the conical flask during the reaction between zinc granules and dilute sulphuric acid reveals:",
    "answer": "A rise in temperature (exothermic)",
    "question_type": "both",
    "options": [
      "A drop in temperature (endothermic)",
      "A rise in temperature (exothermic)",
      "No change in temperature",
      "Rapid freezing of liquid"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of A rise in temperature (exother...",
    "explanation": "The reaction between zinc and dilute acid is exothermic; the flask gets warm.",
    "difficulty": 1
  },
  {
    "prompt": "Which of the following daily life situations represents a chemical change?",
    "answer": "Respiration",
    "question_type": "both",
    "options": [
      "Melting of ice",
      "Respiration",
      "Dissolving sugar in water",
      "Boiling of water"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Respiration...",
    "explanation": "Respiration breaks down glucose chemically into CO2, H2O, and energy.",
    "difficulty": 1
  },
  {
    "prompt": "Fermentation of grapes is classified as a:",
    "answer": "Chemical change",
    "question_type": "both",
    "options": [
      "Physical change",
      "Chemical change",
      "Temporary change",
      "Reversible physical process"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Chemical change...",
    "explanation": "Microbial enzymes convert sugars into alcohol and carbon dioxide, forming new chemical substances.",
    "difficulty": 1
  },
  {
    "prompt": "A chemical equation in which the number of atoms of each element on the reactant side is not equal to that on the product side is called a:",
    "answer": "Skeletal equation",
    "question_type": "both",
    "options": [
      "Balanced equation",
      "Skeletal equation",
      "Proportional equation",
      "Complete equation"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Skeletal equation...",
    "explanation": "An unbalanced chemical equation is termed a skeletal equation.",
    "difficulty": 1
  },
  {
    "prompt": "Chemical equations must be balanced to satisfy the:",
    "answer": "Law of conservation of mass",
    "question_type": "both",
    "options": [
      "Law of constant proportions",
      "Law of conservation of mass",
      "Law of multiple proportions",
      "Avogadro's hypothesis"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Law of conservation of mass...",
    "explanation": "Matter cannot be created or destroyed, requiring atom counts to match on both sides.",
    "difficulty": 1
  },
  {
    "prompt": "In the balanced equation: xFe + yH2O -> zFe3O4 + wH2, the values of x, y, z, and w are respectively:",
    "answer": "3, 4, 1, 4",
    "question_type": "both",
    "options": [
      "3, 4, 1, 4",
      "1, 1, 1, 1",
      "3, 2, 1, 2",
      "2, 4, 1, 3"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of 3, 4, 1, 4...",
    "explanation": "3Fe + 4H2O -> Fe3O4 + 4H2 gives x=3, y=4, z=1, w=4.",
    "difficulty": 1
  },
  {
    "prompt": "In the reaction: 3Fe(s) + 4H2O(g) -> Fe3O4(s) + 4H2(g), the physical state of water is:",
    "answer": "Steam (gaseous)",
    "question_type": "both",
    "options": [
      "Liquid",
      "Ice",
      "Steam (gaseous)",
      "Aqueous solution"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Steam (gaseous)...",
    "explanation": "Water is supplied in the form of steam, denoted by the state symbol (g).",
    "difficulty": 1
  },
  {
    "prompt": "What notation is used to represent a substance dissolved in water as a solvent?",
    "answer": "(aq)",
    "question_type": "both",
    "options": [
      "(l)",
      "(s)",
      "(g)",
      "(aq)"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Think about the chemical reaction principles.",
    "explanation": "The abbreviation (aq) stands for aqueous (dissolved in water).",
    "difficulty": 1
  },
  {
    "prompt": "What are the coefficients p, q, r when balancing: pHNO3 + Ca(OH)2 -> qCa(NO3)2 + rH2O?",
    "answer": "p=2, q=1, r=2",
    "question_type": "both",
    "options": [
      "p=1, q=1, r=1",
      "p=2, q=1, r=2",
      "p=2, q=2, r=1",
      "p=1, q=2, r=2"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of p=2, q=1, r=2...",
    "explanation": "2HNO3 + Ca(OH)2 -> Ca(NO3)2 + 2H2O.",
    "difficulty": 1
  },
  {
    "prompt": "What are the stoichiometric coefficients a, b, c, d for: aAl + bCuCl2 -> cAlCl3 + dCu?",
    "answer": "2, 3, 2, 3",
    "question_type": "both",
    "options": [
      "2, 3, 2, 3",
      "1, 2, 1, 2",
      "3, 2, 3, 2",
      "2, 2, 2, 3"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of 2, 3, 2, 3...",
    "explanation": "2Al + 3CuCl2 -> 2AlCl3 + 3Cu.",
    "difficulty": 1
  },
  {
    "prompt": "What is the balanced chemical equation for the synthesis of ammonia from hydrogen and nitrogen?",
    "answer": "N2 + 3H2 -> 2NH3",
    "question_type": "both",
    "options": [
      "N2 + H2 -> NH3",
      "N2 + 3H2 -> 2NH3",
      "2N2 + 3H2 -> 2NH3",
      "N + 3H -> NH3"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of N2 + 3H2 -> 2NH3...",
    "explanation": "Nitrogen and hydrogen combine in a 1:3 molar ratio to yield 2 moles of ammonia: N2 + 3H2 -> 2NH3.",
    "difficulty": 1
  },
  {
    "prompt": "When potassium metal reacts with water, the products formed are:",
    "answer": "KOH and H2",
    "question_type": "both",
    "options": [
      "K2O and H2",
      "KOH and H2",
      "KO2 and O2",
      "KOH and O2"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of KOH and H2...",
    "explanation": "Alkali metals react vigorously with water: 2K + 2H2O -> 2KOH + H2^.",
    "difficulty": 1
  },
  {
    "prompt": "The reaction between carbon monoxide and hydrogen at 340 atm produces:",
    "answer": "Methanol (CH3OH)",
    "question_type": "both",
    "options": [
      "Methanoic acid",
      "Methane",
      "Methanol (CH3OH)",
      "Ethanol"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Methanol (CH3OH)...",
    "explanation": "High-pressure catalytic hydrogenation of CO yields liquid methanol: CO(g) + 2H2(g) -> CH3OH(l).",
    "difficulty": 1
  },
  {
    "prompt": "In the equation: 6CO2(aq) + 12H2O(l) -> C6H12O6(aq) + 6O2(aq) + 6H2O(l), sunlight and chlorophyll are written:",
    "answer": "Above and below the arrow",
    "question_type": "both",
    "options": [
      "As reactants on the LHS",
      "Above and below the arrow",
      "Alongside products on the RHS",
      "In parentheses as state symbols"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Above and below the arrow...",
    "explanation": "External reaction conditions like temperature, light, and catalysts are written above or below the reaction arrow.",
    "difficulty": 1
  },
  {
    "prompt": "Balance the equation: BaCl2 + Al2(SO4)3 -> BaSO4 + AlCl3. The coefficient of BaSO4 is:",
    "answer": "3",
    "question_type": "both",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Think about the chemical reaction principles.",
    "explanation": "3BaCl2 + Al2(SO4)3 -> 3BaSO4 (ppt) + 2AlCl3.",
    "difficulty": 1
  },
  {
    "prompt": "While balancing a chemical equation, one must NEVER:",
    "answer": "Change the subscripts in chemical formulas",
    "question_type": "both",
    "options": [
      "Change the coefficients in front of formulas",
      "Change the subscripts in chemical formulas",
      "Count atoms on both sides",
      "Use fractional coefficients temporarily"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Change the subscripts in chemi...",
    "explanation": "Modifying subscripts alters the chemical identity of the substance, which violates chemical rules.",
    "difficulty": 1
  },
  {
    "prompt": "The burning of hydrogen sulphide gas in air yields water and sulphur dioxide. The balanced equation is:",
    "answer": "2H2S + 3O2 -> 2H2O + 2SO2",
    "question_type": "both",
    "options": [
      "H2S + O2 -> H2O + SO2",
      "2H2S + 3O2 -> 2H2O + 2SO2",
      "H2S + 2O2 -> H2O + SO2",
      "2H2S + O2 -> 2H2O + 2S"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of 2H2S + 3O2 -> 2H2O + 2SO2...",
    "explanation": "2H2S + 3O2 -> 2H2O + 2SO2.",
    "difficulty": 1
  },
  {
    "prompt": "Which of the following equations represents a correctly balanced skeletal equation?",
    "answer": "2Mg + O2 -> 2MgO",
    "question_type": "both",
    "options": [
      "Mg + O2 -> MgO",
      "2Mg + O2 -> 2MgO",
      "2Mg + 2O2 -> 2MgO",
      "Mg + 2O2 -> 2MgO2"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of 2Mg + O2 -> 2MgO...",
    "explanation": "Two atoms of Mg and two atoms of O are balanced on both sides: 2Mg + O2 -> 2MgO.",
    "difficulty": 1
  },
  {
    "prompt": "A reaction in which two or more reactants combine to form a single product is called a:",
    "answer": "Combination reaction",
    "question_type": "both",
    "options": [
      "Decomposition reaction",
      "Combination reaction",
      "Displacement reaction",
      "Double displacement reaction"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Combination reaction...",
    "explanation": "In combination reactions, A + B -> AB (a single product is formed).",
    "difficulty": 1
  },
  {
    "prompt": "What is the chemical name and formula of quick lime?",
    "answer": "Calcium oxide, CaO",
    "question_type": "both",
    "options": [
      "Calcium carbonate, CaCO3",
      "Calcium oxide, CaO",
      "Calcium hydroxide, Ca(OH)2",
      "Calcium sulphate, CaSO4"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Calcium oxide, CaO...",
    "explanation": "Quick lime is chemically calcium oxide, CaO.",
    "difficulty": 1
  },
  {
    "prompt": "When water is added to quick lime, the reaction that occurs is:",
    "answer": "Exothermic and forms slaked lime",
    "question_type": "both",
    "options": [
      "Endothermic and forms slaked lime",
      "Exothermic and forms slaked lime",
      "Photochemical and forms lime water",
      "Decomposition producing calcium metal"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Exothermic and forms slaked li...",
    "explanation": "Quick lime combines violently with water, releasing significant heat: CaO + H2O -> Ca(OH)2 + heat.",
    "difficulty": 1
  },
  {
    "prompt": "The chemical formula of slaked lime is:",
    "answer": "Ca(OH)2",
    "question_type": "both",
    "options": [
      "CaO",
      "CaCO3",
      "Ca(OH)2",
      "CaCl2"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Ca(OH)2...",
    "explanation": "Slaked lime is calcium hydroxide, Ca(OH)2.",
    "difficulty": 1
  },
  {
    "prompt": "The clear solution of slaked lime applied to walls for whitewashing reacts slowly with which atmospheric gas?",
    "answer": "Carbon dioxide",
    "question_type": "both",
    "options": [
      "Oxygen",
      "Nitrogen",
      "Carbon dioxide",
      "Hydrogen"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Carbon dioxide...",
    "explanation": "Atmospheric CO2 reacts with wet slaked lime on the wall surface.",
    "difficulty": 1
  },
  {
    "prompt": "The shiny white finish on walls after 2 to 3 days of whitewashing is due to the formation of:",
    "answer": "Calcium carbonate",
    "question_type": "both",
    "options": [
      "Calcium oxide",
      "Calcium carbonate",
      "Calcium bicarbonate",
      "Calcium sulphate"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Calcium carbonate...",
    "explanation": "A hard, shiny layer of calcium carbonate forms: Ca(OH)2 + CO2 -> CaCO3 + H2O.",
    "difficulty": 1
  },
  {
    "prompt": "What is the chemical formula of marble?",
    "answer": "CaCO3",
    "question_type": "both",
    "options": [
      "Ca(OH)2",
      "CaO",
      "CaCO3",
      "CaSO4"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Think about the chemical reaction principles.",
    "explanation": "Marble, limestone, and chalk are chemically all CaCO3.",
    "difficulty": 1
  },
  {
    "prompt": "The combustion of coal: C(s) + O2(g) -> CO2(g) is an example of a:",
    "answer": "Both a combination and an exothermic reaction",
    "question_type": "both",
    "options": [
      "Combination reaction only",
      "Exothermic reaction only",
      "Both a combination and an exothermic reaction",
      "Decomposition reaction"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Both a combination and an exot...",
    "explanation": "Carbon combines with oxygen to form a single product while releasing heat energy.",
    "difficulty": 1
  },
  {
    "prompt": "Reactions that release heat energy along with the formation of products are known as:",
    "answer": "Exothermic reactions",
    "question_type": "both",
    "options": [
      "Endothermic reactions",
      "Exothermic reactions",
      "Photolytic reactions",
      "Electrochemical reactions"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Exothermic reactions...",
    "explanation": "Heat-releasing reactions are exothermic reactions.",
    "difficulty": 1
  },
  {
    "prompt": "Which of the following is the balanced equation for the burning of natural gas (methane)?",
    "answer": "CH4 + 2O2 -> CO2 + 2H2O + heat",
    "question_type": "both",
    "options": [
      "CH4 + O2 -> CO2 + H2O",
      "CH4 + 2O2 -> CO2 + 2H2O + heat",
      "2CH4 + 3O2 -> 2CO + 4H2O",
      "CH4 + O2 -> C + 2H2O"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of CH4 + 2O2 -> CO2 + 2H2O + heat...",
    "explanation": "CH4 + 2O2 -> CO2 + 2H2O + energy.",
    "difficulty": 1
  },
  {
    "prompt": "Why is cellular respiration classified as an exothermic process?",
    "answer": "It breaks down glucose in cells, releasing energy",
    "question_type": "both",
    "options": [
      "It absorbs atmospheric heat",
      "It breaks down glucose in cells, releasing energy",
      "It requires sunlight to proceed",
      "It consumes carbon dioxide"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of It breaks down glucose in cell...",
    "explanation": "Glucose is oxidized inside cells, liberating bio-energy stored as ATP.",
    "difficulty": 2
  },
  {
    "prompt": "The decomposition of vegetable matter into compost is an example of:",
    "answer": "An exothermic reaction",
    "question_type": "both",
    "options": [
      "An endothermic reaction",
      "An exothermic reaction",
      "A displacement reaction",
      "A photolytic reaction"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of An exothermic reaction...",
    "explanation": "Microbial breakdown of organic matter releases thermal energy, making it exothermic.",
    "difficulty": 2
  },
  {
    "prompt": "A chemical reaction in which a single compound breaks down into two or more simpler substances is called a:",
    "answer": "Decomposition reaction",
    "question_type": "both",
    "options": [
      "Combination reaction",
      "Displacement reaction",
      "Decomposition reaction",
      "Redox reaction"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Decomposition reaction...",
    "explanation": "Decomposition involves a single parent compound splitting into multiple simpler fragments.",
    "difficulty": 2
  },
  {
    "prompt": "What is the initial colour of ferrous sulphate crystals (FeSO4 . 7H2O)?",
    "answer": "Green",
    "question_type": "both",
    "options": [
      "Blue",
      "Green",
      "Brown",
      "White"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Think about the chemical reaction principles.",
    "explanation": "Hydrated ferrous sulphate crystals (FeSO4 . 7H2O) are pale green.",
    "difficulty": 2
  },
  {
    "prompt": "On heating ferrous sulphate crystals, which gases are evolved that possess a characteristic odour of burning sulphur?",
    "answer": "SO2 and SO3",
    "question_type": "both",
    "options": [
      "H2S and SO2",
      "SO2 and SO3",
      "SO2 and O2",
      "SO3 and CO2"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of SO2 and SO3...",
    "explanation": "Thermal breakdown yields choking sulphur dioxide (SO2) and sulphur trioxide (SO3).",
    "difficulty": 2
  },
  {
    "prompt": "What is the solid residue left behind after strongly heating ferrous sulphate crystals?",
    "answer": "Fe2O3 (reddish-brown)",
    "question_type": "both",
    "options": [
      "FeO (black)",
      "Fe2O3 (reddish-brown)",
      "Fe3O4 (magnetic)",
      "Fe (grey)"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Fe2O3 (reddish-brown)...",
    "explanation": "Solid anhydrous ferrous sulphate decomposes to leave reddish-brown ferric oxide (Fe2O3).",
    "difficulty": 2
  },
  {
    "prompt": "When calcium carbonate is heated strongly, the products obtained are:",
    "answer": "CaO and CO2",
    "question_type": "both",
    "options": [
      "Ca and CO2",
      "CaO and CO2",
      "Ca(OH)2 and CO",
      "CaO and O2"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of CaO and CO2...",
    "explanation": "CaCO3 -> CaO + CO2^.",
    "difficulty": 2
  },
  {
    "prompt": "A thermal decomposition reaction that is used extensively in the industrial manufacture of cement is the decomposition of:",
    "answer": "Calcium carbonate (limestone)",
    "question_type": "both",
    "options": [
      "Lead nitrate",
      "Calcium carbonate (limestone)",
      "Ferrous sulphate",
      "Silver chloride"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Calcium carbonate (limestone)...",
    "explanation": "Calcination of limestone gives quicklime (CaO), an essential component of Portland cement.",
    "difficulty": 2
  },
  {
    "prompt": "What colour of fumes is emitted when lead nitrate powder is heated in a boiling tube?",
    "answer": "Brown",
    "question_type": "both",
    "options": [
      "White",
      "Yellow",
      "Brown",
      "Violet"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Think about the chemical reaction principles.",
    "explanation": "Dense brown fumes of nitrogen dioxide (NO2) gas are evolved.",
    "difficulty": 2
  },
  {
    "prompt": "The brown fumes emitted during the thermal decomposition of lead nitrate consist of:",
    "answer": "Nitrogen dioxide (NO2)",
    "question_type": "both",
    "options": [
      "Lead oxide",
      "Nitrogen dioxide (NO2)",
      "Nitrous oxide (N2O)",
      "Oxygen gas"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Nitrogen dioxide (NO2)...",
    "explanation": "Nitrogen dioxide (NO2) is an acidic, reddish-brown gas.",
    "difficulty": 2
  },
  {
    "prompt": "The solid residue left in the test tube after the thermal decomposition of lead nitrate is:",
    "answer": "Yellow lead(II) oxide (PbO)",
    "question_type": "both",
    "options": [
      "White lead nitrate",
      "Yellow lead(II) oxide (PbO)",
      "Grey lead metal",
      "Red lead"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Yellow lead(II) oxide (PbO)...",
    "explanation": "Thermal decomposition leaves behind yellow lead(II) oxide residue (PbO).",
    "difficulty": 2
  },
  {
    "prompt": "The balanced chemical equation for the thermal decomposition of lead nitrate is:",
    "answer": "2Pb(NO3)2 -> 2PbO + 4NO2 + O2",
    "question_type": "both",
    "options": [
      "Pb(NO3)2 -> PbO + NO2 + O2",
      "2Pb(NO3)2 -> 2PbO + 4NO2 + O2",
      "2Pb(NO3)2 -> 2Pb + 2NO2 + 3O2",
      "Pb(NO3)2 -> PbO2 + 2NO"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of 2Pb(NO3)2 -> 2PbO + 4NO2 + O2...",
    "explanation": "2Pb(NO3)2(s) -> 2PbO(s) + 4NO2(g) + O2(g).",
    "difficulty": 2
  },
  {
    "prompt": "In the electrolysis of water, why are a few drops of dilute sulphuric acid added to pure water?",
    "answer": "To make water a good conductor of electricity",
    "question_type": "both",
    "options": [
      "To prevent corrosion of electrodes",
      "To make water a good conductor of electricity",
      "To act as a catalyst",
      "To increase the boiling point"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of To make water a good conductor...",
    "explanation": "Distilled water is non-conductive; acid provides mobile ions for electrical conduction.",
    "difficulty": 2
  },
  {
    "prompt": "During the electrolytic decomposition of water, hydrogen gas is collected at the:",
    "answer": "Cathode (negative electrode)",
    "question_type": "both",
    "options": [
      "Anode (positive electrode)",
      "Cathode (negative electrode)",
      "Bottom of the mug",
      "Both electrodes equally"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Cathode (negative electrode)...",
    "explanation": "Hydrogen ions (H^+) are reduced at the cathode: 2H^+ + 2e^- -> H2.",
    "difficulty": 2
  },
  {
    "prompt": "During the electrolysis of water, oxygen gas is collected at the:",
    "answer": "Anode (positive electrode)",
    "question_type": "both",
    "options": [
      "Anode (positive electrode)",
      "Cathode (negative electrode)",
      "Rubber stopper",
      "Carbon rod surface only"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Anode (positive electrode)...",
    "explanation": "Hydroxide ions or oxide ions are oxidized at the anode: 2H2O -> O2 + 4H^+ + 4e^-.",
    "difficulty": 2
  },
  {
    "prompt": "What is the ratio by volume of hydrogen to oxygen gas evolved during the electrolysis of water?",
    "answer": "2:1",
    "question_type": "both",
    "options": [
      "1:1",
      "1:2",
      "2:1",
      "8:1"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Think about the chemical reaction principles.",
    "explanation": "The stoichiometric ratio of H to O in H2O is 2:1, producing twice the volume of hydrogen gas.",
    "difficulty": 2
  },
  {
    "prompt": "What colour change occurs when white silver chloride is placed in sunlight?",
    "answer": "It turns grey",
    "question_type": "both",
    "options": [
      "It turns black",
      "It turns yellow",
      "It turns grey",
      "It turns brown"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of It turns grey...",
    "explanation": "Sunlight decomposes silver chloride into silver metal, which appears grey.",
    "difficulty": 2
  },
  {
    "prompt": "The grey colour of silver chloride after exposure to sunlight is due to the formation of:",
    "answer": "Metallic silver",
    "question_type": "both",
    "options": [
      "Silver oxide",
      "Metallic silver",
      "Chlorine gas",
      "Silver nitrate"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Metallic silver...",
    "explanation": "Photolytic reduction leaves finely divided grey silver metal: 2AgCl -> 2Ag + Cl2.",
    "difficulty": 2
  },
  {
    "prompt": "Which two silver halides are used in black and white photography due to their photolytic decomposition?",
    "answer": "AgCl and AgBr",
    "question_type": "both",
    "options": [
      "AgF and AgCl",
      "AgCl and AgBr",
      "AgBr and AgI",
      "Ag2O and AgNO3"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of AgCl and AgBr...",
    "explanation": "Both AgCl and AgBr undergo light-induced photodecomposition.",
    "difficulty": 2
  },
  {
    "prompt": "Reactions that absorb energy in the form of heat, light, or electricity to proceed are called:",
    "answer": "Endothermic reactions",
    "question_type": "both",
    "options": [
      "Exothermic reactions",
      "Endothermic reactions",
      "Combustion reactions",
      "Neutralisation reactions"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Endothermic reactions...",
    "explanation": "Endothermic reactions absorb energy from their surrounding environment.",
    "difficulty": 2
  },
  {
    "prompt": "A reaction in which a more reactive element displaces a less reactive element from its compound is called a:",
    "answer": "Displacement reaction",
    "question_type": "both",
    "options": [
      "Combination reaction",
      "Decomposition reaction",
      "Displacement reaction",
      "Neutralisation reaction"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Displacement reaction...",
    "explanation": "In displacement reactions, a more reactive element replaces a less reactive element from its solution.",
    "difficulty": 2
  },
  {
    "prompt": "What change in colour is observed in the copper sulphate solution when clean iron nails are immersed in it?",
    "answer": "Blue fades and turns light green",
    "question_type": "both",
    "options": [
      "Blue turns colourless",
      "Blue fades and turns light green",
      "Colourless turns deep blue",
      "Blue turns yellow"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Blue fades and turns light gre...",
    "explanation": "Blue Cu^2+} ions are replaced by light-green Fe^2+} ions: FeSO4 is formed.",
    "difficulty": 2
  },
  {
    "prompt": "What deposit appears on the surface of iron nails immersed in copper sulphate solution?",
    "answer": "Brownish copper coating",
    "question_type": "both",
    "options": [
      "White powdery coating",
      "Brownish copper coating",
      "Black carbon coating",
      "Yellow sulphur coating"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Brownish copper coating...",
    "explanation": "Displaced metallic copper deposits on the iron nails as a reddish-brown layer.",
    "difficulty": 2
  },
  {
    "prompt": "The chemical equation: Fe(s) + CuSO4(aq) -> FeSO4(aq) + Cu(s) demonstrates that:",
    "answer": "Iron is more reactive than copper",
    "question_type": "both",
    "options": [
      "Copper is more reactive than iron",
      "Iron is more reactive than copper",
      "Iron and copper have equal reactivity",
      "Iron is less reactive than zinc"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Iron is more reactive than cop...",
    "explanation": "Iron lies above copper in the electrochemical reactivity series.",
    "difficulty": 2
  },
  {
    "prompt": "When zinc granules are dipped in copper sulphate solution, the blue solution becomes:",
    "answer": "Colourless",
    "question_type": "both",
    "options": [
      "Dark blue",
      "Colourless",
      "Green",
      "Red"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Colourless...",
    "explanation": "Zinc sulphate (ZnSO4) is formed, which produces a completely colourless solution.",
    "difficulty": 2
  },
  {
    "prompt": "What is formed when zinc displaces copper from copper sulphate solution?",
    "answer": "Zinc sulphate and copper",
    "question_type": "both",
    "options": [
      "Zinc oxide",
      "Zinc sulphate and copper",
      "Zinc sulphide and cuprous oxide",
      "Zinc chloride"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Zinc sulphate and copper...",
    "explanation": "Zn + CuSO4 -> ZnSO4 + Cu.",
    "difficulty": 2
  },
  {
    "prompt": "In the reaction: Pb(s) + CuCl2(aq) -> PbCl2(aq) + Cu(s), lead is:",
    "answer": "More reactive than copper",
    "question_type": "both",
    "options": [
      "Less reactive than copper",
      "More reactive than copper",
      "Equal in reactivity to copper",
      "Acting as a catalyst"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of More reactive than copper...",
    "explanation": "Lead is higher than copper in the reactivity series and displaces it: Pb + CuCl2 -> PbCl2 + Cu.",
    "difficulty": 2
  },
  {
    "prompt": "Which of the following metals CANNOT displace copper from copper sulphate solution?",
    "answer": "Silver",
    "question_type": "both",
    "options": [
      "Iron",
      "Zinc",
      "Lead",
      "Silver"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Silver...",
    "explanation": "Silver is less reactive than copper and cannot displace it from its salt solution.",
    "difficulty": 2
  },
  {
    "prompt": "What happens when copper metal is added to an iron sulphate solution?",
    "answer": "No reaction takes place",
    "question_type": "both",
    "options": [
      "Iron is displaced",
      "Solution turns blue",
      "No reaction takes place",
      "Hydrogen gas is evolved"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of No reaction takes place...",
    "explanation": "Copper is less reactive than iron, so no displacement occurs.",
    "difficulty": 2
  },
  {
    "prompt": "In the thermite-type reaction: Fe2O3 + 2Al -> Al2O3 + 2Fe, this is an example of a:",
    "answer": "Displacement reaction",
    "question_type": "both",
    "options": [
      "Combination reaction",
      "Double displacement reaction",
      "Displacement reaction",
      "Thermal decomposition reaction"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Displacement reaction...",
    "explanation": "Aluminium displaces iron from iron(III) oxide.",
    "difficulty": 2
  },
  {
    "prompt": "What happens when dilute hydrochloric acid is added to iron filings?",
    "answer": "Hydrogen gas and iron(II) chloride are produced",
    "question_type": "both",
    "options": [
      "Hydrogen gas and iron(II) chloride are produced",
      "Chlorine gas and iron hydroxide are produced",
      "No reaction takes place",
      "Iron oxide and water are produced"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Hydrogen gas and iron(II) chlo...",
    "explanation": "Fe + 2HCl -> FeCl2 + H2^.",
    "difficulty": 2
  },
  {
    "prompt": "In the recovery of silver from silver nitrate solution in silver refining, which metal is commonly used for displacement?",
    "answer": "Copper",
    "question_type": "both",
    "options": [
      "Gold",
      "Copper",
      "Platinum",
      "Mercury"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Copper...",
    "explanation": "Copper displaces silver economically: Cu + 2AgNO3 -> Cu(NO3)2 + 2Ag.",
    "difficulty": 2
  },
  {
    "prompt": "The balanced chemical equation for the displacement of silver by copper from silver nitrate is:",
    "answer": "Cu + 2AgNO3 -> Cu(NO3)2 + 2Ag",
    "question_type": "both",
    "options": [
      "Cu + AgNO3 -> CuNO3 + Ag",
      "Cu + 2AgNO3 -> Cu(NO3)2 + 2Ag",
      "2Cu + AgNO3 -> Cu2NO3 + Ag",
      "Cu + Ag(NO3)2 -> Cu(NO3)2 + Ag"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Cu + 2AgNO3 -> Cu(NO3)2 + 2Ag...",
    "explanation": "Copper forms a +2 oxidation state in copper(II) nitrate.",
    "difficulty": 2
  },
  {
    "prompt": "Reactions in which there is an mutual exchange of ions between two reactants are termed:",
    "answer": "Double displacement reactions",
    "question_type": "both",
    "options": [
      "Single displacement reactions",
      "Double displacement reactions",
      "Combination reactions",
      "Thermal reactions"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Double displacement reactions...",
    "explanation": "Double displacement reactions involve the exchange of ions between two aqueous ionic salts.",
    "difficulty": 2
  },
  {
    "prompt": "What is formed when sodium sulphate solution is mixed with barium chloride solution?",
    "answer": "A white precipitate of barium sulphate",
    "question_type": "both",
    "options": [
      "A yellow precipitate of barium sulphate",
      "A white precipitate of barium sulphate",
      "A blue precipitate of sodium chloride",
      "A brown gas of chlorine"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of A white precipitate of barium ...",
    "explanation": "Insoluble barium sulphate precipitates out as a white solid.",
    "difficulty": 2
  },
  {
    "prompt": "An insoluble substance that separates out from a solution during a chemical reaction is called a:",
    "answer": "Precipitate",
    "question_type": "both",
    "options": [
      "Solute",
      "Solvent",
      "Precipitate",
      "Distillate"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Precipitate...",
    "explanation": "An insoluble solid separating out from an aqueous solution is a precipitate.",
    "difficulty": 2
  },
  {
    "prompt": "What is the ionic interaction responsible for the precipitate in: Na2SO4(aq) + BaCl2(aq) -> BaSO4(s) + 2NaCl(aq)?",
    "answer": "Ba^2+} and SO4^2-}",
    "question_type": "both",
    "options": [
      "Na^+ and Cl^-",
      "Ba^2+} and SO4^2-}",
      "Ba^2+} and Cl^-",
      "Na^+ and SO4^2-}"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Ba^2+} and SO4^2-}...",
    "explanation": "The net ionic precipitate is formed by: Ba^2+}(aq) + SO4^2-}(aq) -> BaSO4(s) (ppt).",
    "difficulty": 2
  },
  {
    "prompt": "Any reaction that results in the formation of an insoluble product can be termed a:",
    "answer": "Precipitation reaction",
    "question_type": "both",
    "options": [
      "Neutralisation reaction",
      "Precipitation reaction",
      "Combustion reaction",
      "Dehydration reaction"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Precipitation reaction...",
    "explanation": "Any chemical process generating an insoluble solid is termed a precipitation reaction.",
    "difficulty": 2
  },
  {
    "prompt": "When lead nitrate solution is mixed with potassium iodide solution, the chemical equation is:",
    "answer": "Pb(NO3)2 + 2KI -> PbI2(s) + 2KNO3(aq)",
    "question_type": "both",
    "options": [
      "Pb(NO3)2 + KI -> PbI + KNO3",
      "Pb(NO3)2 + 2KI -> PbI2(s) + 2KNO3(aq)",
      "2PbNO3 + KI2 -> PbI2 + 2KNO3",
      "Pb(NO3)2 + 2KI -> PbK2 + 2INO3"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Pb(NO3)2 + 2KI -> PbI2(s) + 2K...",
    "explanation": "Pb(NO3)2(aq) + 2KI(aq) -> PbI2(s) (ppt) + 2KNO3(aq).",
    "difficulty": 2
  },
  {
    "prompt": "The reaction between lead nitrate and potassium iodide is an example of:",
    "answer": "Both double displacement and precipitation",
    "question_type": "both",
    "options": [
      "Only double displacement",
      "Only precipitation",
      "Both double displacement and precipitation",
      "Decomposition"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Both double displacement and p...",
    "explanation": "Ions are exchanged (double displacement) and an insoluble precipitate forms.",
    "difficulty": 2
  },
  {
    "prompt": "Which of the following equations represents a double displacement reaction?",
    "answer": "NaCl + AgNO3 -> AgCl + NaNO3",
    "question_type": "both",
    "options": [
      "2H2 + O2 -> 2H2O",
      "Zn + 2HCl -> ZnCl2 + H2",
      "NaCl + AgNO3 -> AgCl + NaNO3",
      "CaCO3 -> CaO + CO2"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of NaCl + AgNO3 -> AgCl + NaNO3...",
    "explanation": "Ag^+ and Na^+ ions switch partner anions (Cl^- and NO3^-).",
    "difficulty": 3
  },
  {
    "prompt": "What is the colour of the silver chloride precipitate formed when NaCl reacts with AgNO3?",
    "answer": "White",
    "question_type": "both",
    "options": [
      "Yellow",
      "White",
      "Green",
      "Reddish brown"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Think about the chemical reaction principles.",
    "explanation": "Silver chloride is an insoluble white curd-like precipitate.",
    "difficulty": 3
  },
  {
    "prompt": "When barium chloride reacts with aluminium sulphate, the white precipitate formed is:",
    "answer": "Barium sulphate",
    "question_type": "both",
    "options": [
      "Aluminium chloride",
      "Barium sulphate",
      "Barium sulphide",
      "Aluminium oxide"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Barium sulphate...",
    "explanation": "Insoluble barium sulphate precipitates: 3BaCl2 + Al2(SO4)3 -> 3BaSO4 (ppt) + 2AlCl3.",
    "difficulty": 3
  },
  {
    "prompt": "What happens when potassium hydroxide reacts with hydrochloric acid?",
    "answer": "A double displacement neutralisation producing KCl and H2O",
    "question_type": "both",
    "options": [
      "A double displacement neutralisation producing KCl and H2O",
      "A displacement reaction producing hydrogen gas",
      "A decomposition reaction producing chlorine gas",
      "A precipitation of insoluble potassium chloride"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of A double displacement neutrali...",
    "explanation": "Acid-base neutralisation is a double displacement without precipitation: KOH + HCl -> KCl + H2O.",
    "difficulty": 3
  },
  {
    "prompt": "Which of the following is NOT a precipitation reaction?",
    "answer": "NaOH(aq) + HCl(aq) -> NaCl(aq) + H2O(l)",
    "question_type": "both",
    "options": [
      "BaCl2(aq) + Na2SO4(aq) -> BaSO4(s) + 2NaCl(aq)",
      "AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq)",
      "Pb(NO3)2(aq) + 2KI(aq) -> PbI2(s) + 2KNO3(aq)",
      "NaOH(aq) + HCl(aq) -> NaCl(aq) + H2O(l)"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of NaOH(aq) + HCl(aq) -> NaCl(aq)...",
    "explanation": "Both products (NaCl and H2O) are fully soluble; no precipitate is formed.",
    "difficulty": 3
  },
  {
    "prompt": "Oxidation is defined as:",
    "answer": "Gain of oxygen or loss of hydrogen",
    "question_type": "both",
    "options": [
      "Loss of oxygen or gain of hydrogen",
      "Gain of oxygen or loss of hydrogen",
      "Gain of electrons only",
      "Loss of protons"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Gain of oxygen or loss of hydr...",
    "explanation": "Oxidation involves gaining oxygen or losing hydrogen atoms.",
    "difficulty": 3
  },
  {
    "prompt": "Reduction is defined as:",
    "answer": "Loss of oxygen or gain of hydrogen",
    "question_type": "both",
    "options": [
      "Gain of oxygen or loss of hydrogen",
      "Loss of oxygen or gain of hydrogen",
      "Loss of electrons only",
      "Gain of neutrons"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Loss of oxygen or gain of hydr...",
    "explanation": "Reduction involves losing oxygen or gaining hydrogen atoms.",
    "difficulty": 3
  },
  {
    "prompt": "When copper powder is heated strongly in a china dish, it becomes coated with a black layer of:",
    "answer": "CuO",
    "question_type": "both",
    "options": [
      "Cu2O",
      "CuO",
      "CuCO3",
      "Cu(OH)2"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Think about the chemical reaction principles.",
    "explanation": "Copper oxidizes on surface exposure to air: 2Cu + O2 -> 2CuO (black).",
    "difficulty": 3
  },
  {
    "prompt": "In the reaction: 2Cu + O2 -> 2CuO, copper is:",
    "answer": "Oxidised",
    "question_type": "both",
    "options": [
      "Reduced",
      "Oxidised",
      "Decomposed",
      "Displaced"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Oxidised...",
    "explanation": "Copper combines with oxygen, which represents oxidation.",
    "difficulty": 3
  },
  {
    "prompt": "When hydrogen gas is passed over heated black CuO, the surface turns brown because:",
    "answer": "Copper oxide is reduced back to metallic copper",
    "question_type": "both",
    "options": [
      "Copper is oxidised to copper oxide",
      "Copper oxide is reduced back to metallic copper",
      "Water reacts with copper",
      "Hydrogen chloride is formed"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Copper oxide is reduced back t...",
    "explanation": "CuO + H2 -> Cu + H2O; black CuO is reduced to reddish-brown copper metal.",
    "difficulty": 3
  },
  {
    "prompt": "In the reaction: CuO + H2 -> Cu + H2O, identify the oxidised and reduced substances:",
    "answer": "Oxidised: H2; Reduced: CuO",
    "question_type": "both",
    "options": [
      "Oxidised: CuO; Reduced: H2",
      "Oxidised: H2; Reduced: CuO",
      "Oxidised: Cu; Reduced: H2O",
      "Both are oxidised"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Oxidised: H2; Reduced: CuO...",
    "explanation": "H2 gains oxygen (oxidised to H2O); CuO loses oxygen (reduced to Cu).",
    "difficulty": 3
  },
  {
    "prompt": "In the redox reaction: ZnO + C -> Zn + CO, the reducing agent is:",
    "answer": "C",
    "question_type": "both",
    "options": [
      "ZnO",
      "C",
      "Zn",
      "CO"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Think about the chemical reaction principles.",
    "explanation": "Carbon removes oxygen from ZnO, acting as the reducing agent.",
    "difficulty": 3
  },
  {
    "prompt": "In the reaction: MnO2 + 4HCl -> MnCl2 + 2H2O + Cl2, which substance is oxidised?",
    "answer": "HCl",
    "question_type": "both",
    "options": [
      "MnO2",
      "HCl",
      "MnCl2",
      "Cl2"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Think about the chemical reaction principles.",
    "explanation": "HCl loses hydrogen and is oxidised to Cl2.",
    "difficulty": 3
  },
  {
    "prompt": "For the reaction: 2PbO + C -> 2Pb + CO2, which of the following statements are correct? (i) Lead is getting reduced. (ii) Carbon dioxide is getting oxidised. (iii) Carbon is getting oxidised. (iv) Lead oxide is getting reduced.",
    "answer": "(iii) and (iv)",
    "question_type": "both",
    "options": [
      "(i) and (ii)",
      "(iii) and (iv)",
      "(i), (ii) and (iii)",
      "All of the above"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of (iii) and (iv)...",
    "explanation": "Carbon gains oxygen (is oxidised); Lead(II) oxide loses oxygen (is reduced). Statements (iii) and (iv) are correct.",
    "difficulty": 3
  },
  {
    "prompt": "In the reaction: 4Na(s) + O2(g) -> 2Na2O(s), sodium undergoes:",
    "answer": "Oxidation",
    "question_type": "both",
    "options": [
      "Reduction",
      "Oxidation",
      "Decomposition",
      "Dissociation"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Oxidation...",
    "explanation": "Sodium gains oxygen to form sodium oxide, so it is oxidised.",
    "difficulty": 3
  },
  {
    "prompt": "The gradual deterioration of metals caused by the action of air, moisture, or chemicals is called:",
    "answer": "Corrosion",
    "question_type": "both",
    "options": [
      "Rancidity",
      "Corrosion",
      "Reduction",
      "Calcination"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Corrosion...",
    "explanation": "Electrochemical or chemical degradation of metals by atmospheric elements is called corrosion.",
    "difficulty": 3
  },
  {
    "prompt": "The reddish-brown flaky coating formed on iron articles left exposed in a humid atmosphere is commonly known as:",
    "answer": "Rust",
    "question_type": "both",
    "options": [
      "Verdigris",
      "Rust",
      "Slag",
      "Tarnish"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Think about the chemical reaction principles.",
    "explanation": "Rust is hydrated ferric oxide (Fe2O3 . xH2O).",
    "difficulty": 3
  },
  {
    "prompt": "What is the colour of the coating developed on silver articles when tarnished in air?",
    "answer": "Black",
    "question_type": "both",
    "options": [
      "Green",
      "Black",
      "Reddish-brown",
      "Yellow"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Think about the chemical reaction principles.",
    "explanation": "Silver turns black due to the formation of a surface layer of silver sulphide (Ag2S).",
    "difficulty": 3
  },
  {
    "prompt": "Silver articles turn black after prolonged exposure to air due to the formation of:",
    "answer": "Silver sulphide",
    "question_type": "both",
    "options": [
      "Silver oxide",
      "Silver sulphide",
      "Silver carbonate",
      "Silver sulphate"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Silver sulphide...",
    "explanation": "Silver reacts with traces of atmospheric hydrogen sulphide (H2S) to produce black Ag2S.",
    "difficulty": 3
  },
  {
    "prompt": "Copper vessels develop a green coating over time when exposed to moist air due to the formation of:",
    "answer": "Basic copper carbonate",
    "question_type": "both",
    "options": [
      "Copper sulphate",
      "Basic copper carbonate",
      "Copper chloride",
      "Cuprous oxide"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Basic copper carbonate...",
    "explanation": "Moist air containing CO2 and H2O forms green basic copper carbonate [CuCO3 . Cu(OH)2].",
    "difficulty": 3
  },
  {
    "prompt": "When fats and oils present in food are oxidised, they turn foul-smelling and bitter-tasting. This process is called:",
    "answer": "Rancidity",
    "question_type": "both",
    "options": [
      "Fermentation",
      "Corrosion",
      "Rancidity",
      "Neutralisation"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Rancidity...",
    "explanation": "Oxidation of unsaturated fats and oils produces volatile, foul-smelling compounds; this is rancidity.",
    "difficulty": 3
  },
  {
    "prompt": "Which of the following methods is commonly used to prevent or slow down rancidity in oily foods?",
    "answer": "All of these",
    "question_type": "both",
    "options": [
      "Adding antioxidants",
      "Storing food in airtight containers",
      "Refrigerating food",
      "All of these"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of All of these...",
    "explanation": "Antioxidants, airtight packaging, and cool storage all inhibit or slow oxidation of lipids.",
    "difficulty": 3
  },
  {
    "prompt": "Potato chip manufacturers flush bags of chips with which unreactive gas to prevent oxidation?",
    "answer": "Nitrogen",
    "question_type": "both",
    "options": [
      "Oxygen",
      "Carbon monoxide",
      "Nitrogen",
      "Chlorine"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Nitrogen...",
    "explanation": "Nitrogen is an unreactive gas that displaces oxygen and prevents oxidative rancidity.",
    "difficulty": 3
  },
  {
    "prompt": "Why is paint applied to iron articles?",
    "answer": "To prevent air and moisture from coming in direct contact with iron",
    "question_type": "both",
    "options": [
      "To give them an attractive colour only",
      "To prevent air and moisture from coming in direct contact with iron",
      "To make the iron softer",
      "To increase the electrical conductivity of iron"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of To prevent air and moisture fr...",
    "explanation": "Paint acts as a physical barrier preventing air and moisture from reaching the iron surface.",
    "difficulty": 3
  },
  {
    "prompt": "Rancidity in fat- and oil-containing food items is an example of an everyday:",
    "answer": "Oxidation reaction",
    "question_type": "both",
    "options": [
      "Reduction reaction",
      "Oxidation reaction",
      "Precipitation reaction",
      "Endothermic decomposition reaction"
    ],
    "category": "Class 10th: Chemical Reactions and Equations",
    "tags": "chemistry,class10,reactions,equations",
    "hint": "Recall properties of Oxidation reaction...",
    "explanation": "Rancidity is caused by the aerial oxidation of fats and oils.",
    "difficulty": 3
  }
];
