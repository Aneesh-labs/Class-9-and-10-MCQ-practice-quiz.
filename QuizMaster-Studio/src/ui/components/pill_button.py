import customtkinter as ctk
from ...theme.theme_manager import ThemeManager

class PillButton(ctk.CTkButton):
    """Rounded pill-shaped button used for navigation tabs.
    Uses ThemeManager for colors and a default corner radius of 20.
    """
    def __init__(self, master, text: str = "", command=None, **kwargs):
        self.theme_mgr = ThemeManager()
        
        defaults = {
            "fg_color": self.theme_mgr.color("accent_primary"),
            "hover_color": self.theme_mgr.color("accent_hover"),
            "text_color": self.theme_mgr.color("fg_primary"),
            "corner_radius": 20,
            "height": 38,
            "font": ctk.CTkFont(size=13, weight="bold")
        }
        for k, v in defaults.items():
            if k not in kwargs:
                kwargs[k] = v

        super().__init__(
            master,
            text=text,
            command=command,
            **kwargs
        )

