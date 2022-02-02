// for loop with number
/* for (let i = 0; i < 10; i++) {
  console.log("the value of i is", i);
} */
// for loop with an array
/* const cars = ["Honda", "Ford", "Dodge", "Kia", "Hyndai"];
for (let carIndex = 0; carIndex < cars.length; carIndex++) {
  console.log("I really like to drive a " + cars[carIndex] + " car.")
} */
// while loop -- a little scary but not bad
/* let check = 7;
while (check > 0) {
  check = check - 1; // check--;
  console.log("the check is currrently", check);
} */
// while loop removing items in an array
/* const cars = ["Honda", "Ford", "Dodge", "Kia", "Hyndai"];
while (cars.length) {
  console.log("removing", cars.shift());
  console.log("remaining cars", cars.toString());
} */

// STOP! Look at functions if you haven't!

/**
 * ARRAY methods that use functions
 */

// forEach - looping
/* const cars = ["Honda", "Ford", "Dodge", "Kia", "Hyndai"];
cars.forEach(function (car, index) {
  console.log("looping over ", car, index);
}) */

// map - transformation
/* const dogs = ["chihuahua", "golden", "jack russel", "poodle", "french bulldog"];
const capitalizedDogs = dogs.map(function (dog) {
  return dog.toUpperCase();
});
console.log(capitalizedDogs, dogs); */

// filter - finding a specific thing
function startsWithH(input) {
  return input.charAt(0) === "H"
}
const cars = ["honda", "Ford", "Dodge", "Kia", "Hyndai"];
console.log("starts with", startsWithH("Herbert"));
const carsThatStartWithH = cars.filter(function (input) {
  return input.toLowerCase().charAt(0) === "H".toLowerCase();
});
console.log("H cars", carsThatStartWithH)
