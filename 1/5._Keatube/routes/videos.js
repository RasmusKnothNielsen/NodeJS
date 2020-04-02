// Accessing the Router from the express library
const router = require('express').Router();

const crypto = require('crypto');

const multer = require('multer');
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'videos');
	},
	filename: (req, file, cb) => {
		const filename = crypto.randomBytes(20).toString('hex');
		const mimeTypeArray = file.mimetype.split('/');
		if (mimeTypeArray[0] === 'video') {
			const extension = mimeTypeArray[mimeTypeArray.length - 1];
			cb(null, filename + '.' + extension);
		}
		else {
			cb('Not a video, Mimetype: ', file.mimetype);
		}
	},
});

const upload = multer({ storage: storage });

// Video schema
const videos = [{
	title: 'Ocean Waves',
	description: 'Watch the waves and enjoy',
	fileName: '5e72d5bc-8ada-4b2e-b477-68b72cd0187b.mp4',
	thumbnail: '',
	category: 'Nature',
	tags: ['waves', 'ocean', 'coast'],
	uploadDate: new Date(2020, 3, 26, 18, 43),
},
{
	title: 'Man enjoys Ocean Waves',
	description: 'Watch a man enjoying watching the waves',
	fileName: '29156f99-6ef1-4bc8-8542-c17b3c05b6a5.mp4',
	thumbnail: '',
	category: 'Nature',
	tags: ['waves', 'ocean', 'coast', 'man', 'beanie'],
	uploadDate: new Date(2020, 3, 26, 19, 43),
}];

const videosPerPage = 10;

// Return all the videos as a list
router.get('/videos', (req, res) => {
	const page = Number(req.query.page) ? Number(req.query.page) : 1;
	const start = (page - 1) * videosPerPage;
	const end = start + videosPerPage;
	// Number of videos per page and current page number?

	return res.send({ response: videos.slice(start, end) });
});

// Return the specific video
router.get('/videos/:videoId', (req, res) => {
	return res.send({ response: videos.find(video => video.fileName === req.params.videoId) });
});

// Create video
router.post('/videos', upload.single('video'), (req, res) => {
	// req.file is the `avatar` file
	// req.body will hold the text fields, if there were any
	const title = req.body.title ? req.body.title : '';
	const description = req.body.description;
	const fileName = req.file.filename;
	const category = req.body.category;
	// Split the tags with whitespace or commas
	const tags = req.body.tags.split(/\s*[,\s]\s*/);
	// Get current date
	const d = new Date();
	const currentDate = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());

	// Server side validation
	const errors = validateUserUpload(title, description, category);
	if (errors.length > 0) {
		return res.send({ response: errors });
	}
	else {
		// Push the new video to the videos array
		videos.push({
			title: title,
			description: description,
			fileName: fileName,
			thumbnail: '', // TODO
			category: category,
			tags: tags,
			uploadDate: currentDate,
		});
		console.log(videos);
		return res.redirect(`/player/${fileName}`);
	}

});

function validateUserUpload(title, description, category) {

	let errors = [];

	// Validate title length
	if (title == undefined || title.length < 8 || title.length > 64) {
		errors.push('Title is not between 8 and 64 characters long.');
		return false;
	}

	// Validate description
	if (description.length > 2048) {
		errors.push('Title has to be less than 2048.');
		return false;
	}

	// Validate that category is chosen
	if (!acceptedCategories.includes(category)) {
		errors.push('Providede category is not supported.')
		return false;
	}

	return errors;
}

// Array of categories that we accept
const acceptedCategories = [
	'autosvehicles',
	'comedy',
	'education',
	'entertainment',
	'filmanimation',
	'gaming',
	'howtostyle',
	'music',
	'nature',
	'newspolitics',
	'nonprofitactivism',
	'peopleblogs',
	'sciencetechnology',
	'sports',
];

// Export the route
module.exports = router;