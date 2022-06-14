import React from "react";

function Teams(props) {
  function handleChange(event) {
    const { name, value } = event.target;
    props.setMatchData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(props.matchData);
  }

  return (
    <div className="teamsNameCtn">
      <h2>Team Names</h2>
      <div className="team1">
        <input
          type="text"
          placeholder="team 1 name"
          name="team1Name"
          onChange={handleChange}
          value={props.matchData.team1Name}
        />
        <select
          name="team1Location"
          id="team1Location"
          onChange={handleChange}
          value={props.matchData.team1Location}
        >
          <option value="Home">Home</option>
          <option value="Away">Away</option>
        </select>
      </div>

      <div className="separation-line">
        <span>----------------</span>
        vs
        <span>----------------</span>
      </div>

      <div className="team2">
        <input
          type="text"
          placeholder="team 2 name"
          name="team2Name"
          onChange={handleChange}
          value={props.matchData.team2Name}
        />
        <select
          name="team2Location"
          id="team2Location"
          onChange={handleChange}
          value={props.matchData.team2Location}
        >
          <option value="Home">Home</option>
          <option value="Away">Away</option>
        </select>
      </div>
    </div>
  );
}

export default Teams;
