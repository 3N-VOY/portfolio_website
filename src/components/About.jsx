import React, { useEffect, useRef } from "react";
import mainImage from "../assets/main.jpg";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutRef.current.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 md:py-28 bg-gray-900/30 backdrop-blur-sm transition-all duration-1000 opacity-0 translate-y-10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            About Me
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6 rounded-2xl backdrop-blur-sm border border-gray-700/50">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Software Engineer and AI Enthusiast with a
                focus on building innovative and impactful digital solutions.
                With a strong foundation in computer science and a commitment to
                continuous learning, I strive to develop technologies that drive
                progress, enhance user experiences, and solve real-world
                challenges through thoughtful engineering and design.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-3">
                Profile Summary
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-200">
                      Based in Athens, Greece
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </span>
                    <span className="text-gray-200">
                      University of Derby scholarship recipient
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                    </span>
                    <span className="text-gray-200">
                      Developer Operations Engineer at OTE Group of Companies
                      (HTO)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-800 shadow-xl">
                <img
                  src={mainImage}
                  alt="Alexander Xagoraris"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
