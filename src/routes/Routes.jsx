import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Layout from "../Layout/Layout";
import ErrorPage from "../pages/ErrorPage";
import MyBooking from "./../pages/MyBooking";
import Blogs from "./../pages/Blogs";
import ContactUs from "./../pages/ContactUs";
import DoctorsDetails from "../pages/DoctorsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader:()=>fetch('../doctors.json'),
        hydrateFallbackElement:<p>Loading</p>,
        Component: Home,
      },
      {
        path: "/booking",
        Component: MyBooking,
      },
      {
        path: "/blogs",
        Component: Blogs,
      },
      {
        path: "/contact",
        Component: ContactUs,
      },
      {
        path:'/doctor-details/:id',
        loader:()=>fetch('../doctors.json'),
        hydrateFallbackElement:<p>Loading</p>,
        Component: DoctorsDetails
      }
    ],
  },
]);
