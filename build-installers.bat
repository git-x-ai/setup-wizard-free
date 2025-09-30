@echo off
echo Building Setup Wizard Free installers for all architectures...
echo.

REM Clean previous builds
echo Cleaning previous builds...
if exist "dist-electron" rmdir /s /q "dist-electron"
if exist "dist-32" rmdir /s /q "dist-32"
if exist "dist-64" rmdir /s /q "dist-64"
if exist "dist-arm64" rmdir /s /q "dist-arm64"

echo.
echo Building for x64 (64-bit)...
call npm run build:win-x64
if exist "dist-electron" (
    move "dist-electron" "dist-64"
    echo x64 build completed and moved to dist-64
) else (
    echo ERROR: x64 build failed
    pause
    exit /b 1
)

echo.
echo Building for x32 (32-bit)...
call npm run build:win-ia32
if exist "dist-electron" (
    move "dist-electron" "dist-32"
    echo x32 build completed and moved to dist-32
) else (
    echo ERROR: x32 build failed
    pause
    exit /b 1
)

echo.
echo Building for ARM64...
call npm run build:win-arm64
if exist "dist-electron" (
    move "dist-electron" "dist-arm64"
    echo ARM64 build completed and moved to dist-arm64
) else (
    echo ERROR: ARM64 build failed
    pause
    exit /b 1
)

echo.
echo ========================================
echo Build Summary:
echo ========================================
echo x64 Installer: dist-64\Setup Wizard Free Setup 1.0.0.exe
echo x32 Installer: dist-32\Setup Wizard Free Setup 1.0.0.exe
echo ARM64 Installer: dist-arm64\Setup Wizard Free Setup 1.0.0.exe
echo.
echo All builds completed successfully!
pause
