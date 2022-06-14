import React from "react";

import FriendlyMatch from "../friendlyMatch/FriendlyMatch";
import MatchType from "../matchType/MatchType";
import Teams from "../teams/Teams";
import Table from "../table/Table";
import TournamentMatch from "../tournamentMatch/TournamentMatch";
import FormFooter from "../formFooter/FormFooter";


export default function Form(props){
    let page;
    switch (props.pageCount) {
        case 1:
            page = <MatchType matchData= {props.matchData} setMatchData={props.setMatchData} />
        break;

        case 2:
            if(props.matchData.matchType === 'Friendly'){
                page = <FriendlyMatch matchData= {props.matchData} setMatchData={props.setMatchData} />
            } else if(props.matchData.matchType === 'Tournament'){
                page = <TournamentMatch matchData= {props.matchData} setMatchData={props.setMatchData} />
            }    
        break;

        case 3:
            page = <Teams matchData= {props.matchData} setMatchData={props.setMatchData} />
        break;

        case 4:
            page = <Table matchData= {props.matchData} setMatchData={props.setMatchData} />        
        break;

        default:
          break;
    }

    function handleSubmit(event){
        console.log("i am running")
        event.preventDefault();
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                {page}
                <FormFooter 
                    pageCount={props.pageCount} 
                    setPageCount={props.setPageCount}/>
            </form>
        </React.Fragment>

    )
}   