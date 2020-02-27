/* type */
import { NextPage } from 'next'

import * as React from 'react'
import fetch from 'isomorphic-unfetch'
import { staticPath } from '../utils/index'
import dayjs from 'dayjs'

import Layout from '../components/Layout'
import PageTitle from '../components/pageTitle'
import FixturesNav from '../components/fixtures/nav'
import FixturesList from '../components/fixtures/list'

interface FixturesPage {
  date: string,
  fixtures: {}
}

const Fixtures: NextPage<FixturesPage> = ({ date, fixtures }) => {
  return (
    <Layout title="Fixtures | English Premier League">
      <PageTitle html={'Fixtures'} />
      <FixturesNav date={ date } />
      <FixturesList fixtures={ fixtures } />
    </Layout>
  )
}

Fixtures.getInitialProps = async ({ query }) => {
  const date = query.date as string || dayjs().format('YYYYMMDD')

  const fixtures = await (async () => {
    try {
      const result = await fetch(`${staticPath}/data/fixtures/${date}.json`);
      const data = await result.json()

      return data || {}
    } catch (e) {
      return {}
    }
  })()

  return { date, fixtures }
}

export default Fixtures;