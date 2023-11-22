import React from 'react';
import { useFormik } from 'formik';
import { theme } from '../core/materialconfig/theme'
import { PasswordField } from '../core/SharedComponents/PasswordField';
import * as Yup from 'yup';
import { UserValuesFormikModel } from '@/core/models/api/register.model';
import { PatternFormat } from 'react-number-format';
import { Box, Grid, ThemeProvider, Typography, TextField, Button, CssBaseline } from '@mui/material';
import { registerUser } from '../core/api/Authentication';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openSnackbar } from '../state/actionCreators'



export default function SignUpForm() {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formik = useFormik<UserValuesFormikModel>({
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
                    navigate('/');
                    dispatch(openSnackbar('Signed up successfuly!', 'success'))
                })
                .catch((error) => {
                    dispatch(openSnackbar(error.response.data, 'error'))
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
                    <Typography>sign up</Typography>

                    <PatternFormat
                        customInput={TextField}
                        id="outlined-number"
                        label="Phone Number"
                        type="tel"
                        name='phoneNumber'
                        onChange={formik.handleChange}
                        value={formik.values.phoneNumber}
                        error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                        format="09## ### ####"
                        allowEmptyFormatting mask="_"
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
                </Grid>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    <Button variant="contained" type="submit" color='primary' sx={{ mb: 2 }}>sign up</Button>
                    <Button variant="outlined" type="submit" color='secondary' sx={{ mb: 2 }} onClick={() => navigate('/')}>login</Button>

                </Box>
            </Box >
        </ThemeProvider>

    );
}