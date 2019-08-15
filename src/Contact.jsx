import React, {useContext} from 'react';
import {
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar
} from '@material-ui/core';
import {NotificationContext} from './context/notification.context';

export default function Contact({firstname, lastname, url}) {
    const {handleOpen} = useContext(NotificationContext);
    const handleOpenNotification = () => {
        handleOpen(`${firstname} ${lastname}`);
    };
    return (
        <ListItem button onClick={handleOpenNotification}>
            <ListItemAvatar>
                <Avatar alt={`${firstname} ${lastname}`} src={url} />
            </ListItemAvatar>
            <ListItemText
                primary={`${firstname} ${lastname}`}
                secondary="cualquier cosa..."
            />
        </ListItem>
    );
}
