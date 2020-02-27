import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Grid from '@material-ui/core/Grid'

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

const renderTeamsList = ({ teams }) => {
  const router = useRouter()

  const matchActive = (id, index): boolean => {
    const query = router.query.id
    return query === id || (!query && index === 0)
  }

  return (
    teams.map((entry: TeamEntry, index: number) => (
      <Grid key={index} item>
        <Link scroll={false} href={`/teams/[id]`} as={`/teams/${entry.team.id}`}>
          <a className={ matchActive(entry.team.id, index) ? 'active' : '' }>
            <img src={entry.team.logos[0].href} width="32" height="32" alt="" />
            {entry.team.displayName}
          </a>
        </Link>
      </Grid>
    ))
  )
}

export default TeamsNav