import { useState } from 'react';

import Form from '../components/Form';
import Field from '../components/Field';
import Button from '../components/Button';
import Message from '../components/Message';
import Image from '../components/Image';
import logo from '../styles/pics/logo.png';

import { signUpCallback } from '../helpers/callback';

const SignUp = () => {
    const [formState, setFormState] = useState({
        school: '',
        email: '',
        password: '',
    });

    const changeHandler = ({ target: { name, value } }) => {
        setFormState({ ...formState, [name]: value });
    };

    return (
        <div className="signup">
            <Image url={logo} divCls="container" cls="image" text="logo" />
            <Form
                state={formState}
                route="/schools"
                link="/admin"
                callback={signUpCallback}
            >
                <Message cls="signup" message="Create account" />

                <Field
                    name="school"
                    type="text"
                    value={formState.school}
                    action={changeHandler}
                />
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

                <Button text="Register" type="submit" cls="submit" />
            </Form>
        </div>
    );
};

export default SignUp;
