"use strict";
console.log("cookies is running!");
/*chrome.cookies.getAll("", function(Cookie[] cookies) {
  for(i = 0; i <= cookies.length; i = i + 1) {
    var cookie = cookies[i];
    console.log(cookie.name);
  }
});
*/
let cookie = document.cookie;
console.log(cookie);


console.log(chrome.cookies);
