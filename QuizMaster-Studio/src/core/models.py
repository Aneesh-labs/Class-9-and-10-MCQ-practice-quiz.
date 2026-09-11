"""Data models for Flashcards, Questions, and Quizzes."""
from dataclasses import dataclass, field
from typing import List, Optional
import json

@dataclass
class Question:
    id: Optional[int] = None
    prompt: str = ""
    answer: str = ""
    question_type: str = "both"  # 'flashcard', 'fill_blank', 'mcq', 'both'
    options: List[str] = field(default_factory=list)
    category: str = "General"
    tags: str = ""
    hint: str = ""
    explanation: str = ""
    difficulty: int = 1  # 1: Easy, 2: Medium, 3: Hard
    created_at: Optional[str] = None
    updated_at: Optional[str] = None

    @property
    def options_json(self) -> str:
        return json.dumps(self.options, ensure_ascii=False)

    @classmethod
    def from_row(cls, row: dict) -> 'Question':
        raw_options = row.get('options_json') or '[]'
        try:
            options_list = json.loads(raw_options) if isinstance(raw_options, str) else list(raw_options)
        except Exception:
            options_list = []

        return cls(
            id=row.get('id'),
            prompt=row.get('prompt', ''),
            answer=row.get('answer', ''),
            question_type=row.get('question_type', 'both'),
            options=options_list,
            category=row.get('category', 'General'),
            tags=row.get('tags', ''),
            hint=row.get('hint', ''),
            explanation=row.get('explanation', ''),
            difficulty=row.get('difficulty', 1),
            created_at=row.get('created_at'),
            updated_at=row.get('updated_at')
        )

@dataclass
class FlashcardProgress:
    question_id: int
    repetition_count: int = 0
    ease_factor: float = 2.5
    interval_days: int = 0
    next_review_date: Optional[str] = None
    last_reviewed_date: Optional[str] = None
    times_correct: int = 0
    times_incorrect: int = 0

@dataclass
class QuizResult:
    question_id: int
    prompt: str
    user_answer: str
    correct_answer: str
    is_correct: bool
    explanation: str = ""
    time_taken_seconds: float = 0.0

@dataclass
class QuizSession:
    id: Optional[int] = None
    quiz_mode: str = "mcq_quiz"  # 'mcq_quiz' or 'fill_quiz'
    category_filter: str = "All"
    total_questions: int = 0
    correct_answers: int = 0
    score_percentage: float = 0.0
    time_taken_seconds: int = 0
    completed_at: Optional[str] = None

    @property
    def question_mode(self) -> str:
        return self.quiz_mode
