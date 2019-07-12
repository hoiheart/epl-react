import { NextFunctionComponent } from 'next';
import React from 'react';
import dynamic from 'next/dynamic';

import Layout from '../components/Layout';

const ModalPlayer = dynamic(() => import('../components/ModalPlayer'), { ssr: false });

const Player: NextFunctionComponent = ({ id = '' }) => {
  return (
    <Layout title="Player | EPL18">
      <ModalPlayer id={ id } />
    </Layout>
  );
}

Player.getInitialProps = (props: any) => {
  return {
    id: props.ctx.query.id || '',
  };
};

export default Player;
