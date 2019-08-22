import {handleActions} from 'redux-actions';
const initialState = {
    inProgress: false,
    user: null,
    error: null,
    logged: false
};
const LoginReducer = handleActions(
    {
        LOGIN: (state, {payload}) => ({...state, inProgress: true}),
        LOGIN_DONE: {
            next: (state, {payload}) => ({
                ...state,
                user: payload,
                logged: true,
                inProgress: false
            }),
            throw: (state, {payload}) => ({
                ...state,
                error: payload,
                inProgress: false
            })
        }
    },
    initialState
);
export default LoginReducer;
