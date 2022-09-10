import React from "react";
import styles from './UnknownPage.module.css';
import {Link} from "react-router-dom";

export default function UnknownPage() {
    return (
        <div className={styles.pageNotFoundSection}>
            <img src="/images/robots/sad-robot.png" alt="" className={styles.robotImage}/>
            <div className={styles.infoSection}>
                <h1>404 Page not found</h1>
                <h2>Ne pare rău, dar nu am putut găsi pagina pe care o căutai.</h2>
                <Link to={"/"} className={styles.homeButton}>Către pagina principală</Link>
            </div>
        </div>
    );
}