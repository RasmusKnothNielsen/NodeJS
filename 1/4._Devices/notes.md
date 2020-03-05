## How to get en Express server up and running

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

