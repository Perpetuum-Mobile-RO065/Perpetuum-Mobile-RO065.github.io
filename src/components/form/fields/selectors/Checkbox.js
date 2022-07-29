import React from "react";
import {useField} from "formik";
import '../Fieldset.css';

export default function Checkbox({children, divClass, inputClass, labelClass, ...props}) {
    const [field, meta] = useField({...props, type: 'checkbox'});

    return (
        <div className={divClass}>
            <label className={labelClass}>
                <input type="checkbox" {...field} {...props} className={inputClass}/>
                {children}
            </label>
            {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
        </div>
    );
}