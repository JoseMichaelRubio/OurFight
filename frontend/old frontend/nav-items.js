const token = sessionStorage.getItem("token");
if(token){
    document.getElementById("login-nav-item").hidden = true;
    document.getElementById("new-item-nav-item").hidden = false;
    document.getElementById("log-out-nav-item").hidden = false;
}

document.getElementById("log-out-nav-item").addEventListener("click", logout);

function logout(){
    sessionStorage.removeItem("token");
    document.getElementById("login-nav-item").hidden = false;
    document.getElementById("new-item-nav-item").hidden = true;
    document.getElementById("log-out-nav-item").hidden = true;
}
