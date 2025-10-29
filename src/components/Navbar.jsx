import React from "react";
import logo from "../assets/logo.jpg";
import { navItems } from "../constant/index";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* 1. LEFT COLUMN: Logo and Name */}
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
            <span className="text-xl tracking-right">Company Name</span>
          </div>

          {/* 2. CENTER COLUMN: Navigation Links */}
          {/* flex-grow allows this container to take up all available space.
          justify-center then centers the UL within this expanded space.
          hidden/lg:flex ensures this centering only happens on large screens.
      */}
          <div className="flex-grow justify-center hidden lg:flex">
            <ul className="flex space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. RIGHT COLUMN: Sign In and Create Account Buttons */}
          <div className="hidden lg:flex justify-center space-x-4 items-center flex-shrink-0">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white"
              // Added 'text-white' for better contrast on the orange button
            >
              Create an Account
            </a>
          </div>
          <div alt="drawer" className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleDrawer}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden text-white">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white"
              >
                Create an Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
