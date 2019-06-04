import * as React from 'react';
import { connect } from 'react-redux';

import Layout from '../components/Layout';

const Index: React.FunctionComponent = () => {
  return (
    <Layout title="Home | EPL18">
      <h1>Home</h1>
    </Layout>
  );
};

// Index.getInitialProps = async ({ Component, ctx }) => {
//   let initialProps = {};

//   if (Component.getInitialProps) {
//     initialProps = await Component.getInitialProps({ ctx });
//   }

//   return { ...initialProps };
// }

export default connect()(Index);
