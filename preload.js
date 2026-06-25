const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronFingerprints', {
  getFingerprint: () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('Hello, world!', 2, 2);
    const canvasData = canvas.toDataURL();
    
    const fingerprint = btoa(canvasData + navigator.userAgent + screen.width + screen.height);
    return fingerprint;
  }
});
