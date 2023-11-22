import { Snackbar, Alert } from "@mui/material";


export default function SnackbarComponent({ isOpen, message, handleClose, severity }) {

    return (
        <Snackbar
            open={isOpen}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert severity={severity} onClose={handleClose}>
                {message}
            </Alert>

        </Snackbar>)
}