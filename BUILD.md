# Setup Wizard Free - Build Instructions

## Prerequisites
- Node.js (v18 or higher)
- npm or yarn

## Build Commands

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Windows Builds

#### Build separate installers for each architecture
```bash
# Batch file (Windows)
npm run build:installers

# PowerShell script (Windows)
npm run build:installers-ps

# Or run directly
build-installers.bat
```

#### Build for all Windows architectures (single installer)
```bash
npm run build:all
```

#### Build for specific architectures
```bash
# x64 (64-bit)
npm run build:win-x64

# x32 (32-bit)
npm run build:win-ia32

# ARM64
npm run build:win-arm64

# All Windows architectures
npm run build:win
```

## Output

### Separate Architecture Builds (Recommended)
When using `npm run build:installers`, you'll get separate folders:

- **dist-64/**: x64 installer and unpacked files
  - `Setup Wizard Free Setup 1.0.0.exe` (x64 installer)
  - `win-unpacked/` (x64 unpacked app)
- **dist-32/**: x32 installer and unpacked files  
  - `Setup Wizard Free Setup 1.0.0.exe` (x32 installer)
  - `win-ia32-unpacked/` (x32 unpacked app)
- **dist-arm64/**: ARM64 installer and unpacked files
  - `Setup Wizard Free Setup 1.0.0.exe` (ARM64 installer)
  - `win-arm64-unpacked/` (ARM64 unpacked app)

### Single Multi-Architecture Build
When using `npm run build:all`, you'll get:

- **dist-electron/**: Single installer supporting all architectures
  - `Setup Wizard Free Setup 1.0.0.exe` (multi-arch installer)
  - `win-unpacked/` - x64 version
  - `win-ia32-unpacked/` - x32 version  
  - `win-arm64-unpacked/` - ARM64 version

## Supported Architectures

- **x64**: 64-bit Intel/AMD processors
- **ia32**: 32-bit Intel/AMD processors
- **arm64**: ARM64 processors (Windows on ARM)

## Notes

- The installer automatically detects the target architecture
- All builds include the same functionality
- Assets and resources are included in each build
- The application requires administrator privileges for system restore functionality
