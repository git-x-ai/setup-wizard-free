# Setup Wizard Free - Multi-Architecture Build Script
Write-Host "Building Setup Wizard Free installers for all architectures..." -ForegroundColor Green
Write-Host ""

# Clean previous builds
Write-Host "Cleaning previous builds..." -ForegroundColor Yellow
if (Test-Path "dist-electron") { Remove-Item -Recurse -Force "dist-electron" }
if (Test-Path "dist-32") { Remove-Item -Recurse -Force "dist-32" }
if (Test-Path "dist-64") { Remove-Item -Recurse -Force "dist-64" }
if (Test-Path "dist-arm64") { Remove-Item -Recurse -Force "dist-arm64" }

Write-Host ""
Write-Host "Building for x64 (64-bit)..." -ForegroundColor Cyan
npm run build:win-x64
if (Test-Path "dist-electron") {
    Move-Item "dist-electron" "dist-64"
    Write-Host "x64 build completed and moved to dist-64" -ForegroundColor Green
} else {
    Write-Host "ERROR: x64 build failed" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "Building for x32 (32-bit)..." -ForegroundColor Cyan
npm run build:win-ia32
if (Test-Path "dist-electron") {
    Move-Item "dist-electron" "dist-32"
    Write-Host "x32 build completed and moved to dist-32" -ForegroundColor Green
} else {
    Write-Host "ERROR: x32 build failed" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "Building for ARM64..." -ForegroundColor Cyan
npm run build:win-arm64
if (Test-Path "dist-electron") {
    Move-Item "dist-electron" "dist-arm64"
    Write-Host "ARM64 build completed and moved to dist-arm64" -ForegroundColor Green
} else {
    Write-Host "ERROR: ARM64 build failed" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Magenta
Write-Host "Build Summary:" -ForegroundColor Magenta
Write-Host "========================================" -ForegroundColor Magenta
Write-Host "x64 Installer: dist-64\Setup Wizard Free Setup 1.0.0.exe" -ForegroundColor White
Write-Host "x32 Installer: dist-32\Setup Wizard Free Setup 1.0.0.exe" -ForegroundColor White
Write-Host "ARM64 Installer: dist-arm64\Setup Wizard Free Setup 1.0.0.exe" -ForegroundColor White
Write-Host ""
Write-Host "All builds completed successfully!" -ForegroundColor Green
Read-Host "Press Enter to continue"
