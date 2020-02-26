import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import '../scss/style.scss'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'English Premier League',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="robots" content="index,follow" />
      <meta property="og:title" content={title} />
    </Head>
    <header>
      <h1>English Premier League</h1>
      <nav>
        <Link href='/'><a>Home</a></Link>
        <Link href='/teams'><a>Teams</a></Link>
        <Link href='/fixtures'><a>Fixtures</a></Link>
        <Link href='/stats'><a>Stats</a></Link>
      </nav>
    </header>
    {children}
  </div>
)

export default Layout