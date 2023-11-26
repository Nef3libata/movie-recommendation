
import SnackbarComponent from './core/SharedComponents/Snackbar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './core/models/redux.model'
import { closeSnackbar } from './state/actionCreators'
import { ThemeProvider } from '@emotion/react'
import { theme } from './core/materialconfig/theme'
import { CssBaseline } from '@mui/material'
import { PageRoutes } from './Routes/Routes'


function App() {

  const snackbar = useSelector((state: RootState) => state.snackbar)
  const dispatch = useDispatch();

  const handleCloseSnackbar = () => {
    dispatch(closeSnackbar())
  }

  return (
    <ThemeProvider theme={theme}>
      <SnackbarComponent isOpen={snackbar.isOpen} message={snackbar.message} handleClose={handleCloseSnackbar} severity={snackbar.severity} />
      <CssBaseline />
      <PageRoutes />
    </ThemeProvider>
  )
}

export default App
