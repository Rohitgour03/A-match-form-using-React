import React from "react";

export default function Button(props) {

  function handleClick(event){
    if(props.value === "Next"){
      props.setPageCount(prevCount => prevCount + 1)
    } else if(props.value === "Back"){
      props.setPageCount(prevCount => prevCount - 1)
    } else{
      props.setPageCount(prevCount => prevCount + 1)
      console.log("form submitted")
    }
  }

  return (
    <React.Fragment>
      <button 
        id={props.id} 
        type={props.type}
        value={props.value}
        onClick={handleClick}
      >
        {props.value}
      </button>
    </React.Fragment>
  );
}
