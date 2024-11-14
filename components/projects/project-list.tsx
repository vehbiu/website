"use client";
import React, { useEffect, useState } from 'react';
import { Project } from '@/lib/types';
import { fetchGitHubProjects } from '@/lib/utils';
import ProjectCard from './project-card';
import { MotionH2 } from '../motion';


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
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container px-6 mx-auto text-center">
          <h2 className="mb-12 text-4xl font-bold">Oops!</h2>
          <p className="text-xl text-red-400">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container max-w-5xl px-6 mx-auto">
        <MotionH2
          className="mb-12 text-4xl font-bold text-center text-blue-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </MotionH2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;