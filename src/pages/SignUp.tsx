import React from 'react';
import { useFormik } from 'formik';
import { theme } from '/src/core/materialconfig/theme.tsx'
import { PasswordField } from '../components/PasswordField';

import { Box, Grid, ThemeProvider, Typography, TextField, Button, CssBaseline } from '@mui/material';
import { registerUser } from '../core/api/Authentication';



export default function SignUpForm() {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const formik = useFormik({
        initialValues: {
            phoneNumber: '',
            email: '',
            password: '',
            repeatPassword: '',
        },
        onSubmit: values => {
            registerUser(values)
        },
    })

    return (
        <ThemeProvider theme={theme}>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={formik.handleSubmit}
                sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-between' }}
            >
                <CssBaseline />
                <Grid container direction="column" alignItems="center" >
                    <Typography>sign up</Typography>

                    <TextField
                        id="outlined-number"
                        label="Phone Number"
                        type="tel"
                        name='phoneNumber'
                        onChange={formik.handleChange}
                        value={formik.values.phoneNumber}
                    />

                    <TextField
                        id="email"
                        label="Email"
                        type='email'
                        name='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />

                    <PasswordField
                        showPassword={showPassword}
                        handleClickShowPassword={handleClickShowPassword}
                        handleMouseDownPassword={handleMouseDownPassword}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />

                    <TextField
                        id="outlined-repeat-password-input"
                        label="Repeat Password"
                        type="password"
                        name='repeatPassword'
                        autoComplete="current-password"
                        onChange={formik.handleChange}
                        value={formik.values.repeatPassword}
                    />

                </Grid>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    <Button variant="contained" type="submit" color='primary' sx={{ mb: 2 }}>sign up</Button>
                    <Button variant="outlined" type="submit" color='secondary' sx={{ mb: 2 }}>login</Button>

                </Box>
            </Box >
        </ThemeProvider>

    );
}