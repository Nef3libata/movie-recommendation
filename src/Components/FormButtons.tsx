import { Box, CssBaseline, Button } from '@mui/material'
import { theme } from '/src/theme'

export default function FormButtons() {
    return (

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CssBaseline />
            <Button variant="contained" type="submit" color='primary' sx={{ mb: 2 }}>sign up</Button>
            <Button variant="outlined" type="submit" color='secondary' sx={{ mb: 2 }}>login</Button>
        </Box >
    )
}