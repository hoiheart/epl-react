import * as React from 'react'
import Link from 'next/link'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

interface FixturesListComponent {
  fixtures: {
    events?: Fixture[];
  };
}

interface Fixture {
  id: string;
  competitions: {
    competitors: {
      team: {
        id: string;
        name: string;
      };
      score: string;
    }[];
  }[];
}

const FixturesList: React.FunctionComponent<FixturesListComponent> = ({ fixtures }) => {
  return (
    <div className='fixtures-list'>\
      {fixtures.events ? renderFixturesList({ fixtures }) : <p className='empty'>no matches</p>}
    </div>
  )
}

const renderFixturesList = ({ fixtures }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableBody>
        {fixtures.events.map((fixture: Fixture) => (
          <TableRow key={fixture.id}>
            <TableCell>
              <div className='match'>
                {renderHomeTeam({ info: fixture.competitions[0].competitors[0] })}
                {renderAwayTeam({ info: fixture.competitions[0].competitors[1] })}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>)

const renderHomeTeam = ({ info }) => (
  <span className='team home'>
    <span className='name'><Link href='/teams/[id]' as={`/teams/${info.team.id}`}><a>{info.team.name}</a></Link></span>
    <span className='score'>{info.score}</span>
  </span>
)

const renderAwayTeam = ({ info }) => (
  <span className='team away'>
    <span className='score'>{info.score}</span>
    <span className='name'><Link href='/teams/[id]' as={`/teams/${info.team.id}`}><a>{info.team.name}</a></Link></span>
  </span>
)

export default FixturesList

export { Fixture }
