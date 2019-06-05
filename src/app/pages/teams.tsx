import React from 'react';
import Link from 'next/link';
// import { shallowEqual, useSelector } from 'react-redux';
import { NextFunctionComponent } from 'next';
import { getStaticPath } from '../utils';

import Layout from '../components/Layout';

interface ITeams {
  teams?: any;
  detail?: any;
  roster?: any;
}

const Teams: NextFunctionComponent<ITeams> = ({ teams, team, roster }) => {
  // const count = useSelector((state) => state.count, shallowEqual);
  const list: [] = teams.sports[0].leagues[0].teams;
  const detail: {} | undefined = team ? team.team : undefined;
  console.log(roster)
  return (
    <Layout title="Home | EPL18">
      {list.length &&
      <>
        <h2>Teams</h2>
        <div className="teams">
          <ul>
            {list.map((v, index) => (
              <li key={index}>
                <Link scroll={false} href={`/teams?id=${v.team.id}`}>
                  <a>
                    <img src={v.team.logos[0].href} width="48" height="48" alt="" />
                    {v.team.displayName}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
      }
      {team &&
      <>
        <div className="team">
          <div className="logo"><img src={detail.logos[0].href} width="64" height="64" alt="" /></div>
          <h3>{detail.displayName}</h3>
          <div className="nickname">{detail.nickname}</div>
          <div className="record">Record: {detail.record.items[0].summary}</div>
        </div>
      </>
      }
    </Layout>
  );
};

Teams.getInitialProps = async (props) => {
  let res = {};

  try {
    const resTeams = await fetch(`${getStaticPath()}/data/teams/teams.json`);
    const jsonTeams = await resTeams.json();
    res = { ...res, teams: jsonTeams };
  } catch(e) {}

  try {
    if (props.ctx.query.id) {
      const resTeam = await fetch(`${getStaticPath()}/data/teams/${props.ctx.query.id}.json`);
      const jsonTeam = await resTeam.json();
      const resRoster = await fetch(`${getStaticPath()}/data/rosters/${props.ctx.query.id}.json`);
      const jsonRoster = await resRoster.json();
      res = { ...res, team: jsonTeam, roster: jsonRoster };
    }
  } catch(e) {}

  return res;
};

export default Teams;
