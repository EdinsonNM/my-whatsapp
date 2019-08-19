import React from 'react';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import LoginForm from './components/login-form';

export default function Login() {
    return (
        <div
            style={{
                backgroundColor: '#365F51',
                height: '100vh',
                paddingTop: 20
            }}
        >
            <Card style={{margin: 'auto', maxWidth: 300}}>
                <CardHeader title="Login" />
                <CardContent>
                    <LoginForm />
                </CardContent>
            </Card>
        </div>
    );
}
