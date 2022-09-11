import React from "react";
import {useField} from "formik";
import {errorBoxOutlineStyle, errorStyle} from "../fieldStyles";

export default function TextInput({label, labelClass, inputClass, ...props}) {
    const [field, meta] = useField(props);

    return (
        <label className={labelClass}>{meta.touched && meta.error ? (
            <span style={errorStyle}>{meta.error}</span>) : label}
            <input
                className={inputClass}
                style={meta.touched && meta.error ? errorBoxOutlineStyle : undefined} {...field} {...props} />
        </label>
    );
}