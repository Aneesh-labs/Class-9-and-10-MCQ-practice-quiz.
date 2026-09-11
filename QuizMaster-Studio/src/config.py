"""Application configuration and constants."""
from pathlib import Path
import sys

APP_NAME = "QuizMaster Studio"
APP_VERSION = "1.0.0"

# Base directory resolution (works for standard Python run and bundled PyInstaller EXE)
if getattr(sys, 'frozen', False):
    APP_DIR = Path(sys._MEIPASS)
    DATA_DIR = Path(sys.executable).parent
else:
    APP_DIR = Path(__file__).resolve().parent.parent
    DATA_DIR = APP_DIR

DB_FILE_PATH = DATA_DIR / "questions.db"
THEMES_FILE_PATH = APP_DIR / "src" / "theme" / "themes.json"

WINDOW_WIDTH = 1180
WINDOW_HEIGHT = 780
MIN_WIDTH = 980
MIN_HEIGHT = 650
