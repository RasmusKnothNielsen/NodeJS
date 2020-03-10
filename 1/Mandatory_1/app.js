const express = require("express")

const portNumber = 8686

const app = express();

// Allow server to serve public folder
app.use(express.static("public"));

// GET HTTP Request for root
app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/public/index.html");
})

// GET Request for NodeJS notes
app.get("/nodejs", (req, res) => {
    return res.sendFile(__dirname + "/public/NodeJS.html");
})

// Get Request for JavaScript
app.get("/javascript", (req, res) => {
    return res.sendFile(__dirname + "/public/Javascript.html");
})

// Get Request for JQuery
app.get("/jquery", (req, res) => {
    return res.sendFile(__dirname + "/public/JQuery.html");
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