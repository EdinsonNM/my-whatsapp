import {handleActions} from 'redux-actions';
import {
    CONNECT_CONTACTS,
    UPDATE_LIST_CONTACT
} from '../actions/contacts.actions';
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
        },
        REGISTER_SUBSCRIBE_CONTACTS: (state, {payload}) => ({
            ...state,
            unsubscribe: payload
        }),
        UPDATE_LIST_CONTACT: (state, {payload}) => ({
            ...state,
            contactsId: payload
        }),
        UPDATE_LIST_CONTACT_DONE: (state, {payload}) => ({
            ...state,
            contacts: payload
        })
    },
    initialState
);
export default ContactsReducer;
