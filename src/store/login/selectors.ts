import { RootState } from './../index';

export const getIsErrorSelector = (state: RootState) => state.login.isError;

export const getEmailSelector = (state: RootState) => state.login.email;

export const getIsFetchingSelector = (state: RootState) => state.login.isFetching;