import React from "react";
import {useLocation} from "react-router-dom";
import './FormFailure.css';
import WrongfulRedirect from "./WrongfulRedirect";

export default function FormFailure() {
    const {state} = useLocation();
    if (state !== null) {
        console.log(state);
    }
    return (
        state === null ? <WrongfulRedirect/> :
            <div className="form-failure">
                <h2 className="fail-message">HMMM... Ceva a mers prost și formularul nu a putut fi trimis...</h2>
                <img src="/images/gear-robot.png" alt={"Robot holding a gear"} className={"fail-robot-image"}/>
                <h2 className="success-message">Te rugăm să ne contactezi manual pe adresa de email.</h2>
            </div>
    )

}