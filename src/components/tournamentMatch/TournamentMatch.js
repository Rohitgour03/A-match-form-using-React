import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TournamentMatch(props) {

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
    <div className="tournamentMatchCtn">
      <h2>Tournament Match Form</h2>
      <div className="inputs-ctn">
      <DatePicker
          selected={props.matchData.startDate}
          dateFormat="dd/MM/yyyy"
          placeholderText="Start Date"
          onChange={(date) => {
            props.setMatchData((prevData) => {
              return {
                ...prevData,
                startDate: date,
              };
            });
            console.log(date);
          }}
        />
        {/* <input
          type="datetime-local"
          name="startDate"
          id="startDate"
          onChange={handleChange}
          value={props.matchData.startDate}
        /> */}
        <DatePicker
          selected={props.matchData.endDate}
          dateFormat="dd/MM/yyyy"
          placeholderText="End Date"
          onChange={(date) => {
            props.setMatchData((prevData) => {
              return {
                ...prevData,
                endDate: date,
              };
            });
            console.log(date)
          }}
        />
        {/* <input
          type="datetime-local"
          name="endDate"
          id="endDate"
          onChange={handleChange}
          value={props.matchData.endDate}
        /> */}
        <input
          type="text"
          name="matchLocation"
          placeholder="Match Location"
          onChange={handleChange}
          value={props.matchData.matchLocation}
        />
        <input
          type="text"
          placeholder="Tournament Name"
          name="tournamentName"
          onChange={handleChange}
          value={props.matchData.tournamentName}
        />
        <textarea
          name="comments"
          id="comments"
          cols="30"
          rows="10"
          placeholder="Comments"
          onChange={handleChange}
          value={props.matchData.comments}
        ></textarea>
      </div>
    </div>
  );
}

export default TournamentMatch;
