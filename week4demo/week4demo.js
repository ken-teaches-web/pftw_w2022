/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */

// answer questions from previous assignments
// PLAIN OLD JS
// selecting elements on the DOM
/* const target = document.querySelector(".target-div");
console.log("target", target);
target.innerHTML = "Hi, this is the target html";
// creating elements on the DOM
const listParent = document.querySelector("#sub-list-here");
const newUL = document.createElement("ul");
const newLi = document.createElement("li");
newLi.innerHTML = "Wow, this worked!"
newUL.appendChild(newLi);
listParent.appendChild(newUL);

function myClickHandler() {
  console.log("I was clicked");
}
const myButton = document.querySelector("#clickButton");
myButton.addEventListener("click", myClickHandler)
myButton.addEventListener("click", function () {
  console.log("I think this will also fire");
});
const newHeadline = document.createElement("h1");
newHeadline.innerHTML = "Has not been clicked";
newHeadline.addEventListener("click", function () {
  newHeadline.innerHTML = "Has been clicked";
});
document.body.appendChild(newHeadline); */

// adding event listnerers to elements on the DOM

// P5.js stuff
// mouse pressed  function

// detecting clicks on circles (using dist)

// detecting clicks on squares (using gt and lt)

// bonus - detecting clicks on a grid of elements using a loop
/* const myCircle = {
  x: 300,
  y: 400,
  width: 150
} */
const mySquare = {
  x: 300,
  y: 0,
  width: 150,
  height: 175
}
const speed = 1;
function setup() {
  createCanvas(800, 800);

}
let cards = [];
function draw() {
  background("#ccc");
  // mySquare.y += speed;
  // fill("#f1f1f1");
  // rect(mySquare.x, mySquare.y, mySquare.width, mySquare.height);
  noLoop();
  fill("red");
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 5; i++) {
      const newCard = { x: i * 150, y: j * 150, width: 100, height: 100 }
      rect(newCard.x, newCard.y, newCard.width, newCard.height);
      cards.push(newCard);
    }
  }

  console.log('cards', cards);

}

/* function mousePressed() {
  // console.log("clicked", mouseX, mouseY);
  // dist four argument mousex, mousey, x, y
  // const distance = dist(mouseX, mouseY, myCircle.x, myCircle.y);
  // console.log("the distance", distance);
  // if (distance <= myCircle.width / 2) {
  //   myCircle.x = myCircle.x + 10;
  //   console.log("you clicked it")
  // }
  if (
    mouseX >= mySquare.x &&
    mouseX <= (mySquare.x + mySquare.width) &&
    mouseY >= mySquare.y &&
    mouseY <= (mySquare.height + mySquare.y)
  ) {
    console.log("hit");
    noLoop();
  }
} */