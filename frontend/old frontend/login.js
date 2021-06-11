document.getElementById("login-form").addEventListener("submit",attemptLogin);

function attemptLogin(event){
    event.preventDefault(); // this stops the form from sending a GET request by default to the same URL
    const username = document.getElementById("inputEmail").value;
    const password = document.getElementById("inputPassword").value;
    ajaxLogin(username, password, successfulLogin, loginFailed)
}

function successfulLogin(xhr){
    console.log("Successful Login");
    const authToken = xhr.getResponseHeader("Authorization");
    sessionStorage.setItem("token", authToken);
    window.location.href = "./index.html";
}

function loginFailed(xhr){
    const errorDiv = document.getElementById("error-msg");
    errorDiv.hidden = false;
    errorDiv.innerText = xhr.responseText;
}