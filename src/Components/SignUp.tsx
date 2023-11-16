import React from 'react';
import { useFormik } from 'formik';

import { createTheme, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { CssBaseline, Typography } from '@mui/material';


const buttonBaseStyle = {
    width: '340px',
    borderRadius: '100px',
    textTransform: 'none'
}

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'contained', color: 'primary' },
                    style: {
                        ...buttonBaseStyle,
                        backgroundColor: '#D0BCFF',
                        color: '#381E72',
                        ':hover': {
                            backgroundColor: '#D0BCFF'
                        }
                    }
                },
                {

                    props: { variant: 'outlined', color: 'secondary' },
                    style: {
                        ...buttonBaseStyle,
                        color: '#D0BCFF',
                    }
                }
            ]
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    width: '340px',
                    marginBottom: '32px'
                }
            }
        }

    }
});

export default function SignUpForm() {

    const formik = useFormik({
        initialValues: {
            phoneNumber: '',
            email: '',
            password: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-between' }}
        >
            <Grid container direction="column" alignItems="center" >
                <ThemeProvider theme={theme}>
                    <Typography sx={{ mt: '16px', mb: '24px', fontWeight: 'bold' }}>sign up</Typography>

                    <TextField
                        id="outlined-number"
                        label="Phone Number"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.phoneNumber}
                        InputLabelProps={{
                            style: { color: '#454545', fontWeight: 'bold' },
                        }}
                    />

                    <TextField
                        id="email"
                        label="Email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        InputLabelProps={{
                            style: { color: '#454545', fontWeight: 'bold' },
                        }}
                    />

                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        InputLabelProps={{
                            style: { color: '#454545', fontWeight: 'bold' },
                        }}
                    />

                    <TextField
                        id="outlined-repeat-password-input"
                        label="Repeat Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        InputLabelProps={{
                            style: { color: '#454545', fontWeight: 'bold' },
                        }}
                    />

                </ThemeProvider>



            </Grid>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '34px' }}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Button variant="contained" type="submit" color='primary' sx={{ mb: 2 }}>sign up</Button>
                    <Button variant="outlined" type="submit" color='secondary'>login</Button>
                </ThemeProvider>
            </Box>

        </Box >
    );
}