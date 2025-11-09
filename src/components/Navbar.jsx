// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Services", path: "/services" },
    { name: "Their Stories", path: "/portfolio" },
    { name: "Our Story", path: "/about" },
    { name: "Varnan", path: "/varnan" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-bgpeach/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="V Films Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-serif text-navy font-semibold">
            V&nbsp;Films
          </h1>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 text-navy font-medium ml-auto">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`hover:text-accent transition ${
                  location.pathname === item.path ? "text-accent" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button (Right) */}
        <Link
          to="/contact"
          className="hidden md:inline-block ml-8 px-5 py-2 rounded-full text-white font-medium bg-accent shadow-md hover:shadow-lg transition"
        >
          Let’s Talk
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-navy"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-bgpeach border-t border-gray-200 py-4">
          <ul className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block py-1 ${
                    location.pathname === item.path ? "text-accent" : "text-navy"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <Link
              to="/contact"
              className="inline-block mt-2 px-5 py-2 rounded-full text-white font-medium bg-accent shadow-md hover:shadow-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Let’s Talk
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
