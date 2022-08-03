import React from "react";
import {useLocation} from "react-router-dom";

export default function FormConfirmation() {
    const {state} = useLocation();

    return (
        <div className="success-section">
            <p className="success-message">YAY! Mesajul a fost trimis cu succes de pe email-ul introdus!</p>
            <img alt="Happy robot cheering" src="/images/happy-robot.png"/>
        </div>
    )
}