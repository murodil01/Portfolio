import techno1 from "../../assets/images/techno/techno1.svg";
import techno2 from "../../assets/images/techno/techno2.svg";
import techno3 from "../../assets/images/techno/techno3.svg";
import techno4 from "../../assets/images/techno/techno4.svg";
import techno5 from "../../assets/images/techno/techno5.svg";
import techno6 from "../../assets/images/techno/techno6.svg";
import techno7 from "../../assets/images/techno/techno7.svg";
import techno8 from "../../assets/images/techno/techno8.png";

const image = [
  { id: 1, imgSrc: techno1, alt: "HTML5" },
  { id: 2, imgSrc: techno2, alt: "CSS3" },
  { id: 3, imgSrc: techno3, alt: "JavaScript" },
  { id: 4, imgSrc: techno4, alt: "ReactJS" },
  { id: 5, imgSrc: techno5, alt: "Bootstrap" },
  { id: 6, imgSrc: techno6, alt: "Sass" },
  { id: 7, imgSrc: techno7, alt: "Visual Studio Code" },
  { id: 8, imgSrc: techno8, alt: "GitHub" },
];

const Technologies = () => {
  return (
    <div id="techno" className="max-w-305 mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-2">
        My Tech Stack
      </h3>
      <p className="mb-8 text-base sm:text-lg md:text-xl lg:text-[32px] font-normal">
        Technologies I’ve been working with recently
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
        {image.map(({ id, imgSrc, alt }) => (
          <img
            key={id}
            src={imgSrc}
            alt={alt}
            className="w-16 h-16 sm:w-30 sm:h-30 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
