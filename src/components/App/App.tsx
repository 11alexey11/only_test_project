import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components';

import { store } from '../../store';
import { Header } from '../Header';
import { Login } from '../../pages/Login';
import { Profile } from '../../pages/Profile';
 
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    }

    html, body {
        height: 100vh;
    }
    
    #root {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
`;

const App = () => {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <Header />
            <Router>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/' element={<Navigate replace to='/login' />} />
                </Routes>
            </Router>
        </Provider>
    )
};

export default App;