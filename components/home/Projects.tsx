"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { SiGithub as Github } from '@icons-pack/react-simple-icons';
import Link from 'next/link';

interface Repository {
  name: string;
  description: string;
  homepage: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  fork: boolean;
  archived: boolean;
  topics: string[];
}

interface Project {
  title: string;
  description: string;
  language: string;
  url: string;
  gh: string;
  topics: string[];
  stars?: number;
}

const isEmoji = (str: string) => {
  const ranges = [
    "\ud83c[\udf00-\udfff]",
    "\ud83d[\udc00-\ude4f]",
    "\ud83d[\ude80-\udeff]",
  ];
  return str.match(ranges.join("|")) !== null;
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      className="flex flex-col h-full overflow-hidden bg-gray-800 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex-grow p-6">
        <Link className="mb-2 text-xl font-semibold text-blue-300" href={project.gh} target="_blank">
          {project.title}
        </Link>
        <p className="mb-2 text-gray-300 line-clamp-3">{project.description}</p>

        {/* Language Badge */}
        <div className="flex flex-row flex-wrap items-center gap-2 mt-2">
          {project.language && (
            <div className="px-2 py-1 text-xs font-medium text-gray-300 bg-gray-700 rounded-full">
              {project.language}
            </div>
          )}
          {project.topics.map((topic) => (
            <div key={topic} className="px-2 py-1 text-xs font-medium text-gray-300 bg-gray-700 rounded-full">
              {topic[0].toUpperCase() + topic.slice(1)}
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 mt-auto bg-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            <a href={project.gh} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 transition-colors duration-200 hover:text-blue-300">
              <Github size={18} className="mr-1" />
              <span className="text-sm">GitHub</span>
            </a>
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-green-400 transition-colors duration-200 hover:text-green-300">
                <ExternalLink size={18} className="mr-1" />
                <span className="text-sm">Demo</span>
              </a>
            )}
          </div>
          {project.stars && (
            <span className="flex items-center text-yellow-400">
              <Star size={18} className="mr-1" />
              <span className="text-sm">{project.stars}</span>
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};


const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.github.com/users/vehbiu/repos")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch projects');
        }
        return res.json();
      })
      .then((data: Repository[]) => {
        // Sort by Stars
        data.sort((a, b) => b.stargazers_count - a.stargazers_count);

        // Prefer Descriptions starting w/ Emojis
        data.sort((a, b) => {
          const aDesc = (a.description || "").slice(0, 2);
          const bDesc = (b.description || "").slice(0, 2);
          if (isEmoji(aDesc) && !isEmoji(bDesc)) return -1;
          if (!isEmoji(aDesc) && isEmoji(bDesc)) return 1;
          return 0;
        });

        // Filter out forks, archived repos, and the user's profile repo
        const filteredData = data.filter(item => item.name !== "vehbiu" && !item.fork && !item.archived);

        setProjects(filteredData.map(item => ({
          title: item.name,
          description: item.description || "No description provided",
          language: item.language,
          url: item.homepage || "",
          gh: item.html_url,
          // filter by size, then remove any that incldue the language, and give the top 3
          topics: item.topics.filter(topic => topic.length > 3 && !item.language.toLowerCase().includes(topic.toLowerCase())).slice(0, 2),
          stars: item.stargazers_count > 3 ? item.stargazers_count : undefined,
        })));
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching projects:", error);
        setError('Failed to load projects. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container px-6 mx-auto text-center">
          <h2 className="mb-12 text-4xl font-bold">Loading Projects...</h2>
        </div>
      </section>
    );
  }

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
        <motion.h2
          className="mb-12 text-4xl font-bold text-center text-blue-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;