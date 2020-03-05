const express = require("express");
const request = require('request');
const multer = require("multer")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


let devices = [
    { type: "Computer", id: 1},
    { type: "Telephone", id: 2},
    { type: "Smart Watch", id: 3}
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
    let newDevice = req.body
    if(!newDevice.type) {
        return res.status(400).send({response: "Missing the 'type' of the device"})
    }
    
    counter++
    newDevice.id = counter
    devices.push(newDevice)
    console.log(devices)
    return res.status(200).send()
})

// Put request for specific device
app.put("/devices/:id", (req, res) => {
    if (devices.filter(device => device.id === Number(req.params.id)) < 1) {
        return res.status(400).send()
      }
    const index = devices.findIndex(device => device.id === Number(req.params.id));
    delete req.body.id; // Remove the id from the request.
    // Spread the keys and values from the request body into the updatedDevice
    // This way, we can take new keys and add them to the device.
    const updatedDevice = {...devices[index], ...req.body} 
    devices[index] = updatedDevice
    return res.status(200).send({response: devices})

})

// Delete request for specific device
// Get request on specific device
app.delete("/devices/:id", (req, res) => {
    if (devices.filter(device => device.id === Number(req.params.id)) < 1) {
        return res.status(400).send()
      }
    devices = devices.filter( device => device.id !== Number(req.params.id))
    return res.status(200).send({response: devices})
})






// Start the webserver on port 8686
app.listen(8686, error => {
    if(error) {
        console.log(error.message);
    }
    console.log("Server started on port:", 8686);
});
