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
      <ActiveLink href='/'>Home</ActiveLink>
      <ActiveLink href='/teams'>Teams</ActiveLink>
      <ActiveLink href='/fixtures'>Fixtures</ActiveLink>
      <ActiveLink href='/stats'>Stats</ActiveLink>
    </nav>
  )
}

function ActiveLink({ children, href }) {
  const router = useRouter()
  const depth1 = `/${router.pathname.split('/')[1] || ''}`

  return (
    <Link href={href}>
      <a href={href} className={ depth1 === href ? 'active' : '' }>
        {children}
      </a>
    </Link>
  )
}

export default Navigation
