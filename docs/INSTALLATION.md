# Installation Guide

This guide will help you install Setup Wizard Free on your Windows system.

## System Requirements

### Minimum Requirements
- **Operating System**: Windows 10 (version 1903 or later) or Windows 11
- **Architecture**: x64, x32 (ia32), or ARM64
- **RAM**: 4 GB minimum
- **Storage**: 200 MB free space
- **Permissions**: Administrator rights (for system restore features)

### Recommended Requirements
- **Operating System**: Windows 11 (latest version)
- **RAM**: 8 GB or more
- **Storage**: 500 MB free space
- **Internet**: For downloading updates and documentation

## Download Options

### GitHub Releases (Recommended)
1. Go to the [Releases page](https://github.com/yourusername/setup-wizard-free/releases)
2. Download the latest release
3. Choose the appropriate installer for your system:
   - `Setup Wizard Free Setup 1.0.0-x64.exe` for 64-bit systems
   - `Setup Wizard Free Setup 1.0.0-ia32.exe` for 32-bit systems
   - `Setup Wizard Free Setup 1.0.0-arm64.exe` for ARM64 systems

### Direct Download
- **x64 (64-bit)**: [Download](https://github.com/yourusername/setup-wizard-free/releases/latest/download/Setup-Wizard-Free-Setup-1.0.0-x64.exe)
- **x32 (32-bit)**: [Download](https://github.com/yourusername/setup-wizard-free/releases/latest/download/Setup-Wizard-Free-Setup-1.0.0-ia32.exe)
- **ARM64**: [Download](https://github.com/yourusername/setup-wizard-free/releases/latest/download/Setup-Wizard-Free-Setup-1.0.0-arm64.exe)

## Installation Steps

### Method 1: Standard Installation

1. **Download** the appropriate installer for your system architecture
2. **Right-click** on the installer and select "Run as administrator"
3. **Follow** the installation wizard:
   - Accept the license agreement
   - Choose installation directory (default: `C:\Program Files\Setup Wizard Free`)
   - Select additional options (desktop shortcut, start menu entry)
4. **Click** "Install" to begin installation
5. **Wait** for the installation to complete
6. **Click** "Finish" to exit the installer

### Method 2: Silent Installation

For automated deployments:

```cmd
Setup Wizard Free Setup 1.0.0-x64.exe /S /D=C:\Program Files\Setup Wizard Free
```

Parameters:
- `/S` - Silent installation
- `/D` - Installation directory

### Method 3: Portable Version

1. **Download** the unpacked application from the releases
2. **Extract** to your desired location
3. **Run** `Setup Wizard Free.exe` directly

## Post-Installation

### First Launch
1. **Launch** Setup Wizard Free from the desktop shortcut or Start menu
2. **Grant** administrator permissions when prompted
3. **Review** the welcome screen and terms
4. **Configure** your preferences

### System Integration
- **Desktop Shortcut**: Created automatically
- **Start Menu**: Added to "Development Tools" category
- **System Restore**: Integrated with Windows System Protection
- **File Associations**: None (standalone application)

## Verification

### Check Installation
1. **Open** Setup Wizard Free
2. **Verify** the application loads correctly
3. **Test** system restore functionality
4. **Check** that all features are accessible

### System Requirements Check
The application will automatically verify:
- Windows version compatibility
- Required permissions
- System architecture
- Available disk space

## Troubleshooting

### Common Issues

#### "Windows protected your PC" Warning
- **Cause**: Windows SmartScreen blocking unsigned executable
- **Solution**: Click "More info" → "Run anyway"

#### "Administrator privileges required"
- **Cause**: Application needs elevated permissions
- **Solution**: Right-click → "Run as administrator"

#### Installation Fails
- **Check**: Available disk space (200 MB minimum)
- **Check**: Windows version compatibility
- **Check**: Antivirus software blocking installation

#### Application Won't Start
- **Check**: Windows version (Windows 10 1903+ required)
- **Check**: Architecture compatibility (x64/x32/ARM64)
- **Check**: Visual C++ Redistributable installed

### Advanced Troubleshooting

#### Log Files
Check the following locations for error logs:
- `%APPDATA%\Setup Wizard Free\logs\`
- Windows Event Viewer → Applications

#### Registry Issues
If installation is corrupted:
1. **Uninstall** through Control Panel
2. **Delete** registry entries: `HKEY_CURRENT_USER\Software\Setup Wizard Free`
3. **Reinstall** the application

#### Clean Installation
For a completely clean installation:
1. **Uninstall** the application
2. **Delete** the installation directory
3. **Remove** desktop shortcuts and start menu entries
4. **Clear** registry entries
5. **Restart** the computer
6. **Reinstall** the application

## Uninstallation

### Standard Uninstallation
1. **Open** Control Panel → Programs and Features
2. **Find** "Setup Wizard Free"
3. **Click** "Uninstall"
4. **Follow** the uninstallation wizard
5. **Confirm** removal of application data

### Silent Uninstallation
```cmd
"C:\Program Files\Setup Wizard Free\uninstall.exe" /S
```

### Manual Cleanup
If standard uninstallation fails:
1. **Delete** installation directory
2. **Remove** desktop shortcuts
3. **Delete** start menu entries
4. **Clear** registry entries
5. **Remove** application data from `%APPDATA%`

## Support

If you encounter issues during installation:

- **GitHub Issues**: [Create an issue](https://github.com/yourusername/setup-wizard-free/issues)
- **Documentation**: Check the [FAQ](FAQ.md)
- **Community**: Join our [Discord](https://discord.gg/your-invite)
- **Email**: Contact support directly

## Security Notes

- **Source**: All code is open source and auditable
- **Permissions**: Only requests necessary system permissions
- **Data**: No personal data is collected or transmitted
- **Updates**: Manual updates only (no automatic updates)
- **Antivirus**: May trigger false positives due to system integration

## Next Steps

After successful installation:

1. **Read** the [User Guide](USER_GUIDE.md)
2. **Explore** the application features
3. **Configure** system restore settings
4. **Join** the community for support and updates
