import React from "react";
import "./style.css";

function Title(props) {
  return (
    
      <div className="header navbar">

        <div className="title">{props.children}</div>

        <div className="scores">
          Score: {props.score} High Score: {props.highscore}
        </div>
      </div>
   

  )
}

export default Title;
