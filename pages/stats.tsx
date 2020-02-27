/* type */
import { NextPage } from 'next'

import * as React from 'react'
import fetch from 'isomorphic-unfetch'
import { staticPath } from '../utils/index'

import Layout from '../components/Layout'

interface StatsPage {
  stats: Stat[]
}

interface Stat {
  displayName?: string,
  leaders?: Player[]
}

interface Player {
  athlete?: {
    displayName: string,
    team?: {
      displayName?: string
    }
  },
  value?: number
}

const Stats: NextPage<StatsPage> = ({ stats }) => {
  return (
    <Layout title="Stats | English Premier League">
      {stats.length ? renderStats({ stats }) : ''}
    </Layout>
  )
}

Stats.getInitialProps = async () => {
  const stats = await (async () => {
    try {
      const result = await fetch(`${staticPath}/data/statistics/statistics.json`);
      const data = await result.json()

      return data.stats || []
    } catch (e) {
      return []
    }
  })()

  return { stats }
}

const renderStats = ({ stats }) => (
  <>
    <h2>Stats</h2>
    <div className="stats">
      {stats.map((stat: Stat) => renderStatsDivision({ stat }))}
    </div>
  </>
)

const renderStatsDivision = ({ stat }) => (
  <div key={stat.displayName}>
    <h3>{stat.displayName}</h3>
    {stat.leaders.length ? renderStatsTable({ stat }) : ''}
  </div>
)

const renderStatsTable = ({ stat }) => (
  <table>
    <thead>
      <tr>
        <th scope="col" className="name">Name</th>
        <th scope="col" className="team">Team</th>
        <th scope="col" className="value">{stat.displayName}</th>
      </tr>
    </thead>
    <tbody>
      {renderStatsList({ stat })}
    </tbody>
  </table>
)

const renderStatsList = ({ stat }) => (
  stat.leaders.map((player: Player, index) => (
    <tr key={`${stat.displayName}${index}`}>
      <td className="name">{player.athlete.displayName}</td>
      <td className="team">{player.athlete.team.displayName}</td>
      <td className="value">{player.value}</td>
    </tr>
  ))
)

export default Stats;