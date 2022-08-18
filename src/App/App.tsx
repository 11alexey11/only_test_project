import React from 'react';
import { createGlobalStyle } from 'styled-components';
 
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
            <div>Я тут</div>
        </>
    )
};

export default App;