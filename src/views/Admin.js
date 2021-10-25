import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Field from '../components/Field';
import Button from '../components/Button';
import Message from '../components/Message';

const Admin = () => {
    const history = useHistory();
    const [formState, setFormState] = useState({ course: '' });
    const [errorState, setErrorState] = useState({
        isError: false,
        message: '',
    });
    const submitHandler = async (evt) => {
        evt.preventDefault();

        const res = await fetch(`http://localhost:5000/schools`, {
            method: 'POST',
            body: JSON.stringify(formState),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok)
            return setErrorState({
                isError: true,
                message: 'data is invalid',
            });

        const data = await res.json();
        if (data.status === 200) history.push('/');
    };
    const changeHandler = ({ target: { name, value } }) => {
        setFormState({ ...formState, [name]: value });
    };

    return (
        <>
            <form className="form--container" onSubmit={submitHandler}>
                <Message cls="login" message="Create Class" />
                <Field
                    name="course name"
                    type="text"
                    value={formState.course}
                    action={changeHandler}
                />
                <Field
                    name="teacher name"
                    type="text"
                    value={formState.teacher}
                    action={changeHandler}
                />
                <label htmlFor="file">
                    <input type="file" name="file" onChange={changeHandler} />
                </label>

                <Button text="Create" type="submit" cls="submit" />
            </form>
        </>
    );
};

export default Admin;
