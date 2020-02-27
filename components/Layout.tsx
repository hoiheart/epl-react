import * as React from 'react'
import Head from 'next/head'

import { staticPath } from '../utils/index'

import Navigation from './navigation'

import '../scss/style.scss'

interface LayoutComponent {
  title: string
}

const Layout: React.FunctionComponent<LayoutComponent> = ({ children, title = 'English Premier League' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="robots" content="index,follow" />
      <meta property="og:title" content={title} />
    </Head>
    <header>
      <h1><img src={`${staticPath}/logo.svg`} alt="English Premier League" /></h1>
      <Navigation />
    </header>
    {children}
  </>
)

export default Layout
