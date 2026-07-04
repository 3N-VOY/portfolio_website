import React from "react";
import useReveal from "../hooks/useReveal";
import Kicker from "./Kicker";
import {
  experienceData,
  educationData,
  statsData,
} from "../data/experienceData";

const Experience = () => {
  const sectionRef = useReveal();

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 md:py-32 border-t border-line transition-all duration-700 opacity-0 translate-y-6"
    >
      <div className="mx-auto max-w-site px-6 md:px-10">
        <Kicker className="mb-12">Experience</Kicker>

        {/* Stats strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-line border border-line mb-20">
          {statsData.map((stat) => (
            <div
              key={stat.label}
              className="bg-night-raised p-8 transition-colors hover:bg-night"
            >
              <p className="font-display font-medium text-4xl md:text-5xl text-brass-bright mb-3">
                {stat.value}
              </p>
              <p className="text-sm text-bone">{stat.label}</p>
              <p className="font-mono text-[11px] uppercase tracking-label text-faint mt-2">
                {stat.note}
              </p>
            </div>
          ))}
        </div>

        {/* Roles */}
        <div className="space-y-16">
          {experienceData.map((job) => (
            <div
              key={job.role}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16"
            >
              <div className="md:col-span-4">
                <p className="font-mono text-[11px] uppercase tracking-label text-faint mb-2">
                  {job.period} · {job.location}
                </p>
                <h3 className="font-display text-xl text-bone leading-snug">
                  {job.role}
                </h3>
                <p className="text-sm text-fog mt-1">{job.company}</p>
              </div>
              <div className="md:col-span-8">
                <p className="text-fog leading-relaxed mb-5">{job.summary}</p>
                {job.highlights.length > 0 && (
                  <ul className="space-y-3">
                    {job.highlights.map((item) => (
                      <li key={item} className="flex gap-4 text-fog">
                        <span
                          className="mt-[9px] h-1.5 w-1.5 bg-brass shrink-0"
                          aria-hidden="true"
                        ></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-20 border-t border-line pt-10">
          <p className="font-mono text-xs uppercase tracking-label text-faint mb-8">
            Education
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {educationData.map((edu) => (
              <div key={edu.degree}>
                <p className="font-mono text-[11px] uppercase tracking-label text-faint mb-2">
                  {edu.period}
                </p>
                <h3 className="font-display text-lg text-bone leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-sm text-fog mt-1">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
