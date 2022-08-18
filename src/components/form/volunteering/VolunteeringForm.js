import React, {useState} from "react";
import useEmail from "../../../hooks/email/useEmail";
import * as Yup from "yup";
import {Form, Formik} from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import TextInput from "../fields/text/TextInput";
import TextArea from "../fields/text/TextArea";
import "./VolunteeringForm.css";
import Radio from "../fields/selectors/Radio";
import Select from "../fields/selectors/Select";
import schools from "../../../assets/data/schools";

export default function VolunteeringForm() {
    const [captcha, setCaptcha] = useState(false);
    const email = useEmail(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID_VOLUNTEER, process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

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
            {({isSubmitting,}) => <Form className={"volunteer-form"}>
                <div>
                    <TextInput label="Nume complet" name="name" type="text" placeholder="Nume Prenume"
                               inputClass={"volunteer-input-box"} labelClass={"volunteer-input-label"}/>
                    <TextInput label="Email" name="email" type="email" placeholder="email@example.com"
                               inputClass={"volunteer-input-box"} labelClass={"volunteer-input-label"}/>
                    <TextInput label="Număr de telefon" name="phone" type="tel" placeholder=""
                               inputClass={"volunteer-input-box"} labelClass={"volunteer-input-label"}/>

                    <Select label={"Școală"} labelClass={"volunteer-input-label"} selectClass={"volunteer-input-box volunteer-dropdown"} name={"school"}>
                        <option value="">Școala la care înveți</option>
                        {schools.map((school, index) => <option key={index} value={school.name}>{school.name}</option>)}
                    </Select>

                    <TextInput label="Discord" name="discord" type="text" placeholder="Nume#1234"
                               inputClass={"volunteer-input-box"} labelClass={"volunteer-input-label"}/>

                    <div className={"multiple-choice-section"}>
                        <div className={"multiple-choice"}>
                            <p className="volunteer-margin-5px">Rol</p>
                            <Radio type="radio" label="Membru" value="Membru" name="role"
                                   labelClass="multiple-choice-option"/>
                            <Radio type="radio" label="Voluntar" value="Voluntar" name="role"
                                   labelClass="multiple-choice-option"/>
                        </div>

                        <div className={"multiple-choice"}>
                            <p className="volunteer-margin-5px">Departament</p>
                            <Radio type="radio" label="Programare" value="Programare" name="department"
                                   labelClass="multiple-choice-option"/>
                            <Radio type="radio" label="Proiectare 3D & Design" value="Proiectare 3D & Design"
                                   name="department" labelClass="multiple-choice-option"/>
                            <Radio type="radio" label="Mecanică" value="Mecanică" name="department"
                                   labelClass="multiple-choice-option"/>
                            <Radio type="radio" label="Public Relations" value="Public Relations" name="department"
                                   labelClass="multiple-choice-option"/>
                        </div>
                    </div>

                    <TextArea label="Hobby-uri" name="hobbies" placeholder="În timpul liber îmi place să..."
                              inputClass={"volunteer-message volunteer-input-box"}
                              labelClass={"volunteer-input-label"}/>
                    <TextArea label="Rezultate obținute" name="qualifications"
                              placeholder="Ce lucruri despre tine ne-ar putea impresiona?"
                              inputClass={"volunteer-message volunteer-input-box"}
                              labelClass={"volunteer-input-label"}/>
                    <TextArea label="Mesaj opțional" name="message" placeholder="Mai ai ceva ce ai dori să ne spui?"
                              inputClass={"volunteer-message volunteer-input-box"}
                              labelClass={"volunteer-input-label"}/>
                </div>
                <div className={"volunteer-two-buttons"}>
                    <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={handleCaptchaChange}/>
                    <button type="submit" disabled={isSubmitting || !captcha}
                            className={"volunteer-submit"}>{isSubmitting ? "Se trimite..." : "Trimite"}</button>
                </div>
            </Form>}
        </Formik>)
}