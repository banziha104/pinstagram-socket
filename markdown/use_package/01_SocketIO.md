# Socket IO

- 초기화 

```javascript
const {Server} = require("socket.io");
const io = new Server(server, {path: "/talk/socket"});
const port = 8084
```

- 소켓 연결부 : say Event가 발생하면 메세지 데이터베이스에 생성하고, 현재 연결된 사용자들에게 전송

```javascript
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
```