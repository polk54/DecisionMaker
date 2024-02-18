function addOption() {
    var optionsDiv = document.getElementById("options");
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Option " + (optionsDiv.children.length + 1);
    optionsDiv.appendChild(input);
}

function removeOption() {
    var optionsDiv = document.getElementById("options");
    if (optionsDiv.children.length > 1) {
        optionsDiv.removeChild(optionsDiv.lastChild);
    }
}

function makeDecision() {
    var options = document.querySelectorAll("#options input");
    var optionsArray = Array.from(options).map(option => option.value.trim()).filter(Boolean);
    if (optionsArray.length === 0) {
        showModal("No options provided");
    } else {
        var randomIndex = Math.floor(Math.random() * optionsArray.length);
        var selectedOption = optionsArray[randomIndex];
        showModal("Decision: <br><br>" + selectedOption);
        
    }
}

function showModal(message) {
    var modal = document.getElementById("decision-modal");
    var modalContent = modal.querySelector(".modal-content");
    var decisionElement = modal.querySelector("#decision");
    decisionElement.innerHTML = message;
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("decision-modal");
    modal.style.display = "none";
}
