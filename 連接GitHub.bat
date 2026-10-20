@echo off
chcp 65001 >nul
title 連接 GitHub (AntiGravity 專案)
cd /d "%~dp0"

echo ========================================================
echo        🔗 AntiGravity GitHub 連接與設定工具
echo ========================================================
echo.

:: 檢查 gh 是否在 PATH 中
where gh >nul 2>&1
if errorlevel 1 (
    if exist "C:\Program Files\GitHub CLI\gh.exe" (
        set "PATH=%PATH%;C:\Program Files\GitHub CLI"
    ) else (
        echo [錯誤] 找不到 GitHub CLI (gh)。請確認已安裝 GitHub CLI。
        pause
        exit /b 1
    )
)

echo [1/3] 檢查目前 GitHub 登入狀態...
gh auth status >nul 2>&1
if %errorlevel% equ 0 (
    echo.
    echo ✅ 您目前已經登入 GitHub：
    gh auth status
    echo.
    goto :options
) else (
    echo [提示] 尚未登入 GitHub，即將啟動瀏覽器網頁驗證...
    echo.
    echo 步驟說明：
    echo 1. 稍後畫面會顯示一組 8 碼驗證代碼 (例如: 1234-ABCD)
    echo 2. 按 Enter 鍵會自動開啟瀏覽器 (或前往 https://github.com/login/device)
    echo 3. 在網頁中輸入該代碼並點選「Authorize github」完成授權
    echo.
    pause
    gh auth login --web --git-protocol https
    echo.
)

:verify
echo [2/3] 驗證登入狀態...
gh auth status
if errorlevel 1 (
    echo.
    echo ⚠️ 尚未完成登入，請重新執行本工具或檢查網路連線。
    pause
    exit /b 1
)

:options
echo.
echo ========================================================
echo [3/3] 選擇您接下來想執行的操作：
echo ========================================================
echo   [1] 在我的 GitHub 上為目前專案新增 Repository 並立即推送
echo   [2] 檢視我目前的 GitHub 倉庫清單
echo   [3] 設定全域 Git 使用者資訊 (git config user.name / user.email)
echo   [4] 結束
echo ========================================================
set /p opt="請選擇 (1-4): "

if "%opt%"=="1" goto :create_repo
if "%opt%"=="2" goto :list_repos
if "%opt%"=="3" goto :config_user
goto :done

:create_repo
echo.
set /p reponame="請輸入欲在 GitHub 建立的倉庫名稱 (預設: pdf-toolkit-app): "
if "%reponame%"=="" set reponame=pdf-toolkit-app
echo 正在建立並推送倉庫 %reponame% ...
gh repo create "%reponame%" --public --source=. --remote=origin --push
echo.
if errorlevel 0 (
    echo ✅ 倉庫已成功建立並推送至您的 GitHub！
    echo 網址: https://github.com
) else (
    echo ⚠️ 建立或推送可能已有同名倉庫，嘗試直接推送...
    git push -u origin main
)
pause
goto :done

:list_repos
echo.
echo 您的 GitHub 倉庫列表：
gh repo list --limit 10
pause
goto :done

:config_user
echo.
set /p uname="請輸入您的 GitHub 使用者名稱 (例如: minereric): "
set /p uemail="請輸入您的 Email: "
if not "%uname%"=="" git config --global user.name "%uname%"
if not "%uemail%"=="" git config --global user.email "%uemail%"
echo ✅ Git 使用者資訊已設定完成！
git config --global user.name
git config --global user.email
pause
goto :done

:done
echo.
echo ========================================================
echo ✅ 操作完成！AntiGravity 現已支援透過 GitHub CLI
echo   與 MCP 工具在此處連結、檢視、修正您的 GitHub 專案。
echo ========================================================
timeout /t 5 >nul
