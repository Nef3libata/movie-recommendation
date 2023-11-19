import { VisibilityOff, Visibility } from '@mui/icons-material';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material'
import React from 'react';



type PasswordFieldProps = {
    showPassword: boolean;
    handleClickShowPassword: () => void;
    handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string
}

export const PasswordField: React.FC<PasswordFieldProps> =
    ({ showPassword, handleClickShowPassword, handleMouseDownPassword, onChange, value }) => (
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
                            onMouseDown={handleMouseDownPassword}
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
    );