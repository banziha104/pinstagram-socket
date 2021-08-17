# MySQL

- 초기화 및 연결
```javascript
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '34.64.133.74',
    user: 'pinstagram',
    password: 'test1234',
    database: 'pinstagram'
});

connection.connect()

```

- 쿼리
  - /talk/getAllMessage : HTTP 통신으로 현재 저장된 메세지 데이터를 읽어옮 
  - say Event : 메세지 입력 이벤트가 발생하면 현재 데이터베이스에 저장

```javascript

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


```

- 종료 : 현재 프로세스가 종료되면 컨넥션을 끊도록 설정 

```javascript
process.on('exit', () => {
    connection.end()
})
```