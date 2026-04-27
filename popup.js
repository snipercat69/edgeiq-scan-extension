// popup.js — handles the toolbar popup button click
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('scanBtn').addEventListener('click', function() {
    // Query the active tab
    browser.tabs.query({ active: true, currentWindow: true }).then(function(tabs) {
      var tab = tabs[0];
      var url = tab.url;

      // Skip about:, chrome:, file: pages
      if (!url || url.startsWith('about:') || url.startsWith('chrome://') || url.startsWith('file://')) {
        // Open the scanner anyway so they at least get the tool
        browser.tabs.create({ url: 'https://edgeiqlabs.com/', active: true });
        window.close();
        return;
      }

      var cleanUrl = url.replace(/\/$/, '');
      var scanUrl = 'https://edgeiqlabs.com/?url=' + encodeURIComponent(cleanUrl);
      browser.tabs.create({ url: scanUrl, active: true });
      window.close();
    }).catch(function(err) {
      // Fallback: just open the scanner
      browser.tabs.create({ url: 'https://edgeiqlabs.com/', active: true });
      window.close();
    });
  });
});
