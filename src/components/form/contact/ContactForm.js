import React, {useState} from "react";
import useEmail from "../../../hooks/email/useEmail";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./ContactForm.module.css";
import TextInput from "../fields/text/TextInput";
import TextArea from "../fields/text/TextArea";
import useWindowDimensions from "../../../hooks/window/useWindowDimensions";

export default function ContactForm() {
    const email = useEmail(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT, process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    const [captcha, setCaptcha] = useState(false);
    const [width] = useWindowDimensions();

    const handleCaptchaChange = (value) => {
        if (value === null) {
            setCaptcha(false);
        } else {
            setCaptcha(true);
        }
    }

    const formSchema = Yup.object({
        // eslint-disable-next-line
        userName: Yup.string().trim().required("Numele este obligatoriu").max(150, "Numele trebuie să fie mai scurt de ${max} de caractere"),
        email: Yup.string().trim().email("Adresa de email este invalidă").required("Adresa de email este obligatorie"),
        // eslint-disable-next-line
        message: Yup.string().trim().required("Mesajul este obligatoriu").max(10000, "Mesajul trebuie să fie mai scurt de ${max} de caractere"),
        // eslint-disable-next-line
        title: Yup.string().trim().required("Titlul este obligatoriu").max(150, "Titlul trebuie să fie mai scurt de ${max} de caractere"),
    });

    return (
        <Formik initialValues={{userName: "", email: "", message: "", title: ""}} validationSchema={formSchema}
                onSubmit={values => email(values)}>
            {({isSubmitting}) =>
                <Form className={styles.form}>
                    <TextInput label="Nume complet" name="userName" type="text" placeholder="Nume Prenume"
                               labelClass={styles.inputLabel} inputClass={styles.inputBox}/>
                    <TextInput label="Email" name="email" type="text" placeholder="email@example.com"
                               labelClass={styles.inputLabel} inputClass={styles.inputBox}/>
                    <TextInput label="Titlu" name="title" type="text" placeholder="Titlul mesajului"
                               labelClass={styles.inputLabel} inputClass={styles.inputBox}/>
                    <TextArea label="Mesaj" name="message" type="text"
                              placeholder="Bună ziua! Vă contactez în legătură cu..."
                              labelClass={styles.inputLabel}
                              inputClass={styles.textareaBox}/>
                    <div className={styles.confirmSection}>
                        <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                                   onChange={handleCaptchaChange} size={width <= 400 ? "compact" : "normal"}/>
                        <button type="submit" disabled={(isSubmitting || !captcha)}
                                className={styles.submitButton}>{isSubmitting ? "Se trimite..." : "Trimite"}
                        </button>
                    </div>
                </Form>}
        </Formik>)
}