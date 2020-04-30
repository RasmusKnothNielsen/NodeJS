const router = require('express').Router();


router.post('/login', (req, res) => {
    res.send({response: "Logging in"})
});

router.post('/signup', (req, res) => {
    res.send({response: "Signing up"})
});

router.get('/logout', (req, res) => {
    res.send({response: "Logging out"})
});

// Export the route
module.exports = router;