document.getElementById("new-doctor-form").addEventListener("submit", addNewDoctor);

function addNewDoctor(e){
    e.preventDefault();
    const doctorName = document.getElementById("doctor-name").value;
    const doctorAvailable = document.getElementById("doctor-available").value;
    const doctorGender = document.getElementById("doctor-gender").value;
    const doctorVolunteer = document.getElementById("doctor-volunteer").value;
    const doctorSpecialty = document.getElementById("doctor-specialty").value;
    const newDoctor = {"name": doctorName, "available": doctorAvailable, "gender": doctorGender, "volunteer": doctorVolunteer, "specialty": doctorSpecialty};
    // javascript object (newItem) -> json -> java object (MarketItem.class)
    ajaxCreateItem(newDoctor, indicateSuccess, indicateFailure);
}

function indicateSuccess(){
    const message = document.getElementById("create-msg"); 
    message.hidden = false;
    message.innerText = "New Fighter successfully created";
}

function indicateFailure(){
    const message = document.getElementById("create-msg"); 
    message.hidden = false;
    message.innerText = "There was an problem with adding a Fighter";
}