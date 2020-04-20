const xScale = Math.PI;
const yScale = 4;

function toScreenX(x) {
    return x / xScale * canvas.width / 2;
}

function toScreenY(y) {
    return y / yScale * canvas.height / 2;
}
