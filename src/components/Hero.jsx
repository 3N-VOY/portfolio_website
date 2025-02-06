import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const heroRef = useRef(null);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  // Reveal animation on load
  useEffect(() => {
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.classList.add("opacity-100", "translate-y-0");
    }
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative transition-all duration-1000 opacity-0 translate-y-4"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Hi, I'm Alexander Xagoraris
            <br />
            <span className="font-normal">
              Software Engineer & AI Enthusiast
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Transforming Ideas into Powerful Digital Experiences.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="mailto:xagorarisalexander@gmail.com"
              download
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium transition transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
            >
              Contact Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>

            <button
              onClick={scrollToNextSection}
              className="px-8 py-3 rounded-full border border-gray-400 text-gray-300 font-medium transition transform hover:scale-105 hover:border-white hover:text-white flex items-center justify-center gap-2"
            >
              Explore
              <ArrowDown size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToNextSection}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 text-gray-400 hover:text-white hover:border-white transition-colors"
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
