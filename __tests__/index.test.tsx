import React from 'react'
import { render } from '@testing-library/react'
import Index from '../pages/index'

describe('API 정상 호출시', () => {
  const standings = require(`../public/static/data/standings/standings.json`).children[0]?.standings?.entries

  test('타이틀이 Standings로 노출된다.', () => {
    const { container } = render(<Index standings={standings} />)
    expect(container.querySelector('h2').textContent).toBe('Standings')
  })

  test('tbody 내 tr 이 20개 노출된다.', () => {
    const { container } = render(<Index standings={standings} />)
    expect(container.querySelectorAll('tbody tr').length).toBe(20)
  })
})

describe('API 비정상 호출시 standings 를 빈 배열로 전달', () => {
  test('.empty 가 출력된다.', () => {
    const { container } = render(<Index standings={[]} />)
    expect(container.querySelector('.empty')).toBeTruthy()
  })
})