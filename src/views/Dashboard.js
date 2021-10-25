import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import { UserContext } from '../contexts/UserContext';

import { FaRegCircle } from 'react-icons/fa';

import '../styles/dashboard/_dashboard.scss';

const Dashboard = () => {
    const [done, setDone] = useState(0);
    const [classExercises, setClassExercises] = useState([]);
    const total = classExercises.length || 0;

    useEffect(() => {
        async function fetchData() {
            try {
                const code = await axios.get('http://localhost:5000/exercises');
                setClassExercises(code.data);
                const approved = classExercises.filter(
                    (item) => item.isApproved
                );
                setDone(approved.length);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    // const history = useHistory();
    //const [user] = useContext(UserContext);
    // if (!user.auth) history.push('/');

    return (
        <div className="dash">
            {/* <div className="exercise-stat">
                <span>
                    {done}/{total}
                </span>
            </div> */}
            <div className="dash-list">
                <ul>
                    {/*<div className="card-description-name"> 
                            <h2>Class FBW87-2</h2>
                            <h3>Exercise status</h3>
                        </div>
    */}

                    <hr />

                    {classExercises.slice(0, 13).map((obj, index) => {
                        return (
                            <li key={index}>
                                <img src={obj.student.avatar} height="25px" />
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
        </div>
    );
};

export default Dashboard;
