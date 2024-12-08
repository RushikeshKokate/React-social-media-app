import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/error";
import Home from "./pages/home";
import Login from "./pages/Login";
import MyPhoto from "./pages/myPhotos";
import MyPost from "./pages/Post";
import Profile from "./pages/Profile";
import Signup from "./pages/SignUp";
import ProtectedRoutes from "./ProtectedRoutes";
import MainPage from "./pages/MainPage";

 export const routes = createBrowserRouter([
    {    
        
        element: <ProtectedRoutes/>,
         children: [
             { path: '/',
                element: <Home/>,
                errorElement: <Error/>
            },
            {
                path: '/Post',
                element: <MyPost/>,
                errorElement: <Error/>,
            },
            {
                path: '/Profile',
                element: <Profile/>,
                errorElement: <Error/>,
            },
            {
                path: '/MyPhotos',
                element: <MyPhoto/>,
                errorElement: <Error/>,   
            }
         ]
    },
    {
        path: '/Signup',
        element: <Signup/>,
        errorElement: <Error/>,
    },
    {
        path: '/Login',
        element: <Login/>,
        errorElement: <Error/>,
    },
    {
        path: '/Main',
        element: <MainPage/>,
        errorElement: <Error/>,
    }
   
 ])

 export default routes