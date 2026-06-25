# Electron Fingerprints

## Abstract

**Electron Fingerprints** is a technical demonstration of device fingerprinting techniques implemented in an Electron desktop application. This project explores low-level browser and system-level fingerprinting methodologies, leveraging Electron's multi-process architecture, and the Web APIs available in Chromium.

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Fingerprinting Methodology](#fingerprinting-methodology)
3. [Technical Implementation](#technical-implementation)
4. [Installation & Usage](#installation--usage)
5. [Project Structure](#project-structure)
6. [Security Considerations](#security-considerations)
7. [Future Enhancements](#future-enhancements)
8. [License](#license)

---

## Architecture Overview

### Electron Process Model

Electron employs a **multi-process architecture** consisting of:
- **Main Process**: Responsible for creating and managing BrowserWindow instances, native APIs, and application lifecycle
- **Renderer Process**: Executes web content (Chromium)
- **Preload Script**: Bridges main ↔ renderer communication via `contextBridge`

### Process Isolation & IPC Mechanism

The project leverages the `contextBridge` API to expose a minimal, secure API to the renderer, following Electron's security best practices.

---

## Fingerprinting Methodology

### 1. Canvas Fingerprinting

Canvas fingerprinting exploits subtle variations in rendering engines by:
- Rendering text strings to an offscreen canvas
- Measuring pixel-level variations due to:
  - GPU rendering pipelines
  - Font rendering engines
  - Anti-aliasing algorithms
  - Sub-pixel rendering

### 2. User Agent String Analysis

The `navigator.userAgent` provides:
- Browser version
- Operating system
- Rendering engine version
- Platform architecture

### 3. Screen Properties

Screen-related properties:
- `screen.width` / `screen.height`: Screen resolution
- `screen.colorDepth`: Color depth
- `screen.pixelDepth`: Pixel depth

---

## Technical Implementation

### Main Process (`main.js`)

#### Dependencies:
- `app`: Electron app lifecycle management
- `BrowserWindow`: Renderer process window management
- `path`: Path manipulation for safe file path resolution

#### Key Functions:
- `createWindow()`: Initializes BrowserWindow instance with preload script
- `app.whenReady()`: Initializes app lifecycle
- `app.on('activate')`: macOS reactivation
- `app.on('window-all-closed')`: App termination

### Preload Script (`preload.js`)

#### `contextBridge.exposeInMainWorld` API:
```javascript
contextBridge.exposeInMainWorld('electronFingerprints', {
  getFingerprint: () => {
    // Fingerprint generation logic
  }
});
```

#### Fingerprint Generation Algorithm:
```
1. Create <canvas> element via DOM API
2. Get 2D rendering context
3. Set baseline, font, and fillText
4. Serialize canvas to Data URL
5. Concatenate with navigator.userAgent + screen dimensions
6. Base64 encode using btoa()
7. Return as fingerprint
```

### Renderer Process (`renderer.js`)

Renderer process is a simple event handler for DOM manipulation to display fingerprint on button click.

---

## Installation & Usage

### Prerequisites

- **Node.js >=18.x LTS (recommended)
- npm >=9.x
- Git (for cloning the repository)

### Step-by-Step Installation

```bash
# Clone repository
git clone https://github.com/dhanushpuram1/electron-fingerprints.git
cd electron-fingerprints

# Install dependencies
npm install
```

### Running the Application

```bash
# Launch application
npm start
```

---

## Project Structure

```
electron-fingerprints/
├── main.js               # Main Electron process (Node.js runtime)
├── preload.js            # Preload script (isolated context)
├── renderer.js           # Renderer process (Chromium runtime)
├── index.html            # HTML UI
├── package.json          # npm package definition
└── README.md             # This file
```

---

## Security Considerations

### 1. Context Isolation

- Enabled by default in Electron >=12
- Prevents direct access to Node.js APIs from renderer
- `contextBridge` used for controlled exposure

### 2. Fingerprinting Privacy Concerns

This project is for **educational purposes only**.
- Do not use for maliciously or without user consent
- Consider privacy regulations (GDPR, CCPA)

---

## Future Enhancements

- WebGL fingerprinting
- AudioContext fingerprinting
- WebRTC fingerprinting
- Battery status API fingerprinting
- WebAudio fingerprinting
- Persistent fingerprint storage
- Fingerprint matching algorithm

---

## License

MIT License. See `LICENSE` file for details.
