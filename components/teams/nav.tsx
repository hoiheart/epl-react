import * as React from 'react'
import Link from 'next/link'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
    <div className="teams-nav">
      <Grid container>
        {renderTeamsList({ teams })}
      </Grid>
    </div>
  )
}

const renderTeamsList = ({ teams }) => (
  teams.map((entry: TeamEntry, index) => (
    <Grid key={index} item>
      <Link scroll={false} href={`/teams/[id]`} as={`/teams/${entry.team.id}`}>
        <a>
          <img src={entry.team.logos[0].href} width="24" height="24" alt="" />
          {entry.team.displayName}
        </a>
      </Link>
    </Grid>
  ))
)

export default TeamsNav