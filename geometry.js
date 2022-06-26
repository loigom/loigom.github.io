let canvas = document.getElementById("geometry");
canvas.width = innerWidth;
canvas.height = innerHeight;

let ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.strokeStyle = '#fc0303';

const TICK_RATE = 30;
const POINTS_COUNT = 5;

class Point {
    constructor() {
        this.x = Math.floor(Math.random() * canvas.width);
        this.y = Math.floor(Math.random() * canvas.height);
        this.x_direction = Math.floor(Math.random() * 2);
        this.y_direction = Math.floor(Math.random() * 2);
        if (this.x_direction == 0) {
            this.x_direction = -1;
        }
        if (this.y_direction == 0) {
            this.y_direction = -1;
        }
    }

    flipDirectionX() {
        this.x_direction *= -1;
    }

    flipDirectionY() {
        this.y_direction *= -1;
    }

    move() {
        if (this.x <= 0 || this.x >= canvas.width) {
            this.flipDirectionX();
        }
        if (this.y <= 0 || this.y >= canvas.height) {
            this.flipDirectionY();
        }
        this.x += this.x_direction;
        this.y += this.y_direction;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI);
        ctx.fill(); 
    }
}


class Line {
    constructor(startPoint, endPoint) {
        ctx.beginPath();
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(endPoint.x, endPoint.y);
        ctx.stroke();
    }
}
  

class AnimationManager {
    constructor(pointAmount) {
        this.points = [];
        for (let i = 0; i < pointAmount; i++) {
            this.points.push(new Point());
            this.points[i].draw();
        }
    }

    moveAndDrawPoints() {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i].move();
            this.points[i].draw();
        }
    }

    drawLines() {
        for (let i = 0; i < this.points.length - 1; i++) {
            for (let j = i + 1; j < this.points.length; j++) {
                let startPoint = this.points[i];
                let endPoint = this.points[j];
                new Line(startPoint, endPoint);
            }
        }
    }

    tick() {
        this.moveAndDrawPoints();
        this.drawLines();
    }
}

let mgr = new AnimationManager(POINTS_COUNT);

setInterval(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    mgr.tick();
}, TICK_RATE);
