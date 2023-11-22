import React from 'react';
import { useFormik } from 'formik';
import { theme } from '../core/materialconfig/theme';
import { PasswordField } from '../core/SharedComponents/PasswordField';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { LoginValuesPayload } from '@/core/models/api/login.model';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { Box, Grid, ThemeProvider, Typography, TextField, Button, CssBaseline, CircularProgress } from '@mui/material';
import { loginUser } from '../core/api/Authentication';
import { openSnackbar } from '../state/actionCreators';



export default function LoginForm() {

    const [showPassword, setShowPassword] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const navigate = useNavigate();

    const formik = useFormik<LoginValuesPayload>({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required("Required")
        }),
        onSubmit: values => {
            setIsLoading(true)
            loginUser(values)
                .then(() => {
                    dispatch(openSnackbar('Logged in successfuly!', 'success'))
                    navigate('/profile')
                })
                .catch((error) => {
                    dispatch(openSnackbar(error.response.data, 'error'))
                })
            .finally(() => {
                setIsLoading(false)
            })
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
                    <Typography>login</Typography>

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

                </Grid>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    <Button variant="contained" type="submit" color='primary' sx={{ mb: 2 }}>
                        {isLoading ? <CircularProgress size={24} /> : 'login'}
                    </Button>

                    <Button variant="outlined" type="submit" color='secondary' sx={{ mb: 2 }} onClick={() => navigate('/signup')}>sign up</Button>

                </Box>
            </Box >
        </ThemeProvider>

    );
}