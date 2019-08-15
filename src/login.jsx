import React, {useState, useEffect} from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    TextField,
    Button
} from '@material-ui/core';

export default function Login() {
    const [form, setForm] = useState({});
    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value});
    };
    useEffect(() => {
        console.log(form);
    }, [form]);
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
                    <TextField
                        name="username"
                        label="Usuario"
                        fullWidth
                        onChange={handleChange}
                    />
                    <TextField
                        name="password"
                        label="contraseña"
                        fullWidth
                        onChange={handleChange}
                    />
                    <div style={{margin: 10}} />
                    <Button color="primary" variant="contained" fullWidth>
                        Entrar
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
