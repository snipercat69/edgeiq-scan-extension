// EdgeIQ — Right-click "Scan with EdgeIQ" context menu
browser.contextMenus.create({
  id: "edgeiq-scan",
  title: "Scan with EdgeIQ",
  contexts: ["link", "page"]
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  var url = info.linkUrl || info.pageUrl;
  if (!url) return;

  // Clean the URL: remove trailing slash, strip query params for display
  var cleanUrl = url.replace(/\/$/, "");

  // Open the scanner with the URL pre-filled
  var scanUrl = "https://edgeiqlabs.com/?url=" + encodeURIComponent(cleanUrl);
  browser.tabs.create({ url: scanUrl, active: true });
});

// Also handle toolbar button click
browser.browserAction.onClicked.addListener(function(tab) {
  var url = tab.url;
  if (!url || url.startsWith("about:") || url.startsWith("chrome:")) {
    // Can't access this URL directly, open the scanner homepage
    browser.tabs.create({ url: "https://edgeiqlabs.com/", active: true });
    return;
  }
  var cleanUrl = url.replace(/\/$/, "");
  var scanUrl = "https://edgeiqlabs.com/?url=" + encodeURIComponent(cleanUrl);
  browser.tabs.create({ url: scanUrl, active: true });
});
