import React from 'react';
import { useFormik } from 'formik';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

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
            <Grid>

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

                <Button variant="contained" type="submit">Submit</Button>


            </Grid>

        </Box>
    );
}