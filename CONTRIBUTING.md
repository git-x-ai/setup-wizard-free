# Contributing to Setup Wizard Free

Thank you for your interest in contributing to Setup Wizard Free! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+
- Git 2.30+
- Windows 10/11 (for testing)

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/yourusername/setup-wizard-free.git
   cd setup-wizard-free
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development**
   ```bash
   npm run dev
   ```

## 📋 Contribution Guidelines

### Code Style

- Use **Prettier** for code formatting
- Follow **ESLint** rules
- Use **functional components** with hooks
- Prefer **const** over let, avoid var
- Use **descriptive variable names**

### Commit Messages

Use conventional commits format:

```
type(scope): description

feat(ui): add dark mode toggle
fix(build): resolve x64 build issue
docs(readme): update installation instructions
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### Pull Request Process

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Write clean, documented code
   - Add tests if applicable
   - Update documentation

3. **Test Your Changes**
   ```bash
   npm run build:installers
   npm test  # if tests exist
   ```

4. **Submit Pull Request**
   - Clear description of changes
   - Reference any related issues
   - Include screenshots for UI changes

## 🏗️ Development Workflow

### Branch Naming

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring

### Testing

Before submitting:

1. **Build Test**
   ```bash
   npm run build:installers
   ```

2. **Architecture Test**
   ```bash
   npm run build:win-x64
   npm run build:win-ia32
   npm run build:win-arm64
   ```

3. **Manual Testing**
   - Test on different Windows versions
   - Verify system restore functionality
   - Check UI responsiveness

## 🐛 Bug Reports

When reporting bugs, include:

- **OS Version**: Windows 10/11, architecture
- **Steps to Reproduce**: Clear, numbered steps
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Screenshots**: If applicable
- **Logs**: Any error messages or console output

## 💡 Feature Requests

For new features:

- **Use Case**: Why is this feature needed?
- **Proposed Solution**: How should it work?
- **Alternatives**: Other approaches considered
- **Additional Context**: Screenshots, mockups, etc.

## 📝 Documentation

### Code Documentation

- Use **JSDoc** for functions and classes
- Include **parameter descriptions**
- Add **return value documentation**
- Provide **usage examples**

### README Updates

- Keep installation instructions current
- Update feature lists
- Add new screenshots
- Update system requirements

## 🎨 UI/UX Guidelines

### Design Principles

- **Consistency**: Follow existing patterns
- **Accessibility**: Use semantic HTML, ARIA labels
- **Responsiveness**: Mobile-first approach
- **Performance**: Optimize for speed

### Component Guidelines

- **Single Responsibility**: One purpose per component
- **Reusability**: Make components reusable
- **Props Interface**: Clear, typed props
- **State Management**: Use hooks appropriately

## 🔧 Build System

### Architecture-Specific Builds

Each architecture has its own configuration:

- `electron-builder-x64.json` - x64 builds
- `electron-builder-ia32.json` - x32 builds  
- `electron-builder-arm64.json` - ARM64 builds

### Build Scripts

- `build-installers.bat` - Windows batch file
- `build-installers.ps1` - PowerShell script
- `npm run build:installers` - npm script

## 🚀 Release Process

### Version Bumping

- **Major**: Breaking changes
- **Minor**: New features
- **Patch**: Bug fixes

### Release Checklist

- [ ] Update version in `package.json`
- [ ] Update `CHANGELOG.md`
- [ ] Test all architectures
- [ ] Create GitHub release
- [ ] Upload installers

## 📞 Getting Help

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and ideas
- **Discord**: For real-time chat
- **Email**: For private matters

## 📄 License

By contributing, you agree that your contributions will be licensed under the same dual license as the project.

## 🙏 Recognition

Contributors will be recognized in:

- `CONTRIBUTORS.md` file
- GitHub contributors page
- Release notes
- Project documentation

Thank you for contributing to Setup Wizard Free! 🎉
