// let idNumber = 1;
let deleteTrue = false;
let updateTrue = false;
var updateButtonClick = false;
var newEntryButtonClick = false;
var updateId = 0;

let shipNameButton = "off";
let captainButton = "off";
let classButton = "off";
let originButton = "off";
let cargoButton = "off";

const deleteButton = document.querySelector('#deleteButton');
const updateButton = document.querySelector('#updateButton');
const newEntryButton = document.querySelector('#newEntryButton');
const shipNameInput = document.querySelector('.ship-name');
const output = document.querySelector('#logContent');
const createForm = document.querySelector('#createForm');
const updateForm = document.querySelector('#updateForm');
const shipNameHeader = document.querySelector('#shipNameHeader');
const captainHeader = document.querySelector('#captainHeader');
const classHeader = document.querySelector('#classHeader');
const originHeader = document.querySelector('#originHeader');
const cargoHeader = document.querySelector('#cargoHeader');

//Opens the tutorial modal upon page load
$(document).ready(function(){
    $("#pageOpenModal").modal('show');
});

//Input form to create a new record
createForm.addEventListener('submit', function(event) {
    event.preventDefault();
        const data = {
        shipName: this.shipName.value,
        captainName: this.captainName.value,
        shipClass: this.shipClass.value,
        origin: this.origin.value,
        cargo: this.cargo.value,
    }

    fetch("http://localhost:8082/create",{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type' : "application/json"
        }
        
    }).then(response => {
        return response.json();
    }).then(data => {
        getDefaultData();
        this.reset();
    }).catch(error => console.log(error));
});

//Input form to update an existing record
updateForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let id = updateId;
    const data = {
        id: this.id.value,
        shipName: this.shipName.value,
        captainName: this.captainName.value,
        shipClass: this.shipClass.value,
        origin: this.origin.value,
        cargo: this.cargo.value,
    }

    fetch("http://localhost:8082/update?id=" + id,{
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            'Content-Type' : "application/json"
        }
        
    }).then(response => {
        return response.json();
    }).then(data => {
        getDefaultData();
        this.reset();
    }).catch(error => console.log(error));
});

//Delete function appended to record upon creation
//Waits until the global delete button is true to function
function deleteLog(id){
    if(deleteTrue == false){
    } else if (deleteTrue == true){
        $('#deleteModal').modal("toggle");
        fetch("http://localhost:8082/remove/" + id, {
            method: "DELETE"
        }).then(response => {
            getDefaultData();
        }).catch(error => console.error(error));
    }
}

//Update function appended to record upon creation
//Waits until the global update button is true to toggle updateModal
function updateLog(id){
    if(updateTrue == false){

    } else if (updateTrue == true){
        updateId = id;
        $('#updateModal').modal("toggle");
    }
}

//Table headers that allow Asc/Desc/Normal ordering of data
//Adds unicode icon to indicate how its sorting
//Uses Getall/byOrder and sorting stops other headers from sorting
shipNameHeader.addEventListener('click', function(){
    output.innerHTML = "";
    if(shipNameButton == "off" ) {
        deselectFilters();
        fetch("http://localhost:8082/getAll/sort/shipAsc")
        .then(response => response.json())
        .then(logArray => {
            logArray.forEach(createData);
        }).catch(error => console.error(error));
        shipNameHeader.innerHTML = "ship name &#x25B2;";
        shipNameButton = "asc";

    } else if (shipNameButton == "asc"){
        deselectFilters();
        fetch("http://localhost:8082/getAll/sort/shipDesc")
        .then(response => response.json())
        .then(logArray => {
            logArray.forEach(createData);
        }).catch(error => console.error(error));
        shipNameHeader.innerHTML = "ship name &#9660;";
        shipNameButton = "desc";

    } else if (shipNameButton == "desc"){
        getDefaultData();
        shipNameHeader.innerHTML = "ship name";
        shipNameButton = "off";
    } 
});

captainHeader.addEventListener('click', function(){
    output.innerHTML = "";
    if(captainButton == "off" ) {
        deselectFilters();
        fetch("http://localhost:8082/getAll/sort/captainAsc")
        .then(response => response.json())
        .then(logArray => {
            logArray.forEach(createData);
        }).catch(error => console.error(error));
        captainHeader.innerHTML = "captain &#x25B2;";
        captainButton = "asc";
    } else if (captainButton == "asc"){
        deselectFilters();
        fetch("http://localhost:8082/getAll/sort/captainDesc")
        .then(response => response.json())
        .then(logArray => {
            logArray.forEach(createData);
        }).catch(error => console.error(error));
        captainHeader.innerHTML = "captain &#9660;";
        captainButton = "desc";
    } else if (captainButton == "desc"){
        getDefaultData();
        captainHeader.innerHTML = "captain";
        captainButton = "off";
    } 
});

classHeader.addEventListener('click', function(){
    output.innerHTML = "";
    if(classButton == "off" ) {
        deselectFilters();
        fetch("http://localhost:8082/getAll/sort/classAsc")
        .then(response => response.json())
        .then(logArray => {
            logArray.forEach(createData);
        }).catch(error => console.error(error));
        classHeader.innerHTML = "class &#x25B2;";
        classButton = "asc";
    } else if (classButton == "asc"){
        deselectFilters();
        fetch("http://localhost:8082/getAll/sort/classDesc")
        .then(response => response.json())
        .then(logArray => {
            logArray.forEach(createData);
        }).catch(error => console.error(error));
        classHeader.innerHTML = "class &#9660;";
        classButton = "desc";
    } else if (classButton == "desc"){
        getDefaultData();
        classHeader.innerHTML = "class";
        classButton = "off";
    } 
});

