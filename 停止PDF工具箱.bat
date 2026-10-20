@echo off
chcp 65001 >nul
title 停止 PDF 萬能工具箱
cd /d "%~dp0"

echo 正在關閉 PDF 工具箱伺服器...
taskkill /f /fi "WINDOWTITLE eq PDF Toolkit Local Server*" >nul 2>&1

:: 結束 node vite 相關行程
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":5173" ^| findstr "LISTENING"') do (
    taskkill /f /pid %%a >nul 2>&1
)

echo ✅ PDF 工具箱已成功停止。
timeout /t 3 >nul
