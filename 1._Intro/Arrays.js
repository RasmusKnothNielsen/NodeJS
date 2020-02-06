// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

var letters = ["a","b","c"];
// show b in the console 

//console.log(letters[1]);

// --------------------------------------
// Exercise 2 - Array Positioning

var friends = [];

// What a lonely array. Add at least 3 friend objects to it.  
friends.push("Rip")
friends.push("Rap")
friends.push("Rup")

//console.log(friends);

// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 

var significantMathNumbers = [0, 2.718, 3.14159, 1729]

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

var result = significantMathNumbers.indexOf(1729);
//console.log(result);


// --------------------------------------
// Exercise 4 - Inserting elements

var diet = ["tomato", "cucumber", "rocolla", "kale"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements rocolla and kale
diet.splice(3, 0, "hamburger", "soda", "pizza");
console.log(diet);

// --------------------------------------


// --------------------------------------
// Exercise 5 - Remove element

// You don't like kale at all. Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 

diet.pop(diet.length - 1);
console.log(diet);
