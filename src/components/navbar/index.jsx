import { useState, useEffect } from "react";
import { FaRegMoon } from "react-icons/fa";
import { RiSunFill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark((prev) => {
      localStorage.setItem("theme", prev ? "light" : "dark");
      return !prev;
    });
  };

  // 🔹 MENU STRUCTURE
  const menuItems = [
    { label: "Home", type: "home", id: "home" },
    { label: "About", type: "route", path: "/about" },
    { label: "Tech Stack", type: "home", id: "techno" },
    { label: "Projects", type: "home", id: "projects" },
    { label: "Contact", type: "global", id: "contact" },
  ];

  const handleHomeScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleGlobalScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`bg-[#f9f9fd] bg_change fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-305 mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div
            className="shrink-0 cursor-pointer"
            onClick={() => handleHomeScroll("home")}
          >
            <svg width="150" height="40">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#13B0F5" />
                  <stop offset="100%" stopColor="#CA24B4" />
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

          {/* UL */}
          <div className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item) =>
              item.type === "route" ? (
                <button
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  className="font-medium text-[20px] hover:underline cursor-pointer"
                >
                  {item.label}
                </button>
              ) : item.type === "global" ? (
                <button
                  key={item.label}
                  onClick={() => handleGlobalScroll(item.id)}
                  className="font-medium text-[20px] hover:underline cursor-pointer"
                >
                  {item.label}
                </button>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleHomeScroll(item.id)}
                  className="font-medium text-[20px] hover:underline cursor-pointer"
                >
                  {item.label}
                </button>
              )
            )}
          </div>

          {/* Right actions */}
          <div className="flex items-center space-x-4">
            {/* Dark mode */}
            <button
              aria-label="Toggle dark mode "
              onClick={toggleDarkMode}
              className={`relative w-16 h-9 rounded-full p-1 transition-all duration-500 cursor-pointer
                ${isDark ? "bg-black" : "bg-white"} border border-[#FFB21A]`}
            >
              <div
                className={`absolute cursor-pointer top-1 left-1 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500
                  ${isDark ? "translate-x-7" : ""} bg-[#FFB21A]`}
              >
                {isDark ? (
                  <FaRegMoon className="w-4 h-4 text-white" />
                ) : (
                  <RiSunFill className="w-4 h-4 text-white" />
                )}
              </div>
            </button>

            {/* Mobile menu */}
            <button
              aria-label="Menu"
              className="md:hidden border-2 p-2 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <IoMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#f9f9fd] bg_change px-2 pt-2 pb-4 shadow-md space-y-1">
          {menuItems.map((item) =>
            item.type === "route" ? (
              <button
                key={item.label}
                onClick={() => {
                  navigate(item.path);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-[20px]"
              >
                {item.label}
              </button>
            ) : item.type === "global" ? (
              <button
                key={item.label}
                onClick={() => handleGlobalScroll(item.id)}
                className="block w-full text-left px-3 py-2 text-[20px]"
              >
                {item.label}
              </button>
            ) : (
              <button
                key={item.label}
                onClick={() => handleHomeScroll(item.id)}
                className="block w-full text-left px-3 py-2 text-[20px]"
              >
                {item.label}
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
