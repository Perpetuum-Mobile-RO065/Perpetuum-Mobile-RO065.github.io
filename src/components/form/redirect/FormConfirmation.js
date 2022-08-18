import React from "react";
import {Link, useLocation} from "react-router-dom";
import './FormConfirmation.css';

export default function FormConfirmation() {
    const location = useLocation();
    const buttonText = (location.pathname.split('/')[1] === "voluntariat" ? "Alatură-te echipei!" : "Contact");
    const {state} = location;

    return (
        <div className="success-section">
            <h2 className="success-message">
                {state ? `YAY! Mesajul a fost trimis cu succes de pe adresa ${state.email}.` :
                    "HEY! Ai intrat pe această pagină din greșeală."}
            </h2>
            <img alt="Happy robot cheering" src={`/images/${state ? "happy-robot" : "map-robot"}.png`} className={"robot-image"}/>
            {state === null && <Link to={'../'}
                                     className={"back-button"}>{buttonText}</Link>}
        </div>
    )
}