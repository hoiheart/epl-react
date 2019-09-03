import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { NextPage } from 'next'
import fetch from 'isomorphic-unfetch'
import { getStaticPath } from '../utils/index'

interface IProps {
  id: string;
}

interface IPlayer {
  content?: {
    html: string
  }
}

const ModalPlayer: NextPage<IProps> = ({ id = '' }) => {
  const [ data, setData ] = useState<IPlayer>({});

  async function fetchData() {
    const res = await fetch(`${getStaticPath()}/data/players/${id}.json`),
          json = await res.json();
    setData(json);
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  if (data.content) {
    const html = {__html: data.content.html};

    return ReactDOM.createPortal(
      <div id="modal-player" dangerouslySetInnerHTML={html} />, document.querySelector('body'),
    );
  } else {
    return ReactDOM.createPortal(
      <div id="modal-player">선수 데이터가 없습니다.</div>, document.querySelector('body'),
    );
  }
}

export default ModalPlayer