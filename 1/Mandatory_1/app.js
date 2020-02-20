const express = require("express")

const portNumber = 8686

const app = express();

app.listen(portNumber, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server started up on port: " + portNumber);
})