import { Box, CssBaseline } from '@mui/material'
import { theme } from '../core/materialconfig/theme'
import { ThemeProvider } from '@emotion/react'

export default function Profile() {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <CssBaseline />
            </Box>

        </ThemeProvider>)
}