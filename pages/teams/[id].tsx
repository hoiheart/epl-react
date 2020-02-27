import * as React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { NextPage } from 'next'
import fetch from 'isomorphic-unfetch'
import { staticPath } from '../../utils/index'
import TeamNav from '../../components/teams/nav'
import TeamInfo from '../../components/teams/info'
import TeamRoster from '../../components/teams/roster'

interface IProps {
  teams: [];
  team: any;
  roster: [];
}

const Teams: NextPage<IProps> = ({ teams = [], team = {}, roster = [] }) => {
  return (
    <Layout title="Teams | English Premier League">
      {teams.length ? <TeamNav teams={ teams } /> : ''}
      {team.id ? <TeamInfo team={ team } /> : ''}
      {roster.length ? <TeamRoster roster={ roster } /> : ''}
    </Layout>
  )
}

Teams.getInitialProps = async (props: any) => {
  const resTeams = await fetch(`${staticPath}/data/teams/teams.json`);
  const jsonTeams = await resTeams.json();
  const resTeam = await fetch(`${staticPath}/data/teams/${props.query.id}.json`);
  const jsonTeam = await resTeam.json();
  const resRoster = await fetch(`${staticPath}/data/rosters/${props.query.id}.json`);
  const jsonRoster = await resRoster.json();
  const result: {
    teams: [],
    team: {},
    roster: []
  } = {
    teams: jsonTeams.sports[0].leagues[0].teams,
    team: jsonTeam.team,
    roster: jsonRoster.athletes
  };

  return result;
}

export default Teams;