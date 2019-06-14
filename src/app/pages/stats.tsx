import Link from 'next/link';
import { NextFunctionComponent } from 'next';
import fetch from 'isomorphic-unfetch';
import React from 'react';
// import { shallowEqual, useSelector } from 'react-redux';
import { getStaticPath } from '../utils';

import Layout from '../components/Layout';

interface IStats {
  stats?: [];
}

const Stats: NextFunctionComponent<IStats> = ({ stats = [] }) => {
  // const count = useSelector((state) => state.count, shallowEqual);
  return (
    <Layout title="Stats | EPL18">
      {stats.length ? renderStats({ stats }) : ''}
    </Layout>
  );
};

Stats.getInitialProps = async () => {
  let result: IStats = {
    stats: [],
  };

  try {
    const res = await fetch(`${getStaticPath()}/data/stats/stats.json`);
    const json = await res.json();
    result = { ...result, stats: json.stats };
  } catch (e) {}

  return result;
};

const renderStats = ({ stats }) => (
  <>
    <h2>Stats</h2>
    <div className="stats">
      {stats.map((v: any) => renderStatsDivision({ data: v }))}
    </div>
  </>
);

const renderStatsDivision = ({ data }) => (
  <div key={data.displayName}>
    <h3>{data.displayName}</h3>
    {data.leaders.length ? renderStatsTable({ data }) : ''}
  </div>
);

const renderStatsTable = ({ data }) => (
  <table>
    <thead>
      <tr>
        <th scope="col" className="name">Name</th>
        <th scope="col" className="team">Team</th>
        <th scope="col" className="value">{data.displayName}</th>
      </tr>
    </thead>
    <tbody>
      {renderStatsList({ data })}
    </tbody>
  </table>
);

const renderStatsList = ({ data }) => (
  data.leaders.map((v: any, index) => (
    <tr key={`${data.displayName}${index}`}>
      <td className="name"><Link href={`/player?id=${v.athlete.id}`}><a>{v.athlete.displayName}</a></Link></td>
      <td className="team">{v.athlete.team.displayName}</td>
      <td className="value">{v.value}</td>
    </tr>
  ))
);

export default Stats;
