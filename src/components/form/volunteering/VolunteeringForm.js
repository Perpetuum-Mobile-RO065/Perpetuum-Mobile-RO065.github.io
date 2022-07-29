import React, {useMemo, useState} from "react";
import useEmail from "../../../hooks/email/useEmail";
import * as Yup from "yup";
import {Form, Formik} from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import TextInput from "../fields/text/TextInput";
import Radio from "../fields/selectors/Radio";
import TextArea from "../fields/text/TextArea";

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

    const formSchema = useMemo(() => {
        return Yup.object({
            lastName: Yup.string().required("Last name is required"),
            firstName: Yup.string().required("First name is required"),
            email: Yup.string().email("Email is invalid").required("Email is required"),
            phone: Yup.number(),
            school: Yup.string().required("School is required"),
            discord: Yup.string().matches(/^.{3,32}#\d{4}$/, "Discord ID is invalid"),
            role: Yup.string().required("Role is required"),
            department: Yup.string().required("Department is required"),
            hobbies: Yup.string().max(1000, "Hobbies must be less than 1000 characters"),
            qualifications: Yup.string().required("Qualifications are required"),
            message: Yup.string().max(1000, "Message must be less than 1000 characters"),
        });
    }, []);

    return (
        <Formik initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            school: "",
            discord: "",
            role: "",
            department: "",
            hobbies: "",
            qualifications: "",
            message: "",
        }} validationSchema={formSchema}
                onSubmit={(values) => {
                    email(values);
                }
                }>
            {({isSubmitting,}) => <Form>
                <TextInput label="First name" name="firstName" type="text" placeholder="John"/>
                <TextInput label="Last name" name="lastName" type="text" placeholder="Doe"/>
                <TextInput label="Email" name="email" type="email" placeholder="email@example.com"/>
                <TextInput label="Phone Number" name="phone" type="number" placeholder=""/>
                <TextInput label="School" name="school" type="text" placeholder="School"/>
                <TextInput label="Discord" name="discord" type="text" placeholder=""/>
                <Radio label="Role" name="role">
                    <option value="">Select Role</option>
                    <option value="Member">Member</option>
                    <option value="Volunteer">Volunteer</option>
                </Radio>

                <Radio label="Department" name="department">
                    <option value="">Select Department</option>
                    <option value="Programare">Programare</option>
                    <option value="Proiectare 3D">Proiectare 3D</option>
                    <option value="Mecanica">Mecanica</option>
                    <option value="PR">Public Relations (PR)</option>
                    <option value="Caiet tehnic">Caiet tehnic</option>
                </Radio>

                <TextArea label="Hobbies" name="hobbies" placeholder="Hobbies"/>
                <TextArea label="Qualifications" name="qualifications" placeholder="Qualifications"/>
                <TextArea label="Message" name="message" placeholder="Message"/>
                <button type="submit" disabled={isSubmitting || !captcha}>Submit</button>
                <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={handleCaptchaChange}/>
            </Form>}
        </Formik>
    )
}