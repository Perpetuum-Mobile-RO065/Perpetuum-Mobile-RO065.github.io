import React, {useState} from "react";
import useEmail from "../../../hooks/email/useEmail";
import * as Yup from "yup";
import {Form, Formik} from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import TextInput from "../fields/text/TextInput";
import TextArea from "../fields/text/TextArea";
import styles from "./VolunteeringForm.module.css";
import Radio from "../fields/selectors/Radio";
import Select from "../fields/selectors/Select";
import schools from "../../../assets/data/schools";
import useWindowDimensions from "../../../hooks/window/useWindowDimensions";

export default function VolunteeringForm() {
    const [captcha, setCaptcha] = useState(false);
    const email = useEmail(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID_VOLUNTEER, process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
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
        name: Yup.string().trim().required("Numele este obligatoriu").max(150, "Numele trebuie să fie mai scurt de ${max} de caractere"),
        email: Yup.string().trim().email("Adresa de email este invalidă").required("Adresa de email este obligatorie"),
        phone: Yup.string().trim().matches(/^\d{10}$/, "Numărul de telefon este invalid"),
        school: Yup.string().required("Trebuie să menționezi școala de proveniență"),
        discord: Yup.string().matches(/^.{3,32}#\d{4}$/, "ID-ul de Discord este invalid"),
        role: Yup.string().trim().required("Rolul este obligatoriu"),
        department: Yup.string().trim().required("Departamentul este obligatoriu"),
        // eslint-disable-next-line
        hobbies: Yup.string().trim().max(2500, "Mesajul trebuie să fie mai scurt de ${max} de caractere"),
        // eslint-disable-next-line
        qualifications: Yup.string().trim().required("Trebuie să specifici ce cunoștințe ai").max(2500, "Mesajul trebuie să fie mai scurt de ${max} de caractere"),
        // eslint-disable-next-line
        message: Yup.string().trim().max(2500, "Mesajul trebuie să fie mai scurt de ${max} de caractere"),
    });

    return (
        <Formik initialValues={{
            name: "",
            email: "",
            phone: "",
            school: "",
            discord: "",
            role: "Membru",
            department: "Programare",
            hobbies: "",
            qualifications: "",
            message: "",
        }} validationSchema={formSchema}
                onSubmit={(values) => {
                    email(values);
                }
                }>
            {({isSubmitting,}) => <Form className={styles.form}>
                <TextInput label="Nume complet" name="name" type="text" placeholder="Nume Prenume"
                           inputClass={styles.inputBox} labelClass={styles.inputLabel}/>
                <TextInput label="Email" name="email" type="email" placeholder="email@example.com"
                           inputClass={styles.inputBox} labelClass={styles.inputLabel}/>
                <TextInput label="Număr de telefon" name="phone" type="tel" placeholder=""
                           inputClass={styles.inputBox} labelClass={styles.inputLabel}/>

                <Select label={"Școală"} labelClass={styles.inputLabel}
                        selectClass={styles.dropDown} name={"school"}>
                    <option value="" disabled={true}>Școala la care înveți</option>
                    {schools.map((school, index) => <option key={index} value={school.name}>{school.name}</option>)}
                </Select>

                <TextInput label="Discord" name="discord" type="text" placeholder="Nume#1234"
                           inputClass={styles.inputBox} labelClass={styles.inputLabel}/>

                <div className={styles.radioChoiceSection}>
                    <div className={styles.radioChoice}>
                        <p className={styles.radioTitle}>Rol</p>
                        <Radio type="radio" label="Membru" value="Membru" name="role"
                               labelClass={styles.radioOption}/>
                        <Radio type="radio" label="Voluntar" value="Voluntar" name="role"
                               labelClass={styles.radioOption}/>
                    </div>

                    <div className={styles.radioChoice}>
                        <p className={styles.radioTitle}>Departament</p>
                        <Radio type="radio" label="Programare" value="Programare" name="department"
                               labelClass={styles.radioOption}/>
                        <Radio type="radio" label="Proiectare 3D & Design" value="Proiectare 3D & Design"
                               name="department" labelClass={styles.radioOption}/>
                        <Radio type="radio" label="Mecanică" value="Mecanică" name="department"
                               labelClass={styles.radioOption}/>
                        <Radio type="radio" label="Public Relations" value="Public Relations" name="department"
                               labelClass={styles.radioOption}/>
                    </div>
                </div>

                <TextArea label="Hobby-uri" name="hobbies" placeholder="În timpul liber îmi place să..."
                          inputClass={styles.textareaBox}
                          labelClass={styles.inputLabel}/>
                <TextArea label="Rezultate obținute" name="qualifications"
                          placeholder="Ce lucruri despre tine ne-ar putea impresiona?"
                          inputClass={styles.textareaBox}
                          labelClass={styles.inputLabel}/>
                <TextArea label="Mesaj opțional" name="message" placeholder="Mai ai ceva ce ai dori să ne spui?"
                          inputClass={styles.textareaBox}
                          labelClass={styles.inputLabel}/>
                <div className={styles.confirmSection}>
                    <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={handleCaptchaChange} size={width <= 400 ? "compact" : "normal"}/>
                    <button type="submit" disabled={isSubmitting || !captcha}
                            className={styles.submitButton}>{isSubmitting ? "Se trimite..." : "Trimite"}</button>
                </div>
            </Form>}
        </Formik>)
}