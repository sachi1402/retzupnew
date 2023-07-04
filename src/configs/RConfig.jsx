import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/test/Login/Login";
import Register from '../pages/test/Register/Register'
import Otp from "../pages/test/Otp/Otp";
import PropertyDetails from "../pages/PropertDetails/PropertDetails"
import Accounts from "../pages/Accounts/Accounts";
import AccAddPayment from "../pages/AccAddPayment/AccAddPayment";
import Hoast from "../pages/HoastDetails/Hoast";
import HostForm from "../pages/HostForm/HostForm";
import HostFormStep2 from "../pages/HostForm/HostFormStep2/HostFormStep2";
// import ReviewDetails from "../pages/test/ReviewDetails/ReviewDetils"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/otp",
    element: <Otp/>,
  },
  {
    path: "/Propertydetails",
    element:<PropertyDetails/>},
  {
      path: "/account",
      element:<Accounts/>},
  {
        path: "/Addpayout",
        element:<AccAddPayment/>},
  
        {
          path: "/host",
          element:<Hoast/>},
        {
          path: '/hodtregister',
          element:<HostForm/>
        },
        {
          path: '/hodtregister2',
          element:<HostFormStep2/>
        }
    
  // {
  //     path: "/reviewdetails",
  //     element:<ReviewDetails/>},
]);

export default router;
