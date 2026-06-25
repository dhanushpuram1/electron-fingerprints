document.getElementById('generateBtn').addEventListener('click', () => {
  const fingerprint = window.electronFingerprints.getFingerprint();
  document.getElementById('fingerprint').textContent = fingerprint;
});