originHeader.addEventListener('click', function(){
    output.innerHTML = "";
    if(originButton == "off" ) {
        deselectFilters();
        fetch("http://localhost:8082/getAll/sort/originAsc")
        .then(response => response.json())
        .then(logArray => {
            logArray.forEach(createData);
        }).catch(error => console.error(error));
        originHeader.innerHTML = "origin &#x25B2;";
        originButton = "asc";
    } else if (originButton == "asc"){
        deselectFilters();
        fetch("http://localhost:8082/getAll/sort/originDesc")
        .then(response => response.json())
        .then(logArray => {
            logArray.forEach(createData);
        }).catch(error => console.error(error));
        originHeader.innerHTML = "origin &#9660;";
        originButton = "desc";
    } else if (originButton == "desc"){
        getDefaultData();
        originHeader.innerHTML = "origin";
        originButton = "off";
    } 
});

cargoHeader.addEventListener('click', function(){
    deselectFilters();
    output.innerHTML = "";
    if(cargoButton == "off" ) {
        deselectFilters();
        fetch("http://localhost:8082/getAll/sort/cargoAsc")
        .then(response => response.json())
        .then(logArray => {
            logArray.forEach(createData);
        }).catch(error => console.error(error));
        cargoHeader.innerHTML = "cargo value &#x25B2;";
        cargoButton = "asc";
    } else if (cargoButton == "asc"){
        deselectFilters();
        fetch("http://localhost:8082/getAll/sort/cargoDesc")
        .then(response => response.json())
        .then(logArray => {
            logArray.forEach(createData);
        }).catch(error => console.error(error));
        cargoHeader.innerHTML = "cargo value &#9660;";
        cargoButton = "desc";
    } else if (cargoButton == "desc"){
        getDefaultData();
        cargoHeader.innerHTML = "cargo Value";
        cargoButton = "off";
    } 
});

//Sets all table headers to 'off' and resets the unicode to blank
//Functions when other headers are selected
function deselectFilters (){
    shipNameButton = "off";
    captainButton = "off";
    classButton = "off";
    originButtonButton = "off";
    cargoButtonButton = "off";
    classHeader.innerHTML = "class";
    captainHeader.innerHTML = "captain";
    originHeader.innerHTML = "origin";
    cargoHeader.innerHTML = "cargo Value";
    shipNameHeader.innerHTML = "ship name";
}

//Global delete button, triggers when pressed setting a variable to true
deleteButton.addEventListener("click", function(){
    if(deleteTrue){
        deleteTrue = false;
        deleteButton.classList.remove("button-active");
    } else {
        deleteButton.classList.add("button-active");
        deleteTrue = true;
        updateButton.classList.remove("button-active");
        updateTrue = false;
    }
});

//Global update button, triggers when pressed setting a variable to true
updateButton.addEventListener("click", function(){
    if(updateTrue){
        updateTrue = false;
        updateButton.classList.remove("button-active");
    } else {
        updateButton.classList.add("button-active");
        updateTrue = true;
        deleteButton.classList.remove("button-active");
        deleteTrue = false;
    }
});

//Triggers upon create entry, toggles the createModal form
newEntryButton.addEventListener("click", function(){
    newEntryButton.classList.add("button-active");
    $('#createModal').modal("toggle");
});

//Triggers when createModal is closed, toggling the new entry button off
$("#createModal").on("hidden.bs.modal", function () {
    newEntryButton.classList.remove("button-active");
});

//Takes the data passed in as a JSON log
//Creates a new row, assigns Event Listeners and sets the id to the record id
//Creates the columns inside the row and appends the data
function createData(log){
    let newRecord = document.createElement('div');
    newRecord.setAttribute("class", "row m-0 ship-log");
    newRecord.setAttribute("id","record-" + log.id);
    newRecord.addEventListener("click", function() {
        deleteLog(log.id);
    });
    newRecord.addEventListener("click", function() {
        updateLog(log.id);
    });
    
    let newIDNumber = document.createElement('div');
    newIDNumber.setAttribute("class", "col-1");
    newIDNumber.innerHTML = '<h3 class="text-center">' + log.id + '</h3>';

    let newShipName = document.createElement('div');
    newShipName.setAttribute("class", "col-3");
    newShipName.innerHTML = '<h3 class="text-center">' + log.shipName + '</h3>';

    let newCaptainName = document.createElement('div');
    newCaptainName.setAttribute("class", "col-2");
    newCaptainName.innerHTML = '<h3 class="text-center">' + log.captainName + '</h3>';

    let newClass = document.createElement('div');
    newClass.setAttribute("class", "col-2");
    newClass.innerHTML = '<h3 class="text-center">' + log.shipClass + '</h3>';

    let newOrigin = document.createElement('div');
    newOrigin.setAttribute("class", "col-2");
    newOrigin.innerHTML = '<h3 class="text-center">' + log.origin + '</h3>';

    let newCargo = document.createElement('div');
    newCargo.setAttribute("class", "col-2");
    newCargo.innerHTML = '<h3 class="text-center">¥ ' + log.cargo + '</h3>';

    output.appendChild(newRecord);

    newRecord.appendChild(newIDNumber);
    newRecord.appendChild(newShipName);
    newRecord.appendChild(newCaptainName);
    newRecord.appendChild(newClass);
    newRecord.appendChild(newOrigin);
    newRecord.appendChild(newCargo);

}

//gets the default data from the DB, creates an arraylist and passes it into createData
function getDefaultData() {
    output.innerHTML = "";
    fetch("http://localhost:8082/getAll")
        .then(response => response.json())
        .then(logArray => {
            logArray.forEach(createData);
        }).catch(error => console.error(error));
}

//Runs the defaut data function to grab the existing data from database
getDefaultData();

