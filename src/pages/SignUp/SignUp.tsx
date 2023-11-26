import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { PatternFormat } from 'react-number-format';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import CircularLoading from '@/core/SharedComponents/CircularLoading';
import { PasswordField } from '../../core/SharedComponents/PasswordField';
import { registerUser } from '../../core/api/Authentication';
import { openSnackbar } from '../../state/actionCreators';
import { signUpValidationSchema } from './definitions';
import { UserValuesFormikModel } from './register.model';
import { StyledFormBox, StyledBox } from '@/core/materialconfig/styles';


export default function SignUpForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)

    const formik = useFormik<UserValuesFormikModel>({
        initialValues: {
            phoneNumber: '',
            email: '',
            password: '',
            repeatPassword: '',
        },
        validationSchema: signUpValidationSchema,
        onSubmit: (values) => handleSignUp(values),
    })

    const handleSignUp = (values: UserValuesFormikModel) => {
        setIsLoading(true)
        registerUser(values)
            .then(() => {
                navigate('/');
                dispatch(openSnackbar('Signed up successfuly!', 'success'))
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
        >
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
                    format="09#########"
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
            <StyledBox>

                <Button variant="contained" type="submit" color='primary'>
                    {isLoading ? <CircularLoading /> : 'sign up'}

                </Button>
                <Button variant="outlined" type="submit" color='secondary' onClick={() => navigate('/')}>login</Button>

            </StyledBox>
        </StyledFormBox >

    );
}