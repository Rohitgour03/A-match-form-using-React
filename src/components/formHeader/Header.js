import React from "react";
export default function Header(props) {
  return (
    <header className="header">
      {props.pageCount <= 3 ? (
        <h3>
          {props.text} {props.pageCount}/3
        </h3>
      ) : (
        <h3>Match Details</h3>
      )}
    </header>
  );
}
