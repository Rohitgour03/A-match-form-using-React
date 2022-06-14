import React from "react";

function Table(props) {
  console.log(props.matchData)
  return (
    <div className="tableCtn">
      <h2>Match Details</h2>
      <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Team 1</th>
            <th>Team 2</th>
            <th>Match type</th>
            <th>Tournament name</th>
            <th>Start date and time</th>
            <th>End date and time</th>
            <th>Location</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr className="matchData-row">
            <td>
              {props.matchData.team1Name} 
              {`(${props.matchData.team1Location})`}
            </td>
            <td>
              {props.matchData.team2Name}
              {`(${props.matchData.team2Location})`}
            </td>
            <td>{props.matchData.matchType}</td>
            <td>{props.matchData.tournamentName}</td>
            <td>{props.matchData.startDate.toString()}</td>
            <td>{props.matchData.endDate.toString()}</td>
            <td>{props.matchData.matchLocation}</td>
            <div className="comment-ctn">
              <td className="comment">{props.matchData.comments}</td>
            </div>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Table;
