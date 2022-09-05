import React from "react";
import './UnderConstruction.css';
import {Link} from "react-router-dom";


export default function UnderConstruction() {
    return (
        <>
            <div className="under-construction-section">
                <img src="/images/robots/working-robot.png" alt="Working robot" className="working-robot-image"/>
                <div className="under-construction-info">
                    <h1>Page in development</h1>
                    <h2>Ne pare rău, dar momentan muncitorii noștri harnici amenajează această pagină.</h2>
                    <h2>Vă primim cu drag mai târziu!</h2>
                    <Link to={'/'} className="under-construction-link">Către pagina principală</Link>
                </div>
            </div>
        </>
    )
}