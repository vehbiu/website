import Link from 'next/link';
import { ExternalLink, Star } from 'lucide-react';
import { SiGithub as Github } from '@icons-pack/react-simple-icons';
import React from 'react';
import { Project } from '@/lib/types';
import { MotionDiv } from '../motion';

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <MotionDiv
            className="group bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-2xl overflow-hidden hover:border-emerald-400/30 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-start justify-between mb-4">
                    <Link 
                        className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300" 
                        href={project.gh} 
                        target="_blank"
                    >
                        {project.title}
                    </Link>
                    {project.stars && (
                        <div className="flex items-center space-x-1 text-yellow-400">
                            <Star size={16} fill="currentColor" />
                            <span className="text-sm">{project.stars}</span>
                        </div>
                    )}
                </div>
                
                <p className="text-slate-300 mb-6 leading-relaxed flex-grow">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.language && (
                        <span className="px-3 py-1 bg-emerald-400/20 text-emerald-400 rounded-full text-sm font-medium">
                            {project.language}
                        </span>
                    )}
                    {project.topics.slice(0, 2).map((topic) => (
                        <span
                            key={topic}
                            className="px-3 py-1 bg-slate-600/50 text-slate-300 rounded-full text-sm"
                        >
                            {topic[0].toUpperCase() + topic.slice(1)}
                        </span>
                    ))}
                </div>

                <div className="flex space-x-4 mt-auto">
                    <a
                        href={project.gh}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-300"
                    >
                        <Github size={18} />
                        <span className="text-sm font-medium">Code</span>
                    </a>
                    {project.url && (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-slate-400 hover:text-emerald-400 transition-colors duration-300"
                        >
                            <ExternalLink size={18} />
                            <span className="text-sm font-medium">Live Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </MotionDiv>
    );
}