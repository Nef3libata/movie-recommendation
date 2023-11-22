import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from "./actionTypes";

export const openSnackbar = (message: string, severity: string) => ({
  type: OPEN_SNACKBAR,
  payload: { message, severity },
});

export const closeSnackbar = () => ({
  type: CLOSE_SNACKBAR,
});
