export interface RootState {
  snackbar: SnackbarState;
}

export interface SnackbarState {
  isOpen: boolean;
  message: string;
  severity: string;
}
