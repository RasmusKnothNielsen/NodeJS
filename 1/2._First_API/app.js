const express = require("express");

const app = express();

// The above can be onelined
//const app = require("express")();

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


// Start the webserver on port 8686
app.listen(8686, error => {
    if(error) {
        console.log(error.message);
    }
    console.log("Server started on port:", 8686);
});