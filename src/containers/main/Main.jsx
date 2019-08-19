import React from 'react';
import Header from './components/Header';
import Container from './components/Container';
import MainRoutes from './Main.routes';

export default function Main() {
    return (
        <div className="App">
            <Header />
            <Container>
                <MainRoutes />
            </Container>
        </div>
    );
}
