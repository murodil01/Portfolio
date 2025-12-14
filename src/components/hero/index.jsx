import hero from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <div className="max-w-305 mx-auto px-4 sm:px-6 lg:px-8 py-15 mt-16 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between text-center md:text-left gap-8 md:gap-16">
      {/* Text */}
      <h2 className="font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
        Hi 👋,
        <br /> My name is <br />
        <span className="bg-[linear-gradient(90deg,#13B0F5_-2.06%,#E70FAA_100%)] bg-clip-text text-transparent">
          Murodil Nurmamatov
        </span>
        <br />I build things for web
      </h2>

      {/* Image with gradient border */}
      <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-60 md:h-60 lg:w-72 lg:h-72 p-1">
        {/* Gradient border */}
        <div className="absolute inset-0 rounded-full bg-linear-to-b from-[#E70FAA] to-[#00C0FD] p-1.5">
          {/* Inner image */}
          <div className="w-full h-full rounded-full overflow-hidden bg-white">
            <img
              loading="loader"
              src={hero}
              alt="Person"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
