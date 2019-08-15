import React from 'react';
import './App.css';
import Header from './Header';

import Container from './Container';
import {NotificationProvider} from './context/notification.context';

function App() {
    return (
        <NotificationProvider>
            <div className="App">
                <Header />
                <Container />
            </div>
        </NotificationProvider>
    );
}

export default App;
