import React, {useEffect, useState} from 'react';
import {TextField, Button} from '@material-ui/core';

function LoginForm() {
    const [form, setForm] = useState({});
    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value});
    };
    useEffect(() => {
        console.log(form);
    }, [form]);
    return (
        <div>
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
        </div>
    );
}

export default LoginForm;
