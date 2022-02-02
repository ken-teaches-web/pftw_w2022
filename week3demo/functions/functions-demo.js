// functions
// how to create a function
// 1st way to make function
/* makeIceCream();
function makeIceCream() {
  console.log("I have made ice cream");
}
 */
// 2nd way to make function
/* const makeBananaSplit = function () {
  console.log("I have made a banana split");
}
makeBananaSplit(); */

// a couple of reasons for functions

// organization - breaking a big problem down to small steps
// eat lunch
/* function getBread() {
  console.log("I got bread");
}
function getPeanutButter() {
  console.log("I got peanut butter")
}

getBread();
getPeanutButter(); */

// reusability/ optimization (input)
/* function getStuff(itemGot) { // data passed in is called parameter
  console.log("I got " + itemGot);
}
getStuff("bread"); // "bread" is the argument
getStuff("peanut butter");
getStuff("honey"); */


// returning data
/* function addStuff(itemA, itemB) {
  if (!itemA || !itemB) {
    console.log("no data");
    return;
  }
  const foo = (itemA + itemB) * 17;
  return foo;
}
const sum = addStuff(1);
console.log("the sum is ", sum); */

// functions as values in variables, properties, and arguments
/* const myCar = {
  wheels: 4,
  addWheel: function () {
    console.log("added wheel");
  }
}
myCar.addWheel(); */
function alertFn() {
  return "this came from my function";
}
window.alert(alertFn())
