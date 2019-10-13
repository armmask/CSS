chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    let message = "";
    chrome.contentSettings.cookies.get({primaryUrl:'http://*/*'},function(details){message+='Cookies setting changed from: "'+details.setting ;});
    if (request.pageType == "insecure") {
      chrome.contentSettings.cookies.set({
        'primaryPattern': 'http://*/*',
        'setting': 'session_only'
      });
      chrome.contentSettings.cookies.get({primaryUrl:'http://*/*'},function(details){message+='" to: "'+details.setting +'"';});
      setTimeout(function(){alert("Insecure page, " + message);}, 2000);
    } else {
      chrome.contentSettings.cookies.set({
        'primaryPattern': 'http://*/*',
        'setting': 'allow'
      });
    }
  });
