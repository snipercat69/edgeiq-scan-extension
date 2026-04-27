// background.js — EdgeIQ Scan Extension
// Context menu: right-click any page or link → "Scan with EdgeIQ"

browser.contextMenus.create({
  id: 'edgeiq-scan',
  title: 'Scan with EdgeIQ',
  contexts: ['link', 'page']
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  var url = info.linkUrl || info.pageUrl;
  if (!url) return;

  // Clean URL: remove trailing slash
  var cleanUrl = url.replace(/\/$/, '');
  var scanUrl = 'https://edgeiqlabs.com/?url=' + encodeURIComponent(cleanUrl);
  browser.tabs.create({ url: scanUrl, active: true });
});
