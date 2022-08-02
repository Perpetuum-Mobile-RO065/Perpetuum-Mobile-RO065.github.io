import React from "react";
import {useField} from "formik";
import '../Fieldset.css';

export default function TextArea({labelClass, inputClass, label, ...props}) {
    const [field, meta] = useField(props);

    return (
        <label htmlFor={props.name} className={labelClass}>{meta.touched && meta.error ? (
            <span className="error">{meta.error}</span>) : label}
            <textarea
                className={`${inputClass} ${meta.touched && meta.error ? "error-outline" : null}`} {...field} {...props} />
        </label>
    );
}