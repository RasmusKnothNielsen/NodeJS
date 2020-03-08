# Node.JS

## Installing packeges

Add the package to package.json with name and version
After this, run the npm install command to install the missing packages

## Initialising a new npm project

Use this command, to initialie new npm project. Useful when you want to upload a library to npm
> $ npm init

## Nodemon

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

## Live reload of server

> $ npx budo index.js --live --open

Using the npx budo commmand to run the index.js file with live reload flag and the open flag.
Opens up the browser.

## how to run scripts

> $ npm run [scriptname]

Add it to package.json in the top as 
```
 {
    "scripts": {
        "start": "node app.js",
        "start-dev": "nodemon app.js"
    },
    dependencies: {
        "express": "^4.17.1"
    }
}
```

"start" script starts the app,
"start-dev" runs the app in developer mode (DO NOT USE IN PRODUCTION)

Another example is
```
  "scripts": {
    "start": "cross-env PORT=80 node app.js",
    "start-dev": "cross-env PORT=8686 nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

Which uses platform independent environment variables to enable cross platform execution.

## Using Environment variables to set port and other things

If you set the port number in our express server to the following
> process.env.PORT || 3000

It is possible to run the application by writing
> $ node app.js
And it will start to listen on port 3000

If you want it to listen to another port you can do the following
> $ PORT=8080 node app.js
And now it will listen to port 8080.

## Make scripts that use platform independent environment variables

Install cross-env

> $ npm install --save-dev cross-env

now you can define what port to run on by typing the following
> $ cross-env PORT=80 node app.js
And it works on Windows/Unix/OSX
