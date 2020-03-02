import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navigation: React.FunctionComponent = () => {
  const router = useRouter()

  const matchActive = (path): boolean => {
    const pathname = router.pathname
    return pathname === path
  }

  return (
    <nav>
      <Link href='/'>
        <a className={ matchActive('/') ? 'active' : '' }>Home</a>
      </Link>
      <Link href={`/teams/[id]`} as={`/teams/349`}>
        <a className={ matchActive('/teams/[id]') ? 'active' : '' }>Teams</a>
      </Link>
      <Link href='/fixtures'>
        <a className={ matchActive('/fixtures') ? 'active' : '' }>Fixtures</a>
      </Link>
      <Link href='/stats'>
        <a className={ matchActive('/stats') ? 'active' : '' }>Stats</a>
      </Link>
    </nav>
  )
}

export default Navigation
