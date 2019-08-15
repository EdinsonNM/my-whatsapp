import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './login';
import App from './App';
import {ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core';
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#365F51',
            contrastText: '#fff'
        },
        secondary: {
            main: '#6AAF50',
            contrastText: '#fff'
        }
    },
    status: {
        danger: 'orange'
    }
});
export default (
    <ThemeProvider theme={theme}>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/main" component={App} />
        </Switch>
    </ThemeProvider>
);
