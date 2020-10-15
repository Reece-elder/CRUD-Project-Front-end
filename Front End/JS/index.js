let idNumber = 1;
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

createForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Submit pressed");
    const data = {
        shipName: this.shipName.value,
        captainName: this.captainName.value,
        shipClass: this.shipClass.value,
        origin: this.origin.value,
        cargo: this.cargo.value,
    }
    console.log(data);

    fetch("http://localhost:8082/create",{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type' : "application/json"
        }
        
    }).then(response => {
        return response.json();
    }).then(data => {
        renderData();
        this.reset();
        console.log(data);
    }).catch(error => console.log(error));
});

updateForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(this.id.value);
    let id = updateId;
    const data = {
        id: this.id.value,
        shipName: this.shipName.value,
        captainName: this.captainName.value,
        shipClass: this.shipClass.value,
        origin: this.origin.value,
        cargo: this.cargo.value,
    }
    console.log(data);

    fetch("http://localhost:8082/update?id=" + id,{
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            'Content-Type' : "application/json"
        }
        
    }).then(response => {
        return response.json();
    }).then(data => {
        renderData();
        this.reset();
        console.log(data);
    }).catch(error => console.log(error));
});



function deleteLog(id){
    if(deleteTrue == false){
        console.log("Not deleted");
    } else if (deleteTrue == true){
        $('#deleteModal').modal("toggle");
        console.log("delete id no. " + id);
        fetch("http://localhost:8082/remove/" + id, {
            method: "DELETE"
        }).then(response => {
            console.log(response);
            renderData();
        }).catch(error => console.error(error));
    }
}

function updateLog(id){
    if(updateTrue == false){

    } else if (updateTrue == true){
        updateId = id;
        $('#updateModal').modal("toggle");
    }
}

shipNameHeader.addEventListener('click', function(){
    output.innerHTML = "";
    if(shipNameButton == "off" ) {
        fetch("http://localhost:8082/getAll/sort/shipAsc")
        .then(response => response.json())
        .then(logArray => {
            logArray.forEach(createData);
        }).catch(error => console.error(error));
        console.log(shipNameHeader.innerHTML);
        shipNameHeader.innerHTML = "ship name &#x25B2;";
        shipNameButton = "asc";
    } else if (shipNameButton == "asc"){
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
        fetch("http://localhost:8082/getAll/sort/captainAsc")
        .then(response => response.json())
        .then(logArray => {
            logArray.forEach(createData);
        }).catch(error => console.error(error));
        captainHeader.innerHTML = "captain &#x25B2;";
        captainButton = "asc";
    } else if (captainButton == "asc"){
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
        fetch("http://localhost:8082/getAll/sort/classAsc")
        .then(response => response.json())
        .then(logArray => {
            logArray.forEach(createData);
        }).catch(error => console.error(error));
        classHeader.innerHTML = "class &#x25B2;";
        classButton = "asc";
    } else if (classButton == "asc"){
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

deleteButton.addEventListener("click", function(){
    if(deleteTrue){
        deleteTrue = false;
        deleteButton.classList.remove("button-active");
    } else {
        deleteButton.classList.add("button-active");
        deleteTrue = true;
    }
});

updateButton.addEventListener("click", function(){
    if(updateTrue){
        updateTrue = false;
        updateButton.classList.remove("button-active");
    } else {
        updateButton.classList.add("button-active");
        updateTrue = true;
    }
});

newEntryButton.addEventListener("click", function(){
    $('#createModal').modal("toggle");
});

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
    newIDNumber.innerHTML = '<h2 class="text-center">' + log.id + '</h2>';

    let newShipName = document.createElement('div');
    newShipName.setAttribute("class", "col-3");
    newShipName.innerHTML = '<h2 class="text-center">' + log.shipName + '</h2>';

    let newCaptainName = document.createElement('div');
    newCaptainName.setAttribute("class", "col-2");
    newCaptainName.innerHTML = '<h2 class="text-center">' + log.captainName + '</h2>';

    let newClass = document.createElement('div');
    newClass.setAttribute("class", "col-2");
    newClass.innerHTML = '<h2 class="text-center">' + log.shipClass + '</h2>';

    let newOrigin = document.createElement('div');
    newOrigin.setAttribute("class", "col-2");
    newOrigin.innerHTML = '<h2 class="text-center">' + log.origin + '</h2>';

    let newCargo = document.createElement('div');
    newCargo.setAttribute("class", "col-2");
    newCargo.innerHTML = '<h2 class="text-center">¥ ' + log.cargo + '</h2>';
    //<div class="input-group justify-content-center"> <input type="text" class="cargo-name"> </div>

    output.appendChild(newRecord);

    newRecord.appendChild(newIDNumber);
    newRecord.appendChild(newShipName);
    newRecord.appendChild(newCaptainName);
    newRecord.appendChild(newClass);
    newRecord.appendChild(newOrigin);
    newRecord.appendChild(newCargo);

}

function getDefaultData() {
    output.innerHTML = "";
    fetch("http://localhost:8082/getAll")
        .then(response => response.json())
        .then(logArray => {
            logArray.forEach(createData);
        }).catch(error => console.error(error));
}

getDefaultData();
