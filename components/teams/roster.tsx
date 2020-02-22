import * as React from 'react'
import Link from 'next/link'

interface IProps {
  roster: []
}

const TeamRoster: React.FunctionComponent<IProps> = ({ roster }) => {
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
  roster.map((v: any, index) => {
    return (
      <tr key={index}>
        <td className="number">{v.jersey}</td>
        <td className="position">{v.position.abbreviation}</td>
        <td className="name">{v.fullName}</td>
        <td scope="col" className="country">
          {v.flag ? <><img src={v.flag.href} width="32" height="32" alt="" /> {v.flag.alt}</> : '-'}
        </td>
        <td scope="col" className="age">{v.age}</td>
        <td scope="col" className="goals">
          {v.statistics ? v.statistics.splits.categories[1].stats[4].displayValue : '0'}
        </td>
        <td scope="col" className="assists">
          {v.statistics ? v.statistics.splits.categories[1].stats[0].displayValue : '0'}
        </td>
      </tr>
    );
  })
)

export default TeamRoster