/* type */
import { NextPage } from 'next'

import * as React from 'react'
import fetch from 'isomorphic-unfetch'
import { staticPath } from '../utils/index'

import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import StandingsList from '../components/standings/list'

interface IndexPage {
  standings: []
}

const Index: NextPage<IndexPage> = ({ standings }) => {
  return (
    <Layout title='Home | English Premier League'>
      <PageTitle html={'Standings'} />
      <div className='standings'>
        {standings.length ?
          <StandingsList standings={standings} /> :
          <p className="empty">no data</p>
        }
      </div>
    </Layout>
  )
}

Index.getInitialProps = async () => {
  const standings = await (async () => {
    try {
      const result = await fetch(`${staticPath}/data/standings/standings.json`)
      const data = await result.json()

      return data.children[0]?.standings?.entries || []
    } catch (e) {
      return []
    }
  })()

  return { standings }
}

export default Index
