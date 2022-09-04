import React from "react";
import {Outlet} from "react-router-dom";
import "./ContactForm.css";

export default function Contact() {
    return (
        <div className={"contact-form-template"}>
            <div className="contact-contact-info">
                <h1>Formular de contact</h1>
                <hr className={"contact-divider"}/>
                <div className="contact-form_text">
                    <br/>
                    <p className="contact-margin-5px">Doriți să ne contactați?</p>
                    <p className="contact-margin-5px">Aici ne puteți scrie un email.</p>
                    <br/>
                    <br/>
                    <div className="contact-email_section">
                        <img alt="" className="contact-location_icon"
                             src="/icons/form-icon-location.png"/>
                        <p className="contact-email_text contact-margin-5px">Strada Mihai Eminescu 5, Satu Mare 440014,
                            SM,
                            România</p>
                    </div>
                    <div className="contact-email_section">
                        <img alt="" className="contact-email_icon"
                             src="/icons/form-icon-email.png"/>
                        <a className="contact-email"
                           href={"mailto:perpetuum.mobile@eminescusm.ro"}>perpetuum.<wbr/>mobile@<wbr/>eminescusm.<wbr/>ro</a>
                    </div>
                    <br/><br/>
                    <p className="contact-margin-5px">Nu sunteți siguri de locație? </p>
                    <a href="https://www.google.com/maps/place/Colegiul+Na%C8%9Bional+Mihai+Eminescu+Satu+Mare/@47.7893913,22.8741361,17z/data=!3m1!4b1!4m5!3m4!1s0x473805cdaac2883b:0x49b9e88a38ed23fe!8m2!3d47.7893834!4d22.8763575"
                       target="_blank" className="contact-maps-link" rel="noreferrer">Ne găsiți pe Google Maps!</a>
                </div>
            </div>
            <Outlet/>
        </div>
    );
}