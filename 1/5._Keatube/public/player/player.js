// This returns the full url
// const fullUrl = window.location.href;
// if we do the following, we will redirect to another videoID
// window.location.href = 'test'
// This will redirect to localhost:8686/player/test

// Retrieve the full URL and split it into an array
const fullUrl = window.location.href;
const videoId = fullUrl.substr(fullUrl.lastIndexOf('/') + 1);

// Console log the pathvariable
console.log(`${videoId}`);

// Call the backend and retrieve the json about this specific video
$.get(`/videos/${videoId}`)
	.done((response) => {
		console.log(response.response);
		$('.title').text(response.response.title);

		const player = `<video id="player" width="320" height="240" controls>
                    <source src="/${videoId}">
                    Your browser does not support the video tag.
                </video>`;

		$('#player-wrapper').append(player);

		$('.description').text(response.response.description);
	})
	.catch((error) => {
		console.log(error);
		$('.title').text('Could not find video');
	});


// Change the source of the video to the provided path variable
// document.getElementById('video').src = '/' + videoID;
// Reload the video to force the changes to update.
// document.getElementById('videoplayer').load();
