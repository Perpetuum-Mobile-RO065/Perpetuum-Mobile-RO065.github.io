import React, {useMemo} from "react";
import useEmail from "../../../hooks/email/useEmail";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import Fieldset from "../fields/Fieldset";
import {Persist} from "formik-persist";

export default function ContactForm() {
    const email = useEmail("service_l7t2lx8", "template_c5tmjct", "dI2BMnbadqeZgm_Pr");

    const formSchema = useMemo(() => {
        return Yup.object({
            userName: Yup.string().required("Name is required"),
            email: Yup.string().email("Email is invalid").required("Email is required"),
            message: Yup.string().required("Message is required").max(1000, "Message must be less than 1000 characters"),
            title: Yup.string().required("Title is required"),
        });
    }, []);

    return (
        <Formik initialValues={{userName: "", email: "", message: "", title: ""}} validationSchema={formSchema}
                onSubmit={(values) => {
                    email(values);
                }
                }>
            {({isSubmitting,}) => <Form>
                <Fieldset label="Name" name="userName" type="text" placeholder="John Doe"/>
                <Fieldset label="Email" name="email" type="email" placeholder="email@example.com"/>
                <Fieldset label="Title" name="title" type="text" placeholder="Title"/>
                <Fieldset label="Message" name="message" as="textarea" placeholder="Message"/>
                <button type="submit" disabled={isSubmitting}>Submit</button>
                <Persist name={"contact-form"} isSessionStorage={true}/>
            </Form>}
        </Formik>
    )
}