import Link from 'next/link';
import { NextFunctionComponent } from 'next';
import fetch from 'isomorphic-unfetch';
import React from 'react';
// import { shallowEqual, useSelector } from 'react-redux';
import { getStaticPath } from '../utils';

import Layout from '../components/Layout';

interface ITeams {
  teams?: [];
  team?: any;
  roster?: [];
}

const Teams: NextFunctionComponent<ITeams> = ({ teams = [], team = {}, roster = [] }) => {
  // const count = useSelector((state) => state.count, shallowEqual);
  return (
    <Layout title="Home | EPL18">
      {teams.length ? renderTeams({ teams }) : ''}
      {team.id ? renderTeam({ team }) : ''}
      {roster.length ? renderRoster({ roster }) : ''}
    </Layout>
  );
};

Teams.getInitialProps = async (props: any) => {
  let result: ITeams = {
    teams: [],
    team: {},
    roster: [],
  };

  try {
    const res = await fetch(`${getStaticPath()}/data/teams/teams.json`);
    const json = await res.json();
    result = { ...result, teams: json.sports[0].leagues[0].teams };
  } catch (e) {}

  if (props.ctx.query.id) {
    try {
      const res = await fetch(`${getStaticPath()}/data/teams/${props.ctx.query.id}.json`);
      const json = await res.json();
      result = { ...result, team: json.team };
    } catch (e) {}

    try {
      const res = await fetch(`${getStaticPath()}/data/rosters/${props.ctx.query.id}.json`);
      const json = await res.json();
      result = { ...result, roster: json.athletes };
    } catch (e) {}
  }

  return result;
};

const renderTeams = ({ teams }) => (
  <>
    <h2>Teams</h2>
    <div className="teams">
      <ul>
        {renderTeamsList({ teams })}
      </ul>
    </div>
  </>
);

const renderTeamsList = ({ teams }) => (
  teams.map((v: any, index) => (
    <li key={index}>
      <Link scroll={false} href={`/teams?id=${v.team.id}`}>
        <a>
          <img src={v.team.logos[0].href} width="48" height="48" alt="" />
          {v.team.displayName}
        </a>
      </Link>
    </li>
  ))
);

const renderTeam = ({ team }) => (
  <>
    <div className="team">
      <div className="logo"><img src={team.logos[0].href} width="64" height="64" alt="" /></div>
      <h3>{team.displayName}<small className="nickname"> ({team.nickname})</small></h3>
      <div className="record">Record: {team.record.items[0].summary}</div>
      <div className="rank">Rank: {team.record.items[0].stats[8].value}</div>
    </div>
  </>
);

const renderRoster = ({ roster }) => (
  <>
    <table>
      <thead>
        <tr>
          <th scope="col" className="number">No.</th>
          <th scope="col" className="position">Position</th>
          <th scope="col" className="name">Name</th>
          <th scope="col" className="country">Country</th>
          <th scope="col" className="age">Age</th>
          <th scope="col" className="goals">Goals</th>
          <th scope="col" className="assists">Assists</th>
        </tr>
      </thead>
      <tbody>
        {renderRosterList({ roster })}
      </tbody>
    </table>
  </>
);

const renderRosterList = ({ roster }) => (
  roster.map((v: any, index) => {
    return (
      <tr key={index}>
        <td className="number">{v.jersey}</td>
        <td className="position">{v.position.abbreviation}</td>
        <td className="name">
          <Link href={`/player?id=${v.id}`}>
            <a>{v.fullName}</a>
          </Link>
        </td>
        <td scope="col" className="country">
          {v.flag ? <><img src={v.flag.href} width="32" height="32" alt="" /> {v.flag.alt}</> : '-'}
        </td>
        <td scope="col" className="age">{v.age}</td>
        <td scope="col" className="goals">
          {v.statistics ? v.statistics.splits.categories[1].stats[4].displayValue : '0'}
        </td>
        <td scope="col" className="assists">
          {v.statistics ? v.statistics.splits.categories[1].stats[0].displayValue : '0'}
        </td>
      </tr>
    );
  })
);

export default Teams;
