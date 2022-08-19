import React from "react";
import {useLocation} from "react-router-dom";
import './FormConfirmation.css';
import WrongfulRedirect from "./WrongfulRedirect";

export default function FormConfirmation() {
    const location = useLocation();
    const {state} = location;

    return (
        state === null ? <WrongfulRedirect/> :
            <div className="success-section">
                <h2 className="success-message">YAY! Mesajul a fost trimis cu succes de pe
                    adresa {state.email}.</h2>
                <img alt="Happy robot cheering" src="/images/happy-robot.png" className={"robot-image"}/>
            </div>
    )
}