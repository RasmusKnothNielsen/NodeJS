const express = require('express');
// import fs to support filesystem
const fs = require('fs');

const portNumber = 8686;

const app = express();

// Allow server to serve public folder
app.use(express.static('public'));

// GET HTTP Request for root
app.get('/', (req, res) => {
	return res.sendFile(__dirname + '/public/index.html');
});

// GET Request for NodeJS notes
app.get('/NodeJS', (req, res) => {
	return res.sendFile(__dirname + '/public/NodeJS.html');
});

// Get Request for JavaScript
app.get('/Javascript', (req, res) => {
	return res.sendFile(__dirname + '/public/Javascript.html');
});

// Get Request for JQuery
app.get('/JQuery', (req, res) => {
	return res.sendFile(__dirname + '/public/JQuery.html');
});

// Get Request for Express
app.get('/Express', (req, res) => {
	return res.sendFile(__dirname + '/public/Express.html');
});

// Get Request for Tools
app.get('/Tools', (req, res) => {
	return res.sendFile(__dirname + '/public/Tools.html');
});

// Start the server
app.listen(portNumber, error => {
	if (error) {
		console.log(error);
	}
	console.log('Server started up on port: ', portNumber);
});
