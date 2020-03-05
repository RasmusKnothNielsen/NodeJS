const express = require("express")
app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Make NodeJS able to serve the files from /public and /videos.
app.use(express.static('public'))
app.use(express.static('videos'))

const port = process.env.PORT ? process.env.PORT: 8686; // If undefined, start on 8686, else start on the provided portnumber


// Sending the page to the user on video.
app.get("/video/:videoid", (req, res) => {
    console.log(req.params.videoid)
    return res.sendFile(__dirname + "/public/video.html")
})

app.get("/video2/:videoid", (req, res) => {
    console.log(req.params.videoid)
    return res.sendFile(__dirname + "/public/video2.html")
})

app.listen(port, error => {
    if (error) {
        console.log(error.log)
    }
    console.log("The server has started on port", port)
}
)




