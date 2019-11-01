import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import fetch from 'isomorphic-unfetch'
import { getStaticPath } from '../utils/index'
import StandingsList from '../components/standings/list'

interface IProps {
  standings: [];
}

const Index: NextPage<IProps> = ({ standings = [] }) => {
  return (
    <Layout title="Home | English Premier League">
      <h2>Standings</h2>
      <div className="standings">
        {standings.length ? <StandingsList standings={ standings } /> : ''}
      </div>
    </Layout>
  )
}

Index.getInitialProps = async () => {
  try {
    const res = await fetch(`${getStaticPath()}/data/standings/standings.json`);
    const json = await res.json();
    return { standings: json.children[0].standings.entries || [] };
  } catch (e) {
    return { standings: [] }
  }
}

export default Index;