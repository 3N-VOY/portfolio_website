import React from "react";
import { ArrowUpRight } from "lucide-react";
import useReveal from "../hooks/useReveal";
import Kicker from "./Kicker";
import { projectsData, moreProjectsData } from "../data/projectsData";

const ProjectRow = ({ project }) => {
  return (
    <a
      href={project.githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border-t border-line py-10 md:py-12 transition-colors hover:bg-night-raised"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16">
        <div className="md:col-span-4">
          <p className="font-mono text-[11px] uppercase tracking-label text-faint mb-3">
            {project.tagline}
          </p>
          <h3 className="font-display text-2xl text-bone leading-snug flex items-start gap-2">
            {project.title}
            <ArrowUpRight
              size={18}
              className="text-faint group-hover:text-brass group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-1 shrink-0"
            />
          </h3>
        </div>
        <div className="md:col-span-8">
          <p className="text-fog leading-relaxed mb-5">{project.description}</p>
          <p className="font-mono text-[11px] uppercase tracking-label text-faint">
            {project.technologies.join(" · ")}
          </p>
        </div>
      </div>
    </a>
  );
};

const Projects = () => {
  const sectionRef = useReveal();

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-24 md:py-32 border-t border-line transition-all duration-700 opacity-0 translate-y-6"
    >
      <div className="mx-auto max-w-site px-6 md:px-10">
        <Kicker className="mb-12">Selected Work</Kicker>

        <div className="border-b border-line">
          {projectsData.map((project) => (
            <ProjectRow key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-14">
          <p className="font-mono text-xs uppercase tracking-label text-faint mb-6">
            Also built
          </p>
          <div className="flex flex-col gap-3">
            {moreProjectsData.map((project) => (
              <a
                key={project.title}
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-wrap items-baseline gap-x-3 text-fog hover:text-bone transition-colors"
              >
                <span className="font-medium">{project.title}</span>
                <span className="text-sm text-faint group-hover:text-fog transition-colors">
                  {project.description}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
