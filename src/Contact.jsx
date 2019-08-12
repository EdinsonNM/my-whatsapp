import React from 'react';
import {
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar
} from '@material-ui/core';

export default function Contact({firstname, lastname, url}) {
    return (
        <ListItem>
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
