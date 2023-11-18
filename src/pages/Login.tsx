import React from 'react';
import { useFormik } from 'formik';
import { theme } from '/src/theme'
import { PasswordField } from '../components/PasswordField';

import { Box, Grid, ThemeProvider, Typography, TextField } from '@mui/material';
import FormButtons from '../components/FormButtons';



export default function LoginForm() {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    const formik = useFormik({
        initialValues: {
            phoneNumber: '',
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
            <ThemeProvider theme={theme}>
                <Grid container direction="column" alignItems="center" >
                    <Typography>login</Typography>

                    <TextField
                        id="outlined-number"
                        label="Phone Number"
                        type="tel"
                        onChange={formik.handleChange}
                        value={formik.values.phoneNumber}
                    />

                    <PasswordField showPassword={showPassword} handleClickShowPassword={handleClickShowPassword} handleMouseDownPassword={handleMouseDownPassword} />


                </Grid>
                <FormButtons />
            </ThemeProvider>

        </Box >
    );
}