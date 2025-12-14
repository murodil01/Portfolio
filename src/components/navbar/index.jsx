import { useState, useEffect } from "react";
import { FaRegMoon } from "react-icons/fa";
import { RiSunFill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const getInitialDarkMode = () => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return savedTheme === "dark" || (!savedTheme && prefersDark);
  };

  const [isDark, setIsDark] = useState(getInitialDarkMode());
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark((prev) => {
      localStorage.setItem("theme", !prev ? "dark" : "light");
      return !prev;
    });
  };

  const menuItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "/about" },
    { label: "Tech Stack", href: "#techno" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`bg_change bg-[#f9f9fd] fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${isScrolled ? "shadow-md" : ""}`}
    >
      <div className="max-w-305 mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="shrink-0">
            <svg width="150" height="40">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#13B0F5", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#CA24B4", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <text
                x="0"
                y="30"
                fontSize="30"
                fontWeight="bold"
                fill="url(#grad1)"
              >
                Mr.Odil
              </text>
            </svg>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-[20px] hover:underline cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Dark mode toggle only for desktop */}
            <button
              aria-labelledby="dark mode"
              onClick={toggleDarkMode}
              className={`relative w-16 h-9 rounded-full p-1 transition-all duration-500 cursor-pointer
                  ${
                    isDark
                      ? "bg-black border border-[#FFB21A]"
                      : "bg-white border border-[#FFB21A]"
                  }`}
              aria-label="Toggle dark mode"
            >
              <div
                className={`absolute top-1 left-1 w-7 h-7 rounded-full flex items-center justify-center transform transition-all duration-500
                    ${
                      isDark
                        ? "translate-x-7 bg-[#FFB21A]"
                        : "translate-x-0 bg-[#FFB21A]"
                    }`}
              >
                {isDark ? (
                  <FaRegMoon className="w-4 h-4 text-white" />
                ) : (
                  <RiSunFill className="w-4 h-4 text-white" />
                )}
              </div>
            </button>

            {/* Hamburger button for mobile */}
            <button
              aria-label="Menu"
              className="md:hidden border-2 p-2  rounded-full focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <IoMenu className="w-6 h-6 " />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#f9f9fd] px-2 pt-2 pb-4 space-y-1 shadow-md">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)} // <-- shu qo‘shildi
              className="block font-medium text-[20px] hover:underline cursor-pointer px-3 py-2"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
