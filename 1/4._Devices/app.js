const express = require("express");
const request = require('request');
const multer = require("multer")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


let devices = [
    { id: 1, type: "Computer"},
    { id: 2, type: "Telephone"}
];
// SQL like way of handling the unique ID.
let counter = 3;

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
    return res.send({response: devices})
})

// Get request on specific device
app.get("/devices/:id", (req, res) => {
    const device = devices.find(device => device.id === Number(req.params.id));
    if (req.params) {
        return res.send({response: device})
    }
})

// Post request for specific device
app.post("/devices", (req, res) => {
    // Check if the input is correct
    const newDevice = req.body
    if(!newDevice.type) {
        return res.status(400).send({response: "Missing the 'type' of the device"})
    }
    
    // Use this to loop through the id of the objects.
    //let maxID = 0;
    //devices.map(function(obj) {
    //    if (obj.id > maxID) maxID = obj.id
    //})
    let device = {id: counter, type: req.body.type}
    counter++

    devices.push(device)
    console.log(devices)
    return res.status(200).send()
})



// Start the webserver on port 8686
app.listen(8686, error => {
    if(error) {
        console.log(error.message);
    }
    console.log("Server started on port:", 8686);
});
