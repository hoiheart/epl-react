import * as React from 'react'

interface IProps {
  team: {
    logos: [{
      href: string
    }],
    displayName: string,
    nickname: string,
    record: {
      items: [{
        summary: string,
        stats: any
      }]
    }
  }
}

const TeamInfo: React.FunctionComponent<IProps> = ({ team }) => {
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