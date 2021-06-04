const xhr = new XMLHttpRequest();
xhr.open("GET", "http://20.62.192.255/doctors/marriage-counselors"); //method and the url 
xhr.setRequestHeader("Authorization", "admin-auth-token")
xhr.onreadystatechange = function () {//providing a callback funtion for on readstate chagne
  if (xhr.readyState === 4) {
      if(xhr.status == 200){
          const doctors = JSON.parse(xhr.responseText); //parsing Json to String, in this case, an array of doctors
          renderItemsInTable(doctors);
      } else{
          console.log("Error in request")
      }
  }
};
xhr.send();

function renderItemsInTable(doctorsTable){
    document.getElementById("doctors-table").hidden = false; // how hide a table from showing before the data pops up (use a loading spinner)
    const tableBody = document.getElementById("doctors-table-body")
    for(let doctor of doctorsTable){
      let newRow =  document.createElement("tr");
      newRow.innerHTML = `<td>${doctor.id}</td><td>${doctor.name}</td><td>${doctor.gender}</td><td>${doctor.available}</td><td>${doctor.volunteer}</td>`;
      tableBody.appendChild(newRow);
    }
}
