# EPL18
EPL 2018 Data를 활용한 스터디용 프로젝트 (작업중)

## 기술
* Firebase : Firestore, Functions, Hosting, Storage
* Typescript
* React
* Next(SSR)

## API Source
* [ESPN's hidden API Document](https://gist.github.com/akeaswaran/b48b02f1c94f873c6655e7129910fc3b)
* [Score Board](http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard?calendar=blacklist&dates=20180901)
* [Teams](http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/349)

## Scripts
* 로그인
  > firebase login
* 배포
  > firebase deploy

## Memo
* 사내 방화벽 환경에서는 firebase 접근간 인증 오류 발생
* .npmrc에서 아래 설정 추가를 통해 CMD로 init 등 접근 관련 기능은 수행할 수 있지만 배포는 불가능
  ```
  strict-ssl=false
  NODE_TLS_REJECT_UNAUTHORIZED=0
  ```