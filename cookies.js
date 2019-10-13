chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("cookies.js is running!");
  let detail = {primaryPattern:"http://*", ResourceIdentifier:"CookiesContentSetting", setting:"session_only"};
  document.contentSettings.cookies(detail);
  console.log("post cookies");
});
