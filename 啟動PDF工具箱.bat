@echo off
chcp 65001 >nul
title PDF 萬能工具箱 - 啟動器
cd /d "%~dp0"

echo ========================================================
echo        🚀 正在啟動 PDF 萬能工具箱 (PDF Toolkit)
echo ========================================================
echo.

:: 檢查 node_modules 是否存在
if not exist "node_modules\" (
    echo [提示] 偵測到首次使用，正在安裝相依套件，請稍候...
    call npm install
    if errorlevel 1 (
        echo [錯誤] 套件安裝失敗，請確認是否已安裝 Node.js。
        pause
        exit /b 1
    )
)

echo [1/2] 正在啟動本地 Web 伺服器...
start "PDF Toolkit Local Server" /min cmd /c "npm run dev"

echo [2/2] 等待伺服器準備就緒...
timeout /t 3 /nobreak >nul

echo 🌐 正在開啟瀏覽器...
start http://localhost:5173/

echo.
echo ========================================================
echo   ✅ PDF 萬能工具箱已成功啟動！
echo   🔗 網址: http://localhost:5173/
echo   💡 提示: 若要關閉工具箱，請執行「停止PDF工具箱.bat」
echo            或直接關閉後台視窗即可。
echo ========================================================
echo.
timeout /t 5 >nul
