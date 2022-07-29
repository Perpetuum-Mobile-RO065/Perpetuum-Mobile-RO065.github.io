import React from "react";
import {useField} from "formik";
import '../Fieldset.css';

export default function TextInput({label, labelClass, inputClass, ...props}) {
    const [field, meta] = useField(props);

    return (
        <label className={labelClass}>{label}
            {meta.touched && meta.error ? (<span className="error">{meta.error}</span>) : null}
            <input className={inputClass} {...field} {...props} />
        </label>
    );
}