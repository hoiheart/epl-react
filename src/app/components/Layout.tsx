import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';

interface ILayout {
  title?: string;
}

const Layout: React.FunctionComponent<ILayout> = ({ children, title = 'EPL18' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name="robots" content="index,follow" />
      <meta property="og:title" content={title} />
    </Head>
    <header>
      <nav>
        <Link href='/'><a>Home</a></Link>
        <Link href='/team'><a>Team</a></Link>
      </nav>
    </header>
    {children}
  </>
);

export default Layout;
