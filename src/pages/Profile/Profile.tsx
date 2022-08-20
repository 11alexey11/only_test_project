import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { exitFromLogin } from '../../store/login/actions';
import { getEmailSelector } from '../../store/login/selectors';

const ProfileContainer = styled.div`
    display: flex;
    row-gap: 3.125rem;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Greeting = styled.div`
    font-size: 2.5rem;
    line-height: 3rem;
    color: #000000;
`;

const Email = styled.span`
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3rem;
    color: #000000;
`;

const ExitButton = styled.input`
    width: 200px;
    height: 60px;
    border-radius: 0.5rem;
    font-size: 1.125rem;
    font-weight: 700;
    color: #000000;
    line-height: 1.375rem;
    background-color: #F5F5F5;

    &:hover {
        cursor: pointer;
    }
`;

const Profile = () => {
    const dispatch = useAppDispatch();
    const email = useAppSelector(getEmailSelector);
    const navigate = useNavigate();

    const clickHandler = () => {
        dispatch(exitFromLogin());
        navigate('/login');
    };

    return (
        email 
        ? 
        (<ProfileContainer>
            <Greeting>
                Здравствуйте, <Email>{ email }</Email>
            </Greeting>
            <ExitButton type="button" value="Выйти" onClick={ () => clickHandler() } />
        </ProfileContainer>)
        :
        <Navigate to='/login' />
    );
};

export default Profile;