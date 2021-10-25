import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

import { FaRegCircle, FaBookReader } from 'react-icons/fa';
import { BsLayoutSidebar } from 'react-icons/bs';

import Editor from '../components/Editor';
import Output from '../components/Output';
import Button from '../components/Button';
import {
    viewHandler,
    toggleInstructionsHandler,
    viewListHandler,
} from '../helpers/helpers';

import '../styles/editor/_student.scss';

const Student = () => {
    const exerciseList = [
        { title: 'Exercise 1', isApproved: false },
        { title: 'Exercise 2', isApproved: true },
        { title: 'Exercise 3', isApproved: true },
        { title: 'Exercise 4', isApproved: true },
        { title: 'Exercise 5', isApproved: true },
        { title: 'Exercise 6', isApproved: true },
        { title: 'Exercise 7', isApproved: true },
        { title: 'Exercise 8', isApproved: false },
        { title: 'Exercise 9', isApproved: true },
        { title: 'Exercise 10', isApproved: true },
        { title: 'Exercise 11', isApproved: true },
        { title: 'Exercise 12', isApproved: true },
        { title: 'Exercise 13', isApproved: true },
        { title: 'Exercise 14', isApproved: true },
        { title: 'Exercise 15', isApproved: true },
        { title: 'Exercise 16', isApproved: true },
        { title: 'Exercise 17', isApproved: true },
        { title: 'Exercise 18', isApproved: true },
        { title: 'Exercise 19', isApproved: true },
        { title: 'Exercise 20', isApproved: false },
        { title: 'Exercise 21', isApproved: true },
        { title: 'Exercise 22', isApproved: true },
        { title: 'Exercise 23', isApproved: false },
        { title: 'Exercise 24', isApproved: false },
        { title: 'Exercise 25', isApproved: true },
    ];
    const [toggleInstructions, setToggleInstructions] = useState('');
    const [toggleList, setToggleList] = useState('');

    // const history = useHistory();
    const [user] = useContext(UserContext);
    // if (!user.auth) history.push('/');

    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');
    const [srcDoc, setSrcDoc] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        document.getElementById('xml').classList.add('view');
        document.querySelector('button').focus();
    }, []);

    const handleSubmit = (evt) => {
        const studentExercise = {
            student: user.id,
            solution: { HTML: html, CSS: css, JS: js },
        };
        fetch('http://localhost:5000/exercises', {
            method: 'POST',
            body: JSON.stringify(studentExercise),
            headers: {
                'Content-Type': 'application/json',
                //'x-auth-token': {user.jwt}
            },
        })
            .then((res) => {
                if (res.status === 200) setIsSubmitted(true);
                return res.json();
            })
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(
                `<html><body>${html}</body><style>${css}</style><script>${js}</script></html>`
            );
        }, 250);
        return () => clearTimeout(timeout);
    }, [html, css, js]);

    return (
        <div className="student">
            <div className={`student-list ${toggleList}`}>
                <ul>
                    {exerciseList.map((obj, index) => {
                        return (
                            <li key={index}>
                                {obj.title}
                                <FaRegCircle
                                    className={
                                        obj.isApproved
                                            ? 'approved'
                                            : 'icon-list'
                                    }
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="main">
                <div className="left pane top-pane">
                    <div className="button-container-left">
                        <Button
                            name="xml"
                            action={(e) => viewHandler(e)}
                            text="HTML"
                            cls="html three-editor-buttons"
                        />
                        <Button
                            name="css"
                            action={(e) => viewHandler(e)}
                            text="CSS"
                            cls="css three-editor-buttons"
                        />
                        <Button
                            name="javascript"
                            action={(e) => viewHandler(e)}
                            text="JS"
                            cls="js three-editor-buttons"
                        />
                    </div>
                    <Editor language="xml" value={html} onChange={setHtml} />

                    <Editor language="css" value={css} onChange={setCss} />
                    <Editor language="javascript" value={js} onChange={setJs} />
                    <div
                        className={`instructions--container ${toggleInstructions}`}
                    >
                        <h2>Exercise 1 - Center a Div</h2>

                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>

                        <p>
                            It has survived not only five centuries, but also
                            the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the
                            1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>

                        <p>
                            It has survived not only five centuries, but also
                            the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the
                            1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
                <div className="right">
                    <div className="button-container-right">
                        <div className="submit-box">
                            <Button
                                text={isSubmitted ? 'Sent' : 'Submit'}
                                type="submit"
                                action={handleSubmit}
                                cls={isSubmitted ? 'submit' : 'sent'}
                            />
                        </div>
                    </div>
                    <div className="output-box">
                        <Output srcDoc={srcDoc} />
                    </div>
                    {/* </div> */}
                </div>
            </div>
            <div className="footer-student-editor">
                <Button
                    text={<BsLayoutSidebar className="sidebar-icon" />}
                    type="submit"
                    action={() => viewListHandler(toggleList, setToggleList)}
                    cls="sidebar"
                />

                <Button
                    text={<FaBookReader className="instructions-icon" />}
                    type="button"
                    action={() =>
                        toggleInstructionsHandler(
                            toggleInstructions,
                            setToggleInstructions
                        )
                    }
                    cls="instructions"
                />
            </div>
        </div>
    );
};

export default Student;
