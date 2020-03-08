# Express server

## How to get en Express server up and running

Add package.json
> $ touch package.json

Install express
> $ npm install express

Add app.js
> $ touch app.js

The following is the bare minimum of setup

```
const app = require("express")();
const server = app.listen(portnumber, (error) => {
    if (error) {
        console.log("Error")
    }
    console.log("Server is running on port", server.address().port)
})
```

## HTTP Requests

### GET

If you want to support get requests, create get routes

#### Return a JSON response

```
app.get("/path" (req, res) => {
    return res.send({"response", "text});
})

```

#### Return a HTML file

```
app.get("/" (req, res) => {
    return res.sendFile(__dirName + "rest/of/the/path.html");
})
```


### POST

### PUT

### DELETE

## Adding support for JSON body parsing

Add the following lines, if you want to be able to parse post request bodies.

> app.use(express.json());
> app.use(express.urlencoded({extended: true}));

## Enable NodeJS to serve files from specific folders

> app.use(express.static('public'));
> app.use(express.static('videos'));