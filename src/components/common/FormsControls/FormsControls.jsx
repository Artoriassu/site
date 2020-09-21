import React from 'react';
import view from './FormsControls.module.css'

const FormControl = ({ input, meta, child, ...props }) => {
    debugger;
    const hasError = meta.touched && meta.error;
    return (
        <div className={view.form_control + ' ' + (hasError ? view.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}>
        <textarea {...input} {...restProps} />
    </FormControl>
}

export const Input = (props) => {
    debugger;
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}>
        <input {...input} {...restProps} />
    </FormControl>

}
