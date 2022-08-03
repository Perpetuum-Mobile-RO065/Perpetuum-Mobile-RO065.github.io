import React from "react";
import {Outlet} from "react-router-dom";
import "./VolunteeringForm.css";

export default function Volunteer() {
    return (
        <div className="volunteer-form-template">
            <div className="volunteer-contact-info">
                <h1>Alătură-te echipei noastre de robotică!</h1>

                <hr className={"volunteer-divider"}/>

                <div className="volunteer-form_text">
                    <p className="volunteer-margin-5px">Completează formularul alăturat pentru un posibil loc în
                        echipă.</p>

                    <div className="volunteer-address-location">
                        <div className="volunteer-email_section">
                            <img alt="" className="volunteer-location_icon" src="/icons/form-icon-location.png"/>
                            <p className="volunteer-email_text volunteer-margin-5px">Strada Mihai Eminescu 5, Satu Mare
                                440014,
                                SM,
                                România</p>
                        </div>

                        <div className="volunteer-email_section">
                            <img alt="" className="volunteer-email_icon" src="/icons/form-icon-email.png"/>
                            <a className="volunteer-margin-5px volunteer-email"
                               href={"mailto:perpetuum.mobile@eminescusm.ro"}>perpetuum.mobile@eminescusm.ro</a>
                        </div>
                    </div>

                    <p className="volunteer-margin-5px">Nu sunteți siguri de locație? </p>
                    <a href="https://www.google.com/maps/place/Colegiul+Na%C8%9Bional+Mihai+Eminescu+Satu+Mare/@47.7893913,22.8741361,17z/data=!3m1!4b1!4m5!3m4!1s0x473805cdaac2883b:0x49b9e88a38ed23fe!8m2!3d47.7893834!4d22.8763575"
                       target="_blank" className="volunteer-maps-link" rel="noreferrer">Ne găsiți pe Google Maps!</a>
                </div>
            </div>
            <Outlet/>
        </div>
    );
}