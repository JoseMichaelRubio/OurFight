let displayInConsole = data=>console.log(data);

// GET request to "http://localhost:7000/items"
fetch("http://20.62.192.255/items", {headers:{"Authorization":"admin-auth-token"}}) // promise of a response
.then(response=>response.json()) // promise of data
.then(renderItemsInTable)
.catch(e=>console.error(e));



function renderItemsInTable(itemsList){
    document.getElementById("items-table").hidden = false;
    const tableBody = document.getElementById("items-table-body");
    for(let item of itemsList){
        let newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${item.id}</td><td>${item.name}</td><td>${item.price}</td>`;
        tableBody.appendChild(newRow);
    }    
}