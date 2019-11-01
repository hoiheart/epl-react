import * as React from 'react'
import Link from 'next/link'

interface IProps {
  teams: []
}

const TeamsNav: React.FunctionComponent<IProps> = ({ teams }) => {
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
  teams.map((v: any, index) => (
    <li key={index}>
      <Link scroll={false} href={`/teams/[id]`} as={`/teams/${v.team.id}`}>
        <a>
          <img src={v.team.logos[0].href} width="48" height="48" alt="" />
          {v.team.displayName}
        </a>
      </Link>
    </li>
  ))
)

export default TeamsNav