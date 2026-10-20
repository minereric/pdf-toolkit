# AntiGravity 專案規則與工作指南 (AGENTS.md)

本文件遵循 AntiGravity 2 與 `antigravity-lazy-pack` 規範，定義本專案之工作原則、GitHub 連接方式與標準流程。

---

## 專案概要
- **專案名稱**：PDF Toolkit App（PDF 萬能工具箱）
- **類型**：純前端 Client-Side 本地隱私 PDF 處理工具
- **技術棧**：React 19 + Vite 7 + UnoCSS + pdf-lib + pdfjs-dist
- **本地語言支援**：繁體中文 (預設) / English 雙語切換
- **工作路徑**：`d:\AI WORK\PDF toolskit`

---

## GitHub 連接與操作規範

本專案支援在 AntiGravity 內直接**連結、檢視、修正 GitHub**：

### 1. 常用 GitHub CLI (`gh`) 指令（檢視與修正）
- **檢視登入狀態**：`gh auth status`
- **檢視目前倉庫資訊**：`gh repo view`
- **檢視近期 Issues**：`gh issue list`
- **建立 Issue**：`gh issue create --title "標題" --body "內容"`
- **檢視 Pull Requests**：`gh pr list`
- **檢視 GitHub Actions 狀態**：`gh run list`
- **一鍵建立並推送遠端倉庫**：`gh repo create <repo-name> --public --source=. --remote=origin --push`

### 2. 登入 GitHub
若尚未登入，可在專案目錄雙擊執行：
- [`連接GitHub.bat`](./連接GitHub.bat)
或在 PowerShell 執行：
```powershell
gh auth login --web --git-protocol https
```

### 3. MCP 伺服器
設定檔位於 [`.agents/mcp_config.json`](./.agents/mcp_config.json)，支援配置 `@modelcontextprotocol/server-github` 提供 Agent 直接呼叫之 GitHub API 工具。

---

## AntiGravity 技能目錄 (`.agents/skills/`)
專案已安裝 `antigravity-lazy-pack` 之技能包：
- `00-install-all`：一次性套件安裝指引
- `01-notebooklm`：NotebookLM MCP 連接
- `02-github`：GitHub CLI 連接與配置
- `03-firebase`：Firebase MCP 與部署
- `04-draw`：生圖指引
- `05-workflow`：開工 / 收工 / 新專案流程
- `06-obsidian`：Obsidian 專案筆記串接
- `antigravity-lazy-packs`：懶人包主目錄

---

## 工作流程原則 (Workflow)

### 開工
當使用者輸入「開工」時：
1. 讀取本 `AGENTS.md`。
2. 檢查 `git status` 與最近 commit 狀態。
3. 檢查 GitHub 遠端同步狀態 (`git remote -v`)。
4. 回報目前狀態與建議下一步。

### 收工
當使用者輸入「收工」時：
1. 檢查有無敏感資料（API Token、密鑰）。
2. 檢查 `git status` 與 `git diff`。
3. 詢問使用者確認後進行 commit 與 push。

### 安全原則 (Do / Don't)
- **Do**：Commit 前必先檢查 diff，確認修改內容。
- **Don't**：嚴禁將 GitHub Token、API Key、個人私密憑證寫進公開 Markdown 或程式碼中。
