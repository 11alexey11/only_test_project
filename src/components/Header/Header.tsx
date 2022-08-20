import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 2.5rem;
`;

const HeaderText = styled.h1`
    width: 11.25rem;
    font-size: 4rem;
    font-weight: 700;
    line-height: 4.875rem;
`

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderText>ONLY.</HeaderText>
        </HeaderContainer>
    )
};

export default Header;