import React from "react";
import styles from './WrongfulRedirect.module.css';
import {Link} from "react-router-dom";
import useButtonText from "../../../hooks/button/useButtonText";

export default function WrongfulRedirect() {
    const buttonText = useButtonText();
    return (
        <div className={styles.section}>
            <h2 className={styles.message}>HEY! Ai intrat pe această pagină din greșeală.</h2>
            <img alt="" src="/images/robots/map-robot.png" className={styles.robotImage}/>
            <h2 className={styles.message}>Poate voiai să ajungi aici:</h2>
            <Link to={'../'} className={styles.backButton}>{buttonText}</Link>
        </div>
    )
}