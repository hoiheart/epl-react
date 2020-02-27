import * as React from 'react'

interface RosterComponent {
  roster: Player[]
}

interface Player {
  fullName?: string,
  age?: number,
  position?: {
    abbreviation?: string
  },
  statistics?: {
    splits?: {
      categories?: {
        stats?: {
          displayValue?: string
        }[]
      }[]
    }
  },
  flag?: {
    hrefv: string,
    alt?: string
  },
  jersey?: string,
}

const TeamRoster: React.FunctionComponent<RosterComponent> = ({ roster }) => {
  return (
    <>
    <table>
      <thead>
        <tr>
          <th scope="col" className="number">No.</th>
          <th scope="col" className="position">Position</th>
          <th scope="col" className="name">Name</th>
          <th scope="col" className="country">Country</th>
          <th scope="col" className="age">Age</th>
          <th scope="col" className="goals">Goals</th>
          <th scope="col" className="assists">Assists</th>
        </tr>
      </thead>
      <tbody>
        {renderRosterList({ roster })}
      </tbody>
    </table>
  </>
  )
}

const renderRosterList = ({ roster }) => (
  roster.map((player: Player, index) => {
    return (
      <tr key={index}>
        <td className="number">{player.jersey}</td>
        <td className="position">{player.position.abbreviation}</td>
        <td className="name">{player.fullName}</td>
        <td scope="col" className="country">
          {player.flag ? <><img src={player.flag.href} width="32" height="32" alt="" /> {player.flag.alt}</> : '-'}
        </td>
        <td scope="col" className="age">{player.age}</td>
        <td scope="col" className="goals">
          {player.statistics?.splits?.categories[1]?.stats[4]?.displayValue || '0'}
        </td>
        <td scope="col" className="assists">
          {player.statistics?.splits?.categories[1]?.stats[0]?.displayValue || '0'}
        </td>
      </tr>
    );
  })
)

export default TeamRoster