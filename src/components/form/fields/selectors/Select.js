import React from "react";
import {useField} from "formik";
import {errorStyle} from "../fieldStyles";

export default function Select({label, selectClass, labelClass, ...props}) {
    const [field, meta] = useField(props);
    return (
        <label htmlFor={props.name} className={labelClass}>{meta.touched && meta.error ? (
            <span style={errorStyle}>{meta.error}</span>) : label}
            <select {...field} {...props} className={selectClass}/>
        </label>
    );
}