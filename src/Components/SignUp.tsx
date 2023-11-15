import React from 'react';
import { useFormik } from 'formik';

import { createTheme, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { CssBaseline } from '@mui/material';


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
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}
        >
            <Grid container direction="column" alignItems="center">

                <TextField
                    id="outlined-number"
                    label="Phone Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                />

                <TextField
                    required
                    id="email"
                    label="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />

                <TextField
                    id="outlined-repeat-password-input"
                    label="Repeat Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />

                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Button variant="contained" type="submit" color='primary' sx={{ mb: 2 }}>sign up</Button>
                    <Button variant="outlined" type="submit" color='secondary'>login</Button>
                </ThemeProvider>




            </Grid>

        </Box>
    );
}