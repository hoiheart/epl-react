# EPL-React

URL : [https://epl-react.herokuapp.com](https://epl-react.herokuapp.com)

> Heroku 무료 서버는 주기적으로 sleep 되므로 접속에 시간이 걸릴 수 있음

* EPL Data를 활용한 토이 프로젝트
* Typescript + React 스터디를 목적으로 SSR 및 배포 자동화를 위해 NextJS + Heroku 조합으로 구현
* Github Actions를 통한 크롤링 스케쥴화 (disabled)

## Work List
- [x] 기술셋 픽스 및 환경 세팅
- [x] API 데이터 수급
- [x] 인덱스(순위 목록) 메뉴
- [x] 팀 메뉴
- [x] 스탯 메뉴
- [x] 일정 메뉴
- [x] 디자인
- [x] TDD
- [x] Lint

## API
[ESPN's hidden API Document](https://gist.github.com/akeaswaran/b48b02f1c94f873c6655e7129910fc3b) 참고 및 ESPN 웹사이트 탐색을 통해 관련 API Source 수급
* [Score Board](http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard?calendar=blacklist&dates=yyyymmdd)
* [Standings](http://site.api.espn.com/apis/v2/sports/soccer/eng.1/standings)
* [Statistics](http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/statistics)
* [Teams](http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/349)
* [Roster](http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/349/roster)
* [Player](http://www.espnfc.com/player/169532?xhr=1)

> API 데이터는 프로젝트 목적상 DB로 관리하기엔 오버스펙이므로 Puppeteer를 활용한 크롤러로 Static 관리

## Scripts
```bash
# 크롤링
npm run crawler

# Dev Server
npm run dev

# Build
npm run build

# Test
npm run test

# Production
npm start
```
> Github + Heroku 로 CI/CD 수행
