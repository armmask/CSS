
window.addEventListener('load', function () {
    setTimeout("getPassword()", 1000);
    chrome.runtime.sendMessage({pageType: 'insecure'}, function(response) {
      console.log(response.farewell);
    });
});

function getPassword() {
  let warning = false;
  $("input").each(function () {
      let key = $(this).attr("type");
      console.log("running");
      if(key == "password"){
        console.log("find");
        warning = true;
      }
  });
  if (warning) {
    setTimeout(function(){alert("Avoid entering your credentials on this webpage");}, 2500);
  }
}
