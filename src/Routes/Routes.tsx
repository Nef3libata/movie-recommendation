import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "@/pages/Login/Login";
import SignUpForm from "@/pages/SignUp/SignUp";
import Profile from "@/pages/Profile";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";



export const PageRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<PublicRoute><Login /></PublicRoute>} />
                <Route path='/signup' element={<PublicRoute><SignUpForm /></PublicRoute>} />
                <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            </Routes>
        </Router>
    )
}
