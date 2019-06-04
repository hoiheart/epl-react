import * as React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import Layout from '../components/Layout';

const Index = ({ data }) => {
  const count = useSelector((state) => state.count, shallowEqual);

  console.log(data);

  return (
    <Layout title="Home | EPL18">
      <h1>Home{count}</h1>
    </Layout>
  );
};

Index.getInitialProps = async (props) => {
  const res = await fetch('http://localhost:5000/static/data/teams/331.json');
  const json = await res.json();
  return { data : json };
};

export default Index;
