
console.log("script is running")

window.addEventListener('load', function () {
    console.log("success!!")
    setTimeout("getPassword()", 1000);
});



function getPassword() {
    $("input").each(function () {
        let key = $(this).attr("type");
        if(key == "password"){
          console.log("Be careful when you put in password")
        }else{
          console.log("Not a password tag")
        }
    });
    console.log("Finished")
}
