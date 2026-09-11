@echo off
title QuizMaster Studio - Automated Setup
echo =================================================================
echo   ⚡ QuizMaster Studio - Windows Setup ^& Launcher
echo =================================================================
echo.

cd /d "%~dp0"

echo [*] Installing dependencies from requirements.txt...
python -m pip install -r requirements.txt
if %ERRORLEVEL% NEQ 0 (
    echo [!] Warning: Python pip reported an error. Attempting with 'py'...
    py -m pip install -r requirements.txt
)

echo.
echo [*] Building standalone QuizMasterStudio.exe...
python build_exe.py
if %ERRORLEVEL% NEQ 0 (
    echo [!] Building via python failed, falling back to direct app launch...
    start "" python app.py
    exit /b 0
)

echo.
echo [*] Launching QuizMaster Studio...
if exist "dist\QuizMasterStudio.exe" (
    start "" "dist\QuizMasterStudio.exe"
) else (
    start "" python app.py
)

echo [✔] Application launched!
exit /b 0

