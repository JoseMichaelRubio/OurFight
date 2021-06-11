document.getElementById("delete-doctor-form").addEventListener("submit", deleteOldDoctor);

function deleteOldDoctor(e){
    e.preventDefault();
    const doctorId = document.getElementById("doctor-id").value;
    // javascript object (newItem) -> json -> java object (MarketItem.class)
    const deleteDoctor = {"id": doctorId};
    ajaxDeleteDoctor(deleteDoctor, indicateSuccess, indicateFailure);
}

function indicateSuccess(){
    const message = document.getElementById("create-msg"); 
    message.hidden = false;
    message.innerText = "New item successfully created";
}

function indicateFailure(){
    const message = document.getElementById("create-msg"); 
    message.hidden = false;
    message.innerText = "There was an issue creating your new item";
}