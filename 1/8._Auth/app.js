// Server for taking http requests from the user to display the correct page 
// or take information to add to the server/database
const express = require('express');

const app = express();

// Setting port number
const port = process.env.PORT ? process.env.PORT : 8686;

// Enable express to parse json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Make NodeJS able to serve the files from /public and /videos.
app.use(express.static('public'));
app.use(express.static('videos'));

// Routes

app.get('/login', (req, res) => {
    console.log('GET - trying to log in');
});

app.post('/login', (req, res) => {
    console.log('POST - trying to log in');
});

// Start the server on the provided port
app.listen(port, error => {
    if (error) {
        console.log(error.log);
    }
    console.log('The server has started on port', port)
})

