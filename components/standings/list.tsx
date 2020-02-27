import * as React from 'react'
import Link from 'next/link'

interface StandingsListComponent {
  standings: StandinsEntry[];
}

interface StandinsEntry {
  team? : {
    id?: string,
    displayName?: string,
    logos?: {
      href?: string
    }[]
  },
  note?: {
    color?: string,
    description?: string,
    rank?: number
  },
  stats?: {
    displayValue?: string
  }[]
}

const StandingsList: React.FunctionComponent<StandingsListComponent> = ({ standings }) => {
  return (
  <>
    <table>
      <thead>
        <tr>
          <th scope="col" className="rank">Rank</th>
          <th scope="col" className="name">Team</th>
          <th scope="col" className="gp">GP</th>
          <th scope="col" className="win">W</th>
          <th scope="col" className="draw">D</th>
          <th scope="col" className="lose">L</th>
          <th scope="col" className="point">P</th>
          <th scope="col" className="gf">GF</th>
          <th scope="col" className="ga">GA</th>
          <th scope="col" className="gd">GD</th>
        </tr>
      </thead>
      <tbody>
        { renderStandingsList({ standings }) }
      </tbody>
    </table>
  </>
  )
}

const renderStandingsList = ({ standings }) => (
  standings.map((entry: StandinsEntry, index) => (
    <tr key={index} style={{backgroundColor: entry.note?.color}}>
      <td className="rank">{entry.stats[7].displayValue}</td>
      <td className="name">
        <Link href={`/teams/[id]`} as={`/teams/${entry.team.id}`}>
          <a>
            <img src={entry.team.logos[0].href} width="48" height="48" alt="" />
            {entry.team.displayName}
          </a>
        </Link>
      </td>
      <td className="gp">{entry.stats[3].displayValue}</td>
      <td className="win">{entry.stats[0].displayValue}</td>
      <td className="draw">{entry.stats[2].displayValue}</td>
      <td className="lose">{entry.stats[1].displayValue}</td>
      <td className="point">{entry.stats[6].displayValue}</td>
      <td className="gf">{entry.stats[4].displayValue}</td>
      <td className="ga">{entry.stats[5].displayValue}</td>
      <td className="gd">{entry.stats[8].displayValue}</td>
    </tr>
  ))
)

export default StandingsList