## Pandoc
Pandoc 是一個強大的文檔轉換工具，支持多種格式之間的轉換，例如 Markdown、DOCX 等。它常用於生成高質量的文檔和報告。

### 安裝 Pandoc
要安裝 Pandoc，請按照以下步驟操作：

1. 前往 [Pandoc 官方網站](https://pandoc.org/)下載適合您操作系統的安裝包。
2. 根據您的操作系統執行以下操作：
    - **Windows**: 運行下載的 `.msi` 文件並按照提示完成安裝。
    - **macOS**: 使用 Homebrew 安裝，執行以下命令：
        ```bash
        brew install pandoc
        ```
    - **Linux**: 使用您的包管理器安裝，例如在 Debian/Ubuntu 系統上執行：
        ```bash
        sudo apt install pandoc
        ```
3. 安裝完成後，您可以通過以下命令驗證安裝是否成功：
    ```bash
    pandoc --version
    ```
    如果顯示版本號，則表示安裝成功。

## mermaid-filter
`mermaid-filter` 是一個用於處理 Mermaid 圖表的 Pandoc 過濾器。它可以將 Markdown 文件中的 Mermaid 圖表轉換為圖像格式，從而在生成的文檔中正確顯示這些圖表。這對於需要在文檔中嵌入流程圖、時序圖等圖表的用戶非常有用。

### 安裝 mermaid-filter
要安裝 `mermaid-filter`，請按照以下步驟操作：

1. 確保已安裝 [Node.js](https://nodejs.org/)，因為 `mermaid-filter` 依賴於 Node.js 環境。
2. 使用 npm 安裝 `mermaid-filter`：
    ```bash
    npm install -g mermaid-filter
    ```
3. 安裝完成後，您可以通過以下命令驗證安裝是否成功：
    ```bash
    mermaid-filter --version
    ```
    如果顯示版本號，則表示安裝成功。

## 文檔順序控制
由於我們需要控制每一個 md 檔在 Word 中的順序，在要匯出的 md 檔加入
```
<!-- Doc Page: X -->
```
X 則代表你希望他在頁面中的順序

## Powershell 指令產生 Pandoc 最終指令
```powershell
# Set source directory
$sourceDir = 'C:\Works\DeveloperPortal'
$logFile = 'doc_pages_log.txt'
$pandocOutputFile = Join-Path -Path $sourceDir -ChildPath 'output.docx'
$documentTitle = 'EdgeSync Developer Guide'

Write-Host "====================================================" -ForegroundColor Cyan
Write-Host "Starting process: Finding Markdown files with Doc Page tags" -ForegroundColor Cyan
Write-Host "====================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Source directory: $sourceDir" -ForegroundColor Yellow
Write-Host "Log file: $logFile" -ForegroundColor Yellow
Write-Host "Pandoc output file: $pandocOutputFile" -ForegroundColor Yellow
Write-Host "Document title: $documentTitle" -ForegroundColor Yellow
Write-Host ""

# Clear log file
Write-Host "Creating log file..." -ForegroundColor Green
'Files processed:' | Out-File -FilePath $logFile

# Find markdown files with Doc Page tags
Write-Host "Starting to search Markdown files..." -ForegroundColor Green
$docPages = @()
$count = 0
$matchedCount = 0

# Get all markdown files while ignoring node_modules directory
Write-Host "Getting file list (ignoring node_modules)..." -ForegroundColor Green
$files = Get-ChildItem -Path $sourceDir -Filter '*.md' -Recurse | Where-Object {
    $_.FullName -notmatch '\\node_modules\\'
}
Write-Host "Found $($files.Count) Markdown files" -ForegroundColor Yellow
Write-Host ""

foreach ($fileInfo in $files) {
    $count++
    $file = $fileInfo.FullName
    
    # Show progress every 100 files
    if ($count % 100 -eq 0) {
        Write-Host "Processed $count files..." -ForegroundColor DarkGray
    }
    
    try {
        $content = Get-Content -Path $file -Raw -ErrorAction SilentlyContinue
        
        if ($content -match '<!--\s*Doc Page:\s*(\d+)\s*-->') {
            $pageNum = $matches[1]
            Write-Host "Found tagged file: $file" -ForegroundColor Green
            Write-Host "  - Page number: $pageNum" -ForegroundColor Green
            
            "Processing: $file" | Out-File -FilePath $logFile -Append
            "  Found tag: Doc Page: $pageNum" | Out-File -FilePath $logFile -Append
            
            $docPages += [PSCustomObject]@{
                PageNumber = [int]$pageNum
                FilePath = $file
            }
            $matchedCount++
        }
    }
    catch {
        Write-Host "Error processing file: $file" -ForegroundColor Red
        Write-Host "  Error message: $_" -ForegroundColor Red
        "Error processing file: $file" | Out-File -FilePath $logFile -Append
        "  Error message: $_" | Out-File -FilePath $logFile -Append
    }
}

Write-Host ""
Write-Host "File search completed." -ForegroundColor Green
Write-Host "Processed a total of $count Markdown files." -ForegroundColor Yellow
Write-Host "Found $matchedCount files with valid Doc Page tags." -ForegroundColor Yellow
Write-Host ""

# Sort files by page number
Write-Host "Sorting files by page number..." -ForegroundColor Green
$sortedDocPages = $docPages | Sort-Object -Property PageNumber

# Create pandoc command with sorted files
Write-Host "Creating pandoc command..." -ForegroundColor Green
$pandocCommand = "pandoc "

# Add each file path in quotes
foreach ($page in $sortedDocPages) {
    $pandocCommand += "`"$($page.FilePath)`" "
}

# Add pandoc options
$pandocCommand += "--embed-resources -F `"%APPDATA%\npm\mermaid-filter.ps1`" --metadata title=`"$documentTitle`" -o `"$pandocOutputFile`""

# Display the pandoc command
Write-Host "Executing pandoc command:" -ForegroundColor Yellow
Write-Host $pandocCommand -ForegroundColor Yellow
Write-Host ""

# Execute the pandoc command
try {
    Invoke-Expression $pandocCommand
    Write-Host "Pandoc command executed successfully." -ForegroundColor Green
    Write-Host "Output file created at: $pandocOutputFile" -ForegroundColor Green

    # Open the generated document
    Write-Host "Opening the generated document..." -ForegroundColor Green
    Start-Process $pandocOutputFile
    Write-Host "Document opened." -ForegroundColor Green
}
catch {
    Write-Host "Error executing pandoc command:" -ForegroundColor Red
    Write-Host $_ -ForegroundColor Red
}

Write-Host ""
Write-Host "Process completed." -ForegroundColor Cyan


```