import {createActions} from 'react-redux';
export const LOAD_CONTACTS = 'LOAD_CONTACTS';
export const LOAD_CONTACTS_DONE = 'LOAD_CONTACTS_DONE';

const actionsCreator = createActions({}, LOAD_CONTACTS, LOAD_CONTACTS_DONE);
export const {loadContacts, loadContactsDone} = actionsCreator;
