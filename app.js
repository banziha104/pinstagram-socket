const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{path: "/talk/socket"});
const port = 8084

app.get('/talk/healthCheck',(req,res)=>{
    console.log("Health Check OK")
    res.json({
        message: "OK"
    })
})

io.on('connection', client => {
    client.on('hello',(data)=>{
        console.log(`User Login ${data}`)
        io.emit('hello',data)
    })

    client.on('say',(data)=>{
        console.log(`User Say ${data}`)
        io.emit('say',data)
    })

    client.on('bye',(data)=>{
        console.log(`User Logout ${data}`)
        io.emit('bye',data)
    })
    client.on('disconnect', (data) => {
        console.log(`User Disconnected ${data}`)
    });
});

server.listen(port,()=>{
    console.log("Server listen")
});