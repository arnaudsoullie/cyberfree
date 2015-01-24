var currentTab;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request == 'showPageAction') {
    chrome.tabs.query(
      {currentWindow: true, active: true},
      function(tabArray) {
        if (tabArray && tabArray[0])
        chrome.pageAction.show(tabArray[0].id);
      }
    );
    // sender will also contain the tab id so you can simply use
    // if (sender)
    //     chrome.pageAction.show(sender.tab.id);
  }
});
