import Link from 'next/link';
import { NextFunctionComponent } from 'next';
import fetch from 'isomorphic-unfetch';
import React from 'react';
// import { shallowEqual, useSelector } from 'react-redux';
import { getStaticPath } from '../utils';

import Layout from '../components/Layout';

interface IIndex {
  standings?: [];
}

const Index: NextFunctionComponent<IIndex> = ({ standings = [] }) => {
  // const count = useSelector((state) => state.count, shallowEqual);
  const renderStandings = () => (
    <>
      <h2>Standings</h2>
      <div className="standings">
        <table>
          <thead>
            <tr>
              <th scope="col" className="rank">Rank</th>
              <th scope="col" className="name">Team</th>
              <th scope="col" className="gp">GP</th>
              <th scope="col" className="win">W</th>
              <th scope="col" className="draw">D</th>
              <th scope="col" className="lose">L</th>
              <th scope="col" className="point">P</th>
              <th scope="col" className="gf">GF</th>
              <th scope="col" className="ga">GA</th>
              <th scope="col" className="gd">GD</th>
            </tr>
          </thead>
          <tbody>
            {renderStandingsList()}
          </tbody>
        </table>
      </div>
    </>
  );

  const renderStandingsList = () => (
    standings.map((v: any, index) => (
    <tr key={index} style={{backgroundColor: v.note ? v.note.color : false}}>
      <td className="rank">{v.stats[7].displayValue}</td>
      <td className="name">
        <Link href={`/teams?id=${v.team.id}`}>
          <a>
            <img src={v.team.logos[0].href} width="48" height="48" alt="" />
            {v.team.displayName}
          </a>
        </Link>
      </td>
      <td className="gp">{v.stats[3].displayValue}</td>
      <td className="win">{v.stats[0].displayValue}</td>
      <td className="draw">{v.stats[2].displayValue}</td>
      <td className="lose">{v.stats[1].displayValue}</td>
      <td className="point">{v.stats[6].displayValue}</td>
      <td className="gf">{v.stats[4].displayValue}</td>
      <td className="ga">{v.stats[5].displayValue}</td>
      <td className="gd">{v.stats[8].displayValue}</td>
    </tr>
    ))
  );

  return (
    <Layout title="Home | English Premier League 2018">
      {standings.length ? renderStandings() : ''}
    </Layout>
  );
};

Index.getInitialProps = async () => {
  let result: IIndex = {
    standings: [],
  };

  try {
    const res = await fetch(`${getStaticPath()}/data/standings/standings.json`);
    const json = await res.json();
    result = { ...res, standings: json.children[0].standings.entries };
  } catch (e) {}

  return result;
};

export default Index;
