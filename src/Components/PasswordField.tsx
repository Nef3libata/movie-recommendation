import { VisibilityOff, Visibility } from '@mui/icons-material';
import {FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton} from '@mui/material'



type PasswordFieldProps = {
    showPassword: boolean;
    handleClickShowPassword: () => void;
    handleMouseDownPassword: (event: React.MouseEvent) => void;
}

export const PasswordField: React.FC<PasswordFieldProps> = ({ showPassword, handleClickShowPassword, handleMouseDownPassword }) => (
    <FormControl sx={{ mb: '32px', width: '340px' }} variant="outlined">
        <InputLabel sx={{ color: '#454545', fontWeight: 'bold' }} htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
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
        />
    </FormControl>
);