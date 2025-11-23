import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isHome ? "bg-transparent text-white" : "bg-white text-blue-700 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-left">
        <NavLink to="/" className="flex items-center gap-3 mr-9">
          <img src="LRP-Logo.png" alt="logo" className="h-24 w-auto transition-transform duration-300 hover:scale-105" />
        </NavLink>

        <ul className="hidden md:flex gap-6 items-center font-medium">

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full transition-all duration-300 ${
                isActive
                  ? isHome
                    ? "bg-white/20 text-white font-semibold"
                    : "bg-blue-100 text-blue-700 font-semibold"
                  : isHome
                  ? "text-white hover:bg-white/10"
                  : "text-blue-700 hover:bg-blue-50"
              }`
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/product"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full transition-all duration-300 ${
                isActive
                  ? isHome
                    ? "bg-white/20 text-white font-semibold"
                    : "bg-blue-100 text-blue-700 font-semibold"
                  : isHome
                  ? "text-white hover:bg-white/10"
                  : "text-blue-700 hover:bg-blue-50"
              }`
            }
          >
            Product
          </NavLink>
        </ul>

        {/* hamburger */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div
          className={`md:hidden px-6 py-4 border-t shadow transition-all duration-300 ${
            isHome ? "bg-transparent text-white" : "bg-white text-blue-700"
          }`}
        >
          <NavLink
            onClick={() => setOpen(false)}
            to="/about"
            className="block py-2 px-4 rounded-full hover:bg-blue-100"
          >
            About Us
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/product"
            className="block py-2 px-4 rounded-full hover:bg-blue-100"
          >
            Product
          </NavLink>
        </div>
      )}
    </nav>
  );
}
