# Pinstagram 소켓 서버

> Pinstagram 서비스에서 메세지 부분을 담당하는 서버입니다 

<br>


## Pinstagram 프로젝트

![서비스](https://github.com/banziha104/pinstagram_android/blob/master/markdown/images/service.png)

- ### 기획 배경
  - 새로운 기술을 도입해야 될 때마다 새로운 토이프로젝트를 만들었는데(그러다보니 레파지토리가 250개를 넘었습니다..), 이렇게 계속 진행하다보니 다른 기술들과 유기적으로 연결되지 못하는 느낌을 받았습니다.
  - 이를 개선하고자 하나의 토이 프로젝트를 만들고, 이를 지속적으로 개선해나가는 것이 좋겠다고 판단하여 시작한 프로젝트입니다.
- ### 서비스 내용
  - 기획 내용은 단순히 특정한 위치에 사진을 올리고, 이를 볼 수 있는 서비스입니다.
  - 개발자가 처음으로 하는 프로젝트인 헬로우월드, 그리고 그 다음으로 많이하는 계산기, 그리고 그와 쌍두마차를 이루는 기본적인 게시판 어플의 확장 버전입니다.
- ### 개인적인 규약
  - Git Submodule 미활용 : WAS와 Android의 경우 각 모듈별로 git submodule에 등록하는게 효율적이지만, 레파지토리가 너무 많아지면 관리가 안될 것 같아서 통합된 Git으로 관리합니다.
  - 기획 디자인 최소화 : 개발적인 프로젝트이기 때문에 사업성, 당위성 등은 최대한 배제하고 개발하기에 깔끔한 기획과 디자인만 가져갑니다. 그렇기 때문에 기획 디자인적으로 뜬금없는 페이지(예: Talk)가 들어갈 수 있습니다
  - 기술부채 : 한시적으로 끝나는 프로젝트가 아닌, 지속적인 프로젝트임으로, 현재 가능한 기술을 사용하고, 볼륨 및 러닝커브로 못 가져간 기술은 천천히 도입할 예정입니다.
- ### 서비스 주요 기능
  - Home : 특정 위치에서 1KM 반경내에 있는 데이터들을 그리드뷰 형식으로 보여줍니다
  - Map : 특정 위치에서 1KM 반경내에 있는 데이터들을 지도 형식으로 보여줍니다.
  - Talk : Socket 통신을 이용한 메세지입니다. 위치기반으로 하는 지역톡 개념이아닌 서비스 이용자 전체와 소통합니다.
  - Write : 특정 위치에 게시물을 명시할 수 있습니다.
  - Auth : 로그인, 로그아웃, 회원가입 등을 진행할 수 있습니다.


- ### 프로젝트 목록
  - ### [📱 Pinstagram Android (Kotlin & AndroidX)](https://github.com/banziha104/pinstagram_android)
  - ### [🍃 Pinstagram WAS (Spring Boot)](https://github.com/banziha104/pinstagram-was)
  - ### [🚚 Pinstagram DevOps (GKE & K8s & Helm)](https://github.com/banziha104/pinstagram_charts)
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

## 배포 

- [Dockerfiles](https://github.com/banziha104/pinstagram_socket/blob/master/Dockerfile) 을 통한 빌드 
- Google Container Registry 서비스로 푸쉬 
- [Helm Charts](https://github.com/banziha104/pinstagram_charts/blob/master/templates/pinstagram-talk-deploy.yml) 를 이용해 Google Kubernetes Engine에 배포

<br>

## 주요 구현 사항 

- [Socket.IO](https://github.com/banziha104/pinstagram_socket/blob/master/markdown/use_package/01_SocketIO.md)
- [Express](https://github.com/banziha104/pinstagram_socket/blob/master/markdown/use_package/02_Express.md)
- [MySQL](https://github.com/banziha104/pinstagram_socket/blob/master/markdown/use_package/03_MySQL.md)


<br>

## 후기

- 기존에 현업에서는 Spring Boot와 Stomp를 이용하여서 개발하였었는데, 이번에 최대한 가볍게 만들어보고자 Node.js를 활용해보았습니다.
- 충분히 적은량의 코드로도 퍼포먼스를 낼 수 있어서 좋았습니다.
- 다만 현재는 한개의 이벤트를 이용하고 있어 문제가 안되지만, 조금 소켓의 영향이 커진다면 TypeScript로 엄격하게 검사할 필요가 있어보입니다.

<br>

## License

```
MIT License

Copyright (c) 2021 Coguri

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
