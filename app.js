const max = 600;
let container = document.getElementById('container');

let squareSide = document.getElementById('square-side-length');
let rectHeight = document.getElementById('rect-height');
let rectWidth = document.getElementById('rect-width');
let circleRadius = document.getElementById('circle-radius');
let triangleHeight = document.getElementById('triangle-height');

let rectangleBtn = document.getElementById('rect-button');
let squareBtn = document.getElementById('square-button');
let circleBtn = document.getElementById('circle-button');
let triangleBtn = document.getElementById('triangle-button');

rectangleBtn.addEventListener('click', function newRectangle() {
    new Rectangle(rectHeight.value, rectWidth.value);
    //Rectangle.describe();
    console.log('rect works');
})

squareBtn.addEventListener('click', function newSquare() {
    new Square(squareSide.value);
    console.log('square works');
})

circleBtn.addEventListener('click', function newCircle() {
    new Circle(circleRadius.value);
    console.log('circle works');
})

console.log('test')

triangleBtn.addEventListener('click', function newTriangle() {
    new Triangle(triangleHeight.value);
    console.log('triangle works');
})


class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    draw() {
        if (this.height > 600 && this.width > 600) {
            return alert('WAY too big!')
        } else if (this.width > 600) {
            return alert('little too wide there');
        } else if (this.height > 600) {
            return alert('come on, that is way too tall!')
        };

        let x = Math.floor(Math.random() * (max - this.width)); //setting coords for where shape is
        let y = Math.floor(Math.random() * (max - this.height));
        this.div = document.createElement('div');
        this.div.classList.add(this.cssClass);
        this.div.style.left = `${x}px`
        this.div.style.top = `${y}px`
        this.div.style.width = `${this.width}px`
        this.div.style.height = `${this.height}px`
        container.appendChild(this.div);
    }
};

// function describe() {};

//console.log('post shape pre extends test');

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
        this.cssClass = 'rectangle';
        this.draw();
    }
}

class Square extends Shape {
    constructor(side) {
        super(side, side);
        this.cssClass = 'square';
        this.draw();
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(radius, radius);
        this.radius = radius;
        this.cssClass = 'circle';
        this.draw();
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.cssClass = 'triangle';
        this.draw();
        this.div.style.width = '0';
        this.div.style.height = '0';
        this.div.style.borderBottomWidth = `{height}px`;
        this.div.style.borderRightWidth = `{height}px`;
    }
}