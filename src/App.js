import React from 'react';
import './App.css';
import Header from './Header';
import {ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core';
import Container from './Container';
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
function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Header />
                <Container />
            </div>
        </ThemeProvider>
    );
}

export default App;
