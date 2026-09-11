"""ScoreRing - Circular progress indicator for quiz results."""
import tkinter as tk
import customtkinter as ctk
from ...theme.theme_manager import ThemeManager


class ScoreRing(ctk.CTkFrame):
    """A canvas-based circular progress ring showing a percentage score."""

    def __init__(self, master, percentage: float = 0.0, size: int = 180, **kwargs):
        self.theme_mgr = ThemeManager()
        bg = self.theme_mgr.color("bg_card")
        super().__init__(master, fg_color=bg, width=size, height=size, **kwargs)
        self.percentage = max(0.0, min(100.0, percentage))
        self.size = size

        self._canvas = tk.Canvas(
            self,
            width=size,
            height=size,
            bg=bg,
            highlightthickness=0,
        )
        self._canvas.pack(expand=True, fill="both")
        self._render_ring()

    # ------------------------------------------------------------------
    def _get_grade(self, pct: float) -> tuple[str, str]:
        """Return (grade_letter, colour_hex) for a given percentage."""
        if pct >= 90:
            return "A+", "#00f2a9"
        elif pct >= 80:
            return "A", "#00f2fe"
        elif pct >= 70:
            return "B", "#4facfe"
        elif pct >= 60:
            return "C", "#f7971e"
        else:
            return "F", "#f64f59"

    def _render_ring(self):
        s = self.size
        pad = 14
        x0, y0, x1, y1 = pad, pad, s - pad, s - pad
        pct = self.percentage

        # Background track
        self._canvas.create_oval(
            x0, y0, x1, y1,
            outline=self.theme_mgr.color("border_color"),
            width=12,
            fill=""
        )

        # Arc colour based on grade
        _, arc_color = self._get_grade(pct)

        # Foreground arc (clockwise from top)
        extent = -360 * pct / 100  # negative = clockwise in tkinter
        if pct > 0:
            self._canvas.create_arc(
                x0, y0, x1, y1,
                start=90,
                extent=extent,
                outline=arc_color,
                width=12,
                style="arc"
            )

        # Centre percentage text
        cx, cy = s / 2, s / 2
        self._canvas.create_text(
            cx, cy - 14,
            text=f"{pct:.0f}%",
            fill=arc_color,
            font=("Helvetica", int(s * 0.155), "bold"),
        )

        # Grade letter below percentage
        grade, _ = self._get_grade(pct)
        self._canvas.create_text(
            cx, cy + 16,
            text=f"Grade {grade}",
            fill=self.theme_mgr.color("fg_muted"),
            font=("Helvetica", int(s * 0.088)),
        )

    def update_percentage(self, pct: float):
        """Redraw ring with a new percentage."""
        self.percentage = max(0.0, min(100.0, pct))
        self._canvas.delete("all")
        self._render_ring()

