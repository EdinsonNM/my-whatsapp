import React from 'react';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import {Search, MoreVert} from '@material-ui/icons';
import {Switch, Route} from 'react-router-dom';
export default function Header() {
    return (
        <AppBar color="primary" position="relative" elevation={0}>
            <Toolbar>
                <Switch>
                    <Route
                        path="/main/contactos"
                        component={() => (
                            <Typography>Whatsapp - Contactos</Typography>
                        )}
                    />
                    <Route
                        path="/main/estados"
                        component={() => (
                            <Typography>Whatsapp - Estados</Typography>
                        )}
                    />
                    <Route
                        path="/main/llamadas"
                        component={() => (
                            <Typography>Whatsapp - Llamadas</Typography>
                        )}
                    />
                </Switch>
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
