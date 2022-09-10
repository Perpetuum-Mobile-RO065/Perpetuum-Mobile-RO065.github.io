import React from "react";
import {useLocation} from "react-router-dom";
import styles from './FormFailure.module.css';
import WrongfulRedirect from "../WrongfulRedirect";

export default function FormFailure() {
    const {state} = useLocation();
    if (state !== null) {
        console.log(state);
    }
    return (
        state === null ? <WrongfulRedirect/> :
            <div className={styles.section}>
                <h2 className={styles.message}>HMMM... Ceva a mers prost și formularul nu a putut fi trimis...</h2>
                <img src="/images/robots/gear-robot.png" alt={"Robot holding a gear"} className={styles.robotImage}/>
                <h2 className={styles.message}>Te rugăm să ne contactezi manual pe adresa de email.</h2>
            </div>
    )

}