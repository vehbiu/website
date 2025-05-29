"use client";

import Link from 'next/link';
import contact from '@/data/contact';

import React, { createElement, useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, MapPin } from 'lucide-react';
import { MotionDiv, MotionH1, MotionP } from '../motion';

const GeometricBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>

    <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-emerald-400/50 rotate-45 animate-spin-slow"></div>
    <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-purple-400/50 rounded-full animate-bounce-slow"></div>
    <div className="absolute top-1/2 right-1/6 w-3 h-3 bg-cyan-400/50 animate-ping"></div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <GeometricBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col gap-8">
        <MotionDiv
          className="flex items-center justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="flex items-center space-x-2 text-slate-400">
            <MapPin size={16} />
            <span className="text-sm">Chicago, IL</span>
          </div>
          <span className="text-slate-400">|</span>
          {/* <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div> */}
          <div className="flex items-center space-x-2 text-slate-400">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-sm">Available for opportunities</span>
          </div>
        </MotionDiv>

        <div className="flex flex-col gap-6">
          <MotionH1
            className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Vehbi Unal
          </MotionH1>

          <MotionP
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            High School Student | Developer | Tech Enthusiast
          </MotionP>
        </div>

        <MotionDiv
          className="flex flex-wrap justify-center gap-6"
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
              className="group flex items-center space-x-3 px-6 py-3 bg-slate-800/75 backdrop-blur-sm border border-slate-700/75 rounded-full hover:border-emerald-400/75 hover:bg-slate-700/75 transition-all duration-300"
            >
              {createElement(item.icon, {
                size: 20,
                className: 'text-slate-400 group-hover:text-emerald-400 transition-colors duration-300'
              })}
              <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                {item.name}
              </span>
            </a>
          ))}
        </MotionDiv>

        <MotionDiv
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="group flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 rounded-full font-semibold text-md hover:shadow-2xl hover:shadow-emerald-400/25 hover:scale-105 transition-all duration-300"
          >
            <span>View My Work</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#about"
            className="flex items-center justify-center space-x-3 px-8 py-4 border border-slate-600 text-slate-300 rounded-full font-semibold text-md hover:border-slate-500 hover:text-white transition-all duration-300"
          >
            <span>Learn More</span>
          </a>
        </MotionDiv>
      </div>

      <Link href="#about">
        <MotionDiv
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} />
        </MotionDiv>
      </Link>
    </section>
  );
};

export default Hero;