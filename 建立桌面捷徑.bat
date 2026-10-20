@echo off
chcp 65001 >nul
title 建立 PDF 工具箱桌面捷徑
cd /d "%~dp0"

echo 正在建立桌面捷徑...

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
    "$ws = New-Object -ComObject WScript.Shell; " ^
    "$desktop = [Environment]::GetFolderPath('Desktop'); " ^
    "$shortcut = $ws.CreateShortcut(\"$desktop\PDF 萬能工具箱.lnk\"); " ^
    "$shortcut.TargetPath = '%~dp0啟動PDF工具箱.bat'; " ^
    "$shortcut.WorkingDirectory = '%~dp0'; " ^
    "$shortcut.Description = '一鍵啟動 PDF 萬能工具箱'; " ^
    "$shortcut.IconLocation = 'shell32.dll,22'; " ^
    "$shortcut.Save()"

if exist "%USERPROFILE%\Desktop\PDF 萬能工具箱.lnk" (
    echo.
    echo ✅ 成功在桌面建立「PDF 萬能工具箱」捷徑！
    echo 您以後可以直接在桌面點兩下啟動使用。
) else (
    echo.
    echo [提示] 桌面捷徑建立完成。
)

echo.
pause
