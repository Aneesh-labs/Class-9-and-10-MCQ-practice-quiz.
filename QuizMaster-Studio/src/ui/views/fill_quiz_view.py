"""Fill The Quiz View - Full-length / timed type-in exam quiz with auto-grading."""
import customtkinter as ctk
import time
from typing import List, Optional
from ...core.database import DatabaseManager
from ...core.models import Question, QuizSession, QuizResult
from ...theme.theme_manager import ThemeManager
from ..components.card import ModernCard, StatBadge, ToastNotification
from .quiz_summary_view import QuizSummaryView

class FillQuizView(ctk.CTkFrame):
    def __init__(self, master, db: DatabaseManager, **kwargs):
        self.theme_mgr = ThemeManager()
        super().__init__(master, fg_color="transparent", **kwargs)
        self.db = db

        self.in_quiz = False
        self.questions: List[Question] = []
        self.current_idx = 0
        self.results: List[QuizResult] = []

        self.time_limit_sec = 45
        self.remaining_sec = 45
        self.timer_job = None
        self.quiz_start_time = 0.0

        self._build_ui()

    def _build_ui(self):
        self.grid_columnconfigure(0, weight=1)
        self.grid_rowconfigure(0, weight=1)

        # 1. Setup / Launcher Screen Frame
        self.frame_setup = ctk.CTkFrame(self, fg_color="transparent")
        self.frame_setup.grid(row=0, column=0, sticky="nsew", padx=24, pady=20)
        self.frame_setup.grid_columnconfigure(0, weight=1)

        # Title
        lbl_title = ctk.CTkLabel(
            self.frame_setup,
            text="Fill the Quiz (Type-in Exam)",
            font=ctk.CTkFont(size=24, weight="bold"),
            text_color=self.theme_mgr.color("fg_primary")
        )
        lbl_title.pack(anchor="w", pady=(0, 4))

        lbl_desc = ctk.CTkLabel(
            self.frame_setup,
            text="Simulate a real test environment without multiple-choice hints. Type answers from memory and receive full diagnostic grading.",
            font=ctk.CTkFont(size=13),
            text_color=self.theme_mgr.color("fg_muted")
        )
        lbl_desc.pack(anchor="w", pady=(0, 20))

        # Config Card
        cfg_card = ModernCard(self.frame_setup, corner_radius=16)
        cfg_card.pack(fill="x", pady=10)
        cfg_card.grid_columnconfigure((0, 1), weight=1)

        # Category
        ctk.CTkLabel(cfg_card, text="Select Category:", font=ctk.CTkFont(size=13, weight="bold")).grid(row=0, column=0, sticky="w", padx=24, pady=(20, 4))
        self.setup_cat_var = ctk.StringVar(value="All")
        self.setup_cat_dropdown = ctk.CTkOptionMenu(
            cfg_card,
            variable=self.setup_cat_var,
            values=["All"],
            height=36,
            fg_color=self.theme_mgr.color("bg_input"),
            button_color=self.theme_mgr.color("accent_purple")
        )
        self.setup_cat_dropdown.grid(row=1, column=0, sticky="ew", padx=24, pady=(0, 16))

        # Question count
        ctk.CTkLabel(cfg_card, text="Number of Questions:", font=ctk.CTkFont(size=13, weight="bold")).grid(row=0, column=1, sticky="w", padx=24, pady=(20, 4))
        self.setup_count_var = ctk.StringVar(value="10")
        self.setup_count_dropdown = ctk.CTkOptionMenu(
            cfg_card,
            variable=self.setup_count_var,
            values=["5", "10", "15", "20", "25"],
            height=36,
            fg_color=self.theme_mgr.color("bg_input"),
            button_color=self.theme_mgr.color("accent_purple")
        )
        self.setup_count_dropdown.grid(row=1, column=1, sticky="ew", padx=24, pady=(0, 16))

        # Timer per question
        ctk.CTkLabel(cfg_card, text="Timer Per Question:", font=ctk.CTkFont(size=13, weight="bold")).grid(row=2, column=0, sticky="w", padx=24, pady=(0, 4))
        self.setup_timer_var = ctk.StringVar(value="45 seconds")
        self.setup_timer_dropdown = ctk.CTkOptionMenu(
            cfg_card,
            variable=self.setup_timer_var,
            values=["No Limit", "20 seconds", "30 seconds", "45 seconds", "60 seconds"],
            height=36,
            fg_color=self.theme_mgr.color("bg_input"),
            button_color=self.theme_mgr.color("accent_purple")
        )
        self.setup_timer_dropdown.grid(row=3, column=0, sticky="ew", padx=24, pady=(0, 24))

        # Launch Button
        btn_start = ctk.CTkButton(
            self.frame_setup,
            text="✍️ Start Fill-In Exam",
            command=self.start_quiz,
            height=48,
            font=ctk.CTkFont(size=16, weight="bold"),
            fg_color=self.theme_mgr.color("accent_purple"),
            hover_color="#b06db0"
        )
        btn_start.pack(fill="x", pady=16)

        # 2. Active Quiz Screen Frame
        self.frame_active = ctk.CTkFrame(self, fg_color="transparent")
        self.frame_active.grid_columnconfigure(0, weight=1)
        self.frame_active.grid_rowconfigure(2, weight=1)

        # Top status bar
        status_bar = ctk.CTkFrame(self.frame_active, fg_color="transparent")
        status_bar.grid(row=0, column=0, sticky="ew", padx=24, pady=(16, 8))
        status_bar.grid_columnconfigure(1, weight=1)

        self.lbl_quiz_progress = ctk.CTkLabel(
            status_bar,
            text="Question 1 of 10",
            font=ctk.CTkFont(size=16, weight="bold"),
            text_color=self.theme_mgr.color("fg_primary")
        )
        self.lbl_quiz_progress.grid(row=0, column=0, sticky="w")

        self.lbl_timer = ctk.CTkLabel(
            status_bar,
            text="⏱️ 45s",
            font=ctk.CTkFont(size=16, weight="bold"),
            text_color=self.theme_mgr.color("accent_warning")
        )
        self.lbl_timer.grid(row=0, column=2, sticky="e")

        # Question Card
        self.quiz_card = ModernCard(self.frame_active, corner_radius=16)
        self.quiz_card.grid(row=2, column=0, sticky="nsew", padx=24, pady=12)
        self.quiz_card.grid_columnconfigure(0, weight=1)
        self.quiz_card.grid_rowconfigure(1, weight=1)

        # Category badge
        self.quiz_cat_badge = ctk.CTkLabel(
            self.quiz_card,
            text="Category",
            font=ctk.CTkFont(size=12, weight="bold"),
            text_color=self.theme_mgr.color("accent_purple"),
            fg_color=self.theme_mgr.color("bg_card_secondary"),
            corner_radius=6,
            padx=10,
            pady=4
        )
        self.quiz_cat_badge.grid(row=0, column=0, sticky="w", padx=24, pady=(18, 6))

        # Prompt
        self.lbl_quiz_prompt = ctk.CTkLabel(
            self.quiz_card,
            text="",
            font=ctk.CTkFont(size=18, weight="bold"),
            text_color=self.theme_mgr.color("fg_primary"),
            wraplength=700,
            justify="center"
        )
        self.lbl_quiz_prompt.grid(row=1, column=0, sticky="nsew", padx=32, pady=12)

        # Text input field
        input_container = ctk.CTkFrame(self.quiz_card, fg_color="transparent")
        input_container.grid(row=2, column=0, sticky="ew", padx=32, pady=(0, 24))
        input_container.grid_columnconfigure(0, weight=1)

        self.txt_exam_input = ctk.CTkEntry(
            input_container,
            placeholder_text="Type your exact answer here...",
            height=46,
            font=ctk.CTkFont(size=14),
            fg_color=self.theme_mgr.color("bg_input"),
            border_color=self.theme_mgr.color("border_color")
        )
        self.txt_exam_input.grid(row=0, column=0, sticky="ew")
        self.txt_exam_input.bind("<Return>", lambda e: self.submit_input_and_next())

        # Next button
        self.btn_next_question = ctk.CTkButton(
            self.frame_active,
            text="Save & Next Question →",
            command=self.submit_input_and_next,
            height=44,
            font=ctk.CTkFont(size=14, weight="bold"),
            fg_color=self.theme_mgr.color("accent_purple"),
            hover_color="#b06db0"
        )
        self.btn_next_question.grid(row=3, column=0, sticky="ew", padx=24, pady=(0, 20))

        # 3. Quiz Results Screen Frame
        self.frame_results = ctk.CTkFrame(self, fg_color="transparent")
        self.frame_results.grid_columnconfigure(0, weight=1)

        self.lbl_res_title = ctk.CTkLabel(
            self.frame_results,
            text="Exam Completed & Graded!",
            font=ctk.CTkFont(size=24, weight="bold"),
            text_color=self.theme_mgr.color("accent_success")
        )
        self.lbl_res_title.pack(pady=(20, 8))

        self.res_score_badge = StatBadge(self.frame_results, title="Overall Accuracy", value="100%", icon="🎓", accent_color=self.theme_mgr.color("accent_purple"))
        self.res_score_badge.pack(fill="x", padx=40, pady=8)

        # Results review scrollable frame
        self.scroll_results = ctk.CTkScrollableFrame(
            self.frame_results,
            height=340,
            fg_color=self.theme_mgr.color("bg_card")
        )
        self.scroll_results.pack(fill="both", expand=True, padx=40, pady=12)

        btn_retake = ctk.CTkButton(
            self.frame_results,
            text="↺ Back to Exam Hub",
            command=self.show_setup_screen,
            height=44,
            font=ctk.CTkFont(size=14, weight="bold"),
            fg_color=self.theme_mgr.color("accent_purple")
        )
        btn_retake.pack(fill="x", padx=40, pady=(0, 20))

        self.refresh_categories()

    def refresh_categories(self):
        cats = ["All"] + self.db.get_categories()
        self.setup_cat_dropdown.configure(values=cats)
        if self.setup_cat_var.get() not in cats:
            self.setup_cat_var.set("All")

    def show_setup_screen(self):
        self._stop_timer()
        self.in_quiz = False
        self.frame_active.grid_forget()
        self.frame_results.grid_forget()
        self.frame_setup.grid(row=0, column=0, sticky="nsew", padx=24, pady=20)
        self.refresh_categories()

    def start_quiz(self):
        cat = self.setup_cat_var.get()
        count = int(self.setup_count_var.get())
        
        t_val = self.setup_timer_var.get()
        if "20" in t_val:
            self.time_limit_sec = 20
        elif "30" in t_val:
            self.time_limit_sec = 30
        elif "45" in t_val:
            self.time_limit_sec = 45
        elif "60" in t_val:
            self.time_limit_sec = 60
        else:
            self.time_limit_sec = 0

        self.questions = self.db.get_quiz_questions(mode="fill", category=cat, count=count)
        if not self.questions:
            ToastNotification.show(self, "No questions found matching criteria!", "warning")
            return

        self.current_idx = 0
        self.results = []
        self.in_quiz = True
        self.quiz_start_time = time.time()

        self.frame_setup.grid_forget()
        self.frame_results.grid_forget()
        self.frame_active.grid(row=0, column=0, sticky="nsew")

        self.display_current_question()

    def display_current_question(self):
        self._stop_timer()
        q = self.questions[self.current_idx]
        total = len(self.questions)
        current = self.current_idx + 1

        self.lbl_quiz_progress.configure(text=f"Question {current} of {total}")
        self.quiz_cat_badge.configure(text=q.category or "General")
        self.lbl_quiz_prompt.configure(text=q.prompt)
        self.txt_exam_input.delete(0, "end")
        self.txt_exam_input.focus()

        if self.time_limit_sec > 0:
            self.remaining_sec = self.time_limit_sec
            self.lbl_timer.configure(text=f"⏱️ {self.remaining_sec}s", text_color=self.theme_mgr.color("accent_warning"))
            self._tick_timer()
        else:
            self.lbl_timer.configure(text="⏱️ Untimed", text_color=self.theme_mgr.color("fg_muted"))

    def _tick_timer(self):
        if not self.in_quiz or self.time_limit_sec <= 0:
            return
        
        self.lbl_timer.configure(text=f"⏱️ {self.remaining_sec}s")
        if self.remaining_sec <= 5:
            self.lbl_timer.configure(text_color=self.theme_mgr.color("accent_danger"))
        else:
            self.lbl_timer.configure(text_color=self.theme_mgr.color("accent_warning"))

        if self.remaining_sec <= 0:
            ToastNotification.show(self, "⏱️ Time expired on question!", "warning", 2000)
            self.submit_input_and_next()
        else:
            self.remaining_sec -= 1
            self.timer_job = self.after(1000, self._tick_timer)

    def _stop_timer(self):
        if self.timer_job:
            try:
                self.after_cancel(self.timer_job)
            except Exception:
                pass
            self.timer_job = None

    def submit_input_and_next(self):
        self._stop_timer()
        q = self.questions[self.current_idx]
        user_text = self.txt_exam_input.get().strip()
        is_correct = user_text.lower() == q.answer.strip().lower()

        self.results.append(QuizResult(
            question_id=q.id or 0,
            prompt=q.prompt,
            user_answer=user_text if user_text else "(Blank)",
            correct_answer=q.answer,
            is_correct=is_correct,
            explanation=q.explanation
        ))

        self.current_idx += 1
        if self.current_idx >= len(self.questions):
            self.finish_quiz()
        else:
            self.display_current_question()

    def finish_quiz(self):
        self._stop_timer()
        self.in_quiz = False
        total_time = int(time.time() - self.quiz_start_time)
        correct_count = sum(1 for r in self.results if r.is_correct)
        total_count = len(self.results)
        score_pct = (correct_count / total_count * 100.0) if total_count > 0 else 0.0

        # Record in DB
        session = QuizSession(
            quiz_mode="fill_quiz",
            category_filter=self.setup_cat_var.get(),
            total_questions=total_count,
            correct_answers=correct_count,
            score_percentage=score_pct,
            time_taken_seconds=total_time
        )
        self.db.record_quiz_session(session)

        # Hide active quiz frame
        self.frame_active.grid_forget()
        self.frame_results.grid_forget()

        # Show full-screen summary with score ring (purple accent for fill quiz)
        self._summary_view = QuizSummaryView(
            self,
            percentage=score_pct,
            correct=correct_count,
            total=total_count,
            time_sec=total_time,
            results=self.results,
            on_back=self._close_summary,
            accent_color=self.theme_mgr.color("accent_purple"),
        )
        self._summary_view.grid(row=0, column=0, sticky="nsew")

    def _close_summary(self):
        if hasattr(self, "_summary_view") and self._summary_view.winfo_exists():
            self._summary_view.grid_forget()
            self._summary_view.destroy()
        self.show_setup_screen()

