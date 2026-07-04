import React from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const credentials = [
  "OTE Group · Deutsche Telekom",
  "BSc First Class Honours · Derby",
  "MSc IB&M · ALBA",
  "ACEin Accelerator · AUEB",
];

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 72,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="min-h-dvh flex flex-col justify-center relative">
      <div className="absolute inset-0 dot-grid" aria-hidden="true"></div>

      <div className="relative mx-auto w-full max-w-site px-6 md:px-10 pt-24">
        <p className="rise rise-1 font-mono text-xs uppercase tracking-label text-brass mb-8">
          AI / Platform Engineer · Athens, Greece
        </p>

        <h1 className="rise rise-2 font-display font-medium text-4xl md:text-6xl lg:text-7xl text-bone leading-[1.05] tracking-tight max-w-4xl mb-8 text-balance">
          Building technology that works in practice,{" "}
          <span className="text-brass-bright">not just in theory.</span>
        </h1>

        <p className="rise rise-3 text-lg md:text-xl text-fog leading-relaxed max-w-2xl mb-12">
          From enterprise platforms at OTE Group (Deutsche Telekom) to
          healthcare AI research and startup products: turning machine
          learning into reliable, working systems.
        </p>

        <div className="rise rise-4 flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-20">
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center gap-2 px-7 py-3 bg-brass text-night font-medium text-sm hover:bg-brass-bright hover:-translate-y-0.5 transition-all"
          >
            Get in touch
            <ArrowUpRight size={16} />
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-label text-fog hover:text-bone transition-colors"
          >
            Selected work
            <ArrowDown size={14} />
          </button>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-site px-6 md:px-10 pb-12">
        <div className="rise rise-4 border-t border-line pt-6 flex flex-wrap gap-x-10 gap-y-3">
          {credentials.map((item) => (
            <span
              key={item}
              className="font-mono text-[11px] uppercase tracking-label text-faint"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
