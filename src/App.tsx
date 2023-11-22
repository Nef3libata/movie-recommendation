import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUpForm from './pages/SignUp'
import Login from './pages/Login'
import Profile from './pages/Profile'
import SnackbarComponent from './core/SharedComponents/Snackbar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './core/models/redux.model'
import { closeSnackbar } from './state/actionCreators'

function App() {

  const snackbar = useSelector((state: RootState) => state.snackbar)
  const dispatch = useDispatch();

  const handleCloseSnackbar = () => {
    dispatch(closeSnackbar())
  }

  return (
    <>

      <SnackbarComponent isOpen={snackbar.isOpen} message={snackbar.message} handleClose={handleCloseSnackbar} severity={snackbar.severity}/>
      <Router>
        <Routes>
          <Route path='/signup' element={<SignUpForm />} />
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
