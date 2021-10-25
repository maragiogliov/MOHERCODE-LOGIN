import { useState, useEffect, useContext } from 'react';
//import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { FaRegCircle, FaBookReader } from 'react-icons/fa';
import { BsLayoutSidebar } from 'react-icons/bs';

import axios from 'axios';

import Editor from '../components/Editor';
import Output from '../components/Output';
import Button from '../components/Button';

import {
    viewHandler,
    toggleInstructionsHandler,
    viewListHandler,
} from '../helpers/helpers';

import '../styles/editor/_student.scss';

const Teacher = () => {
    const [toggleInstructions, setToggleInstructions] = useState('');
    const [toggleList, setToggleList] = useState('');

    // const history = useHistory();
    const [user] = useContext(UserContext);
    // if (!user.auth) history.push('/');
    const [classExercises, setClassExercises] = useState([]);
    const [exerciseIndex, setExerciseIndex] = useState(0);
    const [isApproved, setIsApproved] = useState(false);

    const [student, setStudent] = useState('');
    const initialState = {
        HTML: '',
        CSS: '',
        JS: '',
    };
    const [state, setState] = useState(initialState);
    const [srcDoc, setSrcDoc] = useState('');

    const dummyChange = () => {
        console.log("please don't edit this");
    };
    const handleExercise = (index) => {
        setExerciseIndex(index);
        const status = classExercises[exerciseIndex].isApproved;
        setIsApproved(status);
    };
    const handleSubmit = () => {
        fetch(
            `http://localhost:5000/exercises/${classExercises[exerciseIndex].id}`,
            {
                method: 'PUT',
                body: JSON.stringify({ isApproved: true, comment: 'SUPER!' }),
                headers: {
                    'Content-Type': 'application/json',
                    //'x-auth-token': {user.jwt}
                },
            }
        )
            .then((res) => res.json())
            .then((data) => setIsApproved(true))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const code = await axios.get('http://localhost:5000/exercises');
                setClassExercises(code.data);
                const {
                    solution: { HTML, CSS, JS },
                } = code.data[0];
                setStudent(code.data[0].student.name);
                setState({ HTML, CSS, JS });
                const htmlEditor = document.getElementById('xml');
                htmlEditor && htmlEditor.classList.add('view');
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            try {
                const code = await axios.get('http://localhost:5000/exercises');
                setClassExercises(code.data);

                const {
                    solution: { HTML, CSS, JS },
                } = code.data[exerciseIndex];
                setIsApproved(code.data[exerciseIndex].isApproved);
                setStudent(code.data[exerciseIndex].student.name);
                setState({ HTML, CSS, JS });
                const htmlEditor = document.getElementById('xml');
                htmlEditor && htmlEditor.classList.add('view');
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [exerciseIndex]);

    useEffect(() => {
        const { HTML, CSS, JS } = state;
        const timeout = setTimeout(() => {
            setSrcDoc(
                `<html><body>${HTML}</body><style>${CSS}</style><script>${JS}</script></html>`
            );
        }, 250);
        return () => clearTimeout(timeout);
    }, [state]);

    return (
        <div className={`student`}>
            <div className={`student-list ${toggleList}`}>
                <ul>
                    {classExercises &&
                        classExercises.map((obj, index) => {
                            return (
                                <li
                                    onClick={() => handleExercise(index)}
                                    key={index}
                                >
                                    {obj.student.name}
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

                    <Editor
                        language="xml"
                        value={state.HTML}
                        onChange={dummyChange}
                    />

                    <Editor
                        language="css"
                        value={state.CSS}
                        onChange={dummyChange}
                    />
                    <Editor
                        language="javascript"
                        value={state.JS}
                        onChange={dummyChange}
                    />
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
                        {/* <div className="button-container exercise--title__container"> */}
                        {/* <h3>{exercise && exercise.title}</h3> */}
                        <h4>{student && student}</h4>
                        <Button
                            text={isApproved ? 'Approved' : 'Review'}
                            type="submit"
                            cls={isApproved ? 'approved' : 'review'}
                            action={handleSubmit}
                        />
                    </div>
                    <div className="output-box">
                        <Output srcDoc={srcDoc} />
                    </div>
                    {/* <div className="button-container-right">
                        <Button
                            text={isApproved ? 'Approved' : 'Review'}
                            type="submit"
                            cls={isApproved ? 'approved' : 'review'}
                            action={handleSubmit}
                        />
                    </div> */}
                </div>
            </div>
            <div className="footer-student-editor">
                <div className="submit-box">
                    <Button
                        text={<BsLayoutSidebar className="sidebar-icon" />}
                        type="submit"
                        action={() =>
                            viewListHandler(toggleList, setToggleList)
                        }
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
        </div>
    );
};

export default Teacher;
