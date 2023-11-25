import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { Grid, Typography, TextField, Button, CircularProgress } from '@mui/material';
import * as Yup from 'yup';
import { PasswordField } from '../core/SharedComponents/PasswordField';
import { loginUser } from '../core/api/Authentication';
import { openSnackbar } from '../state/actionCreators';
import { LoginValuesPayload } from '@/core/models/api/login.model';
import { StyledBox, StyledFormBox } from '@/core/materialconfig/styles';



export default function LoginForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)

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
        onSubmit: (values) => handleLogin(values),
    })

    const handleLogin = (values: LoginValuesPayload) => {
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
    }

    return (
        <StyledFormBox
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-between' }}
        >
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
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />

            </Grid>

            <StyledBox>
                <Button variant="contained" type="submit" color='primary'>
                    {isLoading ? <CircularProgress size={24} color='info' thickness={3.6} /> : 'login'}
                </Button>

                <Button variant="outlined" type="submit" color='secondary' onClick={() => navigate('/signup')}>sign up</Button>

            </StyledBox>
        </StyledFormBox >
    );
}