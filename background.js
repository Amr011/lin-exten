chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // console.log(tab)
  if (changeInfo.status === 'complete' && tab.url) {
    chrome.tabs.sendMessage(tabId, {
      message: 'TabUpdated',
      tabURL: tab.url,
    })
  }
})
