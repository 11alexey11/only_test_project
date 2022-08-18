import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    margin: 0.625rem 0;
`;

const Input = styled.input`
    width: 40rem;
    height: 3.75rem;
    padding-left: 1.25rem;
    margin-bottom: 0.625rem;
    border-radius: 0.5rem;
    background-color: #F5F5F5;
    font-size: 1rem;
    font-weight: 400;
    color: #232323;
    line-height: 1.25rem;

    &:hover {
        cursor: pointer;
    }
`;

const CheckBox = styled.input`
    width: 1.25rem;
    height: 1.25rem;
    padding: 0.1875rem;
    appearance: none;
    border: 1px solid #000000;
    background-clip: content-box;
    margin-right: 1.0625rem;

    &:checked {
        background-color: #4A67FF;
    }
`;

const SubmitButton = styled(Input)`
    padding: 0;
    margin-top: 1.875rem;
    background-color: #4A67FF;
    color: #FFFFFF;
`;

const Login = () => {
    return (
        <LoginContainer>
            <Form>
                <Label htmlFor="email" >Логин</Label>
                <Input id="email" type="email" name="email" />
                <Label htmlFor="password" >Пароль</Label>
                <Input id="password" type="password" name="password" />
                <Label htmlFor="remember">
                    <CheckBox id="remember" type="checkbox" name="remember"/>
                    Запомнить пароль
                </Label>
                <SubmitButton type="submit" />
            </Form>
        </LoginContainer>
    );
};

export default Login;