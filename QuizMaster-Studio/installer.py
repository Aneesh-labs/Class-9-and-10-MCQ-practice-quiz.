"""QuizMaster Studio - Automated Dependency Installer, Builder & App Launcher."""
import os
import sys
import subprocess
import time
from pathlib import Path

def print_banner():
    print("=" * 65)
    print("   ⚡ QuizMaster Studio - Automated Setup & Launcher")
    print("=" * 65)
    print(" This tool will automatically:")
    print("   1. Check & install required dependencies (customtkinter, Pillow, etc.)")
    print("   2. Build the standalone QuizMasterStudio executable")
    print("   3. Launch QuizMaster Studio immediately for you")
    print("=" * 65 + "\n")

def find_python_executable():
    """Find a valid Python interpreter to run pip and build scripts."""
    # 1. If running as raw Python script
    if not getattr(sys, 'frozen', False):
        return sys.executable
    
    # 2. If running as frozen installer executable, look for system python
    python_candidates = ["python", "python3", "py"]
    for cand in python_candidates:
        try:
            res = subprocess.run([cand, "--version"], capture_output=True, text=True, timeout=5)
            if res.returncode == 0:
                return cand
        except Exception:
            continue
    
    # Check standard Windows paths
    possible_paths = [
        Path(os.environ.get("LOCALAPPDATA", "")) / "Programs" / "Python" / "Python314" / "python.exe",
        Path(os.environ.get("LOCALAPPDATA", "")) / "Programs" / "Python" / "Python313" / "python.exe",
        Path(os.environ.get("LOCALAPPDATA", "")) / "Programs" / "Python" / "Python312" / "python.exe",
        Path(os.environ.get("LOCALAPPDATA", "")) / "Programs" / "Python" / "Python311" / "python.exe",
        Path(os.environ.get("ProgramFiles", "")) / "Python314" / "python.exe",
        Path(os.environ.get("ProgramFiles", "")) / "Python313" / "python.exe",
        Path(os.environ.get("ProgramFiles", "")) / "Python312" / "python.exe",
        Path(os.environ.get("ProgramFiles", "")) / "Python311" / "python.exe",
    ]
    for p in possible_paths:
        if p.exists():
            return str(p)
            
    return "python"

def main():
    print_banner()

    # Determine project directory
    if getattr(sys, 'frozen', False):
        root_dir = Path(sys.executable).resolve().parent
    else:
        root_dir = Path(__file__).resolve().parent

    requirements_file = root_dir / "requirements.txt"
    build_script = root_dir / "build_exe.py"
    app_entry = root_dir / "app.py"
    dist_exe = root_dir / "dist" / "QuizMasterStudio.exe"

    py_exe = find_python_executable()
    print(f"[*] Detected Python environment: {py_exe}")
    print(f"[*] Project root directory: {root_dir}\n")

    # Step 1: Install Dependencies
    if requirements_file.exists():
        print("-----------------------------------------------------------------")
        print("[Step 1/3] Installing / Verifying dependencies from requirements.txt...")
        print("-----------------------------------------------------------------")
        try:
            cmd = [py_exe, "-m", "pip", "install", "-r", str(requirements_file)]
            res = subprocess.run(cmd, cwd=str(root_dir))
            if res.returncode == 0:
                print("\n[✔] Dependencies installed successfully!")
            else:
                print("\n[!] Warning: pip returned a non-zero exit code. Continuing...")
        except Exception as e:
            print(f"[!] Note on dependency installation: {e}")
    else:
        print("[!] requirements.txt not found. Skipping dependency installation.")

    # Step 2: Build Standalone Executable
    print("\n-----------------------------------------------------------------")
    print("[Step 2/3] Building standalone QuizMasterStudio.exe binary...")
    print("-----------------------------------------------------------------")
    built_successfully = False
    if build_script.exists():
        try:
            cmd = [py_exe, str(build_script)]
            res = subprocess.run(cmd, cwd=str(root_dir))
            if res.returncode == 0 and dist_exe.exists():
                print("\n[✔] QuizMasterStudio.exe compiled successfully!")
                built_successfully = True
            else:
                print("\n[!] Build script did not generate dist executable. Will launch directly via Python.")
        except Exception as e:
            print(f"[!] Executable build skipped: {e}")
    else:
        print("[!] build_exe.py not found. Will launch directly via Python.")

    # Step 3: Launch Application
    print("\n-----------------------------------------------------------------")
    print("[Step 3/3] Launching QuizMaster Studio...")
    print("-----------------------------------------------------------------")
    time.sleep(1)

    if built_successfully and dist_exe.exists() and sys.platform.startswith("win"):
        print(f"[🚀] Opening {dist_exe.name}...")
        subprocess.Popen([str(dist_exe)], cwd=str(root_dir))
    elif app_entry.exists():
        print(f"[🚀] Launching QuizMaster Studio directly via {py_exe} app.py...")
        subprocess.Popen([py_exe, str(app_entry)], cwd=str(root_dir))
    else:
        print("[❌] Error: Could not locate app.py or dist/QuizMasterStudio.exe to launch.")
        input("\nPress Enter to exit...")
        return

    print("\n[✨] QuizMaster Studio is now running! You may close this setup window.\n")
    time.sleep(2)

if __name__ == "__main__":
    main()

