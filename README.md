# EPL18

> **🚧 현재 진행중 프로젝트**

URL : [https://epl18-9164b.web.app](https://epl18-9164b.web.app)

* EPL 2018 Data를 활용한 토이 프로젝트
* Typescript, React Hooks, TDD 등의 스터디를 목적으로 SEO 지원 및 간결한 배포가 가능한 NextJS + Firebase 조합으로 구현

## Completed List
* 기술셋 픽스 및 환경 세팅
* API 데이터 수급
* 인덱스(순위 목록) 출력
* 팀 목록, 팀 상세 정보 출력

## To Do List
* **Firebase에서 데이터 서버사이드 렌더링이 안되는 이슈**
* 일정 목록, 경기 상세 정보 출력
* 선수 랭킹 출력
* 선수 정보 출력
* 디자인 (with Material)
* TDD

## 기술
* Firebase : Firestore, Functions, Hosting, Storage
* Typescript
* React + Redux + Redux-Saga
* NextJS (with Firebase + Typescript) : [참고](https://github.com/zeit/next.js/tree/master/examples/with-firebase-hosting-and-typescript)

## API Source
[ESPN's hidden API Document](https://gist.github.com/akeaswaran/b48b02f1c94f873c6655e7129910fc3b) 참고 및 ESPN 웹사이트 탐색을 통해 관련 API Source 수급
* [Score Board](http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard?calendar=blacklist&dates=20180901)
* [Standings](http://site.api.espn.com/apis/v2/sports/soccer/eng.1/standings)
* [Statistics](http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/statistics)
* [Teams](http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/349)
* [Roaster](http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/349/roster)
* [Player](http://www.espnfc.com/player/169532?season=2018&xhr=1)

## NPM Global 설치
`sudo npm install -g firebase-tools typescript`

## Scripts
* Firebase 로그인 : `firebase login`
* Next(Dev) Server 구동 : `npm run dev`
* 배포용 빌드 : `npm run build`
* 배포 : `firebase deploy`

## Memo
* 방화벽 환경에서는 firebase 접근간 인증 오류 발생하는 경우가 있음
* .npmrc에서 아래 설정 추가를 통해 CMD로 init 등 접근 관련 기능은 수행할 수 있지만 배포는 불가능
  ```
  strict-ssl=false
  NODE_TLS_REJECT_UNAUTHORIZED=0
  ```
* API 데이터는 프로젝트 규모상 DB로 관리하기엔 오버스펙이므로 public 파일로 관리하거나 espn API(players)를 직접 호출