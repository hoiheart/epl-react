import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

interface IProps {
  id: string;
}

const ModalPlayer = dynamic(() => import('../components/ModalPlayer'), { ssr: false });

const Player: NextPage<IProps> = ({ id = '' }) => {
  return (
    <Layout title="Player | English Premier League">
      <ModalPlayer id={ id } />
    </Layout>
  )
}

Player.getInitialProps = async (props: any) => {
  return {
    id: props.query.id || '',
  };
};

export default Player;