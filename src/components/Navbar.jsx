import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const linkClass = (active) =>
    `relative group transition block py-2 ${
      active ? "text-white" : "text-neutral-400"
    }`;

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="w-[min(92vw,960px)] px-6 h-16 flex items-center justify-between rounded-3xl bg-transparent backdrop-blur-2xl border border-white/5 shadow-[0_14px_40px_rgba(0,0,0,0.45)]">
        <NavLink
          to="/"
          className="font-semibold tracking-wide text-lg hover:text-red-700"
        >
          {"<TauseefShoaib/>"}
        </NavLink>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-neutral-300 hover:text-white transition"
          aria-label="Toggle menu"
        >
          <HiOutlineMenuAlt3 className="h-6 w-6" />
        </button>

        {/* Desktop */}
        <div className="hidden md:flex gap-6 text-sm">
          {["Home", "Blogs", "Contact", "Resume"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              end={item === "Home"}
              className={({ isActive }) =>
                linkClass(
                  item === "Blogs" ? pathname.startsWith("/blog") : isActive,
                )
              }
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-2 bg-transparent rounded-3xl px-6 py-4 border border-white/5 shadow-[0_14px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          {["Home", "Blogs", "Contact", "Resume"].map((item) => (
            <NavLink
              key={item}
              onClick={() => setOpen(false)}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              end={item === "Home"}
              className={({ isActive }) =>
                linkClass(
                  item === "Blogs" ? pathname.startsWith("/blog") : isActive,
                )
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
