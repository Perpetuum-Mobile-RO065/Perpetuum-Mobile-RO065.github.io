import React from "react";
import {useField} from "formik";

export default function Radio({label, inputClass, labelClass, ...props}) {
    const [field, meta] = useField(props);

    return (
        <label className={labelClass}>
            <input {...field} {...props} className={inputClass}/>
            {label}
        </label>
    )
}