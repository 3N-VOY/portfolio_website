import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-night text-bone">
      <div
        className="ambient-right fixed inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
      ></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
