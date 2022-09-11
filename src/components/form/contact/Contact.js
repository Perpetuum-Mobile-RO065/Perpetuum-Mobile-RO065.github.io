import React from "react";
import {Outlet} from "react-router-dom";
import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <div className={styles.formTemplate}>
            <div className={styles.contactInfo}>
                <h1>Formular de contact</h1>
                <hr className={styles.divider}/>
                <div className={styles.formText}>
                    <br/>
                    <p className={styles.info}>Doriți să ne contactați?</p>
                    <p className={styles.info}>Aici ne puteți scrie un email.</p>
                    <br/>
                    <br/>
                    <div className={styles.addressSection}>
                        <img alt="" className={styles.icon}
                             src="/icons/form-icon-location.png"/>
                        <p className={styles.info}>Strada Mihai Eminescu 5, Satu Mare 440014,
                            SM,
                            România</p>
                    </div>
                    <div className={styles.addressSection}>
                        <img alt="" className={styles.icon}
                             src="/icons/form-icon-email.png"/>
                        <a className={styles.emailLink}
                           href={"mailto:perpetuum.mobile@eminescusm.ro"}>perpetuum.<wbr/>mobile@<wbr/>eminescusm.<wbr/>ro</a>
                    </div>
                    <br/><br/>
                    <p className={styles.info}>Nu sunteți siguri de locație? </p>
                    <a href="https://www.google.com/maps/place/Colegiul+Na%C8%9Bional+Mihai+Eminescu+Satu+Mare/@47.7893913,22.8741361,17z/data=!3m1!4b1!4m5!3m4!1s0x473805cdaac2883b:0x49b9e88a38ed23fe!8m2!3d47.7893834!4d22.8763575"
                       target="_blank" className={styles.mapsLink} rel="noreferrer">Ne găsiți pe Google Maps!</a>
                </div>
            </div>
            <Outlet/>
        </div>
    );
}