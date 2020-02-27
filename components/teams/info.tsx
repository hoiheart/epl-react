import * as React from 'react'

import Typography from '@material-ui/core/Typography'

interface TeamComponent {
  team: Team
}

interface Team {
  id?: string
  displayName?: string,
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

const TeamsInfo: React.FunctionComponent<TeamComponent> = ({ team }) => {
  return (
    <div className="teams-info">
      <div className="logo"><img src={team.logos[0].href} width="64" height="64" alt="" /></div>
      <Typography variant="h6" component={'h3'} gutterBottom>{ team.displayName }</Typography>
      <div className="rank">Rank: {team.record.items[0].stats[8].value}</div>
      <div className="record">Record: {team.record.items[0].summary}</div>
    </div>
  )
}

export default TeamsInfo

export { Team }