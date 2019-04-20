import React from "react";
import "./style.css";

function Title(props) {
  return (
    
      <div className="header navbar">

        <div className="title">{props.children}</div>

        <div className="scores">
          Score: {props.score} 0 | High Score: 0{props.highscore}
        </div>
      </div>
   

  )
}

export default Title;
