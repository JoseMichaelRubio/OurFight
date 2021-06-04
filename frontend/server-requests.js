
/* <script href="server-request.js"></script> */

function sendAjaxRequest(method, url, body, successCallback, failureCallback, authToken){
    const xhr = new XMLHttpRequest(); // ready state 0 
    xhr.open(method, url); // ready state 1
    if(authToken){
        xhr.setRequestHeader("Authorization", authToken);
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status>199 && xhr.status<300){
                successCallback(xhr);
            } else {
                failureCallback(xhr);
            }
        }
    }
    if(body){
        xhr.send(body);
    } else {
        xhr.send(); // ready state 2,3,4 follow
    }
}

function sendAjaxPost(url, body, successCallback, failureCallback, authToken){
    sendAjaxRequest("POST", url, body, successCallback, failureCallback, authToken);
}

function ajaxLogin(username, password, successCallback, failureCallback){
    // username=crehm&password=supersecret
    const payload = `username=${username}&password=${password}`; // "username="+username+"&password"+password
    sendAjaxPost("http://20.62.192.255/login", payload, successCallback, failureCallback);
}

function ajaxCreateItem(item, successCallback, failureCallback){
    const itemJson = JSON.stringify(item);
    const auth = sessionStorage.getItem("token");
    sendAjaxPost("http://20.62.192.255/doctors", itemJson, successCallback, failureCallback, auth);
}

function sendAjaxDelete(url,body,successCallback,failureCallback,authToken){
    sendAjaxRequest("DELETE",url,body,successCallback,failureCallback,authToken);
}

function ajaxDeleteDoctor(doctor, successCallback, failureCallback){
    const doctorJson = JSON.stringify(doctor);
    const auth = sessionStorage.getItem("token");
    sendAjaxDelete("http://20.62.192.255/doctors", doctorJson, successCallback, failureCallback, auth); 
}
