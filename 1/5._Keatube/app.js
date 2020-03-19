const express = require('express');
const app = express();

// Import the fs to be able to interact with the filesystem
const fs = require('fs');

// Enable express to parse json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Make NodeJS able to serve the files from /public and /videos.
app.use(express.static('public'));
app.use(express.static('videos'));

// SSR Server Side Rendering
// Used to read html files into memory, so we can concatonate them in the correct way
// and then send the files as strings, so the browser can interpret them.
// This way, we can combine our header, footer and "main view"

// If undefined, start on 8686, else start on the provided portnumber
const port = process.env.PORT ? process.env.PORT : 8686;

// Load the navbar, footer and frontpage
// Using readFileSync, blocks the app from going on, before the file is read
const navbarPage = fs.readFileSync(__dirname + '/public/navbar/navbar.html', 'utf-8');
const footerPage = fs.readFileSync(__dirname + '/public/footer/footer.html', 'utf-8');
const frontpagePage = fs.readFileSync(__dirname + '/public/frontpage/frontpage.html', 'utf-8');
const playerPage = fs.readFileSync(__dirname + '/public/player/player.html', 'utf-8');

// Get Request for front page
app.get('/', (req, res) => {
	return res.send(navbarPage + frontpagePage + footerPage);
});

// Get Request for the player page
app.get('/player/:videoid', (req, res) => {
	return res.send(navbarPage + playerPage + footerPage);
});


// Start the server on the provided port
app.listen(port, error => {
	if (error) {
		console.log(error.log);
	}
	console.log('The server has started on port', port);
},
);

