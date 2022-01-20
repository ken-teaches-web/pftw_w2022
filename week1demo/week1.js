// variables
var man = 'Ken'; // variable that can be changed
const weather = 'windy'; // constant - block scoped
let animal = 'dog'; // variable that can be changed - block scoped
let favMovie = 'Star Wars'; // string data type
// let favNum = 17; // number data type
let isHungry = false; // boolean
// console.log(man + ' is me'); // outputs data to the developer console

// a couple of actions (alert, prompt)
// window.alert('my fav movie is ' + favMovie);
// console.log('your fav color is ', favColor);

// conditionals and comparison operators
// get user's color
// const favColor = window.prompt('What is your favorite color');
// // check to see if fav color is orange
// if (favColor === 'orange') { // use triple equal signs for predictable results
//   console.log('hey, that is my favorite color too');
// }
// const favNumber = window.prompt('what is your favorite number');
// favNumber = '17';
// Number('17') === 17
// if (Number(favNumber) >= 10) {
//   console.log('woot')
// } else if (Number(favNumber) === 12) {
//   console.log('winner');
// } else {
//   console.log('darn it');
// }

// switching gears into p5.js
// setup only runs once
function setup() {
  createCanvas(800, 600);
  background('#f1f1f1')
}
function draw() {
  fill('red');
  rect(50, 0, 200, 150);
  fill('purple')
  circle(500, 200, 50);
}
