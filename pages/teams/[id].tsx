/* type */
import { NextPage } from 'next'
import { Team } from '../../components/teams/info'

import * as React from 'react'
import fetch from 'isomorphic-unfetch'
import { staticPath } from '../../utils/index'

import Layout from '../../components/Layout'
import PageTitle from '../../components/pageTitle'
import TeamsNav from '../../components/teams/nav'
import TeamsInfo from '../../components/teams/info'
import TeamsRoster from '../../components/teams/roster'

interface TeamsPage {
  teams: [],
  team: Team,
  roster: []
}

const Teams: NextPage<TeamsPage> = ({ teams, team, roster }) => {
  return (
    <Layout title="Teams | English Premier League">
      <PageTitle html={'Teams'} />
      <TeamsNav teams={ teams } />
      {team.id ?
        <>
          <TeamsInfo team={ team } />
          <TeamsRoster roster={ roster } />
        </> :
        <p className="empty">no data</p>
      }
    </Layout>
  )
}

Teams.getInitialProps = async (props) => {
  const teams = await (async () => {
    try {
      const result = await fetch(`${staticPath}/data/teams/teams.json`);
      const data = await result.json()

      return data.sports[0]?.leagues[0]?.teams || []
    } catch (e) {
      return []
    }
  })()

  const team = await (async () => {
    try {
      const result = await fetch(`${staticPath}/data/teams/${props.query.id}.json`);
      const data = await result.json()

      return data.team || {}
    } catch (e) {
      return {}
    }
  })()

  const roster = await (async () => {
    try {
      const result = await fetch(`${staticPath}/data/rosters/${props.query.id}.json`);
      const data = await result.json()

      return data.athletes || []
    } catch (e) {
      return []
    }
  })()

  return {
    teams,
    team,
    roster
  }
}

export default Teams;