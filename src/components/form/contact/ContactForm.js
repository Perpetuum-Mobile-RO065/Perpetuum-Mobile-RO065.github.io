import React, {useState} from "react";
import useEmail from "../../../hooks/email/useEmail";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import "./ContactForm.css";
import TextInput from "../fields/text/TextInput";
import TextArea from "../fields/text/TextArea";

export default function ContactForm() {
    const email = useEmail(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT, process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    const [captcha, setCaptcha] = useState(false);

    const handleCaptchaChange = (value) => {
        if (value === null) {
            setCaptcha(false);
        } else {
            setCaptcha(true);
        }
    }

    const formSchema = Yup.object({
        userName: Yup.string().trim().required("Numele este obligatoriu").max(150, "Numele trebuie să fie mai scurt de ${max} de caractere"),
        email: Yup.string().trim().email("Adresa de email este invalidă").required("Adresa de email este obligatorie"),
        message: Yup.string().trim().required("Mesajul este obligatoriu").max(10000, "Mesajul trebuie să fie mai scurt de ${max} de caractere"),
        title: Yup.string().trim().required("Titlul este obligatoriu").max(150, "Titlul trebuie să fie mai scurt de ${max} de caractere"),
    });

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
                        <a className="contact-margin-5px contact-email" href={"mailto:perpetuum.mobile@eminescusm.ro"}>perpetuum.mobile@eminescusm.ro</a>
                    </div>
                    <br/><br/>
                    <p className="contact-margin-5px">Nu sunteți siguri de locație? </p>
                    <a href="https://www.google.com/maps/place/Colegiul+Na%C8%9Bional+Mihai+Eminescu+Satu+Mare/@47.7893913,22.8741361,17z/data=!3m1!4b1!4m5!3m4!1s0x473805cdaac2883b:0x49b9e88a38ed23fe!8m2!3d47.7893834!4d22.8763575"
                       target="_blank" className="contact-maps-link" rel="noreferrer">Ne găsiți pe Google Maps!</a>
                </div>
            </div>

            <Formik initialValues={{userName: "", email: "", message: "", title: ""}} validationSchema={formSchema}
                    onSubmit={values => email(values)}>
                {({isSubmitting}) =>
                    <Form className={"contact-form"}>
                        <div>
                            <TextInput label="Nume complet" name="userName" type="text" placeholder="Nume Prenume"
                                       labelClass="contact-input-label" inputClass="contact-input-box"/>
                            <TextInput label="Email" name="email" type="text" placeholder="email@example.com"
                                       labelClass="contact-input-label" inputClass="contact-input-box"/>
                            <TextInput label="Titlu" name="title" type="text" placeholder="Titlul mesajului"
                                       labelClass="contact-input-label" inputClass="contact-input-box"/>
                            <TextArea label="Mesaj" name="message" type="text"
                                      placeholder="Bună ziua! Vă contactez în legătură cu..."
                                      labelClass="contact-input-label"
                                      inputClass="contact-input-box contact-message"/>
                        </div>
                        <div className="contact-send">
                            <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                                       onChange={handleCaptchaChange}/>
                            <button type="submit" disabled={(isSubmitting || !captcha)}
                                    className="contact-submit">Trimite
                            </button>
                        </div>
                    </Form>}
            </Formik>
        </div>
    )
}