import React from "react";
import useReveal from "../hooks/useReveal";
import Kicker from "./Kicker";
import { expertiseData } from "../data/skillsData";

const Skills = () => {
  const sectionRef = useReveal();

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="py-24 md:py-32 border-t border-line transition-all duration-700 opacity-0 translate-y-6"
    >
      <div className="mx-auto max-w-site px-6 md:px-10">
        <Kicker className="mb-12">Expertise</Kicker>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
          {expertiseData.map((area) => (
            <div
              key={area.title}
              className="group bg-night p-8 md:p-10 transition-colors hover:bg-night-raised"
            >
              <h3 className="font-display text-xl text-bone mb-3">
                {area.title}
              </h3>
              <p className="text-sm text-fog leading-relaxed mb-8">
                {area.description}
              </p>
              <ul className="space-y-2">
                {area.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-[12px] uppercase tracking-label text-faint group-hover:text-fog transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
