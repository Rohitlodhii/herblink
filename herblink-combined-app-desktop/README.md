# Herblink Combined Desktop App

A combined Electron desktop application for Lab, Manufacturer, and Processor roles in the Herblink system.

## Features

- **Lab Management**: View and manage processor inputs, generate reports
- **Manufacturer Management**: Manage products, product inventory, and herb inventory
- **Processor Management**: Manage inventory, farmer inputs, and processing plant info

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

### Building

Build for production:
```bash
npm run build
```

Build for specific platforms:
```bash
npm run build:win    # Windows
npm run build:mac    # macOS
npm run build:linux  # Linux
```

## Project Structure

```
herblink-combined-app-desktop/
├── src/
│   ├── main/           # Electron main process
│   ├── preload/        # Preload scripts
│   └── renderer/       # React application
│       └── src/
│           ├── pages/  # Page components
│           │   ├── lab/
│           │   ├── manufacturer/
│           │   └── processor/
│           └── context/ # React context providers
├── electron.vite.config.ts
├── package.json
└── README.md
```

## Usage

1. Launch the application
2. Select your role (Lab, Manufacturer, or Processor)
3. Enter your credentials
4. Access your role-specific dashboard

## API Configuration

The app connects to the backend API at `http://localhost:8000`. Make sure the backend server is running before using the app.

## Development

- `npm run dev` - Start development server with hot reload
- `npm run typecheck` - Run TypeScript type checking
- `npm run lint` - Run ESLint

## License

MIT

