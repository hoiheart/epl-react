import Link from 'next/link';

export default ({ pathname }: { pathname?: any }) => (
  <header>
    <ul>
      <li>
        <Link href='/'>
          <a className={pathname === '/' ? 'active' : ''}>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/team'>
          <a className={pathname === '/team' ? 'active' : ''}>Team</a>
        </Link>
      </li>
    </ul>
  </header>
);