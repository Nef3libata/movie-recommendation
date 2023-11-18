import { createTheme } from '@mui/material/styles'


const buttonBaseStyle = {
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
        MuiBox: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                    justifyContent: 'space-between'
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