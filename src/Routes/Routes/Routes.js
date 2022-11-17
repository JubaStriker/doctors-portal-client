import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [{
            path: '/',
            element: <Home />
        },
        {
            path: '/home',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/appointment',
            element: <Appointment />
        }
        ]
    }
])
