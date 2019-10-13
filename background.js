
chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: "*/", schemes: ["*"]},
        css: ["input[type='password']"]
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  let url = request.url;
  console.log("fetched: " + url)
  chrome.tabs.update({
     url: url
   });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("cookies.js is running!");
  let detail = {primaryPattern:"http://*", ResourceIdentifier:"CookiesContentSetting", setting:"session_only"};
  document.contentSettings.cookies(detail);
  console.log("post cookies");
});
