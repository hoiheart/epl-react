import * as React from 'react'
import Link from 'next/link'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

interface StandingsListComponent {
  standings: StandinsEntry[];
}

interface StandinsEntry {
  team? : {
    id?: string;
    displayName?: string;
    logos?: {
      href?: string;
    }[];
  };
  note?: {
    color?: string;
    description?: string;
    rank?: number;
  };
  stats?: {
    displayValue?: string;
  }[];
}

const StandingsList: React.FunctionComponent<StandingsListComponent> = ({ standings }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell scope='col' className='rank'>Rank</TableCell>
            <TableCell scope='col' className='name'>Team</TableCell>
            <TableCell scope='col' className='gp'>GP</TableCell>
            <TableCell scope='col' className='win'>W</TableCell>
            <TableCell scope='col' className='draw'>D</TableCell>
            <TableCell scope='col' className='lose'>L</TableCell>
            <TableCell scope='col' className='point'>P</TableCell>
            <TableCell scope='col' className='gf'>GF</TableCell>
            <TableCell scope='col' className='ga'>GA</TableCell>
            <TableCell scope='col' className='gd'>GD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderStandingsList({ standings })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const renderStandingsList = ({ standings }) => (
  standings.map((entry: StandinsEntry, index) => (
    <TableRow key={index} style={{ backgroundColor: entry.note?.color }}>
      <TableCell className='rank'>{entry.stats[8]?.displayValue}</TableCell>
      <TableCell className='name'>
        <Link href='/teams/[id]' as={`/teams/${entry.team?.id}`}>
          <a>
            <img src={entry.team?.logos[0]?.href} width='32' height='32' alt='' />
            {entry.team?.displayName}
          </a>
        </Link>
      </TableCell>
      <TableCell className='gp'>{entry.stats[3]?.displayValue}</TableCell>
      <TableCell className='win'>{entry.stats[0]?.displayValue}</TableCell>
      <TableCell className='draw'>{entry.stats[2]?.displayValue}</TableCell>
      <TableCell className='lose'>{entry.stats[1]?.displayValue}</TableCell>
      <TableCell className='point'>{entry.stats[6]?.displayValue}</TableCell>
      <TableCell className='gf'>{entry.stats[4]?.displayValue}</TableCell>
      <TableCell className='ga'>{entry.stats[5]?.displayValue}</TableCell>
      <TableCell className='gd'>{entry.stats[8]?.displayValue}</TableCell>
    </TableRow>
  ))
)

export default StandingsList
