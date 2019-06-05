import * as React from 'react';
import Link from 'next/link';
// import { shallowEqual, useSelector } from 'react-redux';
import { NextFunctionComponent } from 'next';
import { getStaticPath } from '../utils';

import Layout from '../components/Layout';

interface ITeams {
  data: any;
}

const Teams: NextFunctionComponent<ITeams> = ({ data }) => {
  // const count = useSelector((state) => state.count, shallowEqual);
  const teams: [] = data.sports[0].leagues[0].teams;
  console.log(teams)
  return (
    <Layout title="Home | EPL18">
      {teams.length &&
      <>
        <h2>Teams</h2>
        <div className="teams-list">
          <ul>
            {teams.map((v, index) => (
              <li key={index}>
                <Link href={`/teams/${v.team.id}`}>
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
    </Layout>
  );
};

Teams.getInitialProps = async (props) => {
  const res = await fetch(`${getStaticPath()}/data/teams/teams.json`);
  const json = await res.json();
  return { data : json };
};

export default Teams;
