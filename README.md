# my-node-app

A modern Node.js project template built with TypeScript, Esbuild, ESLint, and Prettier. Designed to provide a solid foundation for building scalable, type-safe, and highly maintainable applications.

---

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Getting Started](#getting-started)
   - [Clone the Repository](#clone-the-repository)
   - [Install Dependencies](#install-dependencies)
4. [Usage](#usage)
   - [Development Mode](#development-mode)
   - [Build for Production](#build-for-production)
   - [Type Checking](#type-checking)
   - [Start Application](#start-application)
5. [Configuration](#configuration)
   - [TypeScript (](#typescript-tsconfigjson)[`tsconfig.json`](#typescript-tsconfigjson)[)](#typescript-tsconfigjson)
   - [Esbuild (](#esbuild-buildmjs)[`build.mjs`](#esbuild-buildmjs)[)](#esbuild-buildmjs)
   - [Prettier (](#prettier-prettierrcjson)[`.prettierrc.json`](#prettier-prettierrcjson)[)](#prettier-prettierrcjson)
   - [ESLint (](#eslint-eslintrcjson)[`.eslintrc.json`](#eslint-eslintrcjson)[)](#eslint-eslintrcjson)
6. [Scripts](#scripts)
7. [Project Structure](#project-structure)
8. [Environment Variables](#environment-variables)
9. [Contributing](#contributing)
10. [License](#license)

---

## Features

- 🔧 **TypeScript** for static typing and modern JavaScript features.
- ⚡  **Esbuild** for lightning-fast bundling and minification.
- 📏 **ESLint** with @typescript-eslint for code quality and style enforcement.
- 🎨 **Prettier** for consistent code formatting.
- 🛠️ **NodeNext** module resolution for ESM compatibility.
- 🚀 Ready-to-use scripts for development, building, and production.

---

## Prerequisites

- [Node.js](https://nodejs.org/) 20.x or higher
- npm 8.x or higher (or yarn/pnpm equivalent)

---

## Getting Started

### Clone the Repository

```bash
git clone <repository-url>
cd my-node-app
```

### Install Dependencies

```bash
npm install
```

---

## Usage

### Development Mode

Run the application in watch mode with TSX for hot-reloads:

```bash
npm run dev
```

### Build for Production

Compile, bundle, and minify into the `dist` folder:

```bash
npm run build
```

### Type Checking

Perform a full TypeScript type-check without emitting files:

```bash
npm run type-check
```

### Start Application

Run the compiled code from `dist`:

```bash
npm run start
```

---

## Configuration

### TypeScript (`tsconfig.json`)

- **Target**: ES2022
- **Module**: NodeNext (ESM)
- **Root Dir**: `src` → **Out Dir**: `dist`
- **Strict**: All strict type-checking rules enabled
- **Incremental**: Caches `.tsbuildinfo` for faster rebuilds
- **Path Aliases**: `@/*` → `src/*`

### Esbuild (`build.mjs`)

- Entry: `src/index.ts`
- Bundle all dependencies into one file
- Target ES2022 to ensure code is compatible with modern Node.js versions, perfectly aligned with `tsconfig.json`
- Generates source maps for debugging
- Minifies and adds a shebang for CLI use

### Prettier (`.prettierrc.json`)

- Single quotes, no semicolons
- Print width: 90
- Trailing commas where valid in ES5
- Bracket spacing disabled

### ESLint (`.eslintrc.json`)

- Parser: `@typescript-eslint/parser`
- Extends: `eslint:recommended`, Type-checked rules, import recommendations, Prettier
- Enforces import ordering and warns on `console.log`
- Uses TypeScript project for type-aware linting

---

## Scripts

| Command              | Description                                |
| -------------------- | ------------------------------------------ |
| `npm run dev`        | Start in development mode with hot-reloads |
| `npm run build`      | Type-check and bundle for production       |
| `npm run start`      | Run the built application                  |
| `npm run type-check` | Perform TypeScript type-check              |

---

## Project Structure

```
my-node-app/
├── dist/                # Compiled output
├── node_modules/        # Installed dependencies
├── src/                 # Source files
│   └── index.ts         # Application entry point
├── .eslintrc.json       # ESLint configuration
├── .gitignore           # Ignored files/folders
├── .prettierrc.json     # Prettier configuration
├── build.mjs            # Esbuild bundler script
├── package.json         # npm manifest
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project README
```

---

## Environment Variables

If your project requires environment variables, create a `.env` file in the root and reference with `process.env.VARIABLE_NAME`.

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'feat: add feature'`)
4. Push to branch (`git push origin feature/my-feature`)
5. Open a Pull Request

Please ensure all npm scripts pass and code is properly linted and formatted before submitting.

---

## License

This project is licensed under the [ISC License](LICENSE).
