const express = require("express");
const request = require('request');

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
    return res.send({message: "Hello there"});
});

// Define something on the path /aboutMe that returns a JSON
// First argument is the path
// Second argument is a callback function 
app.get("/aboutMe", (req, res) => {
    return res.send({message: "About me"});
});

// Define something on the path /about that returns a JSON representation of the website
app.get("/about", (req, res) => {
    return res.send({
        about: "This website contains alot of things!",
        api: {
            aboutme: "/aboutMe contains information about me",
            index: "/ contains the root of the site",
            goats: "/goats contains a list of beautiful goats!",
            greeting: "/greetings"
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
    return res.send(listOfGoats);
})

// Create a route that takes pathvariables and returns a string that embeds the variables.
app.get("/greeting", (req, res) => {
    // req.query provides the pathvariables.
    let greeting = "Hi there, " + req.query.name + ". Isn't it exciting to be " + req.query.age + " years old??";
    return res.send(message = {greeting});
})

// Post route that takes a json object from postman, console logs it and returns it to the sender.
app.post("/greeting/postman", (req, res) => {
    let greeting  = req.body;
    console.log(greeting);
    return res.send({
        "Greeting": req.body
    })
})

// Initialize arrays outside the get request, since we only want to run it once.
// To save heap space.
let arrayOfDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
let arrayOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", 
                    "September", "October", "November", "December"];

// Create route that tells the time and day of the week
// Either do it like a switch statement, or just make an array and get the day directly from that.
app.get("/time", (req, res) => {
    let date = new Date();
    let todaysDate = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let day = date.getDay();

    // Remember to always send back JSON, when working with API
    return res.send({
        "Date" : todaysDate + " " + arrayOfMonths[month] + " " + year + " ",
        "Day": arrayOfDays[day],
        "Time": date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    })
})

// Create a route that takes a pathvariable id, to display the specific user
app.get("/user/:id", (req, res) => {
    console.log(req.params)
    let params = req.params;

    return res.send({
        id: req.params.id
    })
})

// Query String
// The query has to be URL/search&id="something"
app.get("/search", (req, res) => {

    // Check if the right query string has been provided.
    if (req.query.id) 
    {
        return res.send({
            queryString: req.query.id
        })
    } else {    // User provided an unsupported query string
        return res.send({response: "Invalid query string provided, please use URL/search&id='something'!"});

    }
})

// Create a new route that makes the server make a new request to another page
// and serve it to the user
app.get("/google", (req, res) => {
    // We use a callback function, since we only want to run the code inside the curly brackets, 
    // when we get a response from the website.
    request('http://www.google.com', (error, response, body) => {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        
        return res.send(body);
    });
})

// Creating a route that serves a file
app.get("/documentation", (req, res) => {
    console.log(__dirname);
    // Concatonate the path to the specific file to the __dirname to get the correct full path
    return res.sendFile(__dirname + "/public/documentation.html");
})

// Start the webserver on port 8686
app.listen(8686, error => {
    if(error) {
        console.log(error.message);
    }
    console.log("Server started on port:", 8686);
});