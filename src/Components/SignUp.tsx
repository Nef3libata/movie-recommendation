import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


export default function SignUpForm() {

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Grid>
                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                />

                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />

                <Button variant="contained">Submit</Button>


            </Grid>

        </Box>
    );
}