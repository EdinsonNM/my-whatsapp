import React, {useEffect} from 'react';
import {List} from '@material-ui/core';
import Contact from './components/Contact';
import {useDispatch, useSelector} from 'react-redux';
import {loadContacts} from '../../../redux/actions/contacts.actions';
export default function Contacts() {
    const dispatch = useDispatch();
    const {contacts, inProgress} = useSelector(state => state.ContactsReducer);
    useEffect(() => {
        dispatch(loadContacts());
    }, [dispatch]);

    return (
        <div>
            {inProgress && 'Loading...'}
            <List>
                {contacts.map(contact => (
                    <Contact
                        key={contact.login.uuid}
                        firstname={contact.name.first}
                        lastname={contact.name.last}
                        url={contact.picture.thumbnail}
                    />
                ))}
            </List>
        </div>
    );
}
