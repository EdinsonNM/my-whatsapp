import {createActions} from 'redux-actions';
export const LOGIN = 'LOGIN';
export const LOGIN_DONE = 'LOGIN_DONE';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_DONE = 'LOGOUT_DONE';

const actionsCreator = createActions(
    {
        LOGIN: (username, password) => ({username, password})
    },
    LOGIN_DONE,
    LOGOUT,
    LOGOUT_DONE
);
export const {login, loginDone, logout, logoutDone} = actionsCreator;
