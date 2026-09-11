"""Practice View - Standard Flashcard Flip & SM-2 Spaced Repetition Mode."""
import customtkinter as ctk
from typing import List, Optional
from ...core.database import DatabaseManager
from ...core.models import Question
from ...theme.theme_manager import ThemeManager
from ..components.card import ModernCard, ToastNotification

class PracticeView(ctk.CTkFrame):
    def __init__(self, master, db: DatabaseManager, **kwargs):
        self.theme_mgr = ThemeManager()
        super().__init__(master, fg_color="transparent", **kwargs)
        self.db = db
        
        self.deck: List[Question] = []
        self.current_idx = 0
        self.is_flipped = False

        self._build_ui()
        self.load_deck()

    def _build_ui(self):
        self.grid_columnconfigure(0, weight=1)
        self.grid_rowconfigure(2, weight=1)

        # 1. Top Control Bar (Category filter, shuffle, deck stats)
        top_bar = ctk.CTkFrame(self, fg_color="transparent")
        top_bar.grid(row=0, column=0, sticky="ew", padx=24, pady=(16, 8))
        top_bar.grid_columnconfigure(1, weight=1)

        # Title & subtitle
        header_frame = ctk.CTkFrame(top_bar, fg_color="transparent")
        header_frame.grid(row=0, column=0, sticky="w")
        
        lbl_title = ctk.CTkLabel(
            header_frame,
            text="Practise Flashcards",
            font=ctk.CTkFont(size=22, weight="bold"),
            text_color=self.theme_mgr.color("fg_primary")
        )
        lbl_title.pack(anchor="w")

        self.lbl_subtitle = ctk.CTkLabel(
            header_frame,
            text="Review concepts, flip to inspect answers, and rate difficulty.",
            font=ctk.CTkFont(size=12),
            text_color=self.theme_mgr.color("fg_muted")
        )
        self.lbl_subtitle.pack(anchor="w")

        # Category selection & reload
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
            button_color=self.theme_mgr.color("accent_primary"),
            button_hover_color=self.theme_mgr.color("accent_hover")
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

        # 2. Progress Bar & Card Counter
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
            text="Card 0 of 0",
            font=ctk.CTkFont(size=12, weight="bold"),
            text_color=self.theme_mgr.color("fg_secondary")
        )
        self.lbl_counter.grid(row=1, column=0, sticky="e", pady=(2, 0))

        # 3. Main Central Flashcard (Interactive Flip Box)
        self.card_container = ModernCard(
            self,
            corner_radius=16,
            fg_color=self.theme_mgr.color("bg_card"),
            border_width=1,
            border_color=self.theme_mgr.color("border_color")
        )
        self.card_container.grid(row=2, column=0, sticky="nsew", padx=24, pady=12)
        self.card_container.grid_columnconfigure(0, weight=1)
        self.card_container.grid_rowconfigure(2, weight=1)

        # Card Header (Category tag + Difficulty badge)
        card_header = ctk.CTkFrame(self.card_container, fg_color="transparent")
        card_header.grid(row=0, column=0, sticky="ew", padx=24, pady=(18, 6))
        card_header.grid_columnconfigure(1, weight=1)

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
        self.badge_category.grid(row=0, column=0, sticky="w")

        self.badge_side = ctk.CTkLabel(
            card_header,
            text="QUESTION [CLICK CARD TO FLIP]",
            font=ctk.CTkFont(size=11, weight="bold"),
            text_color=self.theme_mgr.color("fg_muted")
        )
        self.badge_side.grid(row=0, column=2, sticky="e")

        # Card Content (Text prompt / answer display)
        self.card_click_area = ctk.CTkFrame(self.card_container, fg_color="transparent", cursor="hand2")
        self.card_click_area.grid(row=2, column=0, sticky="nsew", padx=32, pady=12)
        self.card_click_area.grid_columnconfigure(0, weight=1)
        self.card_click_area.grid_rowconfigure(0, weight=1)
        self.card_click_area.bind("<Button-1>", lambda e: self.flip_card())

        self.lbl_card_text = ctk.CTkLabel(
            self.card_click_area,
            text="Click 'Restart Deck' or Add Questions to begin.",
            font=ctk.CTkFont(size=20, weight="bold"),
            text_color=self.theme_mgr.color("fg_primary"),
            wraplength=700,
            justify="center",
            cursor="hand2"
        )
        self.lbl_card_text.grid(row=0, column=0, sticky="nsew")
        self.lbl_card_text.bind("<Button-1>", lambda e: self.flip_card())

        # Card Footer Details (Hint & Explanation)
        self.footer_details = ctk.CTkFrame(self.card_container, fg_color="transparent")
        self.footer_details.grid(row=3, column=0, sticky="ew", padx=24, pady=(6, 16))

        self.lbl_hint_exp = ctk.CTkLabel(
            self.footer_details,
            text="💡 Click card or press Spacebar to reveal answer",
            font=ctk.CTkFont(size=12, slant="italic"),
            text_color=self.theme_mgr.color("fg_muted")
        )
        self.lbl_hint_exp.pack()

        # 4. Bottom Action & Spaced Repetition Rating Buttons
        self.bottom_bar = ctk.CTkFrame(self, fg_color="transparent")
        self.bottom_bar.grid(row=3, column=0, sticky="ew", padx=24, pady=(8, 20))
        self.bottom_bar.grid_columnconfigure((0, 1, 2, 3), weight=1)

        # Action ratings (SM-2)
        self.btn_again = ctk.CTkButton(
            self.bottom_bar,
            text="❌ Again (1d)",
            command=lambda: self.rate_card(1),
            fg_color=self.theme_mgr.color("accent_danger"),
            hover_color="#d32f2f",
            height=40,
            font=ctk.CTkFont(size=13, weight="bold")
        )
        self.btn_again.grid(row=0, column=0, padx=6, sticky="ew")

        self.btn_hard = ctk.CTkButton(
            self.bottom_bar,
            text="⚠️ Hard",
            command=lambda: self.rate_card(2),
            fg_color=self.theme_mgr.color("accent_warning"),
            hover_color="#e08200",
            height=40,
            font=ctk.CTkFont(size=13, weight="bold")
        )
        self.btn_hard.grid(row=0, column=1, padx=6, sticky="ew")

        self.btn_good = ctk.CTkButton(
            self.bottom_bar,
            text="👍 Good",
            command=lambda: self.rate_card(4),
            fg_color=self.theme_mgr.color("accent_primary"),
            hover_color=self.theme_mgr.color("accent_hover"),
            height=40,
            font=ctk.CTkFont(size=13, weight="bold")
        )
        self.btn_good.grid(row=0, column=2, padx=6, sticky="ew")

        self.btn_easy = ctk.CTkButton(
            self.bottom_bar,
            text="🌟 Easy",
            command=lambda: self.rate_card(5),
            fg_color=self.theme_mgr.color("accent_success"),
            hover_color="#0d9468",
            height=40,
            font=ctk.CTkFont(size=13, weight="bold")
        )
        self.btn_easy.grid(row=0, column=3, padx=6, sticky="ew")

        self._set_rating_buttons_visible(False)

    def _set_rating_buttons_visible(self, visible: bool):
        state = "normal" if visible else "disabled"
        self.btn_again.configure(state=state)
        self.btn_hard.configure(state=state)
        self.btn_good.configure(state=state)
        self.btn_easy.configure(state=state)

    def refresh_categories(self):
        cats = ["All"] + self.db.get_categories()
        self.cat_dropdown.configure(values=cats)
        if self.cat_var.get() not in cats:
            self.cat_var.set("All")

    def load_deck(self):
        self.refresh_categories()
        category = self.cat_var.get()
        self.deck = self.db.get_practice_deck(category=category, limit=100)
        self.current_idx = 0
        self.is_flipped = False
        self.update_card_display()

    def update_card_display(self):
        if not self.deck:
            self.lbl_counter.configure(text="0 / 0")
            self.progress_bar.set(0)
            self.badge_category.configure(text="Empty")
            self.badge_side.configure(text="")
            self.lbl_card_text.configure(text="No flashcards found in this category.\nAdd some questions in Question Bank!")
            self.lbl_hint_exp.configure(text="")
            self._set_rating_buttons_visible(False)
            return

        total = len(self.deck)
        current = self.current_idx + 1
        self.lbl_counter.configure(text=f"Card {current} of {total}")
        self.progress_bar.set(current / total)

        q = self.deck[self.current_idx]
        self.badge_category.configure(text=q.category or "General")

        if not self.is_flipped:
            self.badge_side.configure(text="PROMPT [CLICK TO FLIP]")
            self.lbl_card_text.configure(text=q.prompt)
            hint_txt = f"💡 Hint: {q.hint}" if q.hint else "💡 Click anywhere on the card to reveal answer"
            self.lbl_hint_exp.configure(text=hint_txt)
            self._set_rating_buttons_visible(False)
        else:
            self.badge_side.configure(text="ANSWER [RATE RECALL BELOW]")
            self.lbl_card_text.configure(text=q.answer)
            exp_txt = f"📝 Explanation: {q.explanation}" if q.explanation else "Rate your recall to schedule next interval:"
            self.lbl_hint_exp.configure(text=exp_txt)
            self._set_rating_buttons_visible(True)

    def flip_card(self):
        if not self.deck:
            return
        self.is_flipped = not self.is_flipped
        self.update_card_display()

    def rate_card(self, rating: int):
        if not self.deck or self.current_idx >= len(self.deck):
            return
        
        q = self.deck[self.current_idx]
        if q.id:
            self.db.record_flashcard_rating(q.id, rating)

        # Move to next card
        self.current_idx += 1
        self.is_flipped = False

        if self.current_idx >= len(self.deck):
            ToastNotification.show(self, "🎉 Fantastic! You completed this flashcard practice deck.", "success")
            self.load_deck()
        else:
            self.update_card_display()
