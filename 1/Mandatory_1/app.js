const express = require('express');
// import fs to support filesystem
const fs = require('fs');

let writers = [
	{ fname: 'Herman', lname: 'Melville', id: 1 },
	{ fname: 'Louis-Ferdinand', lname: 'Céline', id: 2 },
	{ fname: 'Ken', lname: 'Kesey', id: 3 },
];

let counter = 3;

const portNumber = 8686;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.get('/API_docs', (req, res) => {
	return res.sendFile(__dirname + '/public/API.html');
});


// API

// Get Request on root
app.get('/api', (req, res) => {
	res.send({ 'Info about the Writers API:' : {
		'Version': '1.0.0',
		'Author': 'Rasmus Knoth Nielsen',
		'Pages': {
			'/': 'Meta data about this page',
			'/writers': {
				'GET': 'List of writers',
				'POST': 'Creates a new writer',
				'PUT': 'Updates a writer',
				'DELETE': 'Deletes a writer',
			},
		},
	} });
});

// Get Request for Writers
app.get('/api/writers', (req, res) => {
	return res.status(200).send({ 'Response': writers });
});

// Post Request for Writers
app.post('/api/writers', (req, res) => {

	// Check if the input is correct
	const writer = req.body;
	if(!writer.fname || !writer.lname) {
		return res.status(400).send({ response: 'Missing the \'fname\' and/or the \'lname\' of the writer' });
	}

	counter++;
	writer.id = counter;
	writers.push(writer);
	console.log(writers);
	return res.status(200).send();
});

// Put Request for Writers
app.put('/api/writers/:id', (req, res) => {
	if (writers.filter(writer => writer.id === Number(req.params.id)) < 1) {
		return res.status(400).send();
	}
	const index = writers.findIndex(writer => writer.id === Number(req.params.id));
	// Remove the id from the request.
	delete req.body.id;
	// Spread the keys and values from the request body into the updatedDevice
	// This way, we can take new keys and add them to the device.
	const updatedWriter = { ...writers[index], ...req.body };
	writers[index] = updatedWriter;
	return res.status(200).send({ response: writers });
});

// Delete Request for Writers
app.delete('/api/writers/:id', (req, res) => {
	if (writers.filter(writer => writer.id === Number(req.params.id)) < 1) {
		return res.status(400).send();
	}
	writers = writers.filter(writer => writer.id !== Number(req.params.id));
	return res.status(200).send({ response: writers });
});

// Start the server
app.listen(portNumber, error => {
	if (error) {
		console.log(error);
	}
	console.log('Server started up on port: ', portNumber);
});
