// Stuff to talk about

// window.setTimeout - only once
/* window.setTimeout(() => {
  window.alert("fired");
}, 1000 * 30); */
// window.setInterval - repeats
/* let myNumber = 1;
window.setInterval(() => {
  console.log("my number is", myNumber++);
}, 500); */
// Clear interval(garbage collection)
/* let myNumber = 1;
const myTimer = window.setInterval(() => {
  if (myNumber >= 20) {
    window.clearInterval(myTimer);
  }
  console.log("Still running", myNumber++);
}, 500); */
// Clearing timeout(why)
/* const timer = window.setTimeout(() => {
  console.log('times up')
}, 5000);
function stopTimer() {
  console.log("stopping timer");
  window.clearTimeout(timer);
} */

// Intro to OOP
// Making a class
//   Think of a Car
/* class Vehicle {
  constructor(wheels, color) {
    console.log("I have been created");
    this.wheels = wheels;
    this.color = color;
  }

  go() {
    console.log("I am now accelerating");
  }

  stop() {
    console.log("I have now stopped");
  }
}
class Trike extends Vehicle {
  constructor(color) {
    super(3, color);
    this.type = "cycle";
  }
} */
/* const myVehicle = new Trike("purple");
console.log(myVehicle);
myVehicle.go();
window.setTimeout(() => {
  myVehicle.stop();
}, 2000); */
// instantiated ~= a copy made from
// Properties
// Constructor
// Passing in props(constructor params)
// Extending
class Rectangle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 200;
  }
  show() {
    rect(this.x, this.y, this.width, this.height);
  }

  move() {
    this.y = this.y + random(-3, 3);
    this.x = this.x + random(-3, 3);
  }
}
let xOffset = 50;
let yOffset = 100;
const myRectangleArray = [];
for (let j = 0; j < 2; j++) {
  for (let i = 0; i < 5; i++) {
    const tempRect = new Rectangle(xOffset, yOffset);
    myRectangleArray.push(tempRect);
    xOffset += 150;
  }
  xOffset = 50;
  yOffset += 250;
}

function setup() {
  createCanvas(1000, 1000);

}

function draw() {
  background(0);
  for (let rectArrayIndex = 0; rectArrayIndex < myRectangleArray.length; rectArrayIndex++) {
    myRectangleArray[rectArrayIndex].move();
    myRectangleArray[rectArrayIndex].show();
  }
}

function mousePressed() {
  for (let k = 0; k < myRectangleArray.length; k++) {
    if (
      mouseX >= myRectangleArray[k].x &&
      mouseX <= (myRectangleArray[k].x + myRectangleArray[k].width) &&
      mouseY >= myRectangleArray[k].y &&
      mouseY <= (myRectangleArray[k].height + myRectangleArray[k].y)
    ) {
      console.log("you hit my rectangle", myRectangleArray[k].x, myRectangleArray[k].y)
    }
  }
}


// Talk about classes on game
// Review for quiz
// Questions
