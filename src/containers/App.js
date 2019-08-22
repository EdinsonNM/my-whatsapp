import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import './App.css';

import {NotificationProvider} from '../context/notification.context';
import {ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core';
import AppRoutes from './App.routes';
import DefaultTheme from '../constants/themes/default';
import {Provider} from 'react-redux';
import store from '../redux/store';
const theme = createMuiTheme(DefaultTheme);
function App() {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <NotificationProvider>
                    <div className="App">
                        <Router>
                            <AppRoutes />
                        </Router>
                    </div>
                </NotificationProvider>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
