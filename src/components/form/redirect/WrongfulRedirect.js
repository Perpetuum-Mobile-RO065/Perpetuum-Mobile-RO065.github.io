import React from "react";
import './WrongfulRedirect.css';
import {Link} from "react-router-dom";
import useButtonText from "../../../hooks/button/useButtonText";

export default function WrongfulRedirect() {
    const buttonText = useButtonText();
    return (
        <div className={"wrongful-section"}>
            <h2 className={"wrongful-message"}>HEY! Ai intrat pe această pagină din greșeală.</h2>
            <img alt="" src="/images/robots/map-robot.png" className={"wrongful-robot-image"}/>
            <Link to={'../'} className={"back-button"}>{buttonText}</Link>
        </div>
    )
}