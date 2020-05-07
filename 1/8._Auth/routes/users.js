const router = require('express').Router();

const User = require('../models/User.js');

router.get('/users/roles', async (req, res) => {
    const users = await User.query().select('username').withGraphFetched('role');
    return res.send({ response: users})
})

router.get('/setsessionvalue', (req, res) => {
    req.session.sessionID = req.sessionID     
    return res.send({ response: "SessionID is set to " + req.sessionID});
});

router.get('/getsessionvalue', (req, res) => {
    return res.send({ response: req.sessionID});
});

module.exports = router;