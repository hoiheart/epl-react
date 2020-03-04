import React from 'react'
import { render } from '@testing-library/react'
import Teams from '../pages/teams/[id]'

jest.mock('next/router', () => ({
  useRouter () {
    return {
      route: '/teams/[id]',
      pathname: '/teams/[id]',
      query: {
        id: 359
      },
      asPath: '/teams/359'
    }
  }
}))

describe('API 정상 호출시', () => {
  const teams = require('../public/static/data/teams/teams.json').sports[0]?.leagues[0]?.teams
  const team = require('../public/static/data/teams/359.json').team
  const roster = require('../public/static/data/rosters/359.json').athletes

  test('타이틀이 Teams로 노출된다.', () => {
    const { container } = render(<Teams teams={teams} team={team} roster={roster} />)
    expect(container.querySelector('h2').textContent).toBe('Teams')
  })

  test('nav, info, roster가 노출된다.', () => {
    const { container } = render(<Teams teams={teams} team={team} roster={roster} />)
    expect(container.querySelector('.teams-nav')).toBeTruthy()
    expect(container.querySelector('.teams-info')).toBeTruthy()
    expect(container.querySelector('.teams-roster')).toBeTruthy()
  })
})

describe('API 비정상 호출시 props 를 빈 값으로 전달', () => {
  test('.empty 가 출력된다.', () => {
    const { container } = render(<Teams teams={[]} team={{}} roster={[]} />)
    expect(container.querySelector('.empty')).toBeTruthy()
  })
})
