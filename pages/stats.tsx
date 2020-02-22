import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import fetch from 'isomorphic-unfetch'
import { getStaticPath } from '../utils/index'

interface IProps {
  stats: [];
}

const Stats: NextPage<IProps> = ({ stats }) => {
  return (
    <Layout title="Stats | English Premier League">
      {stats.length ? renderStats({ stats }) : ''}
    </Layout>
  )
}

Stats.getInitialProps = async () => {
  try {
    const res = await fetch(`${getStaticPath()}/data/statistics/statistics.json`);
    const json = await res.json();
    return { stats: json.stats || [] };
  } catch(e) {
    return { stats: [] };
  }
}

const renderStats = ({ stats }) => (
  <>
    <h2>Stats</h2>
    <div className="stats">
      {stats.map((v: any) => renderStatsDivision({ data: v }))}
    </div>
  </>
)

const renderStatsDivision = ({ data }) => (
  <div key={data.displayName}>
    <h3>{data.displayName}</h3>
    {data.leaders.length ? renderStatsTable({ data }) : ''}
  </div>
)

const renderStatsTable = ({ data }) => (
  <table>
    <thead>
      <tr>
        <th scope="col" className="name">Name</th>
        <th scope="col" className="team">Team</th>
        <th scope="col" className="value">{data.displayName}</th>
      </tr>
    </thead>
    <tbody>
      {renderStatsList({ data })}
    </tbody>
  </table>
)

const renderStatsList = ({ data }) => (
  data.leaders.map((v: any, index) => (
    <tr key={`${data.displayName}${index}`}>
      <td className="name">{v.athlete.displayName}</td>
      <td className="team">{v.athlete.team.displayName}</td>
      <td className="value">{v.value}</td>
    </tr>
  ))
)

export default Stats;