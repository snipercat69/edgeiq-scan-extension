# EdgeIQ — Scan This Site Browser Extension

**Right-click any website → opens EdgeIQ security scanner with the URL pre-filled.**

![EdgeIQ Extension](https://img.shields.io/badge/EdgeIQ-Scan%20This%20Site-00ff88?style=flat-square)

## What it does

- **Right-click** any link or page → "Scan with EdgeIQ"
- **Toolbar button** → scan the current tab
- Opens [edgeiqlabs.com](https://edgeiqlabs.com) with the target URL pre-filled in the scanner
- Works on **Firefox** and any **Chromium-based browser** (Chrome, Edge, Brave, Arc)

## Supported scanners

Once the URL opens in EdgeIQ, you can run:
- 🔒 SSL Certificate Checker
- 📡 HTTP Security Headers Analyzer
- 💉 XSS Quick Scan
- 🔗 Subdomain Hunter
- 🌐 DNS Lookup
- 📋 WHOIS Lookup
- 🔎 CVE Match

## Installation

### Firefox (recommended)

1. Download the latest release from [GitHub Releases](../../releases)
2. Open Firefox → `about:addons` → Settings (gear icon) → "Install Add-on From File..."
3. Select the `.xpi` file

Or: Clone this repo, open `about:debugging#/runtime/this-firefox`, click "Load Temporary Add-on", and select `manifest.json`.

### Chromium browsers (Chrome, Edge, Brave, Arc)

1. Download the latest release from [GitHub Releases](../../releases)
2. Open `chrome://extensions` → enable "Developer mode" (top right)
3. Click "Load unpacked" → select the extension folder
4. Pin the extension to your toolbar for easy access

## Development

```bash
# Clone
git clone https://github.com/snipercat69/edgeiq-scan-extension.git
cd edgeiq-scan-extension

# Edit
# - manifest.json: version, description
# - background.js: scan URL logic
# - icons/: extension icons (48x48, 96x96, 128x128 PNG)

# Test
# Firefox: about:debugging#/runtime/this-firefox → Load Temporary Add-on
# Chrome: chrome://extensions → Load unpacked
```

## The scan flow

1. Extension grabs the current tab URL
2. Opens `https://edgeiqlabs.com/?url=<encoded-url>`
3. Site pre-fills the URL in the SSL scanner form
4. User clicks "Scan" — your browser scans the target directly
5. Results display in the browser (no server-side scanning of target)

## Privacy

- The extension only reads the URL of the page you're on
- No data is sent to EdgeIQ servers unless you actively run a scan
- Scans run from your browser — target sites see your IP, not EdgeIQ's
- EdgeIQ server infrastructure (Workers) is only used for: WHOIS lookups, DNS queries, CVE matching, SSL cert fetching — never for HTTP security scans

## Permissions

| Permission | Why |
|-----------|-----|
| `contextMenus` | Create the right-click "Scan with EdgeIQ" menu |
| `activeTab` | Read the current tab URL when you click the toolbar button |

## Tech

- Pure JavaScript, no dependencies
- Manifest V2 (works in both Firefox and Chromium)
- No tracking, no analytics, no external calls

## License

MIT — free to use, modify, and distribute.

---

Part of [EdgeIQ Labs](https://edgeiqlabs.com) — security intelligence tools for developers and security teams.
