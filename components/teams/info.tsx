import * as React from 'react'

interface TeamComponent {
  team: Team
}

interface Team {
  id?: string
  displayName?: string,
  nickname?: string,
  record?: {
    items?: {
      stats?: {
        value: number
      }[],
      summary?: string
    }[],
  }
  logos?: {
    href?: string
  }[]
}

const TeamInfo: React.FunctionComponent<TeamComponent> = ({ team }) => {
  return (
    <>
      <div className="team">
        <div className="logo"><img src={team.logos[0].href} width="64" height="64" alt="" /></div>
        <h3>{team.displayName}<small className="nickname"> ({team.nickname})</small></h3>
        <div className="record">Record: {team.record.items[0].summary}</div>
        <div className="rank">Rank: {team.record.items[0].stats[8].value}</div>
      </div>
    </>
  )
}

export default TeamInfo

export { Team }