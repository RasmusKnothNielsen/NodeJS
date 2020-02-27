const express = require("express");
const request = require('request');

const app = express();

let devices = [
    { id: 1, type: "computer"},
    { id: 2, type: "telephone"}
];

// Get Request on root
app.get("/", (req, res) => {
    res.send({"Info about the device API:" : { 
        "Version": "0.0.1",
        "Author": "Rasmus Knoth Nielsen",
        "Pages": {
            "/": "Meta data about this page",
            "/devices": "List of devices available"
        }
    }})
})

// Get Request on /devices
app.get("/devices", (req, res) => {
    res.send({devices : devices})
})

// Get request on specific device
app.get("/devices/:id", (req, res) => {
    const device = devices.find(device => device.id === Number(req.params.id));
    if (req.params) {
        res.send({device: device})
    }
})

// Post request
app.post("/test", (req, res) => {
    console.log("test test test")
    res.send()
})

// Start the webserver on port 8686
app.listen(8686, error => {
    if(error) {
        console.log(error.message);
    }
    console.log("Server started on port:", 8686);
});
