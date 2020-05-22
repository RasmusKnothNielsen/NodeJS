// Server for taking http requests from the user to display the correct page 
// or take information to add to the server/database
const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const User = require('./models/User.js');
const Role = require('./models/Role.js');

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

app.use(authRoute);
app.use(usersRoute);

app.use(express.static(__dirname + '/public'));


// Load the navbar and footer into memory
// Using readFileSync, blocks the app from going on, before the file is read
const navbarPage = fs.readFileSync(__dirname + '/public/navbar/navbar.html', 'utf-8');
const footerPage = fs.readFileSync(__dirname + '/public/footer/footer.html', 'utf-8');


app.get("/", (req, res) => {
    // Server Side Rendering:
    //const uniqueId = uuidv4();
    //console.log("UUID:", uniqueId);
    console.log('Inside the homepage callback function');
    console.log(req.sessionID);
    return res.send(renderPage('/public/frontpage.html'));
})

app.get('/login', (req, res) => {
    // Server Side Rendering:
    return res.send(renderPage('/public/auth/login.html'));
})

app.get('/signup', (req, res) => {
    // Server Side Rendering:
    return res.send(renderPage('/public/auth/signup.html'));
})

app.get('/resetpassword', (req, res) => {
    // Server Side Rendering:
    return res.send(renderPage('/public/auth/resetpassword.html'));
})

app.get('/secure', async (req, res) => {
    if (await authenticateUser(req) == true) {
        // Send the secure page
        //console.log("Authenticated")
        //console.log("This is the username, that is logged in:", req.session.username);
        //console.log("This is the UUID of the user, that is logged in:", req.session.uuid);
        return res.send(renderPage('/public/securepage.html'));
    }
    else {
        console.log("Not authenticated")
        return res.status(403).redirect('/login');
    }
})

app.get('/profile', async (req, res) => {
    if (await authenticateUser(req) == true) {
        return res.send(renderPage('/public/profilepage.html'));
    }
    else {
        return res.status(403).redirect('/login');
    }
})

app.get('/api/userinfo', async (req, res) => {
    const username = req.session.username;
    if (await authenticateUser(req) == true) {
        const userFound = await User.query().select().where({'username': username}).limit(1);
        return res.send({response: {username: userFound[0].username, createdAt: userFound[0].createdAt}})
    }
    else {
        return res.status(403).send({response: "User not found!"})
    }
})

// Helperfunction to check if a user is logged in, and thus allowed to visit secure pages.
async function authenticateUser(req) {
    // If we have a session, a UUID and is authenticated
    const username = req.session.username;
    // If username is provided
    if (username != undefined) {
        const userFound = await User.query().select().where({'username': username}).limit(1);

        if (userFound.length > 0) {
            if (req.session.authenticated == true && req.session.uuid == userFound[0].uuid) {
                console.log("authenticatedUser() -> true")
                return true;
            }
            // UUID not found
            else {
                console.log("UUID does not match users UUID");
                return false;
            }
        }
        // Provided user not found
        else {
            console.log("User not found in DB");
            return false;
        }
    }
    // If username is undefined
    else {
        console.log("Username is undefined. Remember to login before accessing /secure");
        return false;
    }
}

// Helperfunction to render the page using SSR (Server Side Rendering)
function renderPage(path) {
    let page = fs.readFileSync(__dirname + path, 'utf-8');
    let result = navbarPage + page + footerPage;
    return result;
}



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

