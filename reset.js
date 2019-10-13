window.addEventListener('load', function () {
    chrome.runtime.sendMessage({pageType: 'secure'}, function(response) {
      console.log(response.farewell);
    });
});
