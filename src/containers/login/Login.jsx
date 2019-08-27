import React from 'react';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import LoginForm from './components/login-form';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/actions/login.actions';
import {Redirect} from 'react-router-dom';
export default function Login() {
    const dispatch = useDispatch();
    const {logged} = useSelector(state => state.LoginReducer)
    const handleLogin = ({email, password}) => {
        dispatch(login(email, password));
    };
    if(logged){
        return <Redirect to='/main'/>
    }
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
