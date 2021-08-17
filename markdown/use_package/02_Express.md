# Express

- 초기화

```javascript

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = 8084

```

- 라우팅
  - /talk/healthCheck : GKE에서 readinessProbe의 요청 성공 여부에 따라 배포를 결정함, 이에 가장 라이트한 형식으로 헬스체크를 할 수 있는 라우팅 개설   
  - /talk/getAllMessage : MySQL에 저장된 이전까지의 정보를 가져오는 내용

```javascript

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

```

- 실행  

```javascript
server.listen(port, () => {
    console.log("Server listen")
});
```