import * as React from 'react'
import Link from 'next/link'

interface TeamsNavComponent {
  teams: TeamEntry[]
}

interface TeamEntry {
  team: {
    id: string,
    displayName: string,
    logos?: {
      href?: string,
    }[]
  }
}

const TeamsNav: React.FunctionComponent<TeamsNavComponent> = ({ teams }) => {
  return (
    <>
      <h2>Teams</h2>
      <div className="teams">
        <ul>
          {renderTeamsList({ teams })}
        </ul>
      </div>
    </>
  )
}

const renderTeamsList = ({ teams }) => (
  teams.map((entry: TeamEntry, index) => (
    <li key={index}>
      <Link scroll={false} href={`/teams/[id]`} as={`/teams/${entry.team.id}`}>
        <a>
          <img src={entry.team.logos[0].href} width="48" height="48" alt="" />
          {entry.team.displayName}
        </a>
      </Link>
    </li>
  ))
)

export default TeamsNav