const BASE_SIZE = 16;
const BASE_COLOR = "#000000";
const BASE_MODE = "color";
const CANVAS_SIZE = 500;

let currentSize = BASE_SIZE;
let currentColor = BASE_COLOR;
let currentMode = BASE_MODE;


const colorPicker = document.querySelector('#colorPicker');
const colorButton = document.querySelector("#colorButton");
const eraseButton = document.querySelector("#eraseButton");
const clearButton = document.querySelector("#clearButton");
const sliderText = document.querySelector("#sliderValue");
const slider = document.querySelector("#slider");
const canvas = document.querySelector('#canvas');


slider.onchange = (e) => changeSize(e.target.value);
colorButton.onclick = (e) => updateCurrentMode(e.target);
eraseButton.onclick = (e) => updateCurrentMode(e.target);
clearButton.onclick = () => clearGrid();


let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeSize(size) {
    updateCurrentSize(size)
    updateSizeText(size);
    drawGrid(size);
}

function updateCurrentSize(size) {
    currentSize = size;
}

function updateSizeText(size) {
    sliderText.innerHTML = size + 'x' + size;
}

function updateCurrentMode(target) {
    removeActiveButtonClass();
    activateButton(target);
    currentMode = target.value;
}

function activateButton(button) {
    button.classList.add("activeButton");
}

function removeActiveButtonClass() {
    document.querySelectorAll("button").forEach(button => {
        button.classList.remove("activeButton")
    })
}

function drawGrid(size) {
    canvas.innerHTML = "";
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            cell.style.width = CANVAS_SIZE / size + "px";
            cell.style.height = CANVAS_SIZE / size + "px";
            cell.addEventListener("mouseover", colorizeCell);
            cell.addEventListener("mousedown", colorizeCell);
            canvas.appendChild(cell);
        }
    }
}

function colorizeCell(event){
    if (event.type === "mouseover" && !mouseDown) return
    if (currentMode === "color") {
        event.target.style.backgroundColor = colorPicker.value;
    }
    else if (currentMode === "erase"){
        event.target.style.backgroundColor = "#ffffff";
    }
}

function clearGrid(){
    document.querySelectorAll('.cell').forEach(cell => {
        cell.style.backgroundColor = "#ffffff";
    })
}

window.onload = () => {
    drawGrid(BASE_SIZE);
    activateButton(colorButton);
}
