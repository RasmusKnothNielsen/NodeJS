// Accessing the Router from the express library
const router = require('express').Router();

const videos = [];
videos.push('Hang.mp4', 'Nature.mp4');

router.get('/test', (req, res) => {
	return res.send({ message: 'Does the router work?' });
});

// Export the route
module.exports = router;