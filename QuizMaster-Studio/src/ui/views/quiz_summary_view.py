"""Quiz Summary View - Full-screen result dashboard shown after quiz/exam completion."""
import customtkinter as ctk
from typing import List, Callable
from ...core.models import QuizResult
from ...theme.theme_manager import ThemeManager
from ..components.card import ModernCard
from ..components.score_ring import ScoreRing


class QuizSummaryView(ctk.CTkFrame):
    """
    Full-screen summary panel displayed after a quiz finishes.

    Parameters
    ----------
    master       : parent widget
    percentage   : float 0-100 final score
    correct      : int   correct answer count
    total        : int   total question count
    time_sec     : int   total seconds elapsed
    results      : List[QuizResult]  per-question result data
    on_back      : Callable  called when user clicks Back / Retake
    accent_color : str   hex accent (cyan for MCQ, purple for Fill)
    """

    def __init__(
        self,
        master,
        percentage: float,
        correct: int,
        total: int,
        time_sec: int,
        results: List[QuizResult],
        on_back: Callable,
        accent_color: str | None = None,
        **kwargs,
    ):
        self.theme_mgr = ThemeManager()
        super().__init__(master, fg_color="transparent", **kwargs)
        self.grid_columnconfigure(0, weight=1)
        self.grid_rowconfigure(1, weight=1)

        self.percentage = percentage
        self.correct = correct
        self.total = total
        self.time_sec = time_sec
        self.results = results
        self.on_back = on_back
        self.accent = accent_color or self.theme_mgr.color("accent_primary")

        self._build()

    # ------------------------------------------------------------------
    def _build(self):
        # ── Top: headline + score ring ─────────────────────────────────
        top = ctk.CTkFrame(self, fg_color="transparent")
        top.grid(row=0, column=0, sticky="ew", padx=32, pady=(24, 0))
        top.grid_columnconfigure(1, weight=1)

        # Score ring (left)
        ring_wrap = ctk.CTkFrame(top, fg_color="transparent")
        ring_wrap.grid(row=0, column=0, rowspan=4, padx=(0, 32))
        ring = ScoreRing(ring_wrap, percentage=self.percentage, size=200)
        ring.pack()

        # Headline text (right)
        headline = "🏆 Quiz Complete!" if self.percentage >= 60 else "📚 Quiz Complete!"
        ctk.CTkLabel(
            top,
            text=headline,
            font=ctk.CTkFont(size=26, weight="bold"),
            text_color=self.theme_mgr.color("fg_primary"),
        ).grid(row=0, column=1, sticky="w", pady=(4, 0))

        ctk.CTkLabel(
            top,
            text=f"You scored  {self.correct} / {self.total}  questions correctly",
            font=ctk.CTkFont(size=15),
            text_color=self.theme_mgr.color("fg_muted"),
        ).grid(row=1, column=1, sticky="w", pady=(4, 0))

        mins, secs = divmod(self.time_sec, 60)
        time_str = f"{mins}m {secs}s" if mins else f"{secs}s"
        avg_sec = round(self.time_sec / self.total, 1) if self.total else 0

        ctk.CTkLabel(
            top,
            text=f"⏱  Total time: {time_str}   |   Avg per Q: {avg_sec}s",
            font=ctk.CTkFont(size=13),
            text_color=self.theme_mgr.color("fg_muted"),
        ).grid(row=2, column=1, sticky="w", pady=(4, 0))

        # Stat pills
        pill_row = ctk.CTkFrame(top, fg_color="transparent")
        pill_row.grid(row=3, column=1, sticky="w", pady=(10, 8))
        self._pill(pill_row, f"✅  {self.correct} Correct", "#00c785").pack(side="left", padx=(0, 8))
        wrong = self.total - self.correct
        self._pill(pill_row, f"❌  {wrong} Incorrect", "#f64f59").pack(side="left", padx=(0, 8))
        self._pill(pill_row, f"📊  {self.percentage:.0f}%", self.accent).pack(side="left")

        # ── Separator ─────────────────────────────────────────────────
        sep = ctk.CTkFrame(self, height=2, fg_color=self.theme_mgr.color("border_color"))
        sep.grid(row=1, column=0, sticky="ew", padx=32, pady=(16, 0))

        # ── Question review ───────────────────────────────────────────
        ctk.CTkLabel(
            self,
            text="📝  Question-by-Question Breakdown",
            font=ctk.CTkFont(size=14, weight="bold"),
            text_color=self.theme_mgr.color("fg_primary"),
        ).grid(row=2, column=0, sticky="w", padx=36, pady=(10, 2))

        scroll = ctk.CTkScrollableFrame(
            self,
            fg_color=self.theme_mgr.color("bg_card"),
            corner_radius=14,
        )
        scroll.grid(row=3, column=0, sticky="nsew", padx=32, pady=(4, 0))
        scroll.grid_columnconfigure(0, weight=1)
        self.grid_rowconfigure(3, weight=1)

        for idx, res in enumerate(self.results):
            self._result_card(scroll, idx, res)

        # ── Bottom buttons ────────────────────────────────────────────
        btn_row = ctk.CTkFrame(self, fg_color="transparent")
        btn_row.grid(row=4, column=0, sticky="ew", padx=32, pady=(12, 24))
        btn_row.grid_columnconfigure(0, weight=1)

        ctk.CTkButton(
            btn_row,
            text="↺  Take Another Quiz",
            command=self.on_back,
            height=46,
            corner_radius=23,
            font=ctk.CTkFont(size=14, weight="bold"),
            fg_color=self.accent,
        ).grid(row=0, column=0, sticky="ew")

    # ------------------------------------------------------------------
    def _pill(self, parent, text: str, color: str) -> ctk.CTkLabel:
        return ctk.CTkLabel(
            parent,
            text=text,
            font=ctk.CTkFont(size=12, weight="bold"),
            text_color="#ffffff",
            fg_color=color,
            corner_radius=14,
            padx=12,
            pady=5,
        )

    def _result_card(self, parent, idx: int, res: QuizResult):
        ok = res.is_correct
        border = self.theme_mgr.color("accent_success") if ok else self.theme_mgr.color("accent_danger")
        card = ctk.CTkFrame(
            parent,
            fg_color=self.theme_mgr.color("bg_card_secondary"),
            corner_radius=12,
            border_width=1,
            border_color=border,
        )
        card.pack(fill="x", padx=6, pady=5)
        card.grid_columnconfigure(0, weight=1)

        # Q number + icon
        icon = "✅" if ok else "❌"
        header = ctk.CTkFrame(card, fg_color="transparent")
        header.pack(fill="x", padx=14, pady=(10, 2))

        ctk.CTkLabel(
            header,
            text=f"{icon}  Q{idx + 1}:",
            font=ctk.CTkFont(size=12, weight="bold"),
            text_color=border,
        ).pack(side="left")

        # Prompt
        ctk.CTkLabel(
            card,
            text=res.prompt,
            font=ctk.CTkFont(size=13, weight="bold"),
            text_color=self.theme_mgr.color("fg_primary"),
            wraplength=660,
            justify="left",
        ).pack(anchor="w", padx=14, pady=(0, 2))

        # Your answer / correct answer
        if ok:
            ctk.CTkLabel(
                card,
                text=f"Your answer: {res.user_answer}",
                font=ctk.CTkFont(size=12),
                text_color=self.theme_mgr.color("accent_success"),
            ).pack(anchor="w", padx=14, pady=(0, 4))
        else:
            ctk.CTkLabel(
                card,
                text=f"Your answer:   {res.user_answer}",
                font=ctk.CTkFont(size=12),
                text_color=self.theme_mgr.color("accent_danger"),
            ).pack(anchor="w", padx=14, pady=(0, 2))
            ctk.CTkLabel(
                card,
                text=f"Correct answer: {res.correct_answer}",
                font=ctk.CTkFont(size=12),
                text_color=self.theme_mgr.color("accent_success"),
            ).pack(anchor="w", padx=14, pady=(0, 4))

        # Explanation
        if res.explanation:
            ctk.CTkLabel(
                card,
                text=f"💡 {res.explanation}",
                font=ctk.CTkFont(size=11, slant="italic"),
                text_color=self.theme_mgr.color("fg_muted"),
                wraplength=660,
                justify="left",
            ).pack(anchor="w", padx=14, pady=(0, 8))

