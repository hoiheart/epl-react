import React from 'react'
import { render } from '@testing-library/react'
import Stats from '../pages/stats'

describe('API 정상 호출시', () => {
  const stats = require(`../public/static/data/statistics/statistics.json`).stats

  test('타이틀이 Stats로 노출된다.', () => {
    const { container } = render(<Stats stats={stats} />)
    expect(container.querySelector('h2').textContent).toBe('Stats')
  })

  test('2개의 stat 리스트가 노출된다.', () => {
    const { container } = render(<Stats stats={stats} />)
    expect(container.querySelectorAll('.stat').length).toBe(2)
  })
})

describe('API 비정상 호출시 stats 를 빈 배열로 전달', () => {
  test('.empty 가 출력된다.', () => {
    const { container } = render(<Stats stats={[]} />)
    expect(container.querySelector('.empty')).toBeTruthy()
  })
})