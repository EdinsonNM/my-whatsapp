import React from 'react';
import {TextField, Button} from '@material-ui/core';
import * as yup from 'yup';
import useForm from 'react-hook-form';
const schema = yup.object().shape({
    email: yup
        .string()
        .email('Formarto de email es incorrecto')
        .required('Email es requerido'),
    password: yup.string().required()
});
function LoginForm({handleLogin}) {
    const {register, handleSubmit, errors} = useForm({
        validationSchema: schema
    });
    const onSubmit = values => {
        handleLogin(values);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                name="email"
                label="Email"
                fullWidth
                inputProps={{
                    ref: register
                }}
                error={!!errors.username}
            />
            <div style={{color: 'red'}}>
                {errors.username && errors.username.message}
            </div>
            <br />
            <TextField
                type="password"
                name="password"
                label="Contraseña"
                fullWidth
                inputProps={{
                    ref: register
                }}
            />
            <div style={{color: 'red'}}>
                {errors.password && errors.password.message}
            </div>
            <div style={{margin: 10}} />
            <Button type="submit" color="primary" variant="contained" fullWidth>
                Entrar
            </Button>
        </form>
    );
}

export default LoginForm;
