let arrayInputs = document.getElementsByClassName("formInputs");
function editMode() {
    document.getElementById("editBtn").hidden = true;
    document.getElementById("saveBtn").hidden = false;
    for (let i = 0; i < arrayInputs.length; i++) {
        arrayInputs[i].disabled = false;
    }
}

function saveMode() {
    document.getElementById("editBtn").hidden = false;
    document.getElementById("saveBtn").hidden = true;
    for (let i = 0; i < arrayInputs.length; i++) {
        arrayInputs[i].disabled = true;
    }
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("logOutBtn");
var closeBtns = document.getElementsByClassName("close");


function openModal() {
    console.log(modal);
    modal.style.display = "block";
}

closeBtns.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == closeBtns[0] || event.target == closeBtns[1]) {
        modal.style.display = "none";
    }
}

