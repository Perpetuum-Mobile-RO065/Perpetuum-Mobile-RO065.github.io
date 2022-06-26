import React from "react";
import {useLocation} from "react-router-dom";

export default function FormConfirmation() {
    const {state} = useLocation();

    return (
        (state ? <h1>If you see this message, the form has been submitted from email {state.email}</h1> : <h1>You landed on this page by mistake</h1>)
    )
}