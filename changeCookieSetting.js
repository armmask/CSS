
window.addEventListener('load', function () {
    setTimeout("getPassword()", 1000);
    chrome.runtime.sendMessage({pageType: 'insecure'}, function(response) {
      console.log(response.farewell);
    });
});



function getPassword() {
    $("input").each(function () {
        let key = $(this).attr("type");
        if(key == "password"){
          alert("login page!")
          console.log("Be careful when you put in password")
        }else{
          console.log("Not a password tag")
        }
    });
    console.log("Finished")
}
