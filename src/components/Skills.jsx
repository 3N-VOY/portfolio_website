import React, { useEffect, useRef } from 'react';
import { skillsData } from '../data/skillsData';
import { Code2, Server, Brain, Layers } from 'lucide-react';

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Languages':
      return <Code2 className="w-6 h-6 text-blue-400" />;
    case 'DevOps':
      return <Server className="w-6 h-6 text-purple-400" />;
    case 'AI/Data':
      return <Brain className="w-6 h-6 text-indigo-400" />;
    default:
      return <Layers className="w-6 h-6 text-green-400" />;
  }
};

const SkillCard = ({ skill }) => {
  return (
    <div className="flex items-center gap-3 bg-gray-800/30 rounded-lg p-3 backdrop-blur-sm border border-gray-700/30">
      <div className="flex-shrink-0">
        {skill.icon}
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-200">{skill.name}</span>
          <span className="text-xs text-gray-400">{skill.level}%</span>
        </div>
        <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
            style={{ width: `${skill.level}%` }}
          />
        </div>
      </div>
    </div>
  );
};

const SkillCategory = ({ category, skills }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30 h-full">
      <div className="flex items-center gap-3 mb-6">
        {getCategoryIcon(category)}
        <h3 className="text-xl font-semibold text-white">{category}</h3>
      </div>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skillsRef.current.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.2,
      }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="skills" 
      ref={skillsRef}
      className="py-20 md:py-28 transition-all duration-1000 opacity-0 translate-y-10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Technical Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skillsData).map(([category, skills]) => (
            <SkillCategory 
              key={category} 
              category={category} 
              skills={skills} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;