import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import { UserProvider } from './contexts/UserContext';
import ContextWrapper from './contexts/ContextWrapper';

ReactDOM.render(
    <UserProvider>
        <React.StrictMode>
            <ContextWrapper>
                <App />
            </ContextWrapper>
        </React.StrictMode>
    </UserProvider>,
    document.getElementById('root')
);
