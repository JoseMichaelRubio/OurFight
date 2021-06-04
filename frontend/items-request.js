// getting item data from our server

const xhr = new XMLHttpRequest(); // ready state 0 
xhr.open("GET", "http://20.62.192.255/items"); // ready state 1
// let token = sessionStorage.getItem("jwt"); // we could set the Auth header with this value instead
xhr.setRequestHeader("Authorization", "admin-auth-token");
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            const items = JSON.parse(xhr.responseText);
            renderItemsInTable(items);
        } else {
            console.log("something went wrong with your request")
        }
    }
}
xhr.send(); // ready state 2,3,4 follow 


function renderItemsInTable(itemsList){
    document.getElementById("items-table").hidden = false;
    const tableBody = document.getElementById("items-table-body");
    for(let item of itemsList){
        let newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${item.id}</td><td>${item.name}</td><td>${item.price}</td>`;
        tableBody.appendChild(newRow);
    }    
}