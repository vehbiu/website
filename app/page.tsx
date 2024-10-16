import React from 'react';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Projects from '@/components/home/Projects';
import Contact from '@/components/home/Contact';

const App = () => {
  return (
    <div className="min-h-screen text-white bg-gray-900">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};


export default App;