import * as React from 'react'

interface FixturesListComponent {
  fixtures: {
    events?: Fixture[]
  }
}

interface Fixture {
  
}

const FixturesList: React.FunctionComponent<FixturesListComponent> = ({ fixtures }) => {
  return (
    <div className="fixturesList">
      {fixtures.events ?
        <ul>{fixtures.events.map((fixture) => renderFixturesList({ fixture }))}</ul> :
        <p className="empty">no matches</p>
      }
    </div>
  )
}

const renderFixturesList = ({ fixture }) => (
  <li key={fixture.id}>
    {renderHomeTeam({ info: fixture.competitions[0].competitors[0]})}
    vs
    {renderAwayTeam({ info: fixture.competitions[0].competitors[1]})}
  </li>
)

const renderHomeTeam = ({ info }) => (
  <span className="team home">
    <span className="name">{info.team.name}</span>
    <span className="score">{info.score}</span>
  </span>
)

const renderAwayTeam = ({ info }) => (
  <span className="team away">
    <span className="score">{info.score}</span>
    <span className="name">{info.team.name}</span>
  </span>
)

export default FixturesList