import React from "react";

export default function Dropdown(props) {

    function handleChange(event) {
      const value = event.target.value;
        props.setMatchData(prevData => {
            return {
                ...prevData,
                matchType: value,
            }
        })
    }

  return (
    <select 
        name={props.name} 
        id={props.id} 
        onChange={handleChange}
        value={props.matchData.matchType}
    >
      <option value={props.option1}>{props.option1}
      </option>
      <option value={props.option2}>{props.option2
      }</option>
    </select>
  );
}
