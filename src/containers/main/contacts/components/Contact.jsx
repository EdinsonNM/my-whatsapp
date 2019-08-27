import React from 'react';
import {Avatar, ListItemText} from '@material-ui/core';
import {ListItem, ListItemAvatar} from '@material-ui/core';

export default function Contact({url = '', email = '', firstname='', lastname=''}) {
    return (
        <ListItem button>
            <ListItemAvatar>
                <Avatar alt={`${firstname} ${lastname}`} src={url} />
            </ListItemAvatar>
            <ListItemText
                primary={email}
                secondary={`${firstname} ${lastname}`}
            />
        </ListItem>
    );
}
