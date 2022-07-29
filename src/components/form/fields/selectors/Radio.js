import React from "react";
import {useField} from "formik";
import '../Fieldset.css';

export default function Radio({label, divClass, inputClass, labelClass, ...props}) {
    const [field, meta] = useField(props);
    return (
        <div className={divClass}>
            <label htmlFor={props.name} className={labelClass}>{label}</label>
            <select {...field} {...props} className={inputClass}/>
            {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
        </div>
    );
}