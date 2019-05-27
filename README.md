# EPL18
EPL 2018 Data를 활용한 토이 프로젝트 (작업중)

## 기술
* Firebase : Firestore, Functions, Hosting, Storage
* Typescript
* React
* Next(SSR) : [참고](https://github.com/zeit/next.js/tree/master/examples/with-firebase-hosting-and-typescript)

## API Source
* [ESPN's hidden API Document](https://gist.github.com/akeaswaran/b48b02f1c94f873c6655e7129910fc3b)
* [Score Board](http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard?calendar=blacklist&dates=20180901)
* [Teams](http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/349)

## NPM Global
`sudo npm install -g firebase-tools tslint typescript`

## Scripts
* Login
`firebase login`
* Dev (Next)
`npm run dev`
* Build
`npm run build`
* Deploy
`firebase deploy`

## Memo
* 사내 방화벽 환경에서는 firebase 접근간 인증 오류 발생
* .npmrc에서 아래 설정 추가를 통해 CMD로 init 등 접근 관련 기능은 수행할 수 있지만 배포는 불가능
  ```
  strict-ssl=false
  NODE_TLS_REJECT_UNAUTHORIZED=0
  ```