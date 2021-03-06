import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../FormControls/FormControls';
import { required } from '../../utils/validators';

const LoginForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name='login'
                    placeholder="Login"
                    type="text"
                    validate={[required]}
                    component={Input}
                />
            </div>
            <div>
                <Field
                    name='password'
                    placeholder="Password"
                    type="text"
                    validate={[required]}
                    component={Input}
                />
            </div>
            <div>
                <Field
                    checked={false}
                    name='rememberMe'
                    type="checkbox"
                    component='input'
                />
                    Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const ReduxLoginForm = reduxForm({ form : 'login' })(LoginForm);

const Login = () => {
    const onSubmit = formData => {
        console.log(formData);
    };

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;