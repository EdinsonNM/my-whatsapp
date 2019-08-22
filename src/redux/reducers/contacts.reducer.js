import {handleActions} from 'redux-actions';
const initialState = {
    inProgress: false,
    contacts: [],
    error: null
};
const ContactsReducer = handleActions(
    {
        LOAD_CONTACTS: (state, action) => ({
            ...state,
            inProgress: true,
            error: null
        }),
        LOAD_CONTACTS_DONE: {
            next: (state, {payload}) => ({
                ...state,
                contacts: payload,
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
export default ContactsReducer;
