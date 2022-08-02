import React from "react";
import {useField} from "formik";
import '../Fieldset.css';

export default function TextInput({label, labelClass, inputClass, ...props}) {
    const [field, meta] = useField(props);

    return (
        <label className={labelClass}>{meta.touched && meta.error ? (
            <span className="error">{meta.error}</span>) : label}
            <input
                className={`${inputClass} ${meta.touched && meta.error ? "error-outline" : null}`} {...field} {...props} />
        </label>
    );
}