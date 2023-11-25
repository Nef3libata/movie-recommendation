import { createTheme } from '@mui/material/styles'
import { CSSProperties } from '@mui/material/styles/createTypography';

const buttonBaseStyle: CSSProperties = {
    width: '340px',
    borderRadius: '100px',
    textTransform: 'none'
}

export const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'contained', color: 'primary' },
                    style: {
                        ...buttonBaseStyle,
                        backgroundColor: '#D0BCFF',
                        marginBottom: '16px',
                        color: '#381E72',
                        ':hover': {
                            backgroundColor: '#D0BCFF'
                        }
                    }
                },
                {

                    props: { variant: 'outlined', color: 'secondary' },
                    style: {
                        ...buttonBaseStyle,
                        color: '#D0BCFF',
                        marginBottom: '16px',
                    }
                }
            ]
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    width: '340px',
                    marginBottom: '32px'
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    marginTop: '16px',
                    marginBottom: '24px',
                    fontWeight: 'bold'
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#454545',
                    fontWeight: 'bold'
                }
            }
        }

    }
});