// "use client"
import React, { createElement } from 'react';
import { ChevronDown } from 'lucide-react';
import contact from '@/data/contact';
import { MotionDiv, MotionH1, MotionP } from '../motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 overflow-hidden">
      <MotionDiv
        className="absolute inset-0 bg-black opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
      />
      <div className="text-center z-10 max-w-4xl px-4">
        <MotionH1
          className="text-5xl md:text-7xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Vehbi
        </MotionH1>
        <MotionP
          className="text-xl md:text-2xl mb-6 text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          High School Student | Developer | Tech Enthusiast
        </MotionP>
        <MotionDiv
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.8 }}
        >
          {contact.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white bg-opacity-10 rounded-full px-4 py-2 hover:bg-opacity-20 transition duration-300"
            >
              {createElement(item.icon, { size: 20, className: 'mr-2 text-indigo-400' })}
              <span className="text-white">{item.name}</span>
            </a>
          ))}
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-100 transition duration-300 shadow-lg"
          >
            View My Work
          </a>
          {/* <a href="#contact" className="inline-block ml-4 text-white hover:text-indigo-200 transition duration-300">
            My Resume
          </a> */}
        </MotionDiv>
      </div>
      <Link href="#about">
        <MotionDiv
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={40} />
        </MotionDiv>
      </Link>
    </section>
  );
};

export default Hero;