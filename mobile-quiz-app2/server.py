#!/usr/bin/env python3
"""
⚡ QuizMaster Mobile - Local Wi-Fi Server
Run this script on your PC, then open the displayed link on your phone (or scan QR code) to play!
"""
import http.server
import socketserver
import socket
import sys

# Ensure UTF-8 output on Windows
if hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

PORT = 8000

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "127.0.0.1"

def main():
    local_ip = get_local_ip()
    print("=================================================================")
    print("   📱 QuizMaster Mobile - Local Wi-Fi Server")
    print("=================================================================")
    print(" How to open on your Phone (Android / iPhone):")
    print("   1. Connect your phone to the same Wi-Fi network as this PC.")
    print(f"   2. Open Chrome/Safari on your phone and type:")
    print(f"\n      👉  http://{local_ip}:{PORT}\n")
    print("=================================================================")
    print(f" Server running at http://{local_ip}:{PORT} (Press Ctrl+C to stop)")
    print("=================================================================\n")

    Handler = http.server.SimpleHTTPRequestHandler
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n[!] Server stopped.")

if __name__ == "__main__":
    main()

