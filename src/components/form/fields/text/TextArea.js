import React from "react";
import {useField} from "formik";
import '../Fieldset.css';

export default function TextArea({labelClass, inputClass, label, ...props}) {
    const [field, meta] = useField(props);

    return (
        <label htmlFor={props.name} className={labelClass}>{label}
            {meta.touched && meta.error ? (<span className="error">{meta.error}</span>) : null}
            <textarea className={inputClass} {...field} {...props} />
        </label>
    );
}