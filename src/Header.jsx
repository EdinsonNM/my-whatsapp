import React from 'react';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import {Search, MoreVert} from '@material-ui/icons';
export default function Header() {
    return (
        <AppBar color="primary" position="relative" elevation={0}>
            <Toolbar>
                <Typography>Whatsapp</Typography>
                <div style={{flexGrow: 1}} />
                <IconButton color="inherit">
                    <Search />
                </IconButton>
                <IconButton color="inherit">
                    <MoreVert />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
