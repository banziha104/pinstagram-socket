# Pinstagram 소켓 서버

> Pinstagram 서비스에서 메세지 부분을 담당하는 서버입니다 

<br>

## Pinstagram 프로젝트

- ### [📱 Pinstagram Android (Kotlin & AndroidX)](https://github.com/banziha104/pinstagram_android)
- ### [🍃 Pinstagram WAS (Spring Boot)](https://github.com/banziha104/pinstagram-was)
- ### [👷🏾‍ Pinstagram DevOps (GKE & K8s & Helm)](https://github.com/banziha104/pinstagram_charts)
- ### [🕳 Pinstagram Socket (Node.js & Socket.io)](https://github.com/banziha104/pinstagram_socket)

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

<br>

## Deploy 

- [Dockerfiles](https://github.com/banziha104/pinstagram_socket/blob/master/Dockerfile) 을 통한 빌드 
- Google Container Registry 서비스로 푸쉬 
- [Helm Charts](https://github.com/banziha104/pinstagram_charts/blob/master/templates/pinstagram-talk-deploy.yml) 를 이용해 Google Kubernetes Engine에 배포

<br>

## Feature

- [Socket.IO](https://github.com/banziha104/pinstagram_socket/blob/master/markdown/use_package/01_SocketIO.md)
- [Express](https://github.com/banziha104/pinstagram_socket/blob/master/markdown/use_package/02_Express.md)
- [MySQL](https://github.com/banziha104/pinstagram_socket/blob/master/markdown/use_package/03_MySQL.md)


<br>

## Inpression

- 기존에 현업에서는 Spring Boot와 Stomp를 이용하여서 개발하였었는데, 이번에 최대한 가볍게 만들어보고자 Node.js를 활용해보았습니다.
- 충분히 적은량의 코드로도 퍼포먼스를 낼 수 있어서 좋았습니다.
- 다만 현재는 한개의 이벤트를 이용하고 있어 문제가 안되지만, 조금 소켓의 영향이 커진다면 TypeScript로 엄격하게 검사할 필요가 있어보입니다.
