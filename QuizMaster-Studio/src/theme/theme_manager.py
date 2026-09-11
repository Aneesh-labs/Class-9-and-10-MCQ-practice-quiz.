"""Modular Theme Manager supporting VS Code, macOS Space, and Futuristic Neon themes."""
import json
from typing import Dict, Any, Optional
from ..config import THEMES_FILE_PATH

DEFAULT_THEME_DATA = {
    "vscode_dark": {
        "name": "VS Code Modern Dark",
        "mode": "dark",
        "bg_main": "#1e1e1e",
        "bg_sidebar": "#252526",
        "bg_card": "#2d2d30",
        "bg_card_secondary": "#333333",
        "bg_input": "#3c3c3c",
        "fg_primary": "#ffffff",
        "fg_secondary": "#cccccc",
        "fg_muted": "#858585",
        "accent_primary": "#007acc",
        "accent_hover": "#0098ff",
        "accent_success": "#4ec9b0",
        "accent_warning": "#ce9178",
        "accent_danger": "#f44747",
        "accent_purple": "#c586c0",
        "border_color": "#3e3e42",
        "active_tab_fg": "#ffffff",
        "inactive_tab_fg": "#969696"
    },
    "macos_glass": {
        "name": "macOS Deep Space",
        "mode": "dark",
        "bg_main": "#14171d",
        "bg_sidebar": "#1b1f27",
        "bg_card": "#212631",
        "bg_card_secondary": "#282e3b",
        "bg_input": "#2c3341",
        "fg_primary": "#f3f4f6",
        "fg_secondary": "#d1d5db",
        "fg_muted": "#9ca3af",
        "accent_primary": "#3b82f6",
        "accent_hover": "#60a5fa",
        "accent_success": "#10b981",
        "accent_warning": "#f59e0b",
        "accent_danger": "#ef4444",
        "accent_purple": "#8b5cf6",
        "border_color": "#374151",
        "active_tab_fg": "#60a5fa",
        "inactive_tab_fg": "#9ca3af"
    },
    "futuristic_cyber": {
        "name": "Futuristic Cyberpunk",
        "mode": "dark",
        "bg_main": "#0d0f18",
        "bg_sidebar": "#131624",
        "bg_card": "#1a1e30",
        "bg_card_secondary": "#22273e",
        "bg_input": "#252b45",
        "fg_primary": "#e2e8f0",
        "fg_secondary": "#94a3b8",
        "fg_muted": "#64748b",
        "accent_primary": "#06b6d4",
        "accent_hover": "#22d3ee",
        "accent_success": "#10b981",
        "accent_warning": "#f59e0b",
        "accent_danger": "#f43f5e",
        "accent_purple": "#a855f7",
        "border_color": "#2d3748",
        "active_tab_fg": "#22d3ee",
        "inactive_tab_fg": "#64748b"
    }
}

class ThemeManager:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(ThemeManager, cls).__new__(cls)
            cls._instance._init_manager()
        return cls._instance

    def _init_manager(self):
        self.themes = DEFAULT_THEME_DATA.copy()
        self._load_themes_from_file()
        self.current_theme_key = "vscode_dark"
        self._listeners = []

    def _load_themes_from_file(self):
        try:
            if THEMES_FILE_PATH.exists():
                with open(THEMES_FILE_PATH, 'r', encoding='utf-8') as f:
                    loaded = json.load(f)
                    if isinstance(loaded, dict):
                        self.themes.update(loaded)
        except Exception as e:
            print(f"Failed to load themes from file: {e}")

    def get_theme_list(self) -> list:
        return [(k, v.get("name", k)) for k, v in self.themes.items()]

    def set_theme(self, theme_key: str):
        if theme_key in self.themes:
            self.current_theme_key = theme_key
            for callback in self._listeners:
                try:
                    callback(self.get_current_theme())
                except Exception as e:
                    print(f"Error notifying theme listener: {e}")

    def get_current_theme(self) -> Dict[str, Any]:
        return self.themes.get(self.current_theme_key, DEFAULT_THEME_DATA["vscode_dark"])

    def color(self, key: str) -> str:
        return self.get_current_theme().get(key, "#ffffff")

    def register_listener(self, callback):
        if callback not in self._listeners:
            self._listeners.append(callback)

    def unregister_listener(self, callback):
        if callback in self._listeners:
            self._listeners.remove(callback)
