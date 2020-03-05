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
