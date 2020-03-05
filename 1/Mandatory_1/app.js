const express = require("express")

const portNumber = 8686

const app = express();

// GET HTTP Request for root
app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/public/index.html");
})

// Start the server
app.listen(portNumber, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server started up on port: ", portNumber);
})