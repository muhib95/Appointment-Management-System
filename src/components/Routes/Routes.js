import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import Login from "../Login/Login";
import Register from "../Register/Register";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]

    }
]);