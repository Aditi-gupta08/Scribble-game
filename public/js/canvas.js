const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let line_color = "black";
let line_width = 10;

function changeColor( newColor) {
    line_color = newColor;
}

function changeSize( newSize) {
    line_width = newSize;
}

function clearAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


window.addEventListener( 'load', () => {
    
    // Resizing
    /* canvas.height = window.innerHeight;
    canvas.width = window.innerWidth; */
    /* canvas.height = 300;
    canvas.width = 300; */

    //ctx.fillRect( 10, 10, 200, 200);
    /* ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.strokeRect(10, 20, 300, 100); */

    /* ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(200, 100);
    ctx.lineTo(300, 10);
    ctx.closePath();
    ctx.stroke(); */

    ctx.lineWidth = 10;

    

    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
        ctx.strokeStyle = line_color;
        ctx.lineWidth = 10;
    }

    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }


    function draw(e){
        if(!painting)
            return;

        
        ctx.lineCap = "round";
        ctx.lineWidth = line_width;
        console.log(ctx.lineWidth);

        ctx.lineTo( e.clientX - 20, e.clientY - 20);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - 20, e.clientY - 20);
    }

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);

})