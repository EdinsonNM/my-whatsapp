import React, {useState} from 'react';
import {List} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import Message from './components/Message';
import MessageIcon from '@material-ui/icons/Message';
import Contacts from '../contacts/Contacts';
export default function Messages() {
    const [openContacts, setOpenContacts] = useState(false);

    const handleToggleContacts = () => setOpenContacts(!openContacts);
    return (
        <div>
            <List>
                {[].map(contact => (
                    <Message
                        key={contact.login.uuid}
                        firstname={contact.name.first}
                        lastname={contact.name.last}
                        url={contact.picture.thumbnail}
                    />
                ))}
            </List>
            <div style={{position: 'fixed', right: 10, bottom: 10}}>
                <Fab
                    color="primary"
                    aria-label="add"
                    onClick={handleToggleContacts}
                >
                    <MessageIcon />
                </Fab>
            </div>
            {openContacts && (
                <Contacts
                    open={openContacts}
                    handleClose={handleToggleContacts}
                />
            )}
        </div>
    );
}
