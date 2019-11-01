import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import fetch from 'isomorphic-unfetch'
import { getStaticPath } from '../utils/index'
import TeamNav from '../components/teams/nav'

interface IProps {
  teams: [];
}

const Teams: NextPage<IProps> = ({ teams = [] }) => {
  return (
    <Layout title="Teams | English Premier League">
      {teams.length ? <TeamNav teams={ teams } /> : ''}
    </Layout>
  )
}

Teams.getInitialProps = async (props: any) => {
  const res = await fetch(`${getStaticPath()}/data/teams/teams.json`);
  const json = await res.json();
  const result: { teams: [] } = { teams: json.sports[0].leagues[0].teams || [] };

  return result;
}

export default Teams;