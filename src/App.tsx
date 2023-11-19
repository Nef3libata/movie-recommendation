import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FormPropsTextFields from './pages/SignUp'
import Login from './pages/Login'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<FormPropsTextFields />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
