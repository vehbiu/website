interface Project {
    title: string;
    description: string;
    url?: string;
    gh?: string;
}

function ProjectCard({ title, description, url, gh }: Project) {
    return (
        <div className="bg-gray-500 bg-opacity-10 text-white border border-gray-700 shadow-lg rounded-lg p-4">
            <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
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

export default function Projects({ projects }: { projects: Project[] }) {
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

