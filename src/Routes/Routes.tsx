import LoginForm from "@/pages/Login";
import SignUpForm from "@/pages/SignUp";
import Profile from "@/pages/Profile";
import { RouteObject } from 'react-router-dom';



export const routes: RouteObject[] = [
    { path: '/signup', element: <SignUpForm /> },
    { path: "/", element: <LoginForm /> },
    { path: "/profile", element: <Profile /> }
];