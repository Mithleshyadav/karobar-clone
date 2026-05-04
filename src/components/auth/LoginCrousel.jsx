import { useEffect, useState } from "react";
import LoginSlider1 from "../../assets/login-slider-1.png";
import LoginSlider2 from "../../assets/login-slider-2.png";
import LoginSlider3 from "../../assets/login-slider-3.png";
import LoginSlider4 from "../../assets/login-slider-4.png";

const slides = [
  {
    img: LoginSlider1,
    title: "Manage your business smarter",
    desc: "Track sales, expenses, and performance\nall in one powerful dashboard.",
  },
  {
    img: LoginSlider2,
    title: "Stay organized effortlessly",
    desc: "Keep your data structured and\naccessible anytime, anywhere.",
  },
  {
    img: LoginSlider3,
    title: "Grow with confidence",
    desc: "Make better decisions with\nreal-time insights and analytics.",
  },
  {
    img: LoginSlider4,
    title: "Simplify your workflow",
    desc: "Automate tasks and focus on\nwhat truly matters for your business.",
  },
];

const LoginCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  // 🔁 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">

      {/* IMAGE */}
      <div className="relative w-full overflow-hidden rounded-xl
                      h-[200px] sm:h-[240px] md:h-[280px] lg:h-[340px]">
        
        {/* Loader Spinner */}
        {!loadedImages[current] && (
          <div className="absolute inset-0 flex items-center justify-center bg-brand-featured/50 backdrop-blur-[2px] z-10 transition-opacity">
            <div className="w-10 h-10 border-4 border-btnprimary/20 border-t-btnprimary rounded-full animate-spin"></div>
          </div>
        )}

        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.img}
              alt={`slide-${index}`}
              onLoad={() => handleImageLoad(index)}
              className={`w-full h-full object-contain flex-shrink-0 transition-opacity duration-500 ${
                loadedImages[index] ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      {/* TEXT */}
      <div className="text-center mt-6 px-4 max-w-md">
        
        {/* Heading */}
        <h1 className="text-white font-semibold mb-3
                       text-lg sm:text-xl md:text-2xl lg:text-2xl">
          {slides[current].title}
        </h1>

        {/* Description */}
        <p className="text-white/60 leading-relaxed whitespace-pre-line
                      text-sm sm:text-base md:text-base">
          {slides[current].desc}
        </p>
      </div>

      {/* DOTS */}
      <div className="flex items-center gap-2 mt-6">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`cursor-pointer transition-all duration-300 rounded-full ${
              current === index
                ? "bg-btnprimary w-6 h-2"
                : "bg-white/30 w-2 h-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default LoginCarousel;


