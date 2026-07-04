import React from "react";
import { ArrowUpRight } from "lucide-react";
import useReveal from "../hooks/useReveal";
import Kicker from "./Kicker";
import { articlesData } from "../data/articlesData";

const Articles = () => {
  const sectionRef = useReveal();

  return (
    <section
      id="writing"
      ref={sectionRef}
      className="py-24 md:py-32 border-t border-line transition-all duration-700 opacity-0 translate-y-6"
    >
      <div className="mx-auto max-w-site px-6 md:px-10">
        <div className="flex items-center justify-between mb-12">
          <Kicker>Writing</Kicker>
          <a
            href="https://medium.com/@xagorarisalexander"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-label text-fog hover:text-bone transition-colors"
          >
            All articles →
          </a>
        </div>

        <div className="border-b border-line">
          {articlesData.map((article) => (
            <a
              key={article.title}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-16 border-t border-line py-8 transition-colors hover:bg-night-raised"
            >
              <div className="md:col-span-2">
                <p className="font-mono text-[11px] uppercase tracking-label text-faint pt-1">
                  {article.date}
                </p>
              </div>
              <div className="md:col-span-10">
                <h3 className="font-display text-xl text-bone leading-snug mb-2 flex items-start gap-2">
                  {article.title}
                  <ArrowUpRight
                    size={16}
                    className="text-faint group-hover:text-brass group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-1 shrink-0"
                  />
                </h3>
                <p className="text-sm text-fog leading-relaxed max-w-2xl">
                  {article.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
