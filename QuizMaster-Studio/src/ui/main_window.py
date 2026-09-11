"""Main Window Shell - Premium Floating Sidebar & Glassmorphism."""
import sys
import customtkinter as ctk
from tkinter import messagebox
from typing import Dict, Any

try:
    import pywinstyles
except ImportError:
    pywinstyles = None

from ..config import APP_NAME, APP_VERSION, WINDOW_WIDTH, WINDOW_HEIGHT, MIN_WIDTH, MIN_HEIGHT
from ..core.database import DatabaseManager
from ..theme.theme_manager import ThemeManager
from .views.practice_view import PracticeView
from .views.fill_practice_view import FillPracticeView
from .views.quiz_start_view import QuizStartView
from .views.fill_quiz_view import FillQuizView
from .components.pill_button import PillButton
from .views.question_bank_view import QuestionBankView

class MainWindow(ctk.CTk):
    def __init__(self):
        super().__init__()
        self.theme_mgr = ThemeManager()
        self.db = DatabaseManager()

        self._configure_window()
        self._build_sidebar()
        self._build_views()

        # Switch to default tab
        self.switch_tab("practice")

        # Native close protocol
        self.protocol("WM_DELETE_WINDOW", self.on_close_requested)

    def _configure_window(self):
        self.title(f"{APP_NAME} v{APP_VERSION}")
        self.geometry(f"{WINDOW_WIDTH}x{WINDOW_HEIGHT}")
        self.minsize(MIN_WIDTH, MIN_HEIGHT)
        
        # Center on screen
        screen_w = self.winfo_screenwidth()
        screen_h = self.winfo_screenheight()
        x = (screen_w - WINDOW_WIDTH) // 2
        y = (screen_h - WINDOW_HEIGHT) // 2
        self.geometry(f"{WINDOW_WIDTH}x{WINDOW_HEIGHT}+{x}+{y}")

        ctk.set_appearance_mode("dark")
        
        # Grid: Col 0 for Sidebar, Col 1 for main content
        self.grid_columnconfigure(1, weight=1)
        self.grid_rowconfigure(0, weight=1)

        # Apply Windows 11 Mica/Acrylic if available
        if pywinstyles and sys.platform.startswith("win"):
            # Set root to transparent or a very dark tint so Mica shines through
            self.configure(fg_color="#050505")
            try:
                pywinstyles.apply_style(self, "mica")
                # Also try to tint titlebar to dark
                pywinstyles.change_header_color(self, color="#000000")
            except Exception:
                self.configure(fg_color=self.theme_mgr.color("bg_main"))
        else:
            self.configure(fg_color=self.theme_mgr.color("bg_main"))

    def _build_sidebar(self):
        # The Sidebar Frame (transparent to let Mica show if available, or just tint)
        bg_color = self.theme_mgr.color("bg_sidebar") if not pywinstyles else "transparent"
        self.sidebar_frame = ctk.CTkFrame(
            self,
            fg_color=bg_color,
            corner_radius=0,
            width=240
        )
        self.sidebar_frame.grid(row=0, column=0, sticky="nsew", padx=(10, 0), pady=10)
        self.sidebar_frame.grid_rowconfigure(2, weight=1) # Push theme switcher to bottom

        # 1. Brand Logo & Title
        brand_box = ctk.CTkFrame(self.sidebar_frame, fg_color="transparent")
        brand_box.grid(row=0, column=0, padx=20, pady=24, sticky="w")

        lbl_logo = ctk.CTkLabel(brand_box, text="⚡", font=ctk.CTkFont(size=24))
        lbl_logo.pack(side="left", padx=(0, 8))

        lbl_app_name = ctk.CTkLabel(
            brand_box,
            text=APP_NAME,
            font=ctk.CTkFont(size=18, weight="bold"),
            text_color=self.theme_mgr.color("fg_primary")
        )
        lbl_app_name.pack(side="left")

        # 2. Navigation Tabs
        self.nav_container = ctk.CTkFrame(self.sidebar_frame, fg_color="transparent")
        self.nav_container.grid(row=1, column=0, sticky="ew", padx=16, pady=10)

        self.tab_buttons = {}
        tabs = [
            ("practice", "📖 Practise"),
            ("fill_practice", "✏️ Fill Practise"),
            ("quiz_start", "🚀 Quiz Start"),
            ("fill_quiz", "✍️ Fill the Quiz"),
            ("question_bank", "📚 Question Bank")
        ]

        for idx, (key, label) in enumerate(tabs):
            btn = PillButton(
                self.nav_container,
                text=label,
                command=lambda k=key: self.switch_tab(k),
                fg_color="transparent",
                hover_color=self.theme_mgr.color("bg_card"),
                text_color=self.theme_mgr.color("fg_secondary"),
                font=ctk.CTkFont(size=14, weight="bold"),
                height=42,
                corner_radius=21,
                anchor="w" # Left-align text
            )
            btn.pack(fill="x", pady=6)
            self.tab_buttons[key] = btn

        # 3. Theme Switcher (Bottom)
        theme_box = ctk.CTkFrame(self.sidebar_frame, fg_color="transparent")
        theme_box.grid(row=3, column=0, padx=20, pady=24, sticky="ew")
        
        ctk.CTkLabel(
            theme_box,
            text="Theme:",
            font=ctk.CTkFont(size=12, weight="bold"),
            text_color=self.theme_mgr.color("fg_muted")
        ).pack(anchor="w", pady=(0, 4))

        theme_options = self.theme_mgr.get_theme_list()
        self.theme_keys = [k for k, name in theme_options]
        theme_display_names = [name for k, name in theme_options]

        self.theme_var = ctk.StringVar(value=theme_display_names[0])
        self.theme_dropdown = ctk.CTkOptionMenu(
            theme_box,
            variable=self.theme_var,
            values=theme_display_names,
            command=self._on_theme_selected,
            height=36,
            font=ctk.CTkFont(size=12),
            fg_color=self.theme_mgr.color("bg_card"),
            button_color=self.theme_mgr.color("accent_primary"),
            dropdown_hover_color=self.theme_mgr.color("accent_hover")
        )
        self.theme_dropdown.pack(fill="x")

    def _build_views(self):
        # Curved Content Area Wrapper (creates the floating effect)
        self.view_wrapper = ctk.CTkFrame(
            self,
            fg_color=self.theme_mgr.color("bg_main"),
            corner_radius=24,
            border_width=1,
            border_color=self.theme_mgr.color("border_color")
        )
        self.view_wrapper.grid(row=0, column=1, sticky="nsew", padx=16, pady=16)
        self.view_wrapper.grid_columnconfigure(0, weight=1)
        self.view_wrapper.grid_rowconfigure(0, weight=1)

        # Container inside the wrapper
        self.view_container = ctk.CTkFrame(self.view_wrapper, fg_color="transparent")
        self.view_container.grid(row=0, column=0, sticky="nsew", padx=10, pady=10)
        self.view_container.grid_columnconfigure(0, weight=1)
        self.view_container.grid_rowconfigure(0, weight=1)

        # Initialize the 5 distinct modular views
        self.views = {
            "practice": PracticeView(self.view_container, self.db),
            "fill_practice": FillPracticeView(self.view_container, self.db),
            "quiz_start": QuizStartView(self.view_container, self.db),
            "fill_quiz": FillQuizView(self.view_container, self.db),
            "question_bank": QuestionBankView(self.view_container, self.db, on_data_changed_callback=self._on_data_updated)
        }

    def _on_data_updated(self):
        # Refresh category lists and decks across all views
        self.views["practice"].load_deck()
        self.views["fill_practice"].load_deck()
        self.views["quiz_start"].refresh_categories()
        self.views["fill_quiz"].refresh_categories()

    def switch_tab(self, tab_key: str):
        # Update tab button highlights
        for k, btn in self.tab_buttons.items():
            if k == tab_key:
                btn.configure(
                    fg_color=self.theme_mgr.color("bg_card_secondary"),
                    text_color=self.theme_mgr.color("accent_primary")
                )
            else:
                btn.configure(
                    fg_color="transparent",
                    text_color=self.theme_mgr.color("fg_secondary")
                )

        # Show target view
        for k, view in self.views.items():
            if k == tab_key:
                view.grid(row=0, column=0, sticky="nsew")
            else:
                view.grid_forget()

    def _on_theme_selected(self, selected_name: str):
        for k, name in self.theme_mgr.get_theme_list():
            if name == selected_name:
                self.theme_mgr.set_theme(k)
                break
        
        # Re-apply window background & bar colors
        if not pywinstyles:
            self.configure(fg_color=self.theme_mgr.color("bg_main"))
            self.sidebar_frame.configure(fg_color=self.theme_mgr.color("bg_sidebar"))
        
        self.view_wrapper.configure(
            fg_color=self.theme_mgr.color("bg_main"),
            border_color=self.theme_mgr.color("border_color")
        )
        self.theme_dropdown.configure(
            fg_color=self.theme_mgr.color("bg_card"),
            button_color=self.theme_mgr.color("accent_primary")
        )
        self.switch_tab(next(k for k, btn in self.tab_buttons.items() if btn.cget("fg_color") != "transparent"))

    def on_close_requested(self):
        # Check if quiz is currently active
        quiz_view = self.views.get("quiz_start")
        fill_quiz_view = self.views.get("fill_quiz")
        is_busy = (quiz_view and quiz_view.in_quiz) or (fill_quiz_view and fill_quiz_view.in_quiz)

        if is_busy:
            if messagebox.askyesno("Exit Confirmation", "A quiz is currently in progress. Are you sure you want to exit?"):
                self.destroy()
        else:
            self.destroy()
