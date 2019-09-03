# EPL18

> **🚧 현재 진행중 프로젝트**

URL : [https://epl-react.herokuapp.com](https://epl-react.herokuapp.com)

* EPL Data를 활용한 토이 프로젝트
* Typescript, React Hooks, TDD 등의 스터디를 목적으로 SEO 지원 및 간결한 배포가 가능한 NextJS + Heroku 조합으로 구현

## Completed List
* 기술셋 픽스 및 환경 세팅
* API 데이터 수급
* 인덱스(순위 목록) 메뉴
* 팀 메뉴
* 스탯 메뉴

## To Do List
* 일정 메뉴
* 선수 상세 정보
* 디자인 (with Material)
* TDD

## 변경사항
* Firebase 에서 Heroku 로 서버 이전
  * Firebase 는 제약이 많고 설정이 복잡
  * Heroku 는 Github 인터그레이션으로 배포 자동화 가능
* NextJS 8 에서 9로 버전업
  * Typescript 정식 지원, 그외 기능 추가

## 기술
* NodeJS + Heroku
* Typescript
* NextJS 9
* React 16

## API Source
[ESPN's hidden API Document](https://gist.github.com/akeaswaran/b48b02f1c94f873c6655e7129910fc3b) 참고 및 ESPN 웹사이트 탐색을 통해 관련 API Source 수급
* [Score Board](http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard?calendar=blacklist&dates=yyyymmdd)
* [Standings](http://site.api.espn.com/apis/v2/sports/soccer/eng.1/standings)
* [Statistics](http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/statistics)
* [Teams](http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/349)
* [Roster](http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/349/roster)
* [Player](http://www.espnfc.com/player/169532?xhr=1)

## Scripts
* Dev Server : `npm run dev`
* Build : `npm run build`
* Prod Server : `npm start`
> Build 및 Prod Server 실행은 Heroku 에서 Github Push 시 처리

## Memo
* API 데이터는 프로젝트 규모상 DB로 관리하기엔 오버스펙이므로 public 파일로 관리하거나 espn API(players)를 직접 호출
