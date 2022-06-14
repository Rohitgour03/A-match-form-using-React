import React, { useState } from "react";
import "./App.css";
import Header from "./components/formHeader/Header";
import Form from "./components/form/Form";
import Table from "./components/table/Table";


function App() {
  const [pageCount, setPageCount] = useState(1)
  const [matchData, setMatchData] = useState({
    matchType: "Friendly",
    startDate: "",
    endDate: "",
    matchLocation: "",
    tournamentName: "",
    comments: "",
    team1Name: "",
    team1Location: "Home",
    team2Name: "",
    team2Location: "Away",
  })

  const headerTitle =['Type', 'General', 'Team']

  return (
    <React.Fragment>
      <Header 
        text={headerTitle[pageCount - 1]} 
        pageCount={pageCount}
      />
      { pageCount <= 3 ? 
        <Form
          pageCount={pageCount}
          setPageCount={setPageCount}
          matchData={matchData}
          setMatchData={setMatchData}
        /> : 
        <Table matchData={matchData} />
      }
    </React.Fragment>
  );
}

export default App;
