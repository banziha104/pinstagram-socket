const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server, {path: "/talk/socket"});
const port = 8084
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '34.64.133.74',
    user: 'pinstagram',
    password: 'test1234',
    database: 'pinstagram'
});

connection.connect()


app.get('/talk/healthCheck', (req, res) => {
    res.json({
        message: "OK"
    })
})

app.get('/talk/getAllMessage', (req, res) => {
    connection.query("SELECT * FROM message", (err, rows, fields) => {
        res.json({
            code: err ? "데이터베이스 오류" : "ok",
            message: err ? "데이터베이스 오류" : null,
            httpCode: err ? 500 : 200,
            data: err ? null : rows
        })
    })
})

io.on('connection', client => {

    client.on('say', (data) => {
        console.log(`User Say ${data}`)
        let {text,name,userId}  = JSON.parse(data)
        connection.query(`insert into message (text, name, userId) values ('${text}','${name}',${userId})`)
        io.emit('say', data)
    })

    client.on('disconnect', (data) => {
        console.log(`User Disconnected ${client} ${data}`)
        client.disconnect()
    });
});

server.listen(port, () => {
    console.log("Server listen")
});

process.on('exit', () => {
    connection.end()
})