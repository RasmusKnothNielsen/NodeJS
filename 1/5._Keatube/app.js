const express = require('express');
const app = express();

// Enable express to parse json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Make NodeJS able to serve the files from /public and /videos.
app.use(express.static('public'));
app.use(express.static('videos'));

// If undefined, start on 8686, else start on the provided portnumber
const port = process.env.PORT ? process.env.PORT : 8686;


// Get Request for the player page
app.get('/player/:videoid', (req, res) => {
	// console.log(req.params.videoid);
	return res.sendFile(__dirname + '/public/player/player.html');
});

// Get Request for front page
app.get('/', (req, res) => {
	return res.sendFile(__dirname + '/public/frontpage/frontpage.html');
});


// Start the server on the provided port
app.listen(port, error => {
	if (error) {
		console.log(error.log);
	}
	console.log('The server has started on port', port);
},
);

