"use client";

import { StarIcon } from "lucide-react";
import { useEffect, useState } from "react";

export interface Project {
    title: string;
    description: string;
    stars?: number;
    url?: string;
    gh?: string;
}

function ProjectCard({ title, description, url, gh, stars }: Project) {
    return (
        <div className="bg-gray-500 bg-opacity-10 text-white border border-gray-700 shadow-lg rounded-lg p-4">
            <div className="flex flex-row items-center justify-between">
                <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
                {stars && (
                    <div className="flex flex-row items-center gap-2">
                        <StarIcon size={18} />
                        <span>{stars}</span>
                    </div>
                )}
            </div>
            <p className="text-gray-300">{description}</p>
            <div className="flex flex-row justify-stretch items-center gap-2 mt-4">
                {url && (
                    <a
                        href={url}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit Project
                    </a>
                )}
                {gh && (
                    <a
                        href={gh}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub Repo
                    </a>
                )}
            </div>
        </div>
    );
}

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([
        {
            title: "vehbi.me",
            description: "My personal website, built with React.js and TailwindCSS.",
            url: "https://vehbi.me",
            gh: "https://github.com/vehbiu/website",
        },
        {
            title: "go-osint",
            description: "A simple OSINT tool written in Go. Supports searching names, usernames, etc.",
            gh: "https://github.com/vehbiu/go-osint",
        },
    ]);

    useEffect(() => {
        const isEmoji = (str: string) => {
            const ranges = [
                "\ud83c[\udf00-\udfff]",
                "\ud83d[\udc00-\ude4f]",
                "\ud83d[\ude80-\udeff]",
            ];
            return str.match(ranges.join("|")) !== null;
        }
        fetch("https://api.github.com/users/vehbiu/repos")
            .then((res) => res.json())
            .then((data) => {
                /* Sort by Stars */
                data.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
                /* Prefer Descriptions starting w/ Emojis */
                data.sort((a: any, b: any) => {
                    if (isEmoji(a.description.slice(0, 2)) && !isEmoji(b.description.slice(0, 2))) return -1;
                    if (!isEmoji(a.description.slice(0, 2)) && isEmoji(b.description.slice(0, 2))) return 1;
                    return 0;
                });
                data = data.filter((item: any) => (item.name !== "vehbiu" && !item.fork && !item.archived));
                setProjects(data.map((item: any) => ({
                    title: item.name,
                    description: item.description,
                    url: item.homepage,
                    gh: item.html_url,
                    stars: (item.stargazers_count > 5) ? item.stargazers_count : undefined,
                })));
            });
    }, []);

    return (
        <div className="mt-5">
            <h2 className="text-3xl font-bold tracking-tight text-white">Projects</h2>
            <p className="text-gray-300 font-semibold mt-2">
                Here are some of my projects. I am always working on something new, so check back often!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {projects.map((item, index) => (
                    <ProjectCard key={index} {...item} />
                ))}
            </div>
        </div>
    );
}

