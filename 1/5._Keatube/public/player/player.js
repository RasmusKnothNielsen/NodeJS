// This returns the full url
// const fullUrl = window.location.href;
// if we do the following, we will redirect to another videoID
// window.location.href = 'test'
// This will redirect to localhost:8686/player/test

// Retrieve the full URL and split it into an array
const pathArray = window.location.pathname.split('/');
const videoID = pathArray[2];

// Console log the pathvariable
console.log(`${videoID}`);

// Create the video tag
const player = `<video width="320" height="240" controls>
                    <source src="/${videoID}" type="video/mp4">
                    Your browser does not support the video tag.
                </video> `;

// Append the video tag to the player wrapper
$('#player-wrapper').append(player);
// Change the source of the video to the provided path variable
// document.getElementById('video').src = '/' + videoID;
// Reload the video to force the changes to update.
// document.getElementById('videoplayer').load();
