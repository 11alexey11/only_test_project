import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { Header } from '../Header';
import { Login } from '../Login';
 
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
        <>
            <GlobalStyle />
            <Header />
            <Router>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/' element={<Navigate replace to='/login' />} />
                </Routes>
            </Router>
        </>
    )
};

export default App;