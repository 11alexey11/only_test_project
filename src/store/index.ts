import { configureStore } from '@reduxjs/toolkit';

import { counterSlice } from './login/slice';

export const store = configureStore({
    reducer: {
        login: counterSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch