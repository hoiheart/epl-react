import * as React from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

interface RosterComponent {
  roster: Player[]
}

interface Player {
  fullName?: string,
  age?: number,
  position?: {
    abbreviation?: string
  },
  statistics?: {
    splits?: {
      categories?: {
        stats?: {
          displayValue?: string
        }[]
      }[]
    }
  },
  flag?: {
    href?: string,
    alt?: string
  },
  jersey?: string,
}

const TeamsRoster: React.FunctionComponent<RosterComponent> = ({ roster }) => {
  return (
    <div className="teams-roster">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell scope="col" className="number">No.</TableCell>
              <TableCell scope="col" className="position">Position</TableCell>
              <TableCell scope="col" className="name">Name</TableCell>
              <TableCell scope="col" className="country">Country</TableCell>
              <TableCell scope="col" className="age">Age</TableCell>
              <TableCell scope="col" className="goals">Goals</TableCell>
              <TableCell scope="col" className="assists">Assists</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderRosterList({ roster })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

const renderRosterList = ({ roster }) => (
  roster.map((player: Player, index) => {
    return (
      <TableRow key={index}>
        <TableCell className="number">{player.jersey}</TableCell>
        <TableCell className="position">{player.position.abbreviation}</TableCell>
        <TableCell className="name">{player.fullName}</TableCell>
        <TableCell scope="col" className="country">
          {player.flag ? <><img src={player.flag.href} width="32" height="32" alt="" /> {player.flag.alt}</> : '-'}
        </TableCell>
        <TableCell scope="col" className="age">{player.age}</TableCell>
        <TableCell scope="col" className="goals">
          {player.statistics?.splits?.categories[1]?.stats[4]?.displayValue || '0'}
        </TableCell>
        <TableCell scope="col" className="assists">
          {player.statistics?.splits?.categories[1]?.stats[0]?.displayValue || '0'}
        </TableCell>
      </TableRow>
    );
  })
)

export default TeamsRoster