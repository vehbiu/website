"use server";
import React from 'react';
import Hero from '@/components/home/hero';
import About from '@/components/home/about';
import ProjectList from '@/components/projects/project-list';
import Contact from '@/components/home/contact';
import { fetchGitHubProjects } from '@/lib/utils';

export default async function HomePage() {
  const projects = await fetchGitHubProjects();
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <ProjectList initialProjects={projects} />
      <Contact />
    </div>
  );
};
