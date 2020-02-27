import * as React from 'react'
import Link from 'next/link'

interface FixturesListComponent {
  fixtures: {
    events?: Fixture[]
  }
}

interface Fixture {
  
}

const FixturesList: React.FunctionComponent<FixturesListComponent> = ({ fixtures }) => {
  return (
    <div className="fixtures-list">
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
    {renderAwayTeam({ info: fixture.competitions[0].competitors[1]})}
  </li>
)

const renderHomeTeam = ({ info }) => (
  <span className="team home">
    <span className="name"><Link href={`/teams/[id]`} as={`/teams/${info.team.id}`}><a>{info.team.name}</a></Link></span>
    <span className="score">{info.score}</span>
  </span>
)

const renderAwayTeam = ({ info }) => (
  <span className="team away">
    <span className="score">{info.score}</span>
    <span className="name"><Link href={`/teams/[id]`} as={`/teams/${info.team.id}`}><a>{info.team.name}</a></Link></span>
  </span>
)

export default FixturesList