"""Fill Practice View - Interactive type-in answer practice mode."""
import customtkinter as ctk
from typing import List, Optional
from ...core.database import DatabaseManager
from ...core.models import Question
from ...theme.theme_manager import ThemeManager
from ..components.card import ModernCard, ToastNotification

class FillPracticeView(ctk.CTkFrame):
    def __init__(self, master, db: DatabaseManager, **kwargs):
        self.theme_mgr = ThemeManager()
        super().__init__(master, fg_color="transparent", **kwargs)
        self.db = db
        
        self.deck: List[Question] = []
        self.current_idx = 0
        self.has_submitted = False

        self._build_ui()
        self.load_deck()

    def _build_ui(self):
        self.grid_columnconfigure(0, weight=1)
        self.grid_rowconfigure(2, weight=1)

        # 1. Top Control Bar
        top_bar = ctk.CTkFrame(self, fg_color="transparent")
        top_bar.grid(row=0, column=0, sticky="ew", padx=24, pady=(16, 8))
        top_bar.grid_columnconfigure(1, weight=1)

        header_frame = ctk.CTkFrame(top_bar, fg_color="transparent")
        header_frame.grid(row=0, column=0, sticky="w")
        
        lbl_title = ctk.CTkLabel(
            header_frame,
            text="Fill Practise",
            font=ctk.CTkFont(size=22, weight="bold"),
            text_color=self.theme_mgr.color("fg_primary")
        )
        lbl_title.pack(anchor="w")

        lbl_subtitle = ctk.CTkLabel(
            header_frame,
            text="Active recall practice: Type in your answer and test exact knowledge.",
            font=ctk.CTkFont(size=12),
            text_color=self.theme_mgr.color("fg_muted")
        )
        lbl_subtitle.pack(anchor="w")

        controls_frame = ctk.CTkFrame(top_bar, fg_color="transparent")
        controls_frame.grid(row=0, column=2, sticky="e")

        self.cat_var = ctk.StringVar(value="All")
        self.cat_dropdown = ctk.CTkOptionMenu(
            controls_frame,
            variable=self.cat_var,
            values=["All"],
            command=lambda _: self.load_deck(),
            width=160,
            fg_color=self.theme_mgr.color("bg_card"),
            button_color=self.theme_mgr.color("accent_primary")
        )
        self.cat_dropdown.pack(side="left", padx=6)

        btn_reload = ctk.CTkButton(
            controls_frame,
            text="↻ Restart Deck",
            command=self.load_deck,
            width=120,
            fg_color=self.theme_mgr.color("bg_card"),
            hover_color=self.theme_mgr.color("bg_card_secondary")
        )
        btn_reload.pack(side="left", padx=6)

        # 2. Progress bar & counter
        prog_frame = ctk.CTkFrame(self, fg_color="transparent")
        prog_frame.grid(row=1, column=0, sticky="ew", padx=24, pady=4)
        prog_frame.grid_columnconfigure(0, weight=1)

        self.progress_bar = ctk.CTkProgressBar(
            prog_frame,
            fg_color=self.theme_mgr.color("bg_card_secondary"),
            progress_color=self.theme_mgr.color("accent_primary"),
            height=6
        )
        self.progress_bar.grid(row=0, column=0, sticky="ew", pady=(4, 2))
        self.progress_bar.set(0)

        self.lbl_counter = ctk.CTkLabel(
            prog_frame,
            text="Question 0 of 0",
            font=ctk.CTkFont(size=12, weight="bold"),
            text_color=self.theme_mgr.color("fg_secondary")
        )
        self.lbl_counter.grid(row=1, column=0, sticky="e", pady=(2, 0))

        # 3. Central Practice Container
        self.container = ModernCard(
            self,
            corner_radius=16,
            fg_color=self.theme_mgr.color("bg_card"),
            border_width=1,
            border_color=self.theme_mgr.color("border_color")
        )
        self.container.grid(row=2, column=0, sticky="nsew", padx=24, pady=12)
        self.container.grid_columnconfigure(0, weight=1)
        self.container.grid_rowconfigure(1, weight=1)

        # Header tag
        card_header = ctk.CTkFrame(self.container, fg_color="transparent")
        card_header.grid(row=0, column=0, sticky="ew", padx=24, pady=(18, 6))

        self.badge_category = ctk.CTkLabel(
            card_header,
            text="General",
            font=ctk.CTkFont(size=12, weight="bold"),
            text_color=self.theme_mgr.color("accent_primary"),
            fg_color=self.theme_mgr.color("bg_card_secondary"),
            corner_radius=6,
            padx=10,
            pady=4
        )
        self.badge_category.pack(side="left")

        # Question Prompt Box
        prompt_box = ctk.CTkFrame(self.container, fg_color="transparent")
        prompt_box.grid(row=1, column=0, sticky="nsew", padx=32, pady=12)
        prompt_box.grid_columnconfigure(0, weight=1)
        prompt_box.grid_rowconfigure(0, weight=1)

        self.lbl_prompt = ctk.CTkLabel(
            prompt_box,
            text="Prompt will appear here",
            font=ctk.CTkFont(size=20, weight="bold"),
            text_color=self.theme_mgr.color("fg_primary"),
            wraplength=720,
            justify="center"
        )
        self.lbl_prompt.grid(row=0, column=0, sticky="nsew")

        # Input Box + Verification section
        input_area = ctk.CTkFrame(self.container, fg_color="transparent")
        input_area.grid(row=2, column=0, sticky="ew", padx=32, pady=(0, 16))
        input_area.grid_columnconfigure(0, weight=1)

        self.txt_answer_input = ctk.CTkEntry(
            input_area,
            placeholder_text="Type your answer here...",
            height=44,
            font=ctk.CTkFont(size=14),
            fg_color=self.theme_mgr.color("bg_input"),
            border_color=self.theme_mgr.color("border_color")
        )
        self.txt_answer_input.grid(row=0, column=0, sticky="ew", padx=(0, 12))
        self.txt_answer_input.bind("<Return>", lambda e: self.on_action_button())

        self.btn_action = ctk.CTkButton(
            input_area,
            text="Check Answer",
            command=self.on_action_button,
            height=44,
            width=140,
            fg_color=self.theme_mgr.color("accent_primary"),
            hover_color=self.theme_mgr.color("accent_hover"),
            font=ctk.CTkFont(size=14, weight="bold")
        )
        self.btn_action.grid(row=0, column=1)

        # Feedback & Reveal Area
        self.feedback_box = ctk.CTkFrame(self.container, fg_color="transparent")
        self.feedback_box.grid(row=3, column=0, sticky="ew", padx=32, pady=(0, 18))
        self.feedback_box.grid_columnconfigure(0, weight=1)

        self.lbl_result = ctk.CTkLabel(
            self.feedback_box,
            text="",
            font=ctk.CTkFont(size=14, weight="bold")
        )
        self.lbl_result.grid(row=0, column=0, sticky="w", pady=(2, 4))

        self.lbl_explanation = ctk.CTkLabel(
            self.feedback_box,
            text="",
            font=ctk.CTkFont(size=12),
            text_color=self.theme_mgr.color("fg_secondary"),
            wraplength=700,
            justify="left"
        )
        self.lbl_explanation.grid(row=1, column=0, sticky="w")

    def refresh_categories(self):
        cats = ["All"] + self.db.get_categories()
        self.cat_dropdown.configure(values=cats)
        if self.cat_var.get() not in cats:
            self.cat_var.set("All")

    def load_deck(self):
        self.refresh_categories()
        category = self.cat_var.get()
        self.deck = self.db.get_fill_practice_deck(category=category, limit=100)
        self.current_idx = 0
        self.has_submitted = False
        self.update_question_display()

    def update_question_display(self):
        self.txt_answer_input.delete(0, "end")
        self.lbl_result.configure(text="")
        self.lbl_explanation.configure(text="")
        self.has_submitted = False
        self.btn_action.configure(text="Check Answer", fg_color=self.theme_mgr.color("accent_primary"))
        self.txt_answer_input.configure(state="normal")

        if not self.deck:
            self.lbl_counter.configure(text="0 / 0")
            self.progress_bar.set(0)
            self.badge_category.configure(text="Empty")
            self.lbl_prompt.configure(text="No questions found for Fill Practise.\nAdd or import questions in Question Bank!")
            self.btn_action.configure(state="disabled")
            return

        self.btn_action.configure(state="normal")
        total = len(self.deck)
        current = self.current_idx + 1
        self.lbl_counter.configure(text=f"Question {current} of {total}")
        self.progress_bar.set(current / total)

        q = self.deck[self.current_idx]
        self.badge_category.configure(text=q.category or "General")
        self.lbl_prompt.configure(text=q.prompt)
        self.txt_answer_input.focus()

    def on_action_button(self):
        if not self.deck:
            return

        if not self.has_submitted:
            # Check answer
            user_ans = self.txt_answer_input.get().strip()
            if not user_ans:
                ToastNotification.show(self, "Please type an answer first", "warning")
                return

            q = self.deck[self.current_idx]
            correct_ans = q.answer.strip()
            is_correct = user_ans.lower() == correct_ans.lower()

            self.has_submitted = True
            self.txt_answer_input.configure(state="disabled")

            if is_correct:
                self.lbl_result.configure(
                    text=f"✓ Correct! Exact match: {correct_ans}",
                    text_color=self.theme_mgr.color("accent_success")
                )
            else:
                self.lbl_result.configure(
                    text=f"✗ Not quite. The correct answer is: {correct_ans}",
                    text_color=self.theme_mgr.color("accent_danger")
                )

            if q.explanation:
                self.lbl_explanation.configure(text=f"Explanation: {q.explanation}")

            self.btn_action.configure(text="Next Question →", fg_color=self.theme_mgr.color("accent_purple"))
        else:
            # Move to next
            self.current_idx += 1
            if self.current_idx >= len(self.deck):
                ToastNotification.show(self, "🎉 Great work! You finished the Fill Practice session.", "success")
                self.load_deck()
            else:
                self.update_question_display()
