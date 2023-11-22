import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from "../actionTypes";

const initialState = { isOpen: false, message: "", severity: "info" };

export const snackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SNACKBAR:
      return {
        ...state,
        isOpen: true,
        message: action.payload.message,
        severity: action.payload.severity,
      };
    case CLOSE_SNACKBAR:
      return {
        ...state,
        isOpen: false,
        message: "",
      };
    default:
      return state;
  }
};
