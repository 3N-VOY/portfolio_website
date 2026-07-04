import React from "react";
import useReveal from "../hooks/useReveal";
import Kicker from "./Kicker";
import mainImage from "../assets/alex_main.jpg";

const About = () => {
  const aboutRef = useReveal();

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-24 md:py-32 border-t border-line transition-all duration-700 opacity-0 translate-y-6"
    >
      <div className="mx-auto max-w-site px-6 md:px-10">
        <Kicker className="mb-12">About</Kicker>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-7">
            <h2 className="font-display font-medium text-3xl md:text-4xl text-bone leading-snug tracking-tight mb-8 text-balance">
              Technology, science and business, combined to build AI with
              measurable impact.
            </h2>

            <div className="space-y-6 text-fog leading-relaxed text-lg">
              <p>
                AI engineer with a foundation in Computer Science (BSc, First
                Class Honours, University of Derby) and a business perspective
                shaped by an MSc in International Business and Management at
                ALBA Graduate Business School.
              </p>
              <p>
                At OTE Group, part of Deutsche Telekom: working on AI and
                software deployment pipelines, CI/CD workflows, system
                integrations and UAT, keeping enterprise systems that handle
                thousands of daily transactions reliable and efficient.
              </p>
              <p>
                Exploring the social dimension of AI: medical imaging for
                pneumonia detection, diabetes prediction, and an AI fitness
                trainer selected by the ACEin accelerator of the Athens
                University of Economics and Business. Plus selected consulting
                projects and MVP builds for companies that want to put AI and
                software to work.
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="border border-line p-2 transition-colors hover:border-brass/40">
              <img
                src={mainImage}
                alt="Alexander Xagoraris"
                className="w-full object-cover"
              />
            </div>
            <p className="font-mono text-[11px] uppercase tracking-label text-faint mt-4">
              Alexander Xagoraris · Athens, GR
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
