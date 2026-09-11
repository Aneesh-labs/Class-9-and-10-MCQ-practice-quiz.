"""Modern reusable UI components (Glass cards, Stat badges, Toast alerts, Search inputs)."""
import customtkinter as ctk
from typing import Optional, Callable
from ...theme.theme_manager import ThemeManager

class ModernCard(ctk.CTkFrame):
    def __init__(self, master, fg_color=None, corner_radius=18, border_width=1, border_color=None, **kwargs):
        self.theme_mgr = ThemeManager()
        self._default_bg = fg_color or self.theme_mgr.color("bg_card")
        self._default_bc = border_color or self.theme_mgr.color("border_color")
        self._hover_bc = self.theme_mgr.color("accent_primary")
        
        super().__init__(
            master,
            fg_color=self._default_bg,
            corner_radius=corner_radius,
            border_width=border_width,
            border_color=self._default_bc,
            **kwargs
        )
        self.theme_mgr.register_listener(self._on_theme_update)

        # Bind hover effects
        self.bind("<Enter>", self._on_enter)
        self.bind("<Leave>", self._on_leave)
        # Bind for all children so hover works across the whole card
        self._bind_children(self)

    def _bind_children(self, widget):
        for child in widget.winfo_children():
            child.bind("<Enter>", self._on_enter, add="+")
            child.bind("<Leave>", self._on_leave, add="+")
            self._bind_children(child)

    def _on_enter(self, event):
        self.configure(border_color=self._hover_bc)

    def _on_leave(self, event):
        self.configure(border_color=self._default_bc)

    def _on_theme_update(self, theme):
        self._default_bg = self.theme_mgr.color("bg_card")
        self._default_bc = self.theme_mgr.color("border_color")
        self._hover_bc = self.theme_mgr.color("accent_primary")
        self.configure(
            fg_color=self._default_bg,
            border_color=self._default_bc
        )

class StatBadge(ctk.CTkFrame):
    def __init__(self, master, title: str, value: str, icon: str = "", accent_color: Optional[str] = None, **kwargs):
        self.theme_mgr = ThemeManager()
        accent = accent_color or self.theme_mgr.color("accent_primary")
        super().__init__(
            master,
            fg_color=self.theme_mgr.color("bg_card_secondary"),
            corner_radius=10,
            border_width=1,
            border_color=self.theme_mgr.color("border_color"),
            **kwargs
        )
        
        self.grid_columnconfigure(1, weight=1)
        
        # Left icon/bullet
        self.icon_lbl = ctk.CTkLabel(
            self,
            text=icon if icon else "●",
            font=ctk.CTkFont(size=18, weight="bold"),
            text_color=accent
        )
        self.icon_lbl.grid(row=0, column=0, rowspan=2, padx=(12, 8), pady=8)

        # Value label
        self.val_lbl = ctk.CTkLabel(
            self,
            text=value,
            font=ctk.CTkFont(size=16, weight="bold"),
            text_color=self.theme_mgr.color("fg_primary"),
            anchor="w"
        )
        self.val_lbl.grid(row=0, column=1, sticky="w", padx=(0, 12), pady=(6, 0))

        # Title label
        self.title_lbl = ctk.CTkLabel(
            self,
            text=title,
            font=ctk.CTkFont(size=11),
            text_color=self.theme_mgr.color("fg_muted"),
            anchor="w"
        )
        self.title_lbl.grid(row=1, column=1, sticky="w", padx=(0, 12), pady=(0, 6))

    def update_value(self, new_val: str):
        self.val_lbl.configure(text=new_val)

class ToastNotification(ctk.CTkFrame):
    @classmethod
    def show(cls, master, message: str, level: str = "info", duration_ms: int = 3000):
        theme_mgr = ThemeManager()
        colors = {
            "info": theme_mgr.color("accent_primary"),
            "success": theme_mgr.color("accent_success"),
            "warning": theme_mgr.color("accent_warning"),
            "error": theme_mgr.color("accent_danger")
        }
        accent = colors.get(level, theme_mgr.color("accent_primary"))
        
        toast = ctk.CTkFrame(
            master,
            fg_color=theme_mgr.color("bg_card_secondary"),
            corner_radius=8,
            border_width=2,
            border_color=accent
        )
        
        lbl = ctk.CTkLabel(
            toast,
            text=message,
            font=ctk.CTkFont(size=13, weight="bold"),
            text_color=theme_mgr.color("fg_primary"),
            padx=16,
            pady=8
        )
        lbl.pack()
        
        # Place near bottom right
        toast.place(relx=0.98, rely=0.95, anchor="se")
        
        def fade_out():
            try:
                toast.destroy()
            except Exception:
                pass

        master.after(duration_ms, fade_out)
