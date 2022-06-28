import React from "react";
import {ErrorMessage, Field} from "formik";

export default function Fieldset({name, label, ...rest}) {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component="div" className="error"/>
        </>
    )
}