import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `hover:text-white transition ${isActive ? "text-white" : "text-neutral-400"}`;

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-neutral-800 z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="font-semibold">
          Tauseef Shoaib
        </NavLink>
        <div className="flex gap-6 text-sm">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/blogs" className={linkClass}>
            Blogs
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
