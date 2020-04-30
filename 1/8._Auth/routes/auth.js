const router = require('express').Router();
const User = require('../models/User.js');
const Role = require('../models/Role.js');


router.post('/login', (req, res) => {
    return res.send({response: "Logging in"})
});

router.post('/signup', async (req, res) => {
    //const users = await User.query().select();

    const { username, password, passwordRepeat } = await req.body;

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

                    const insertedUser = await User.query().insert({
                        username,
                        password,
                        roleID: role[0].id,  // TODO change to role variable
                    });
                    return res.status(200).send({ response : `User created with username ${insertedUser.username}!`})
                }

            } catch (error) {
                return res.status(500).send({ response : "Something went wrong with the database"});
            }
        }
        return res.status(200).send({response : "User logged in"});
    } else if (password && passwordRepeat && !isPasswordTheSame) { 
        return res.status(400).send({response : "Password do not match"});
    } else {
        return res.status(404).send({response : "Missing fields: username, password, passwordRepeat" });
    }

    return res.send({response: [username, password, passwordRepeat]})
});

router.get('/logout', (req, res) => {
    return res.send({response: ["Logging out"]})
});

// Export the route
module.exports = router;