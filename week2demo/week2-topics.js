// Questions from last week

// parentheses, brackets, and curly brackets

// Arrays

// from string using split
const myOtherMovies = "Cars, Finding Nemo, Moana".split(", ");
// console.log("my other movies", myOtherMovies);
const moarMoviesString = "Toy Story|The Crow|May Poppins";
const moarMoviesArray = moarMoviesString.split("|");
// console.log("moar", moarMoviesArray);

// from square brackets (with and without content)
const myCringiestMovies = ["Cars", "Finding Moana", "Nemo"];
const myMix = [true, 17, "Bob", ["red", "green", "blue"]];
console.log("mix", myMix);
// console.log(":-)", myCringiestMovies);
// viewing values by index
myOtherMovies[4] = "Encanto";
console.log("all", myMix[3][2]);
// get length
console.log("length of cringy", myCringiestMovies.length)
// push - mutates existing array - adds to the end
myCringiestMovies.push("San Andreas")
console.log("my cringiest updated", myCringiestMovies);

// pop - removes last entry
myCringiestMovies.pop();
// console.log("popped cringy", myCringiestMovies);
// shift - removes the first entry
const removedElement = myCringiestMovies.shift();
console.log("shifted cringy", myCringiestMovies);
console.log("remove element", removedElement);
// unshift
myCringiestMovies.unshift("Ulyses");
console.log("unshifted", myCringiestMovies);

// splice
myCringiestMovies.splice(1, 0, "Topper");
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
console.log("spliced", myCringiestMovies);
// indexOf
const colors = ["red", "orange", "blue", "indigo"];
console.log(colors.indexOf("green"))
const greenIndex = colors.indexOf("green");
const greenValue = colors[greenIndex];
console.log("green value", greenValue);
// concat
const oneBigArray = myCringiestMovies.concat(myMix);
console.log(oneBigArray);
// join - exact opposite of split
console.log(oneBigArray.join(", "))

// OBJECTS

// from curly brackets (empty and with content)
const myBicycle = { color: "yellow", wheels: "knobby", suspension: "shocks" };
// adding properties
myBicycle.seat = "soft and cushy";
// viewing values by key (dot and array notation)
console.log("wheels", myBicycle["wheels"]);
// deleting properties
delete myBicycle.seat;
// merging objects
const brettsBike = { madeOf: "steel", gears: 12, color: "black" }

console.log("bike", myBicycle);
const mergedBike = Object.assign(myBicycle, brettsBike);

console.log(mergedBike);
// Let's make a program: asking a random question
const questions = [
  { question: "red + blue", answer: "purple" },
  { question: "2 + banana", answer: "2banana" },
  { question: "adding white", answer: "tint" }
]
// break it down into steps
// 1. determine how long question set is
const questionLength = questions.length;
// 2. Choose a pseudo-random number between 0 and the length of the array
const questionIndex = Math.floor(Math.random() * questionLength); // Random between 0 and 2
// 3. Display question with window.prompt
const answer = window.prompt(questions[questionIndex].question);
if (answer === questions[questionIndex].answer) {
  window.alert("you win");
}
// figure out Tamara's Go Live
