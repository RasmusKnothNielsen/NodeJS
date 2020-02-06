// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and variables

var firstName = "Rasmus";
var lastName = "Nielsen";
// EXERCISE
// show in the console
// My first name is Rasmus and my last name is Nielsen

console.log("My first name is", firstName, "and my last name is", lastName);

console.log(`My first name ${firstName}`);

// --------------------------------------
// Exercise 2 - Numbers and Strings

var year = "2017";
var number = 1;

// Add the year plus the number
// The result should be 2018
// You cannot touch line 1 or 2

// var newYear = parseInt(year) + number;

// var newYear = Number(year) + number;

var newYear = +(year) + 1;

console.log(newYear);

var something = "123abc1";

console.log(parseInt(something));
console.log(Number(something));


// --------------------------------------