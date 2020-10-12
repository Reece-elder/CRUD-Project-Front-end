let idNumber = 1;
let deleteTrue = false;
var deleteButtonClick = false;
var updateButtonClick = false;
var newEntryButtonClick = false;
var submitButtonClick = true;

const deleteButton = document.querySelector('#deleteButton');
const updateButton = document.querySelector('#updateButton');
const newEntryButton = document.querySelector('#newEntryButton');
const submitButton = document.querySelector('#submitButton');

const shipNameInput = document.querySelector('.ship-name');

function addRecord(){

    let x = idNumber += 1;

    let newRecord = document.createElement('div');
    newRecord.setAttribute("class", "row m-0 ship-log");
    newRecord.setAttribute("id","record-" + x);
    newRecord.setAttribute("onclick","locateDelete(this)");

    let newIDNumber = document.createElement('div');
    newIDNumber.setAttribute("class", "col-1");
    newIDNumber.innerHTML = '<h2 class="text-center">' + x + '</h2>';

    let newShipName = document.createElement('div');
    newShipName.setAttribute("class", "col-3");
    newShipName.innerHTML = '<h2 class="text-center">ship name</h2>';

    let newCaptainName = document.createElement('div');
    newCaptainName.setAttribute("class", "col-2");
    newCaptainName.innerHTML = '<h2 class="text-center">ship name</h2>';

    let newClass = document.createElement('div');
    newClass.setAttribute("class", "col-2");
    newClass.innerHTML = '<h2 class="text-center">ship name</h2>';

    let newOrigin = document.createElement('div');
    newOrigin.setAttribute("class", "col-2");
    newOrigin.innerHTML = '<h2 class="text-center">ship name</h2';

    let newCargo = document.createElement('div');
    newCargo.setAttribute("class", "col-2");
    newCargo.innerHTML = '<h2 class="text-center">ship name</h2>';
    //<div class="input-group justify-content-center"> <input type="text" class="cargo-name"> </div>

    const output = document.querySelector('.main_content');
    output.appendChild(newRecord);

    newRecord.appendChild(newIDNumber);
    newRecord.appendChild(newShipName);
    newRecord.appendChild(newCaptainName);
    newRecord.appendChild(newClass);
    newRecord.appendChild(newOrigin);
    newRecord.appendChild(newCargo);

    fillRecord();
}

function fillRecord(){

}

function locateDelete(element){
    console.log("delete True " + deleteTrue);
    if (deleteTrue == true){
        console.log("delete id no. " + element);
        element.parentNode.removeChild(element);
    } else {
        
    }
}

function toggleActiveButtons(){
    
}

deleteButton.addEventListener("click", function(){
    if(deleteButtonClick){
        deleteTrue = false;
        console.log("delete button toggled off");
        deleteButtonClick = false;
        deleteButton.classList.remove("button-active");
    } else {
        console.log("delete button toggled on");
        deleteButtonClick = true;
        deleteButton.classList.add("button-active");
        deleteTrue = true;
    }
    console.log("Delete button clicked");
});

updateButton.addEventListener("click", function(){
    if(updateButtonClick){
        console.log("update button toggled off");
        updateButtonClick = false;
        updateButton.classList.remove("button-active");
    } else {
        console.log("update button toggled on");
        updateButtonClick = true;
        updateButton.classList.add("button-active");
    }
    console.log("Update button clicked");
});

newEntryButton.addEventListener("click", function(){

    if(newEntryButtonClick){
 
   } else {
        console.log("delete button toggled on");
        newEntryButtonClick = true;
        newEntryButton.classList.add("button-active");
        setTimeout(function(){ 
            console.log("new entry button toggled");
            //newEntryButton.classList.remove("button-active");
            addRecord();}, 500);
    }

});

submitButton.addEventListener("click", function(){

    if(submitButtonClick){
        console.log("delete button toggled off");
        submitButtonClick = false;
        submitButton.classList.remove("button-active");
    } else {
        console.log("delete button toggled on");
        submitButtonClick = true;
        submitButton.classList.add("button-active");
    }

})
