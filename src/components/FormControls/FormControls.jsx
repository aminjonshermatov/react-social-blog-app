import React from 'react';
import classes from './FormControls.module.css';

export const Textarea = ({input, meta: { touched, error }, ...props}) => {
    const hasError = touched && error;

    return (
        <div className={`${classes.formControl} ${hasError ? classes.error : ''}`}>
            <div>
                <textarea {...props} {...input} />
            </div>
            {
                hasError
                && <span>{error}</span>
            }
        </div>
    );
};

export const Input = ({input, meta: { touched, error }, ...props}) => {
    const hasError = touched && error;

    return (
        <div className={`${classes.formControl} ${hasError ? classes.error : ''}`}>
            <div>
                <input {...props} {...input} />
            </div>
            {
                hasError
                && <span>{error}</span>
            }
        </div>
    );
};