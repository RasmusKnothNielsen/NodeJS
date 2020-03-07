## Javascript

### Arrays


### Objects


### Strings


### Functions


## JQuery

### Syntaxes


## Node.JS

### Installing packeges.
Add the package to package.json with name and version
After this, run the npm install command to install the missing packages



### Nodemon
Used as an alternative to:
> $ node app

Use this instead
> $ nodemon app

This runs the server in another way, so that we can restart the server without having to shut it down.
Other than this, it rebuilds the server from scratch everytime there is a change.
This means that when we type something in the app.js file, the server automatically restarts and implement the change.

NEVER USE IN PRODUCTION :)

## Node-fetch
Use this for requests in the future, since the package named requests is going to be deprecated

### Live reload of server:

> $ npx budo index.js --live --open

Using the npx budo commmand to run the index.js file with live reload flag and the open flag.
Opens up the browser 

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


## Express server
### How to get en Express server up and running

Add package.json

> $ npm install express


Add app.js

> const app = require("express")();
> const server = app.listen(portnumber, (error) => {
    if (error) {
        console.log("Error")
    }
    console.log("Server is running on port", server.address().port)
})

