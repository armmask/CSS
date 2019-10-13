let stop_button = document.getElementById('stop');

stop_button.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'alert("Stopped")'});
  });
};
