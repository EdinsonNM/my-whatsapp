import React from 'react';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import LoginForm from './components/login-form';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/actions/login.actions';

export default function Login() {
    const dispatch = useDispatch();
    const handleLogin = ({email, password}) => {
        dispatch(login(email, password));
    };
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
                    <LoginForm handleLogin={handleLogin} />
                </CardContent>
            </Card>
        </div>
    );
}
