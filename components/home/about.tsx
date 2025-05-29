import React, { createElement } from "react";
import { MotionDiv, MotionH2 } from "../motion";
import techStack from "@/data/tech-stack";
import { Code, Palette, Zap, Globe, Terminal, Coffee } from 'lucide-react';
import Link from "next/link";

const About = () => {
  const highlights = [
    { icon: Code, text: "Full-stack development with modern frameworks", href: "https://studbud.net/" },
    { icon: Palette, text: "UI/UX design with attention to detail", href: "https://vehbi.me/" },
    { icon: Zap, text: "Performance optimization and best practices", href: "https://studbud.net/" },
    { icon: Globe, text: "Open source contributions and collaboration", href: "https://github.com/vehbiu" }
  ];

  return (
    <section id="about" className="py-24 bg-slate-800/50">
      <div className="mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <MotionH2
            className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </MotionH2>

          <MotionDiv
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="space-y-8">
              <div className="prose prose-lg prose-invert">
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  I'm a passionate self-taught developer currently in high school student, living near Chicago. 
                  My passion comes from seeing the result of something I created myself and helps encourage me.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                I'm constantly learning new things, and am open to learn more. 
                Currently, I'm focusing refining my skills and learning new technologies.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    target="_blank"
                    className="flex items-start space-x-3 p-4 bg-slate-700/30 rounded-xl border border-slate-600/30 hover:border-emerald-400/30 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 p-2 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-lg">
                      {createElement(item.icon, { size: 20, className: 'text-emerald-400' })}
                    </div>
                    <p className="text-slate-300 text-sm">{item.text}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Terminal size={24} className="mr-3 text-emerald-400" />
                  Current Focus
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Machine Learning</span>
                    <div className="w-32 bg-slate-600 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Web Development</span>
                    <div className="w-32 bg-slate-600 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">System Design</span>
                    <div className="w-32 bg-slate-600 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-2 rounded-full w-3/5"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Coffee size={20} className="mr-3 text-emerald-400" />
                  Languages & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techStack["📕Languages"].map((skill) => (
                    <a
                      key={skill.name}
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-slate-600/50 text-slate-300 rounded-full text-sm border border-slate-500/30 hover:border-emerald-400/50 transition-colors duration-300"
                    >
                      {skill.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default About;