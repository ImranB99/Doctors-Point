import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="navbar p-0 bg-base-200 shadow-sm max-w-screen-96 mx-auto px-8 md:px-12 lg:px-16 xl:24">
        <div className="navbar-start">
          <div className="dropdown sm:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-30 p-2 shadow"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/booking">My Booking</NavLink>
              <NavLink to="/blogs">Blogs</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </ul>
          </div>
          <Link to="/" className="flex items-center">
            <img className="w-[30px]" src="/src/assets/logo.png" alt="logo" />
            <h1 className="ml-2 text-lg font-semibold">
              Doctors<span className="mr-1"></span>Point
            </h1>
          </Link>
        </div>

        {/* Center */}
        <div className="text-lg font-semibold w-full sm:flex gap-5 justify-center items-center hidden">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/booking">My Booking</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>

        {/* End */}
        <div className="navbar-end">
          <button
            onClick={() => {
              alert("Call: 999");
            }}
            className="btn bg-[#176AE5] text-white rounded-4xl"
          >
            Emergency
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
