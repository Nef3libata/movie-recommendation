import { useState } from 'react';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material'



type PasswordFieldProps = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string
}

export const PasswordField: React.FC<PasswordFieldProps> =
    ({ onChange, value }) => {

        const [showPassword, setShowPassword] = useState(false);

        const handleClickShowPassword = () => {
            setShowPassword(!showPassword);
        };

        return (
            <FormControl sx={{ mb: '32px', width: '340px' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    onChange={onChange}
                    value={value}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                                sx={{ color: '#454545' }}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                    name='password'
                />
            </FormControl>
        )
    }