# Notes

## Javascript

### Arrays

#### Define an array

```
let friends = []
```

#### Add element to array

```
friends.push("Rip");
friends.push("Rap");
friends.push("Rup");
```

#### Remove last element from array

```
friends.pop();
```

#### Insert elements into the array at index

```
Array.splice( index, remove_count, item_list )
friends.splice(1, 0, "Anders", "Andersine");
```

- index: It is a required parameter. This parameter is the index which start modifying the array (with origin at 0). This can be negative also, which begin after that many elements counting from the end.
- remove_count: The number of elements to be removed from the starting index.
- items_list: The list of new items separated by comma operator that is to be inserted from the starting index.


#### Remove specific element at index from array

```
friends.pop(index);
```

#### Find the index of element in array

```
friends.indexof("Rap");
```

#### Copy array

```
let newFriends = friends.slice();
```

### Strings

#### Declare

```
let name = "Rasmus";
```

#### Go from String to Integer

```
let firstNumber = "1.30";
let secondNumber = "2.40";

let newNumber = Number(firstNumber) + Number(secondNumber);
```

#### Go from Integer to String

´´´
let number1 = 130;
let number2 = 430;
let stringNumber = String(number1) + String(number2);
´´´

#### Go from String to Float

```
let float1 = "1.30";
let float2 = "0.12";
let result = parseFloat(float1) + parseFloat(float2):
```

#### Replacing chars in a string

```
var fact = "You are learning javascript!";
var newFact = fact.replace("j", "J");
```
Remember that strings are immutable, therefor we need to assign the result to another variable.

### Objects

#### Declare objects:

```
let myObj = {"message": "Hello, earthling! I bring peace."};
```

#### Add more fields to an object:

```
myObj.answer = "How lucky for us!";
```

#### remove field from object:

```
delete myObj.answer;
```

#### Access fields from an object:

```
var myObj = {"name": "Rasmus", "age": "33"};

console.log("My name is " + myObj.name);
console.log("I am " + myObj.age + " years old");
```

### Functions

#### Declaring a function:

```
function addition(num1, num2) {
    return num1 + num2;
}
```

#### You can pass functions as a parameter for a function:

```
function pokeMe() {
    console.log("Meow");
}


function approachSomeone(someoneToPoke) {
    console.log("tip tap tip tap");
    someoneToPoke();
}

approachSomeone(pokeMe);
```

#### Javascripts supports callback functions:

```
// Arrow function that calls a key in the me object
const aboutMe = (me) => {
    console.log("My hobby is", me.hobby);
}

// Create javascript objects
let me = {
    hobby : "Computer Science"
}

aboutMe(me);
```

#### Why are Callback functions important?

JavaScript is an event driven language. This means that instead of waiting for a response before moving on, JavaScript will keep executing while listening for other events.

#### Hoisting

Javascript uses hoisting, which works by taking all functions and saving it in the memoryspace, at start up.
This means that we do not have to define functions before we use them, since Javascript is not procedural.


## JQuery

### What is JQuery

jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

### How to use JQuery

Import it into your project by embedding it in the HTML Header:
```
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
```
Remember to always get the newest version
<https://developers.google.com/speed/libraries>

Remember to also import the local JQuery script that is going to be used, but adding it to the HTML Header:
```
    <!-- Importing the JQuery Script-->
    <script src="./index.js"></script>
```


### Syntaxes


### Best practices in JQuery

It is a good idea to always encapsule all JQuery in a function that executes when the page is done loading:
```
$(document).ready(() => { 
    // Put JQuery code here
}
```

## Node.JS

### Installing packeges

Add the package to package.json with name and version
After this, run the npm install command to install the missing packages

### Nodemon

Used as an alternative to:
> $ node app

Use this instead
> $ nodemon app

This runs the server in another way, so that we can restart the server without having to shut it down.
Other than this, it rebuilds the server from scratch everytime there is a change.
This means that when we type something in the app.js file, the server automatically restarts and implement the change.

NEVER USE IN PRODUCTION :)

## Node-fetch

Use this for requests in the future, since the package named requests is going to be deprecated

### Live reload of server

> $ npx budo index.js --live --open

Using the npx budo commmand to run the index.js file with live reload flag and the open flag.
Opens up the browser.

### how to run scripts

> $ npm run [scriptname]

Add it to package.json in the top as 
```
 {
    "scripts": {
        "start": "node app.js",
        "start-dev": "nodemon app.js"
    },
    dependencies: {
        "express": "^4.17.1"
    }
}
```

"start" script starts the app,
"start-dev" runs the app in developer mode (DO NOT USE IN PRODUCTION)

Another example is
```
  "scripts": {
    "start": "cross-env PORT=80 node app.js",
    "start-dev": "cross-env PORT=8686 nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ```

Which uses platform independent environment variables to enable cross platform execution.

### Using Environment variables to set port and other things

If you set the port number in our express server to the following
> process.env.PORT || 3000

It is possible to run the application by writing
> $ node app.js
And it will start to listen on port 3000

If you want it to listen to another port you can do the following
> $ PORT=8080 node app.js
And now it will listen to port 8080.

### Make scripts that use platform independent environment variables

Install cross-env

> $ npm install --save-dev cross-env

now you can define what port to run on by typing the following
> $ cross-env PORT=80 node app.js
And it works on Windows/Unix/OSX

## Express server

### How to get en Express server up and running

Add package.json
> $ touch package.json

Install express
> $ npm install express

Add app.js
> $ touch app.js

The following is the bare minimum of setup

```
const app = require("express")();
const server = app.listen(portnumber, (error) => {
    if (error) {
        console.log("Error")
    }
    console.log("Server is running on port", server.address().port)
})
```

