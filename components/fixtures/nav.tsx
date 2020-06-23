import * as React from 'react'
import Link from 'next/link'

import dayjs from 'dayjs'

interface FixturesNavComponent {
  date: string;
}

const FixturesNav: React.FunctionComponent<FixturesNavComponent> = ({ date }) => {
  const yesterday = dayjs(date).add(-1, 'day').format('YYYYMMDD')
  const today = dayjs(date).format('YYYY-MM-DD (ddd)')
  const tomorrow = dayjs(date).add(1, 'day').format('YYYYMMDD')

  return (
    <div className='fixtures-nav'>
      <Link href={`/fixtures?date=${yesterday}`}><a>&lt;</a></Link>
      {today}
      <Link href={`/fixtures?date=${tomorrow}`}><a>&gt;</a></Link>
    </div>
  )
}

export default FixturesNav
