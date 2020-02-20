const express = require("express");

const app = express();

// The above can be onelined
//const app = require("express")();

// For POST-Support
// Remember to install body-parser and multer
let bodyParser = require('body-parser');
let multer = require('multer');
let upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Creating a get request for the webserver to use
// First argument is the path
// Second argument is a callback function that takes a request and provides a response
app.get("/", (req, res) => {
    res.send({message: "Hello there"});
});

// Define something on the path /aboutMe that returns a JSON
// First argument is the path
// Second argument is a callback function 
app.get("/aboutMe", (req, res) => {
    res.send({message: "About me"});
});

// Define something on the path /aboutThisWebsite that returns a JSON representation of the website
app.get("/aboutThisWebsite", (req, res) => {
    res.send({
        about: "This website contains alot of things!",
        api: {
            aboutme: "/aboutMe contains information about me",
            index: "/ contains the root of the site"
        }
    });
});

// Create a new route, to practice the coding
app.get("/goats", (req, res) => {
    let listOfGoats = {
        goat1 : {
            name: "Hubert",
            age: 4,
            kids: "None"
        },
        goat2 : {
            name: "Hannah",
            age: 5,
            kids: "None"
        },
        goat3 : {
            name: "Henry",
            age: 3,
            kids: "None"
        },
        goat4 : {
            name: "Halley",
            age: 6,
            kids: {
                firstKid: {
                    name: "Ashoka",
                    age: 2
                },
                secondKid: {
                    name: "Moksha",
                    age: 1
                }
            }
        }
    }
    res.send(listOfGoats)
})

// Create a route that takes pathvariables and returns a string that embeds the variables.
app.get("/greeting", (req, res) => {
    // req.query provides the pathvariables.
    let greeting = "Hi there, " + req.query.name + ". Isn't it exciting to be " + req.query.age + " years old??"
    res.send(message = {greeting})
})

// Post route that takes a json object from postman, console logs it and returns it to the sender.
app.post("/greeting/postman", (req, res) => {
    let greeting  = req.body
    console.log(greeting)
    res.send(req.body)
})

// Initialize arrays outside the get request, since we only want to run it once.
// To save heap space.
let arrayOfDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"]
let arrayOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", 
                    "September", "October", "November", "December"]

// Create route that tells the time and day of the week
// Either do it like a switch statement, or just make an array and get the day directly from that.
app.get("/time", (req, res) => {
    let date = new Date()
    let todaysDate = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    let day = date.getDay()

    // Remember to always send back JSON, when working with API
    res.send({
        "Date" : todaysDate + " " + arrayOfMonths[month] + " " + year + " ",
        "Day": arrayOfDays[day],
        "Time": date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    })
})


// Start the webserver on port 8686
app.listen(8686, error => {
    if(error) {
        console.log(error.message);
    }
    console.log("Server started on port:", 8686);
});