let canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


let c = canvas.getContext('2d');

c.beginPath();

class Reactangle {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.originalX = x;
        this.originalY = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.rotation = 0;
        this.axiesIncrementor = { x: 0, y: 0 };
        this.direction = 'clockwise';
        this.clockwiseRotate = () => {
            if (this.y === 100 && this.x < 300) {
                this.x++;
                return;
            }
            if (this.y === 300 && this.x > 100) {
                this.x--;
                return;
            }

            if (this.x === 300 && this.y < 300) {
                this.y++;
                return;
            }
            if (this.x === 100 && this.y > 100) {
                this.y--;
            }
        }
        this.anticlockwiseRotate = () => {
            console.log('anticlockwiseRotate: ');
            if (this.x === 100 && this.y < 300) {
                this.y++;
                return;
            }
            if (this.x === 300 && this.y > 100) {
                this.y--;
                return;
            }
            if (this.y === 300 && this.x < 300) {
                this.x++;
                return;
            }
            if (this.y === 100 && this.x > 100) {
                this.x--;
                return;
            }
        }
        this.changeDirection = () => {
            console.log('this.rotation: ', this.rotation);
            if (this.rotation === 1) {
                this.rotation = 0;
                this.toggleDirection();
            }
        }
        this.toggleDirection = () => {
            if (this.direction === 'clockwise') {
                this.direction = 'anticlockwise';
                return;
            }
            this.direction = 'clockwise';
        }
    }

    drawReact(c) {
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.height);
        c.font = "20px Arial";
        c.fillStyle = 'black';
        c.fillText(`${this.x} - ${this.y}`, this.x, this.y + 50);
    }
    updateReact(c) {
        this.drawReact(c);
        if (this.y === 100 && this.x === 300) {

        }
        if (this.direction === 'clockwise') {
            this.clockwiseRotate();
        }
        if (this.direction === 'anticlockwise') {
            this.anticlockwiseRotate();
        }
        if (this.originalX === this.x && this.originalY === this.y) {
            console.log(`this.originalX: ${this.color}`, this.originalX, this.originalY);
            console.log(`this.x: ${this.color}`, this.x, this.y);
            console.log('this.rotation: ', this.rotation);
            this.rotation++;
            this.changeDirection();
        }
    }
}

let reactList = [];

function init() {
    let rectRed = new Reactangle(100, 100, 100, 100, 'red');
    let rectPink = new Reactangle(300, 100, 100, 100, 'pink');
    let rectCornflowerblue = new Reactangle(100, 300, 100, 100, 'cornflowerblue');
    let rectBlue = new Reactangle(300, 300, 100, 100, 'blue');
    reactList.push(rectRed);
    reactList.push(rectPink);
    reactList.push(rectBlue);
    reactList.push(rectCornflowerblue);
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    reactList.forEach(rect => {
        // if (rect.color !== 'pink') {
        //     return;
        // }
        rect.updateReact(c);
    })
}
init();
animate();

// rectRed.drawReact(c);
// rectCornflowerblue.drawReact(c);
// rectPink.drawReact(c);
// rectBlue.drawReact(c);