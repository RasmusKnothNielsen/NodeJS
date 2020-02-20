// Functions

// You can use a function, even though it's defined later in the code. 
// It is not procedural
// It works because of hoisting 
//(The program parses everything, and puts functions etc in the in the memory space for later consumption)
console.log(addition(1,1));

// Defining a function in JavaScript
function addition(num1, num2) {
    return num1 + num2;
}

//console.log(addition(1,4));

// This doesn't work for var
// test = 10;
// var test;
// Since it when using var, it creates a global variable.
// Use let and const insted.

function pokeMe() {
    console.log("Meow");
}


function approachSomeone(someoneToPoke) {
    console.log("tip tap tip tap");
    someoneToPoke();
}

approachSomeone(pokeMe);

const introduce = (name) => {
    console.log("Hello my name is", name);
}

introduce("Rasmus");

const prepareIntroduction = (introducerFunction, name) => {
    console.log("Hmmhmhmhhmmhhm");
    introducerFunction(name);
}

prepareIntroduction(introduce, "Rasmus");

// Arrow function that calls a key in the me object
const aboutMe = (me) => {
    console.log("My hobby is", me.hobby);
}

// Create javascript objects
let me = {
    hobby : "Computer Science"
}

aboutMe(me);

const callLater = {
    tocall: (something) => {
        console.log(something)
    }
}

callLater.tocall("hi")
console.log(callLater)