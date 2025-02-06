import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github as GitHub } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
      <div className="h-48 overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-blue-600/30 to-purple-600/30 flex items-center justify-center">
            <GitHub size={40} className="text-gray-300 opacity-50" />
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-medium rounded-full bg-blue-600/20 text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <GitHub size={16} className="mr-1" />
            <span>GitHub</span>
          </a>
          
          {project.demoLink && (
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink size={16} className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsRef = useRef(null);
  const [visibleProjects, setVisibleProjects] = useState(4);
  
  const loadMoreProjects = () => {
    setVisibleProjects(projectsData.length);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          projectsRef.current.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.2,
      }
    );
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    
    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={projectsRef}
      className="py-20 md:py-28 bg-gray-900/30 backdrop-blur-sm transition-all duration-1000 opacity-0 translate-y-10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Featured Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        {visibleProjects < projectsData.length && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMoreProjects}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 text-white font-medium border border-blue-600/30 transition transform hover:scale-105 hover:shadow-lg"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;