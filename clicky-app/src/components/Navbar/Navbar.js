import React from "react";
import "./Navbar.css";

const Navbar = props => (

    <nav className="nav-bar">
     
        <div className="clicky-title">The Clicky Game</div>
       
      <div>{props.rightWrong}</div> 

      <div className="scores">Current Score: {props.score} High Score: {props.highscore}</div> 

        
    </nav>
)
export default Navbar;