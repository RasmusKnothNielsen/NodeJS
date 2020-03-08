# Notes for First API

## Nodemon
Used as an alternative to:
> $ node app

Use this instead
> $ nodemon app

This runs the server in another way, so that we can restart the server without having to shut it down.
Other than this, it rebuilds the server from scratch everytime there is a change.
This means that when we type something in the app.js file, the server automatically restarts and implement the change.

NEVER USE IN PRODUCTION :)

##Node-fetch
Use this for requests in the future, since the package named requests is going to be deprecated


## Installing packeges.
Add the package to package.json with name and version
After this, run the npm install command to install the missing packages