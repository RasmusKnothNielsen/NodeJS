// Server for taking http requests from the user to display the correct page 
// or take information to add to the server/database
const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();

// Rate limiting users
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 8 // limit each IP to 100 requests per windowMs
  });
  app.use("/login", limiter);
  app.use("/signup", limiter);


const session = require('express-session');
app.use(session({
    genid: (req) => {   // Generate an ID for our session, that has to be unique
        // This will only be run, if the client does not have provided a sessionID already
        // OR if the client sends a sessionID that the server does not recognize. Can happen if the server restarts/crashes.
        console.log("Inside the session middleware")
        console.log(req.sessionID);
        return uuidv4();
    },
    secret: require('./config/mysqlCredentials').sessionSecret,
    resave: false,
    saveUninitialized: true,
    //cookie: { secure: true }
  }));

// Setting port number
const PORT = process.env.PORT ? process.env.PORT : 8686;

// Enable express to parse json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Setup Objection + Knex */
const Model = require('objection').Model;
const Knex = require('knex');   // Since Knex is with capital K, it is a library, eg. containing functions

// knexFile contains our meta information about our connection
const knexFile = require('./knexfile.js')

// knex contains the connection
const knex = Knex(knexFile.development);    // This is how you can have different environments, eg. Development, Production

// Connect the knex to our objection model, so that objection knows to use knex
Model.knex(knex);


app.use((req, res, next) => {
    console.log(new Date());
    next();     // Calls the next method in line, order matters alot!
})

// Add routes
const authRoute = require('./routes/auth.js');
const usersRoute = require('./routes/users.js');
const routes = require('./routes/routes.js');

app.use(authRoute);
app.use(usersRoute);
app.use(routes);

// Load the navbar and footer into memory
// Using readFileSync, blocks the app from going on, before the file is read
const navbarPage = fs.readFileSync(__dirname + '/public/navbar/navbar.html', 'utf-8');
const footerPage = fs.readFileSync(__dirname + '/public/footer/footer.html', 'utf-8');


app.get("/", (req, res) => {
    // Server Side Rendering:
    //const uniqueId = uuidv4();
    //console.log(uniqueId);
    console.log('Inside the homepage callback function');
    console.log(req.sessionID);
    let frontpage = fs.readFileSync(__dirname + '/public/frontpage.html', 'utf-8');
    let result = navbarPage + frontpage + footerPage
    return res.send(result);
})

app.get('/login', (req, res) => {
    // Server Side Rendering:
    let login = fs.readFileSync(__dirname + '/public/auth/login.html', 'utf-8');
    let result = navbarPage + login + footerPage
    return res.send(result);
})

app.get('/signup', (req, res) => {
    // Server Side Rendering:
    let signup = fs.readFileSync(__dirname + '/public/auth/signup.html', 'utf-8');
    let result = navbarPage + signup + footerPage
    return res.send(result);
})

app.get('/resetpassword', (req, res) => {
    // Server Side Rendering:
    let resetPassword = fs.readFileSync(__dirname + '/public/auth/resetpassword.html', 'utf-8');
    let result = navbarPage + resetPassword + footerPage
    return res.send(result);
})

app.get('/secure', (req, res) => {
    if (req.session.authenticated == true) {
        const securePage = fs.readFileSync(__dirname + '/public/securepage.html', 'utf-8');
        return res.send(navbarPage + securePage + footerPage);
    }
    else {
        return res.status(401).redirect('/login');
    }
})


/* Temp */
/* Two ways of doing it */
/*
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
*/


//app.use(authRoute);


/* Start server */
app.listen(PORT, error => {
    if (error) {
        console.log(error.log);
    }
    console.log('The server has started on port', PORT)
})

