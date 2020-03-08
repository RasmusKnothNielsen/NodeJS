const express = require("express")

const portNumber = 8686

const app = express();

// GET HTTP Request for root
app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/public/index.html");
})

// GET Request for NodeJS notes
app.get("/nodejs", (req, res) => {
    return res.sendFile(__dirname + "/public/NodeJS.html");
})

// Get Request for JavaScript and JQuery
app.get("/javascriptandjquery", (req, res) => {
    return res.sendFile(__dirname + "/public/Javascript_JQuery.html");
})

// Get Request for Express
app.get("/express", (req, res) => {
    return res.sendFile(__dirname + "/public/Express.html");
})

// Start the server
app.listen(portNumber, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server started up on port: ", portNumber);
})