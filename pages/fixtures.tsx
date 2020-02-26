import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import fetch from 'isomorphic-unfetch'
import { getStaticPath } from '../utils/index'
import dayjs from 'dayjs'

interface IProps {
  date: string | {},
  fixtures: {
    events: []
  };
}

const Fixtures: NextPage<IProps> = ({ date, fixtures }) => {
  return (
    <Layout title="Fixtures | English Premier League">
      {renderFixtures({ date, fixtures })}
    </Layout>
  )
}

Fixtures.getInitialProps = async ({ query }) => {
  const date = query.date || dayjs().format('YYYYMMDD')
  try {
    const res = await fetch(`${getStaticPath()}/data/fixtures/${date}.json`);
    const json = await res.json();
    return { date, fixtures: json || {} };
  } catch(e) {
    return { date, fixtures: {} };
  }
}

const renderFixtures = ({ date, fixtures }) => (
  <>
    <h2>Fixtures</h2>
    {renderDates({ date })}
    <div className="fixtures">
      {fixtures.events ?
        fixtures.events.map((v: any) => renderFixturesDivision({ data: v })) :
        'no matches'
      }
    </div>
  </>
)

const renderDates = ({ date }) => {
  const yesterday = dayjs(date).add(-1, 'day').format('YYYYMMDD')
  const tomorrow = dayjs(date).add(1, 'day').format('YYYYMMDD')
  
  return (
    <div className="dates">
      <Link href={`/fixtures?date=${yesterday}`}><a>&lt;</a></Link>
      {date}
      <Link href={`/fixtures?date=${tomorrow}`}><a>&gt;</a></Link>
    </div>
  )
}

const renderFixturesDivision = ({ data }) => (
  <div key={data.id}>
    {renderHomeTeam({ data: data.competitions[0].competitors[0]})}
    vs
    {renderAwayTeam({ data: data.competitions[0].competitors[1]})}
  </div>
)

const renderHomeTeam = ({ data }) => (
  <span className="team home">
    <span className="name">{data.team.name}</span>
    <span className="score">{data.score}</span>
  </span>
)

const renderAwayTeam = ({ data }) => (
  <span className="team away">
    <span className="score">{data.score}</span>
    <span className="name">{data.team.name}</span>
  </span>
)

export default Fixtures;