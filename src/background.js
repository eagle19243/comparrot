chrome.browserAction.setPopup({
  popup: ''
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, {
    action: 'toggle-show-iframe'
  });
});
