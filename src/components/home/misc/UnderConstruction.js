import React from "react";
import styles from './UnderConstruction.module.css';
import {Link} from "react-router-dom";


export default function UnderConstruction() {
    return (
        <>
            <div className={styles.underConstructionSection}>
                <img src="/images/robots/working-robot.png" alt="Working robot" className={styles.robotImage}/>
                <div className={styles.infoSection}>
                    <h1>Page in development</h1>
                    <h2>Ne pare rău, dar momentan muncitorii noștri harnici amenajează această pagină.</h2>
                    <h2>Vă primim cu drag mai târziu!</h2>
                    <Link to={'/'} className={styles.homeButton}>Către pagina principală</Link>
                </div>
            </div>
        </>
    )
}