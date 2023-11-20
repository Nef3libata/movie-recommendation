import React from 'react';
import { useFormik } from 'formik';
import { theme } from '/src/core/materialconfig/theme.tsx'
import { PasswordField } from '../core/SharedComponents/PasswordField';
import * as Yup from 'yup';

import { Box, Grid, ThemeProvider, Typography, TextField, Button, CssBaseline, Snackbar } from '@mui/material';
import { registerUser } from '../core/api/Authentication';
import { useNavigate } from 'react-router-dom';




export default function SignUpForm() {

    const [showPassword, setShowPassword] = React.useState(false);
    const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            phoneNumber: '',
            email: '',
            password: '',
            repeatPassword: '',
        },
        validationSchema: Yup.object({
            phoneNumber: Yup.number()
                .typeError('Phone number must be a number')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string().required('Required'),
            repeatPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Password must match')
                .required('Required')
        }),
        onSubmit: values => {
            registerUser(values)
                .then(() => {
                    navigate('/login');
                    setIsSnackbarOpen(true)
                }).catch((error) =>
                    console.log(error))
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
                        error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}

                    />

                    <TextField
                        id="email"
                        label="Email"
                        type='email'
                        name='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
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
                        error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
                        helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
                    />

                    <Snackbar open={isSnackbarOpen} autoHideDuration={6000} onClose={() => setIsSnackbarOpen(false)} message="Sign up was successful" />

                </Grid>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    <Button variant="contained" type="submit" color='primary' sx={{ mb: 2 }}>sign up</Button>
                    <Button variant="outlined" type="submit" color='secondary' sx={{ mb: 2 }} onClick={() => navigate('/login')}>login</Button>

                </Box>
            </Box >
        </ThemeProvider>

    );
}