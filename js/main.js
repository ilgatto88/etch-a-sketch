function drawCanvas(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            console.log(i, j);
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.style['width'] = '25px';
            cell.style['height'] = '25px';
            document.querySelector('.canvas').appendChild(cell);
        }
    }
}

function updateCanvasSize(size) {
    let canvas = document.querySelector('.canvas');
    let value = (size + 1) * 25 + 1 + 'px'
    canvas.style.width = value;
    canvas.style.height = value;
}


window.onload = () => {
    let size = parseInt(document.querySelector("#canvas-size").value);
    console.log("Setting default canvas")
    console.log(size);
    drawCanvas(size);


    document.querySelector("#canvas-size").addEventListener("change", (event) => {
        let size = parseInt(event.target.value);
        console.log("Changing canvas")
        console.log(size);
        drawCanvas(size);
        updateCanvasSize(size);
    })
}