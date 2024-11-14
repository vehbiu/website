import Link from 'next/link';
import { ExternalLink, Star } from 'lucide-react';
import { SiGithub as Github } from '@icons-pack/react-simple-icons';
import React from 'react';
import { Project } from '@/lib/types';
import { MotionDiv } from '../motion';

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <MotionDiv
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
        </MotionDiv>
    );
};