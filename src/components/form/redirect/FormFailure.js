import React from "react";
import {useLocation} from "react-router-dom";

export default function FormFailure(){
    const {state} = useLocation();
    return (
        <>
            <h1>There has been an error! Please report this to staff</h1>
            <h2>{state.error}</h2>
        </>

    )

}