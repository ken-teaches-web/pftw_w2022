/* eslint-disable no-unused-vars */

// p5 dom

let button;
let circleColor = "red";
let input;
let headline;
let question;
let feedback;
let won = false;
const statements = [
  { question: "what color do you get when you combine yellow and blue", answer: "green" },
  { question: "what color is opposite blue on the color wheel", answer: "orange" },
  { question: "when black is added to a color, it is called a:", answer: "shade" },
  { question: "when white is added to a color, it is called a:", answer: "tint" },
  { question: "what visible color produces the longest wavelength?", answer: "blue" },
  { question: "what color contains all colors: additive theory", answer: "white" }
]
/* function changeCircleColor() {
  circleColor = "blue";
} */
function setup() {
  createCanvas(800, 800);
  background("#f1f1f1");
  // button stuff
  button = createButton("Hi, I am a button")
  button.position(400, 400);
  button.mousePressed(function (event) {
    if (input.value() === statements[0].answer) {
      won = true;
    }
  });
  // input stuff
  input = createInput("");
  input.position(200, 400);
  // headline stuff

  headline = createElement("h2", ["Type in your answer"])
  headline.position(300, 50);
  // question stuff
  question = createElement("p", [statements[0].question]);
  question.position(300, 90);
  // feedback stuff
  feedback = createElement("h1", ["You win"]);
  feedback.position(-500, -500);
}
// the draw function LOOOOOOOPS!

function draw() {
  fill(circleColor);
  circle(150, 150, 150);
  if (won === true) {
    feedback.position(300, 125);
  }
}

