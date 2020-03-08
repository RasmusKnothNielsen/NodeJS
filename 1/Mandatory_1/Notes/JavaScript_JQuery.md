# Javascript

## Arrays

### Define an array

```
let friends = []
```

### Add element to array

```
friends.push("Rip");
friends.push("Rap");
friends.push("Rup");
```

### Remove last element from array

```
friends.pop();
```

### Insert elements into the array at index

```
Array.splice( index, remove_count, item_list )
friends.splice(1, 0, "Anders", "Andersine");
```

- index: It is a required parameter. This parameter is the index which start modifying the array (with origin at 0). This can be negative also, which begin after that many elements counting from the end.
- remove_count: The number of elements to be removed from the starting index.
- items_list: The list of new items separated by comma operator that is to be inserted from the starting index.

### Remove specific element at index from array

```
friends.pop(index);
```

### Find the index of element in array

```
friends.indexof("Rap");
```

### Copy array

```
let newFriends = friends.slice();
```

## Strings

### Declare

```
let name = "Rasmus";
```

### Go from String to Integer

```
let firstNumber = "1.30";
let secondNumber = "2.40";

let newNumber = Number(firstNumber) + Number(secondNumber);
```

### Go from Integer to String

´´´
let number1 = 130;
let number2 = 430;
let stringNumber = String(number1) + String(number2);
´´´

### Go from String to Float

```
let float1 = "1.30";
let float2 = "0.12";
let result = parseFloat(float1) + parseFloat(float2):
```

### Replacing chars in a string

```
var fact = "You are learning javascript!";
var newFact = fact.replace("j", "J");
```
Remember that strings are immutable, therefor we need to assign the result to another variable.

## Objects

### Declare objects

```
let myObj = {"message": "Hello, earthling! I bring peace."};
```

### Add more fields to an object

```
myObj.answer = "How lucky for us!";
```

### remove field from object

```
delete myObj.answer;
```

### Access fields from an object

```
var myObj = {"name": "Rasmus", "age": "33"};

console.log("My name is " + myObj.name);
console.log("I am " + myObj.age + " years old");
```

## Functions

### Declaring a function

```
function addition(num1, num2) {
    return num1 + num2;
}
```

### You can pass functions as a parameter for a function

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

### Javascripts supports callback functions

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

### Why are Callback functions important

JavaScript is an event driven language. This means that instead of waiting for a response before moving on, JavaScript will keep executing while listening for other events.

### Hoisting

Javascript uses hoisting, which works by taking all functions and saving it in the memoryspace, at start up.
This means that we do not have to define functions before we use them, since Javascript is not procedural.

# JQuery

## What is JQuery

jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

## How to use JQuery

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


## Syntaxes

JQuery uses the following syntax to declare that it is being used:
> $('')

To refere to an id, pound is used
> $('#title').css('color', 'green)
This means that a div/tag with the id set to title is going to be affected.

To refere to a class name, use the dot (.) notation
> $('.temp').hide()
This hides the div with the classname temp.

To refere to something inside a specific div, use a space between the div and the tag
> $('#title h2').css('text-align', 'center')

### Target a specific tag, here the body tag

> $('body').css('text-align', 'center')

This aligns all text in the body tag to be center.

### Target the h2 tag inside the div with the id title

> $('#title h2').html("New title")

### Change background color of a box

> $('.subtitle-box').css({"background-color": "blue"});

### Hide an specific element from the user without removing it from the DOM

> $('.temp').hide()

// 5. Put a dashed border box of any pixel width around any div that has the class "reason" 
    $('div.reason').css("border", "dashed blue 10px")


// Ordered list: Traversing the DOM 
// 6. Change the li's inside of the ordered list to be bold. Hint: RGlyZWN0IGNoaWxkIHNlbGVjdG9ycw== 
    $('#first-list li').css({"font-weight": "bold"})

// 7. Change the last li to be underlined.  Hint: cHNldWRvIHNlbGVjdG9ycw== 
    $('#first-list li').last().css({"text-decoration": "underline"})

// 8. Change the second li element to have a line through it.  
    $('#first-list li:nth-child(2)').css({"text-decoration": "line-through"})


## Best practices in JQuery

It is a good idea to always encapsule all JQuery in a function that executes when the page is done loading:
```
$(document).ready(() => { 
    // Put JQuery code here
}
```