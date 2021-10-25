import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

import Login from './views/Login';
import Student from './views/Student';
import Teacher from './views/Teacher';
import Dashboard from './views/Dashboard';
import SignUp from './views/SignUp';
import Admin from './views/Admin';
import Container from './components/whiteboard/Container';
import Side from './views/Side';
import Calendar from './views/Calendar';

import './App.scss';
import Navbar from './components/Navigation-Bar/Navbar';
import ProgressBar from './components/Progress bar/ProgressBar';

function App() {
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('jwt'));
        if (token) {
            axios('http://localhost:5000/users/jwt', {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token,
                },
            })
                .then((data) => console.log(data.data))
                .catch((err) => console.log(err));
        }
    }, []);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <div className="display--test">
                        <Login />
                    </div>
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>

                {/* <Route
                    path={['/student/dash', '/teacher/dash', '/admin/dash']}
                    component={Dashboard}
                ></Route> */}
                <Route path="/calendar">
                    <Calendar />
                </Route>
                <Route path="/side">
                    <Side />
                </Route>
                <Route path="/admin">
                    <Navbar />
                    <Admin />
                </Route>
                <Route path="/dash">
                    <Navbar />
                    <ProgressBar done="70" />
                    <Dashboard />
                </Route>

                <Route path="/student">
                    <Navbar />
                    <Student />
                </Route>
                <Route path="/whiteboard">
                    <Container />
                </Route>
                <Route path="/teacher">
                    <Navbar />
                    <Teacher />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
