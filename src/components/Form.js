import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import '../styles/form/form.scss';
import { UserContext } from '../contexts/UserContext';
import Message from '../components/Message';

const Form = ({ children, state, route, callback }) => {
    const [user, setUser] = useContext(UserContext);
    const history = useHistory();

    const [errorState, setErrorState] = useState({
        isError: false,
        message: '',
    });

    const submitHandler = async (evt) => {
        evt.preventDefault();

        const res = await fetch(`http://localhost:5000${route}`, {
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok)
            return setErrorState({
                isError: true,
                message: 'data invalid',
            });

        const data = await res.json();
        callback && callback(res, history, setUser, data);
    };

    return (
        <>
            <form
                className="form form--container form-signup--container"
                onSubmit={submitHandler}
            >
                {/* {!isError && <Message message="Log In" />} */}
                {errorState.isError && <Message message={errorState.message} />}
                {children}
            </form>
        </>
    );
};
export default Form;
