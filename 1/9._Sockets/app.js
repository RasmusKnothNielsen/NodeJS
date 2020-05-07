const app = require('express')();
const server = require('http').createServer(app);

// Prevent XSS (Cross Site Scripting)
const escape = require('escape-html');

// Used for security
const helmet = require('helmet');
app.use(helmet());

const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log("Socket joined", socket.id);

    socket.on("I'm thinking about this", ({ thoughts }) => {
        // Sends out to all the clients
        //console.log(thoughts)

        // Prevent XSS (Cross Site Scripting)
        io.emit("Someone said", { thoughts: escape(thoughts) });

        // Sends back to the specific socket
        //socket.emit("Someone said", { thoughts });

        // Sends to all clients, except the client that sends it
        //socket.broadcast.emit("Someone said", { thoughts });


    });


    socket.on('disconnect', () => {
        console.log("Socket left", socket.id)
    });

    socket.on('colorPicked', ( data ) => {
        console.log(data.color)
        io.emit("Color changed to", { color: escape( data.color ) });
    })
});

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/index.html");
})

app.get("/colored", (req, res) => {
    return res.sendFile(__dirname + "/colored.html");
})

server.listen(3000);