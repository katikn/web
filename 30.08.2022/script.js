let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d'); //контекст выполнения


function line(pos = [0, 0], length = 100) {
    let [x, y] = pos;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + length, y);
    ctx.stroke();
}

function triangle(A = [0, 0], B = [100, 100], C = [50, 50]) {
    let [x1, y1] = A;
    let [x2, y2] = B;
    let [x3, y3] = C;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x1, y1);
    ctx.stroke();
}

function square(A = [100, 100], B = [300, 100], C = [300, 300], D = [100, 300], color = "red") {
    let [x1, y1] = A;
    let [x2, y2] = B;
    let [x3, y3] = C;
    let [x4, y4] = D;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x4, y4);
    // ctx.lineTo(x1, y1);
    ctx.closePath();
    ctx.stroke();
    // ctx.fill();
}

function arrow(start = [300, 300], length = 200, direction = 3) {
    let [x, y] = start;
    ctx.moveTo(x, y);
    if (direction == 0) {
        ctx.lineTo(x + length, y);
        ctx.lineTo(x + length - 30, y - 30);
        ctx.lineTo(x + length, y);
        ctx.lineTo(x + length - 30, y + 30);
    } else if (direction == 1) {
        ctx.lineTo(x, y + length);
        ctx.lineTo(x - 30, y + length - 30);
        ctx.lineTo(x, y + length);
        ctx.lineTo(x + 30, y + length - 30);
    } else if (direction == 2) {
        ctx.lineTo(x - length, y);
        ctx.lineTo(x - length + 30, y - 30);
        ctx.lineTo(x - length, y);
        ctx.lineTo(x - length + 30, y + 30);
    } else if (direction == 3) {
        ctx.lineTo(x, y - length);
        ctx.lineTo(x + 30, y - length + 30);
        ctx.lineTo(x, y - length);
        ctx.lineTo(x - 30, y - length + 30);
    }
    ctx.stroke();
}
// ctx.lineWidth = 10;
// ctx.rect(50, 50, 100, 100)
// ctx.stroke()

// // ctx.clearRect(60, 60, 140, 90)


// function radians(deg){
//     return (Math.PI / 180) * deg;
// }
// ctx.closePath()
// ctx.beginPath()
// ctx.arc(300, 300, 30, 0, radians(270))
// ctx.fill()
let startx = 400;
let starty = 800;
let movey = 0;
let items = ["red", "green", "blue", "magenta", "yellow", "skyblue", "lime", "purple"];
function Diagram(arr = [80, 60, 120, 90, 150]) {
    if (arr.length > 10) {
        arr = arr.slice(-10);
    }
    ctx.font = '15px Arial'
    maxx = (Math.max(...arr) + 30) * 1;
    for (let i = 0; i <= maxx; i = i + 10) {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(startx + 20, starty - movey);
        ctx.lineTo(startx - 20, starty - movey);
        ctx.fillText(i, startx - 60, starty - movey, 40)
        ctx.stroke();
        movey += 30;
    }
    console.log(movey);
    console.log(arr.length * 150);
    arrow([startx, starty], movey + 100, 3);

    arrow([startx, starty], arr.length * 150, 0);
    let movex = startx;
    arr.forEach((elem) => {
        console.log(elem);
        ctx.beginPath();
        let item = items[Math.floor(Math.random() * items.length)];
        ctx.fillStyle = item
        ctx.moveTo(movex + 50, starty);
        ctx.lineTo(movex + 50, starty - elem * 3)
        ctx.fillText(elem, movex + 67, (starty - elem * 3) - 20)
        ctx.lineTo(movex + 100, starty - elem * 3)
        ctx.lineTo(movex + 100, starty)
        ctx.fill();
        movex += 150;
    })
}

Diagram()
