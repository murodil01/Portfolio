import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Upper Row: Logo + Contact + Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          {/* Logo */}
          <div className="shrink-0 cursor-pointer mb-4 md:mb-0">
            <svg width="100" height="40">
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

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="tel:+998900940083"
              aria-label="Call phone number"
              className="hover:underline text-base sm:text-lg"
            >
              +998 90 094 00 83
            </a>
            <a
              href="mailto:nurmamatovmirodil978@gmail.com"
              aria-label="Send email"
              className="hover:underline text-base sm:text-lg"
            >
              nurmamatovmirodil978@gmail.com
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-2xl mt-4 md:mt-0">
            <a
              href="https://github.com/murodil01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://t.me/Murodil_N"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram profile"
              className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300"
            >
              <FaTelegram size={24} />
            </a>
            <a
              href="https://linkedin.com/in/murodil01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300 dark:border-gray-700" />

        {/* Lower Row: Links + Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#home"
              className="text-base sm:text-lg hover:underline"
              aria-label="Go to Home section"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-base sm:text-lg hover:underline"
              aria-label="Go to About page"
            >
              About
            </a>
            <a
              href="#techno"
              className="text-base sm:text-lg hover:underline"
              aria-label="Go to Technologies section"
            >
              Technologies
            </a>
            <a
              href="#projects"
              className="text-base sm:text-lg hover:underline"
              aria-label="Go to Projects section"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-base sm:text-lg hover:underline"
              aria-label="Go to Contact section"
            >
              Contact
            </a>
          </div>

          {/* Credits */}
          <p className="text-center md:text-right text-sm sm:text-base mt-2 md:mt-0">
            Designed and built by Murodil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
