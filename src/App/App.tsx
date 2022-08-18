import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Header } from '../Header';
 
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    }
`;

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
        </>
    )
};

export default App;