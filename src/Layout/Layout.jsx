import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-288px)] bg-base-200">
        <div className="max-w-screen-96 mx-auto px-8 md:px-12 lg:px-16 xl:24">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
