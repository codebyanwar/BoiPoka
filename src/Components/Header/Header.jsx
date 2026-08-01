import React from "react";
import { Link } from "react-router";

const Header = () => {
  const links = (
    <>
      <Link to="/">
        <li className="text-[#131313] py-3 px-5 border border-solid border-transparent text-[14px] rounded-lg">Home</li>
      </Link>
      <Link to="/about">
        <li className="text-[#131313] py-3 px-5 border border-solid border-transparent text-[14px] rounded-lg">About</li>
      </Link>
    </>
  );
  return (
    <div className="bg-white">
      <div className="lg:w-7xl mx-auto">
        <div className="navbar text-[#131313]">
          <div className="navbar-start space-x-2.5">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="lg:hidden"
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
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow space-y-1"
              >
                {links}
              </ul>
            </div>
            <a className="text-[24px] font-bold uppercase">Boi Poka</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-1.5">{links}</ul>
          </div>
          <div className="navbar-end space-x-2.5">
            <a className="btn bg-[#23BE0A] border-0 text-white shadow-none">Sign In</a>
            <a className="btn bg-[#59C6D2] border-0 text-white shadow-none">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
