import React from "react";
import "./Navbar.css";

const Navbar = props => (

    <nav>
        <ul className="nav nav-bar">
        <li>&nbsp;&nbsp;&nbsp;&nbsp;The Clicky Game</li>
        <li className="current-score">&nbsp;&nbsp;&nbsp;&nbsp;Current Score: {props.score}</li>
        <li>&nbsp;&nbsp;&nbsp;&nbsp;{props.rightWrong}</li>
        <li>&nbsp;&nbsp;&nbsp;&nbsp;High Score: {props.highscore}</li>

        </ul>
    </nav>
)
export default Navbar;