import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { staticPath } from '../utils/index'

import Navigation from './navigation'

import '../scss/style.scss'

const Layout: React.FunctionComponent = ({ children }) => (
  <>
    <Head>
      <title>English Premier League</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="robots" content="index,follow" />
      <meta property="og:title" content="English Premier League" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </Head>
    <header>
      <h1><Link href='/'><a><img src={`${staticPath}/logo.svg`} alt="English Premier League" /></a></Link></h1>
    </header>
    <Navigation />
    <main>
      {children}
    </main>
  </>
)

export default Layout
