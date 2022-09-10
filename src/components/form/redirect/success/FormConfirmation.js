import React from "react";
import {useLocation} from "react-router-dom";
import styles from './FormConfirmation.module.css';
import WrongfulRedirect from "../WrongfulRedirect";

export default function FormConfirmation() {
    const location = useLocation();
    const {state} = location;

    if (state === null) return <WrongfulRedirect/>;

    const email = <>{[...state.email].map(char => {
        if (char === "@" || char === "_" || char === "-" || char === ".") {
            return (
                <>{char}
                    <wbr/>
                </>
            );
        }
        return <>{char}</>;
    })}</>;

    return (
        <div className={styles.section}>
            <h2 className={styles.message}>YAY! Mesajul a fost trimis cu succes de pe
                adresa {email}.</h2>
            <img alt="Happy robot cheering" src="/images/robots/happy-robot.png" className={styles.robotImage}/>
        </div>
    )
}