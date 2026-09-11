#!/usr/bin/env bash
# QuizMaster Studio - Setup & Launch Script for macOS / Linux
set -e

echo "================================================================="
echo "   ⚡ QuizMaster Studio - Setup & Launcher (macOS / Linux)"
echo "================================================================="
echo ""

# Navigate to script directory
cd "$(dirname "$0")"

echo "[*] Installing dependencies..."
python3 -m pip install -r requirements.txt

echo ""
echo "[*] Launching QuizMaster Studio..."
python3 app.py &

echo "[✔] QuizMaster Studio launched successfully!"

