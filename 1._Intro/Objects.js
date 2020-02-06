// Objects

// Exercise 1 . Retrieve value from object by key

var myObj = {"message": "Hello, earthling! I bring peace."};

// Log the message
//console.log(myObj.message);

// Exercise 2 - Defining an object

// Create an object that has your name and age
var myObj = {"name": "Rasmus", "age": "33"};

//console.log("My name is " + myObj.name);
//console.log("I am " + myObj.age + " years old");

// Exercise 3 - Add a property

// Make a rule called isAllowed and let the value be true

var stackOverflow = {"isAllowed": true};

//console.log(stackOverflow.isAllowed);

// Exercise 4 - Remove a property

var thisSong = {"description": "The best song in the world."}

// Remove the property "description" and add a property called "about" that should say "Just a tribute."

delete thisSong.description;
thisSong.about = "Just a tribute."

console.log(thisSong.about);

