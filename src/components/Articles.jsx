import React, { useEffect, useRef } from 'react';
import { ExternalLink, Calendar } from 'lucide-react';
import { articlesData } from '../data/articlesData';

const ArticleCard = ({ article }) => {
  return (
    <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
      <div className="h-48 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-gray-400 text-sm mb-3">
          <Calendar size={14} className="mr-1" />
          <span>{article.date}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2">{article.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
        
        <a 
          href={article.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          <span>Read on Medium</span>
          <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

const Articles = () => {
  const articlesRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          articlesRef.current.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.2,
      }
    );
    
    if (articlesRef.current) {
      observer.observe(articlesRef.current);
    }
    
    return () => {
      if (articlesRef.current) {
        observer.unobserve(articlesRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="articles" 
      ref={articlesRef}
      className="py-20 md:py-28 transition-all duration-1000 opacity-0 translate-y-10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Contributions</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://medium.com/@xagorarisalexander" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 text-white font-medium border border-blue-600/30 transition transform hover:scale-105 hover:shadow-lg"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Articles;