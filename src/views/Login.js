import { useState } from 'react';

//local imports
 import BackgroundAnimation from '../components/BackgroundAnimation';
import Button from '../components/Button';
import Field from '../components/Field';
import Form from '../components/Form';
import Message from '../components/Message';
import Image from '../components/Image';
import logo from '../styles/pics/logo.png';

import { logInCallback } from '../helpers/callback';

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });

    const changeHandler = ({ target: { name, value } }) => {
        setFormState({ ...formState, [name]: value });
    };
{/* <BackgroundAnimation /> */}
    
    return (
        <div className="login">

            
          
            <Image url={logo} divCls="container" cls="image" text="logo" />
            <Form
                state={formState}
                route="/users/login"
                link="/dash"
                callback={logInCallback}
            >
                <Message cls="login" message="Sign In" />
                <p>into your Mothercode account</p>
                <Field
                    name="email"
                    type="email"
                    value={formState.email}
                    action={changeHandler}
                />
                <Field
                    name="password"
                    type="password"
                    value={formState.password}
                    action={changeHandler}
                />

                <Button text="Sign In" type="submit" cls="submit" />
                <p class="form-string--or">
                   <h6 class="or">OR</h6>
                   <hr/>
                </p>
                <Button text="Google" type="submit" cls="google" />
                <Button text="GitHub" type="submit" cls="github" />
              
            </Form>
        </div>
    );
};

export default Login;
