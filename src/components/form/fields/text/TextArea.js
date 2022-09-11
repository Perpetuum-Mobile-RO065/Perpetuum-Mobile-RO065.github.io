import React from "react";
import {useField} from "formik";
import {errorBoxOutlineStyle, errorStyle} from "../fieldStyles";

export default function TextArea({labelClass, inputClass, label, ...props}) {
    const [field, meta] = useField(props);

    return (
        <label htmlFor={props.name} className={labelClass}>{meta.touched && meta.error ? (
            <span style={errorStyle}>{meta.error}</span>) : label}
            <textarea
                className={inputClass}
                style={meta.touched && meta.error ? errorBoxOutlineStyle : undefined} {...field} {...props} />
        </label>
    );
}