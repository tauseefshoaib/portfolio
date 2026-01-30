import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative group transition block py-2 ${
      isActive ? "text-white" : "text-neutral-400"
    }`;

  return (
    <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-lg border-b border-neutral-800 z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="font-semibold tracking-wide text-lg">
          Tauseef Shoaib
        </NavLink>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-neutral-300"
        >
          ☰
        </button>

        {/* Desktop */}
        <div className="hidden md:flex gap-6 text-sm">
          {["Home", "Blogs", "Contact", "Resume"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={linkClass}
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/80 border-t border-neutral-800 px-6 py-4">
          {["Home", "Blogs", "Contact", "Resume"].map((item) => (
            <NavLink
              key={item}
              onClick={() => setOpen(false)}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={linkClass}
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
