import React from 'react'
import { render } from '@testing-library/react'
import Fixtures from '../pages/fixtures'

describe('API 정상 호출시', () => {
  const date = '20200307'
  const fixtures = require(`../public/static/data/fixtures/20200307.json`)

  test('타이틀이 Fixtures로 노출된다.', () => {
    const { container } = render(<Fixtures date={date} fixtures={fixtures} />)
    expect(container.querySelector('h2').textContent).toBe('Fixtures')
  })

  test('match 리스트가 노출된다.', () => {
    const { container } = render(<Fixtures date={date} fixtures={fixtures} />)
    expect(container.querySelector('.fixtures-list .match')).toBeTruthy()
  })
})

describe('API 비정상 호출시 fixtures 를 빈 배열로 전달', () => {
  const date = '20200307'

  test('.empty 가 출력된다.', () => {
    const { container } = render(<Fixtures date={date} fixtures={[]} />)
    expect(container.querySelector('.empty')).toBeTruthy()
  })
})