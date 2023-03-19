function getInputValue(fieldInputId) {
    const input = document.getElementById(fieldInputId);
    const inputStr = input.value;
    input.value = '';
    const actualInput = parseFloat(inputStr);
    return actualInput;
}

//  added item 
function addedElement(areaName, calculateValue) {
    const li = document.createElement('li');
    const node = document.createTextNode(areaName + calculateValue);
    li.appendChild(node);
    const addedItem = document.getElementById('added-item');
    addedItem.appendChild(li);
}