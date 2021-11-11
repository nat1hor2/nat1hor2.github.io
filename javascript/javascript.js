
const list = document.querySelector("#change");
const inputField = document.querySelector("#input");
const bruh = document.querySelectorAll("li");

inputField.focus();
function pressEnter(event) {
    if (event.keyCode == 13) {
        createTask();
    }
}

function createTask() {
    var inputValue = document.querySelector("#input").value;

    var listItem = document.createElement("li");
    var itemInList = list.appendChild(listItem);
    itemInList.setAttribute("id", "listItem");

    var text = document.createTextNode(list.childElementCount + ". " + inputValue);
    itemInList.appendChild(text);
    var listButton = document.createElement("button");
    listButton.innerHTML = "delete";
    listButton.style.display = "none";
    listButton.setAttribute("id", "bruh");
    itemInList.appendChild(listButton);
    listButton.onclick = function() {
        itemInList.remove();
    }
    listItem.addEventListener("mouseenter", ()=> {listButton.style.display = "block"});
    listItem.addEventListener("mouseleave", ()=> {listButton.style.display = "none"});
    inputField.value = null;
    inputField.focus();
}

function hehe() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}