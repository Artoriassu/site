import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';

const maxLength = maxLengthCreator(15);

const LoginForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'} name={'login'} component={Input}
            validate={[required, maxLength ]}/>
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'} component={Input}
            validate={[required, maxLength ]}/>
        </div>
        <div>
            <Field  component={Input} name={'rememberMe'} type={'checkbox'} 
            /> remember me
            </div>
        <div>
            <button>Login</button>
        </div>
    </form>)
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
const onSubmit = (formdata) => {
    console.log(formdata);
}

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;