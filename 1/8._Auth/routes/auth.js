const router = require('express').Router();
const User = require('../models/User.js');
const Role = require('../models/Role.js');
const fs = require('fs');
const nodemailer = require('nodemailer')
const mailCredentials = require('../config/mailCredentials');
const { v4: uuidv4 } = require('uuid');

// Hashing Passwords
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Dictionary that can contain username and tokens for password reset
// Used in the post /resetpassword route
let resetPasswordDict = {}

// TODO Used for testing purposes
resetPasswordDict['jens3'] = '6adbbd94-1d8a-4c3c-b16a-04f6fbc9d7ee';

router.post('/login', async (req, res) => {
    // 1. retrieve the login details and validate
    // 2. check for a user match in the database
    // 3. bcrypt compare
    // 4. sessions

    const { username, password } = await req.body;

    // Check if user is in db
    const userFound = await User.query().select().where({'username': username}).limit(1);
    if (userFound.length > 0) {

        const validated = await bcrypt.compare(password, userFound[0].password);
        // If the user provided the correct username and password
        if(validated) {
            console.log("User validated")
            // TODO Trying this as authentication
            req.session.authenticated = true;
            req.session.username = userFound[0].username;
            // Add the users UUID, to show that we are logged in with the specific user
            req.session.uuid = userFound[0].uuid;
            return res.redirect('/profile');
        }
        // If the user provided the wrong password
        else {
            return res.send({response: "Username and password does not match"})
        }

    }
    // If the user provided a username that does not exist in the DB
    else {
        res.send({response: "User does not exist"});
    }
});

router.post('/signup', async (req, res) => {
    //const users = await User.query().select();

    const { username, password, passwordRepeat, email } = await req.body;

    const isPasswordTheSame = password === passwordRepeat;
 
    if (username && password && isPasswordTheSame) {
        if (password.length < 8) {
            return res.status(400).send({response: "Password does not fulfull the requirements"});
        } else {

            try {
                // Check if username exists
                const userFound = await User.query().select().where({'username': username}).limit(1);
                // Do if else check if it exists and give response
                if (userFound.length > 0) {
                    return res.status(400).send({ response: "User already exists"})
                } else {
                    
                    // Get the role number of USER
                    const role = await Role.query().select().where({'role': 'USER'}).limit(1);

                    const hashedPassword = await bcrypt.hash(password, saltRounds);

                    // Create the UUID for the user, that we are going to use as an identifier in our session
                    const uniqueId = uuidv4();
                    

                    // If email is provided
                    if (email != undefined) {
                        const insertedUser = await User.query().insert({
                            username,
                            password: hashedPassword,
                            roleID: role[0].id,  
                            email: email,
                            UUID: uniqueId,
                        });
                    }
                    // If email is not provided
                    else {
                        const insertedUser = await User.query().insert({
                            username,
                            password: hashedPassword,
                            roleID: role[0].id,  
                            UUID: uniqueId,
                        });
                    }

                    return res.status(200).send({ response : `User created with username ${username}!`})
                    // TODO: Redirect to login and use the sweetalert to make a pop up that says that the user is created
                }

            } catch (error) {
                return res.status(500).send({ response : "Something went wrong with the database" + error});
            }
        }
    } else if (password && passwordRepeat && !isPasswordTheSame) { 
        return res.status(400).send({response : "Password do not match"});
    } else {
        return res.status(404).send({response : "Missing fields: username, password, passwordRepeat" });
    }

    return res.send({response: [username, password, passwordRepeat]})
});

router.post('/resetpassword', async (req, res) => {
    const { username, email } = req.body;

    // If user is in the db
    const userFound = await User.query().select().where({'username': username}).limit(1);
                
                // If user exists
                if (userFound.length > 0) {
                    
                    // If the mail provided is the one associated with the user
                    if (email != undefined && email == userFound[0].email) {

                        // Generate test SMTP service account from ethereal.email
                        // Only needed if you don't have a real mail account for testing
                        let testAccount = await nodemailer.createTestAccount();

                        // create reusable transporter object using the default SMTP transport
                        const transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                              user: mailCredentials.user,
                              pass: mailCredentials.password
                            }
                          });

                        // Define a token for the user to log in with:
                        const userToken = uuidv4();
                        resetPasswordDict[userFound[0].username] = userToken

                        // send mail with defined transport object
                        const mailOptions = {
                            from: mailCredentials.user,
                            to: email,
                            subject: 'Resetting mail',
                            text: `Use the following token to reset your password: ${userToken}\nGo to /passwordReset for further information.`
                          };
                          
                          transporter.sendMail(mailOptions, function(error, info){
                            if (error) {
                              console.log(error);
                            } else {
                              console.log('Email sent: ' + info.response);
                            }
                          });

                        return res.send({response: `Sent email to ${email}`})
                    } 
                    // If the email is wrong
                    else {
                        return res.send({response: "User or email is not correct"})
                    }
                
                // If the user does not exist
                } else {
                    return res.send({response: "User is not in DB"});
                }

});

// route for resetting password
router.post('/passwordreset', async (req, res) => {
    const username = req.body.username;
    const token = req.body.token;
    const password = req.body.password;
    const passwordRepeat = req.body.passwordRepeat;
    console.log(req.body.username);
    console.log(req.body.token);

    // Check if the token is the one saved in the dictionary
    if (resetPasswordDict[username] = token) {
        // If it is, check if password and passwordRepeat match
        if (password != undefined && password == passwordRepeat) {
            // if they do, hash password and save it to the database
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            console.log("New hashed password = ", hashedPassword)
            const userUpdated = await User.query().where('username', '=', username).update({ password: hashedPassword});
            return res.status(200).redirect('/login');
        }
        // Passwords does not match
        else {
            return res.status(401).send({response: "Passwords must match eachother"});
        }
    }
    else {
        return res.status(401).send({response: "Invalid token entered"});
    }
})

/*
router.get('/secure', async (req, res) => {
    // If we have a session, a UUID and is authenticated
    console.log("Going to /secure")
    if (req.session && req.session.user != undefined && req.session.authenticated == true) {
        // Check if UUID is in DB
        console.log("Checking if UUID is in db")
        console.log(req.session.user)
        
        const result = await User.query().select().where({'uuid': req.session.user}).limit(1);
        // If UUID found
        if (result.length > 0) {
            // Send the secure page
            const securePage = fs.readFileSync(__dirname + '/public/securepage.html', 'utf-8');
            console.log("This is the UUID of the user, that is logged in:", req.session.user);
            return res.send(navbarPage + securePage + footerPage);
        }
        // UUID not found
        else {
            return res.status(401).redirect('/login');
        }
    }
    else {
        return res.status(401).redirect('/login');
    }
})
*/

router.get('/logout', (req, res) => {
    console.log(req.session);
    req.session.authenticated = false;
    req.session.user = null;
    req.session.uuid = null;
    return res.send({response: ["Logging out"]})
});



// Export the route
module.exports = router;