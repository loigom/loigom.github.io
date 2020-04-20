const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const CANVAS_WIDTH_HALVED = canvas.width / 2;

const CIRCLE_ANGLE = 2 * Math.PI;
const DRAW_RATE = 10;
const SPEED = DRAW_RATE * 0.0004;

const travellers = [];
for (let x = -Math.PI; x < Math.PI; x += Math.PI / 10) {
    travellers.push(
        {
            "x": x,
            r: 5,
            s: "green",
            f: function(x) { return Math.sin(-4 * x / 3); }
        }
    );
    travellers.push(
        {
            "x": x,
            r: 5,
            s: "red",
            f: function(x) { return Math.sin(4 * x / 3); }
        }
    );
}

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.translate(CANVAS_WIDTH_HALVED, window.innerHeight / 2);

function circle(x, y, r, style) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, CIRCLE_ANGLE);
    ctx.fillStyle = style;
    ctx.fill();
    ctx.stroke();
}

function draw() {
    travellers.forEach(function(traveller) {
        circle(toScreenX(traveller.x), toScreenY(traveller.f(traveller.x)),
               traveller.r, "black");
        traveller.x += SPEED;
        let screenX = toScreenX(traveller.x);
        circle(screenX, toScreenY(traveller.f(traveller.x)),
               traveller.r, traveller.s);
        if (screenX > (CANVAS_WIDTH_HALVED + traveller.r)) {
            traveller.x *= -1;
        }
    });
}

setInterval(draw, DRAW_RATE);
