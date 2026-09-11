"""JSON and CSV import/export handlers."""
import json
import csv
from pathlib import Path
from typing import List, Dict, Any
from .models import Question

class StorageManager:
    @staticmethod
    def export_to_json(questions: List[Question], file_path: str) -> bool:
        try:
            data = []
            for q in questions:
                data.append({
                    "prompt": q.prompt,
                    "answer": q.answer,
                    "question_type": q.question_type,
                    "options": q.options,
                    "category": q.category,
                    "tags": q.tags,
                    "hint": q.hint,
                    "explanation": q.explanation,
                    "difficulty": q.difficulty
                })
            with open(file_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            return True
        except Exception as e:
            print(f"JSON Export Error: {e}")
            return False

    @staticmethod
    def import_from_json(file_path: str) -> List[Question]:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            questions = []
            for item in data:
                if isinstance(item, dict) and 'prompt' in item and 'answer' in item:
                    questions.append(Question(
                        prompt=item.get('prompt', ''),
                        answer=item.get('answer', ''),
                        question_type=item.get('question_type', 'both'),
                        options=item.get('options', []),
                        category=item.get('category', 'General'),
                        tags=item.get('tags', ''),
                        hint=item.get('hint', ''),
                        explanation=item.get('explanation', ''),
                        difficulty=int(item.get('difficulty', 1))
                    ))
            return questions
        except Exception as e:
            print(f"JSON Import Error: {e}")
            return []

    @staticmethod
    def export_to_csv(questions: List[Question], file_path: str) -> bool:
        try:
            with open(file_path, 'w', newline='', encoding='utf-8') as f:
                writer = csv.writer(f)
                writer.writerow(["prompt", "answer", "question_type", "options", "category", "tags", "hint", "explanation", "difficulty"])
                for q in questions:
                    writer.writerow([
                        q.prompt,
                        q.answer,
                        q.question_type,
                        "|".join(q.options),
                        q.category,
                        q.tags,
                        q.hint,
                        q.explanation,
                        q.difficulty
                    ])
            return True
        except Exception as e:
            print(f"CSV Export Error: {e}")
            return False

    @staticmethod
    def import_from_csv(file_path: str) -> List[Question]:
        try:
            questions = []
            with open(file_path, 'r', newline='', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                for row in reader:
                    if 'prompt' in row and 'answer' in row:
                        raw_opts = row.get('options', '')
                        opts = [o.strip() for o in raw_opts.split('|') if o.strip()] if raw_opts else []
                        questions.append(Question(
                            prompt=row.get('prompt', ''),
                            answer=row.get('answer', ''),
                            question_type=row.get('question_type', 'both'),
                            options=opts,
                            category=row.get('category', 'General'),
                            tags=row.get('tags', ''),
                            hint=row.get('hint', ''),
                            explanation=row.get('explanation', ''),
                            difficulty=int(row.get('difficulty', 1) or 1)
                        ))
            return questions
        except Exception as e:
            print(f"CSV Import Error: {e}")
            return []
