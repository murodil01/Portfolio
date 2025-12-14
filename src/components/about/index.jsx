import { Building, CalendarDays, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="max-w-305 mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-18">
      {/* About Me Section */}
      <div className="mb-16">
        <h3 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[40px] mb-6 ">
          About Me
        </h3>
        <p className="font-normal text-base sm:text-lg md:text-xl lg:text-2xl  leading-relaxed">
          I am a passionate web developer with experience in frontend
          development. I enjoy solving problems, designing user-friendly
          interfaces, and bringing ideas to life through code.
        </p>
      </div>

      {/* Work Experience Section */}
      <div className="mb-16">
        <h3 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[40px] mb-8 ">
          Work Experience
        </h3>
        <div className="border-l-4 border-blue-600 pl-6 py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
            <div className="flex-1">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 ">
                Frontend Web Developer
              </h4>
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-2">
                <p className="flex items-center gap-2 text-sm sm:text-[14px] font-medium ">
                  <Building className="w-4 h-4" /> M Company
                </p>
                <a
                  className="flex items-center gap-2 text-sm sm:text-[14px] font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  href="https://maps.app.goo.gl/zEhdfttMCfNqd3XJ7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-4 h-4" />
                  Tashkent, Uzbekistan
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2 md:gap-3">
              <span className="bg-[#D7FFE0] text-[#018C0F] text-xs sm:text-sm md:text-sm font-semibold py-1.5 px-4 rounded-2xl whitespace-nowrap">
                Full Time
              </span>
              <p className="flex items-center gap-2 text-xs sm:text-sm md:text-[14px] font-medium ">
                <CalendarDays size={18} /> June 2025 - Present
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div>
        <h3 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[40px] mb-8 ">
          Education
        </h3>
        <div className="border-l-4 border-purple-600 pl-6 py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold  flex-1 leading-tight">
              Tashkent University of Information Technologies named after
              Muhammad al-Khwarizmi
            </h4>
            <p className="flex items-center gap-2 text-xs sm:text-sm md:text-[14px] font-medium  whitespace-nowrap">
              <CalendarDays size={18} /> September 2023 - May 2027
            </p>
          </div>

          <p className="font-normal text-sm sm:text-base md:text-lg  mb-3 leading-relaxed">
            Bachelor's degree, ICT in the field of Economics and Management
          </p>

          <a
            className="flex items-center gap-2 text-sm sm:text-[14px] md:text-base font-medium text-blue-600 hover:text-blue-800 transition-colors"
            href="https://maps.app.goo.gl/NXcTmdN7GGP2yrqi9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin className="w-4 h-4" />
            Tashkent University of Information Technologies (TUIT)
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
