import React from "react";
import Button from "../button/Button";

function FormFooter(props) {

  return (
    <div className="button-ctn">
      {props.pageCount > 1 && 
        <Button 
          id="Back" 
          value="Back"
          type="button" 
          setPageCount={props.setPageCount}
        />
      }
      {props.pageCount < 3 ? (
        <Button 
          id="Next" 
          type="button"
          value="Next" 
          setPageCount={props.setPageCount}
        />
      ) : (
        <Button 
          id="Submit" 
          type="submit"
          value="Submit"  
          setPageCount={props.setPageCount}
        />
      )}
    </div>
  );
}

export default FormFooter;
