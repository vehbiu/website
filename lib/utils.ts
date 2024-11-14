import { Project, Repository } from "./types";

export function cn(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}


const EMOJI_RANGES = [
    "\ud83c[\udf00-\udfff]",
    "\ud83d[\udc00-\ude4f]",
    "\ud83d[\ude80-\udeff]",
];

export function isEmoji(str: string) {
    return str.match(EMOJI_RANGES.join("|")) !== null;
};

export async function fetchGitHubProjects(): Promise<Project[]> {
    try {
        const response = await fetch("https://api.github.com/users/vehbiu/repos");

        if (!response.ok) {
            throw new Error('Failed to fetch projects');
        }

        const data: Repository[] = await response.json();

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

        return filteredData.map(item => ({
            title: item.name,
            description: item.description || "No description provided",
            language: item.language,
            url: item.homepage || "",
            gh: item.html_url,
            topics: item.topics.filter(topic => topic.length > 3 && !item.language.toLowerCase().includes(topic.toLowerCase())).slice(0, 2),
            stars: item.stargazers_count > 3 ? item.stargazers_count : undefined,
        }));
    } catch {
        return [];
    }
};
