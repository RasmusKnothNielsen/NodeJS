// Server for taking http requests from the user to display the correct page 
// or take information to add to the server/database
const express = require('express');

const app = express();

// Setting port number
const PORT = process.env.PORT ? process.env.PORT : 8686;

// Enable express to parse json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Make NodeJS able to serve the files from /public and /videos.
app.use(express.static('public'));
app.use(express.static('videos'));

const authRoute = require('./routes/auth.js');


/* Setup Objection + Knex */
const Model = require('objection').Model;
const Knex = require('knex');   // Since Knex is with capital K, it is a library, eg. containing functions

// knexFile contains our meta information about our connection
const knexFile = require('./knexfile.js')

// knex contains the connection
const knex = Knex(knexFile.development);    // This is how you can have different environments, eg. Development, Production

// Connect the knex to our objection model, so that objection knows to use knex
Model.knex(knex);


/* Temp */
/* Two ways of doing it */
app.get('/', (req, res) => {
    knex('roles').select().then(users => {
        return res.send({response: users});
    }).catch(error => {
        return res.status(400).send({response: error})
    });
});

app.get('/2', async (req, res) => {
    try {
        const result = await knex('roles').select();
        return res.send({response: result});
    } catch (error) {
        return res.status(400).send({response: error})
    }
})


app.use(authRoute);


/* Start server */
app.listen(PORT, error => {
    if (error) {
        console.log(error.log);
    }
    console.log('The server has started on port', PORT)
})

