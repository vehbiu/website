"use client";

import { MotionH2 } from '../motion';
import { Project } from '@/lib/types';
import ProjectCard from './project-card';
import { Github, ArrowRight } from 'lucide-react';
import { fetchGitHubProjects } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

const ProjectList = ({ initialProjects }: { initialProjects: Project[] }) => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (projects.length > 0) return;
    const fetchProjects = async () => {
      try {
        const projects = await fetchGitHubProjects();
        setProjects(projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError('Failed to load projects. Please try again later.');
      }
    }

    fetchProjects();
  }, [projects]);

  if (error) {
    return (
      <section id="projects" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container px-6 mx-auto text-center">
          <h2 className="mb-12 text-4xl font-bold text-red-400">Oops!</h2>
          <p className="text-xl text-red-400">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <MotionH2
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Featured Projects
            </MotionH2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A selection of projects that showcase my passion for clean code, 
              innovative solutions, and meaningful user experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="https://github.com/vehbiu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 border border-slate-600 text-slate-300 rounded-full font-semibold hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300"
            >
              <Github size={20} />
              <span>View All Projects</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;