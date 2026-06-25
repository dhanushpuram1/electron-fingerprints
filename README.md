# Electron Fingerprints

A complete, working Electron app for device fingerprinting!

## Features

- Generate unique device fingerprints using canvas and user agent data
- Clean, modern UI
- Simple and easy to use
- Complete Electron project structure

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Running the App

```bash
npm start
```

## Project Structure

```
electron-fingerprints/
├── main.js          # Main Electron process
├── preload.js       # Preload script
├── renderer.js      # Renderer process
├── index.html       # Main UI
└── package.json
```

## How It Works

The app generates a fingerprint using:
- Canvas rendering
- User agent string
- Screen dimensions

## License

MIT
