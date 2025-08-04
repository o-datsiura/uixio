# uixio

A modern, lightweight React component library built with React 19, TypeScript, and Vite.

## 🚀 Features

- **React 19**: Built with the latest React features and performance improvements
- **TypeScript**: Full TypeScript support with strict type checking
- **Vite**: Fast build tooling and development experience
- **OXC Linter**: Modern, fast linting with oxc
- **ESM & CJS**: Dual module format support for maximum compatibility
- **Tree-shakable**: Only import what you need
- **Zero dependencies**: Minimal bundle size impact

## 📦 Installation

```bash
npm install uixio
```

## 🎯 Usage

```tsx
import { Button } from 'uixio';

function App() {
  return (
    <Button variant="primary" onClick={() => console.log('Clicked!')}>
      Hello uixio!
    </Button>
  );
}
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd uixio

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build the library
pnpm run build

# Run linting
pnpm run lint
```

### Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build the library for production
- `pnpm run lint` - Run OXC linter
- `pnpm run type-check` - Run TypeScript type checking
- `pnpm run clean` - Clean build artifacts

## 📁 Project Structure

```
uixio/
├── src/
│   ├── components/
│   │   └── Button/
│   │       ├── Button.tsx
│   │       └── index.ts
│   └── index.ts
├── dist/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── oxc.json
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🚀 Release Process

This project uses automated releases via GitHub Actions. To release a new version:

1. Make your changes and commit them
2. Create a commit with the version tag in the message: `git commit -m "Release #v1.2.0"`
3. Push to main: `git push origin main`
4. The GitHub Action will automatically:
   - Extract the version from the commit message
   - Create a Git tag
   - Build the library
   - Publish to npm

## 📚 Documentation

For detailed component documentation and examples, please visit our documentation site (coming soon).

## 🐛 Issues

If you find a bug or have a feature request, please [open an issue](https://github.com/your-username/uixio/issues). 