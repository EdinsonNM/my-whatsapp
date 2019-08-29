import {createActions} from 'redux-actions';
export const LOAD_CONTACTS = 'LOAD_CONTACTS';
export const LOAD_CONTACTS_DONE = 'LOAD_CONTACTS_DONE';

export const CONNECT_CONTACTS = 'CONNECT_CONTACTS';
export const UPDATE_LIST_CONTACT = 'UPDATE_LIST_CONTACT';
export const UPDATE_LIST_CONTACT_DONE = 'UPDATE_LIST_CONTACT_DONE';

export const DISCONNECT_CONTACTS = 'DISCONNECT_CONTACTS';
export const REGISTER_SUBSCRIBE_CONTACTS = 'REGISTER_SUBSCRIBE_CONTACTS';
const actionsCreator = createActions(
    {},
    LOAD_CONTACTS,
    LOAD_CONTACTS_DONE,
    CONNECT_CONTACTS,
    UPDATE_LIST_CONTACT,
    DISCONNECT_CONTACTS,
    REGISTER_SUBSCRIBE_CONTACTS,
    UPDATE_LIST_CONTACT_DONE
);
export const {
    loadContacts,
    loadContactsDone,
    connectContacts,
    updateListContact,
    disconnectContacts,
    registerSubscribeContacts,
    updateListContactDone
} = actionsCreator;
