import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

// Import images
import project1 from "../../assets/images/projects/project1.png";
import project2 from "../../assets/images/projects/project2.svg";
import project3 from "../../assets/images/projects/project3.png";
import project4 from "../../assets/images/projects/project4.svg";
import project5 from "../../assets/images/projects/project5.png";

const projects = [
  {
    id: 1,
    title: "M Company",
    description:
      "A comprehensive admin dashboard with advanced management features and intuitive user interface.",
    image: project1,
    previewLink: "https://www.mprototype.uz/login",
    codeLink: "https://github.com/murodil01/admin.git",
  },
  {
    id: 2,
    title: "Dr Ozoda Hamidullaevna",
    description:
      "Professional economic website showcasing services and expertise with modern design.",
    image: project2,
    previewLink: "https://www.drozodayuldasheva.com/",
    codeLink: "https://github.com/murodil01/Ozoda_Hamidullaevna.git",
  },
  {
    id: 3,
    title: "Algo School Website",
    description:
      "Educational platform for programming and algorithm courses with interactive learning features.",
    image: project3,
    previewLink: "https://www.algoschool.uz/",
    codeLink: "https://github.com/bobur22/algo_school_frontend.git",
  },
  {
    id: 4,
    title: "TUIT Student Union",
    description:
      "Dynamic student portal for university activities, events, and community engagement.",
    image: project4,
    previewLink: "https://www.studentunion.uz/",
    codeLink: "https://github.com/murodil01/Student-Union.git",
  },
  {
    id: 5,
    title: "Falco Community Website",
    description:
      "Community-driven platform connecting members and facilitating collaboration.",
    image: project5,
    previewLink: "https://www.falco.uz/",
    codeLink: "https://github.com/murodil01/falco.uz.git",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // Update cards per slide on resize
  useEffect(() => {
    const updateCards = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsPerSlide(1); // mobile
      else if (width < 768) setCardsPerSlide(2); // tablet
      else setCardsPerSlide(3); // desktop
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % projects.length);
        setTimeout(() => setIsAnimating(false), 500); // animation duration
      }
    }, 4000); // har 4 sekundda slide o'zgaradi

    return () => clearInterval(interval); // cleanup
  }, [isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < cardsPerSlide; i++) {
      const index = (currentIndex + i) % projects.length;
      visible.push(projects[index]);
    }
    return visible;
  };

  return (
    <div id="projects" className="min-h-screen py-20">
      <div className="max-w-305 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-2">
            Projects
          </h3>
          <p className="mb-8 text-base sm:text-lg md:text-xl lg:text-[32px] font-normal">
            Things I’ve built so far
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-purple-400 to-pink-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4`}
        >
          {getVisibleProjects().map((project, idx) => (
            <div
              key={`${project.id}-${currentIndex}-${idx}`}
              className="group relative shadow-2xl bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
            >
              <div className="relative flex items-center justify-center h-60 overflow-hidden">
                {project.previewLink ? (
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex items-center justify-center"
                  >
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-50 object-contain cursor-pointer"
                      />
                    )}
                  </a>
                ) : (
                  project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-50 object-contain"
                    />
                  )
                )}
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-[18px] md:text-[24px] font-bold">
                  {project.title}
                </h3>
                <p className="leading-relaxed h-18 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex gap-3 pt-4 flex-wrap">
                  {project.previewLink && (
                    <a
                      href={project.previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 text-white bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Preview
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-[#42446E] flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      <Github className="w-4 h-4" /> View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            aria-label="prev"
            onClick={prevSlide}
            disabled={isAnimating}
            className="bg-white/10 backdrop-blur-md hover:bg-white/20 p-4 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            aria-label="next"
            onClick={nextSlide}
            disabled={isAnimating}
            className="bg-white/10 backdrop-blur-md hover:bg-white/20 p-4 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-12 h-3 bg-linear-to-r from-purple-400 to-pink-400"
                  : "w-4 h-4 bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              style={{ minWidth: "20px", minHeight: "20px" }} // mobil uchun
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
