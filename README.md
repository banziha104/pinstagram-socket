# Pinstagram 소켓 서버

> Pinstagram 서비스에서 메세지 부분을 담당하는 서버입니다 

<br>

## Pinstagram 프로젝트

- [Pinstagram Android (Kotlin & AndroidX)](https://github.com/banziha104/pinstagram_android)
- [Pinstagram WAS (Spring Boot)](https://github.com/banziha104/pinstagram-was)
- [Pinstagram DevOps (GKE & K8s & Helm)](https://github.com/banziha104/pinstagram_charts)
- [Pinstagram Socket (Node.js & Socket.io)](https://github.com/banziha104/pinstagram_socket)

<br>

## 개요 및 기능 

- Pinstagram 서비스에서 '톡톡' 탭의 메세지를 담당하는 서비스입니다.
- Socket
  - say Event : 웹소켓 클라이언트(현 프로젝트에서는 안드로이드만)에서 메세지를 주고 받을 수 있도록 만든 Socket 이벤트 처리 객체 입니다.
  - connect Event
  - disconnect Event
- HTTP 
  - GET /talk/healthCheck : Google Kubernetes Engines 에서 배포 여부를 readinessProbe를 이용한 헬스 체킹을 사용함으로, 이에 부하가 없는 경량의 응답처리를 위해 구현 
  - GET /talk/getAllMessgae : 기존의 메세지를 전부 읽어들이 라우팅


## 배포 

- [Dockerfiles](https://github.com/banziha104/pinstagram_socket/blob/master/Dockerfile) 을 통한 빌드 
- Google Container Registry 서비스로 푸쉬 
- [Helm Charts](https://github.com/banziha104/pinstagram_charts/blob/master/templates/pinstagram-talk-deploy.yml) 를 이용해 Google Kubernetes Engine에 배포


## Feature

- [Socket.IO](https://github.com/banziha104/pinstagram_socket/blob/master/markdown/use_package/01_SocketIO.md) : Web Socket 활용을 위해 사용
- [Express](https://github.com/banziha104/pinstagram_socket/blob/master/markdown/use_package/02_Express.md) : 기존의 저장된 메세지를 접근하기 위해 
- [MySQL](https://github.com/banziha104/pinstagram_socket/blob/master/markdown/use_package/03_MySQL.md) : 메세지 데이터베이스에 접근하기 위해 사용
