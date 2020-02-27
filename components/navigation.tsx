import * as React from 'react'
import Link from 'next/link'

const Navigation: React.FunctionComponent = () => {
  return (
    <nav>
      <Link href='/'><a>Home</a></Link>
      <Link href='/teams'><a>Teams</a></Link>
      <Link href='/fixtures'><a>Fixtures</a></Link>
      <Link href='/stats'><a>Stats</a></Link>
    </nav>
  )
}

export default Navigation
