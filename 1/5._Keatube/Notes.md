### how to run scripts
> $ npm run [scriptname]

Add it to package.json in the top as 
 {
    "scripts": {
        "start": "node app.js",
        "start-dev": "nodemon app.js"
    },
    dependencies: {
        "express": "^4.17.1"
    }
}

"start" script starts the app,
"start-dev" runs the app in developer mode (DO NOT USE IN PRODUCTION)

Using npm run start-dev in development


## Server Side Rendering
SSR Server Side Rendering
Used to read html files into memory, so we can concatonate them in the correct way
and then send the files as strings, so the browser can interpret them.
This way, we can combine our header, footer and "main view"

## How to check if JQuery is loaded
Do the following in a .js file
> console.log($)
If it displays a function, JQuery is imported correctly

## Good to know
- Every file in node js is its own module


# Routes, how to refactor code?


# UUID

Use The UUID package to get unique names for files on server

## Using Ajax to retrieve other responses

>$.get('videos', (response) => {
>	console.log(response);
>});




const videos = response.response;
	videos.forEach(video => {
		$('#links-frontpage').append(`<p>
        <a href="/player/${video['fileName']}">${video['title']}</a>
        </p>`);
	});
