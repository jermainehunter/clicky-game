import React from "react";
import "./Navbar.css";

const Navbar = props => (

    <nav>
        <ul className="nav nav-bar">
        <li>Current Score: {props.score} ////\\\\///\\\\  </li>
        <li>High Score: {props.highscore}</li>

        </ul>
    </nav>
)
export default Navbar;