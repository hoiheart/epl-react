import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';

interface ILayout {
  title: string;
}

const Layout: React.FunctionComponent<ILayout> = ({ children, title = 'English Premier League 2018' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name="robots" content="index,follow" />
      <meta property="og:title" content={title} />
    </Head>
    <header>
      <h1>English Premier League 2018</h1>
      <nav>
        <Link href='/'><a>Home</a></Link>
        <Link href='/teams'><a>Teams</a></Link>
        <Link href='/fixtures'><a>Fixtures</a></Link>
        <Link href='/stats'><a>Stats</a></Link>
      </nav>
    </header>
    <main>
      {children}
    </main>
  </>
);

export default Layout;
