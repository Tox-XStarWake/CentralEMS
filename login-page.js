const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
//    const username = loginForm.username.value;
    const password = loginForm.password.value;

//    if (username === "user" && password === "web_dev") {
    if (password === "penis") {        
        alert("You have successfully logged in.");
//        location.reload();
        location.assign("https://www.jotform.com/app/221935408468160");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
