const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');

//init http server with node
const server = http.createServer((req,res)=>{
    res.end("I am connected!");
});

const io = socketio(server);
var message="";
io.on('connection',(socket,req)=>{
    socket.emit("Hello websocket server!");
    socket.on('message',(msg)=>{
        message=msg;
        //console.log(message);
        io.emit('messageToClient',{data:message});
    });
});

server.listen(8000);
