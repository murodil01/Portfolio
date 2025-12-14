import { useEffect, useState } from "react";
import { CircleFadingArrowUp } from "lucide-react";

const FloatingMenu = () => {
  const [visible, setVisible] = useState(false);

  // 🔹 Scroll bo‘lsa ko‘rinsin
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 🔹 Tepaga qaytarish
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        bg-linear-to-r from-[#13B0F5] to-[#CA24B4]
        text-white
        flex items-center justify-center
        shadow-lg
        hover:scale-110
        hover:shadow-xl
        transition-all duration-300
      "
    >
      <CircleFadingArrowUp className="w-7 h-7" />
    </button>
  );
};

export default FloatingMenu;
