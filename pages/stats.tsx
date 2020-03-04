/* type */
import { NextPage } from 'next'

import * as React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import { staticPath } from '../utils/index'

import PageTitle from '../components/pageTitle'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

interface StatsPage {
  stats: Stat[];
}

interface Stat {
  displayName?: string;
  leaders?: Player[];
}

interface Player {
  athlete?: {
    displayName: string;
    team?: {
      displayName?: string;
    };
  };
  value?: number;
}

const Stats: NextPage<StatsPage> = ({ stats }) => {
  return (
    <>
      <Head>
        <title>Stats | English Premier League</title>
        <meta property='og:title' content='Fixtures | English Premier League' />
      </Head>
      <PageTitle html='Stats' />
      <div className='stats'>
        {stats.length
          ? renderStats({ stats })
          : <p className='empty'>no data</p>}
      </div>
    </>
  )
}

Stats.getInitialProps = async () => {
  const stats = await (async () => {
    try {
      const result = await fetch(`${staticPath}/data/statistics/statistics.json`)
      const data = await result.json()

      return data.stats || []
    } catch (e) {
      return []
    }
  })()

  return { stats }
}

const renderStats = ({ stats }) => (
  stats.map((stat: Stat) => renderStatDivision({ stat }))
)

const renderStatDivision = ({ stat }) => (
  <div key={stat.displayName} className='stat'>
    <Typography variant='h6' component='h3' gutterBottom>{stat.displayName}</Typography>
    {stat.leaders?.length
      ? renderStatTable({ stat })
      : <p className='empty'>no data</p>}
  </div>
)

const renderStatTable = ({ stat }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell scope='col' className='name'>Name</TableCell>
          <TableCell scope='col' className='team'>Team</TableCell>
          <TableCell scope='col' className='value'>{stat.displayName}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {renderStatList({ stat })}
      </TableBody>
    </Table>
  </TableContainer>
)

const renderStatList = ({ stat }) => (
  stat.leaders.map((player: Player, index) => (
    <TableRow key={`${stat.displayName}${index}`}>
      <TableCell className='name'>{player.athlete.displayName}</TableCell>
      <TableCell className='team'>{player.athlete.team.displayName}</TableCell>
      <TableCell className='value'>{player.value}</TableCell>
    </TableRow>
  ))
)

export default Stats
