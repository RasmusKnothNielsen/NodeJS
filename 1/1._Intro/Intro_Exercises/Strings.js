// Exercise 3
// Add two numbers together, that are formatted as a string

var numberOne = "1.10";
var numberTwo = "2.30";

var newNumber = Number(numberOne) + Number(numberTwo);

//console.log(newNumber);

// Exercise 4
// Add numbers and the total with 2 decimals
var numberOne = "1.10";
var numberTwo = "2.30";

var result = (parseFloat(numberOne) + parseFloat(numberTwo)).toFixed(2);
//console.log(parseFloat(result).toFixed(2));

// Exercise 5
// Decimals and average
var one = 10;
var two = 45;
var three = 98;

// Show in the console the avg. with 5 decimals
var avg = one + two + three;
//console.log((avg / 3).toFixed(5))

// Exercise 6
// Get a character by index

var letters = "abc";

console.log(letters[2]);

// Exercise 7
// Replace!
var fact = "You are learning javascript!";

// Capitalize the J in Javascript
var newFact = fact.replace("j", "J");
console.log(newFact);