import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

interface LoginState {
    isError: boolean,
    email: string,
    isFetching: boolean
}

const initialState: LoginState = {
    isError: false,
    email: '',
    isFetching: false
};

export const counterSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setIsError: (state, action: PayloadAction<boolean>) => {
            state.isError = action.payload;
        },
        setIsFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload;
        },
        exitFromLogin: (state) => {
            state.isError = false;
            state.email = '';
            state.isFetching = false;
        }
    }
});