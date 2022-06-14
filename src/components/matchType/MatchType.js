import React from "react";
import Dropdown from "../dropdown/Dropdown";

function MatchType(props) {
  return (
    <div className="matchType">
      <h2>Select the match type</h2>
      <Dropdown
        name="match-type"
        id="match-type"
        option1="Friendly"
        option2="Tournament"
        matchData={props.matchData}
        setMatchData={props.setMatchData}
      />
    </div>
  );
}

export default MatchType;
