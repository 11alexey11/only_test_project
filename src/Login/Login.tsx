import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { LoginService } from '../api/LoginService';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setEmail, setIsError, setIsFetching } from '../store/login/actions';
import { getEmailSelector, getIsErrorSelector, getIsFetchingSelector } from '../store/login/selectors';

interface IInput {
    inputBorder?: boolean
}

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

    &:disabled {
        background-color: #99A9FF;  
    }

    &:focus {
        outline: ${(props: IInput) => props.inputBorder ? '1px solid #E26F6F' : '1px solid #000000'};
    }
`;

const ErrorSpan = styled.span`
    font-size: 0.875rem;
    line-height: 1rem;
    color: #E26F6F;
`;

const ErrorDiv = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.875rem;
    width: 40rem;
    height: 3.75rem;
    padding-left: 1.25rem;
    border-radius: 0.5rem;
    border: 1px solid #E26F6F;
    background-color: #F5E9E9;
`;

const ErrorImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    font-size: 0.875rem;
    color: #EE6565;
    background-color: #FFC8C8;
`;

const ErrorText = styled.div`
    font-size: 0.875rem;
    font-weight: 400;
    color: #000000;
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

type FormData = {
    email: string,
    password: string,
    remember: string
};

const Login = () => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState: { errors }  } = useForm<FormData>();
    const navigate = useNavigate();
    const isError = useAppSelector(getIsErrorSelector);
    const email = useAppSelector(getEmailSelector);
    const isFetching = useAppSelector(getIsFetchingSelector);

    const onSubmit = handleSubmit(async (formData) => {
        dispatch(setIsFetching(true));

        const response = await LoginService.post(formData);

        dispatch(setIsFetching(false));
        dispatch(setEmail(formData.email));

        if (response.code === 200) {
            dispatch(setIsError(false));
            navigate('/profile');
        } else {
            dispatch(setIsError(true));
        }
    });

    return (
        <LoginContainer>
            <Form onSubmit={onSubmit}>
                {
                    isError && 
                    (<ErrorDiv>
                        <ErrorImg>!</ErrorImg>
                        <ErrorText>Пользователя { `${email}` } не существует</ErrorText>
                    </ErrorDiv>)
                }
                <Label htmlFor="email" >Логин</Label>
                <Input id="email" type="email" {...register('email', { required: true })} inputBorder={'email' in errors} />
                {
                    errors.email && <ErrorSpan>Обязательное поле</ErrorSpan>
                }
                <Label htmlFor="password" >Пароль</Label>
                <Input id="password" type="password" {...register('password', { required: true })} inputBorder={'password' in errors} />
                {
                    errors.password && <ErrorSpan>Обязательное поле</ErrorSpan>
                }
                <Label htmlFor="remember">
                    <CheckBox id="remember" type="checkbox" {...register('remember')} />
                    Запомнить пароль
                </Label>
                <SubmitButton disabled={isFetching} type="submit" value="Войти" />
            </Form>
        </LoginContainer>
    );
};

export default Login;