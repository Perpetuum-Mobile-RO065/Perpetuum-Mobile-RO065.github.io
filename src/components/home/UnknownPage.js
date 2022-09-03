import React from "react";
import './UnknownPage.css';
import {Link} from "react-router-dom";

export default function UnknownPage() {
    return (
        <div className="page-not-found-section">
            <img src="/images/robots/sad-robot.png" alt="" className={"sad-robot-image"}/>
            <div className="info">
                <h1>404 Page not found</h1>
                <h2>Ne pare rău, dar nu am putut găsi pagina pe care o căutai.</h2>
                <Link to={"/"} className={"back-to-home-link"}>Către pagina principală</Link>
            </div>
        </div>
    );
}