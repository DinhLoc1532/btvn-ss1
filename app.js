var inputUsername = document.getElementById("username");
var inputPassword = document.getElementById("password");

// CÁCH 1

// function Submit() {
//     username = inputUsername.value;
//     password = inputPassword.value;
//     if (username == "" && password!="") {
//         alert("Input your username")
//     } else if (username!="" && password == "") {
//         alert("Input your password")
//     } else if (username=="" && password=="") {
//         alert("Input your username and password")
//     } else {
//         alert("Sign in successfully")
//     }
// }

// CÁCH 2

var button = document.getElementById("button");
button.addEventListener("click", function() {
    username = inputUsername.value;
    password = inputPassword.value;
    if (username == "" && password!="") {
        alert("Input your username")
    } else if (username!="" && password == "") {
        alert("Input your password")
    } else if (username=="" && password=="") {
        alert("Input your username and password")
    } else {
        alert("Sign in successfully")
    }
})