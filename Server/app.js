const Expreess = require("Express");
const Htpp = require("http").Server(Express);
const Socketio = require("socket.io")(Http);

// i could use a database for a production application
// Also the calculations happens in the server for "cheatting"
var position = {
    x: 200,
    y: 200
};

Socketio.on("connection", socket =>{
    socket.emit("position", position);
});

Http.listen(3000, () => {
    console.log("Listeninng at :3000...");
});