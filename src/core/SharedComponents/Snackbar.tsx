import { Snackbar, Alert } from "@mui/material";
import { SnackbarState } from "../models/redux.model";


export default function SnackbarComponent({ isOpen, message, handleClose, severity }: SnackbarState) {

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