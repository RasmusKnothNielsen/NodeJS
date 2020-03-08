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

## Best practices in JQuery

It is a good idea to always encapsule all JQuery in a function that executes when the page is done loading:
```
$(document).ready(() => { 
    // Put JQuery code here
}
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

### Target every div that has the class "reason"

> $('div.reason').css("border", "dashed blue 10px")

### Ordered Lists

Ordered lists are lists with numbers
```
1. first entry
2. second entry
3. third entry
``` 

#### Change every element in a list

> $('#first-list li').css({"font-weight": "bold"})

#### Change the last element in a list

> $('#first-list li').last().css({"text-decoration": "underline"})

#### Change the second element in a list

> $('#first-list li:nth-child(2)').css({"text-decoration": "line-through"})

### Unordered Lists

Unordered lists are lists with dots or similar

- Item 1
- Item 2
- Item 3

#### Change every element in an unordered list

> $('.second-list').children().css({"font-style": "italic"})

#### Change the span font size of a unordered list

> $('.second-list span').css({"font-size": "0.5em"})

em is better to use than px because: 
em is not an absolut value, it is relative to the predefined value. so 0.5em is half the size
Furthermore its size is relative to the userchosen font size.
px is an absolute value, that is set independent of the predefined size.

#### Remove a label element inside a box

> $('.unused-box label:nth-child(1)').remove()

#### Add a paragraph inside a box

> $('.unused-box').append("<p>Second Sentence</p>")

#### Add another paragraph before the already added paragraphs

> $('.unused-box').prepend("<p>First Sentence</p>")

#### Change a classname 

> $('.unused-box').attr('class', 'used-box')

#### Change class name when clicked on

Every time the box is clicked it should toggle this class (add if not there or remove if there).
Wait until the page is done loading.
Its good practice, to always do JQuery eventhandling inside one of these:

```
    $(document).ready(() => {
        $(".used-box").click(() => {
            $(".used-box").toggleClass("used-boxed-clicked");
        })
    })
```

Remember to encapsulate it in a $(document).read() if it is not already done on the whole script

#### Event handling with mouse over

On mousing over the submit-button add a title property that says "You're ready to click." Remove the text when the mouse isn't over the button anymore.

```
    $("#submit-button"). mouseenter(() => {
        $(event.currentTarget).text("You're ready to click")
        $("#submit-button"). mouseleave(() => {
            $(event.currentTarget).text("Submit")
        })
    })
```

#### Event handling on mouse click

On mouse click add a reason to the ordered list. The reason should start from Reason 4 and count up after every click. 

```
    var reason = 4
    $("#submit-button").click(() => {
        let count = $('#first-list li').length;
        $("#first-list").append(`<li>Reason ${count + 1} </li>`)

        //  18. Console log the parent div when the button is clicked using a direct reference to the button inside of the event handler scope. Hint: JCh0aGlzKS5wYXJlbnQoKTs= 
        console.log($(event.currentTarget).parent())
    })
```
