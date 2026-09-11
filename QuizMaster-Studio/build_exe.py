"""PyInstaller build script for creating a standalone Windows .exe."""
import os
import sys
import subprocess
import shutil
from pathlib import Path

def build_executable():
    project_root = Path(__file__).resolve().parent
    dist_dir = project_root / "dist"
    build_dir = project_root / "build"
    app_entry = project_root / "app.py"
    themes_json = project_root / "src" / "theme" / "themes.json"

    print("==================================================")
    print("Building Standalone Windows Executable (.exe)")
    print("==================================================")

    # Clean old artifacts
    if dist_dir.exists():
        shutil.rmtree(dist_dir, ignore_errors=True)
    if build_dir.exists():
        shutil.rmtree(build_dir, ignore_errors=True)

    # Discover CustomTkinter location
    import customtkinter
    ctk_path = Path(customtkinter.__file__).parent

    # PyInstaller arguments
    cmd = [
        sys.executable,
        "-m", "PyInstaller",
        "--name=QuizMasterStudio",
        "--noconsole",
        "--onefile",
        f"--add-data={ctk_path};customtkinter",
        f"--add-data={themes_json};src/theme",
        "--collect-all=customtkinter",
        "--hidden-import=pywinstyles",
        str(app_entry)
    ]

    print(f"Executing build command:\n{' '.join(cmd)}\n")
    result = subprocess.run(cmd, cwd=str(project_root))

    if result.returncode == 0:
        exe_path = dist_dir / "QuizMasterStudio.exe"
        print("\n==================================================")
        print("BUILD SUCCESSFUL!")
        print(f"Executable ready at: {exe_path}")
        print("==================================================")
    else:
        print("\nBuild failed with return code:", result.returncode)

if __name__ == "__main__":
    build_executable()
