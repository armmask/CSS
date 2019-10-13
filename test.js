
document.addEventListener('DOMContentLoaded', function () {
    console.log("success!!")
    setTimeout("getPassword()", 1000);
});

function getPassword() {
    $("input").each(function () {
        let key = $(this).attr("type");
        if(key == "password"){
          console.log("Be careful when you put in password")
        }else{
          console.log("No password on this webpage")
        }
    });
    console.log("Done!!")
}
