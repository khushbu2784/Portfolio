import { RiCloseFill, RiMenuFill, RiSunLine, RiMoonLine } from "@remixicon/react";
import { useState, useEffect } from "react";
import { LINKS } from "../constants";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 md:px-8 bg-stone-900/30 backdrop-blur-md rounded-b-xl shadow-md">
        {/* Logo */}
        <div className="text-pink-400 text-2xl font-extrabold tracking-wide uppercase hover:text-white transition">
          <a href="/">Khushbu Parmar</a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white hover:text-pink-300 transition text-lg font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3 text-white">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <RiCloseFill className="w-7 h-7" /> : <RiMenuFill className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-stone-900/30 backdrop-blur-lg p-4 rounded-b-xl mx-4 mt-1 space-y-4 text-center">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={handleLinkClick}
              className="block text-white hover:text-pink-300 transition text-lg"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
