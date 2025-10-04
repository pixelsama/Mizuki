// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
}

export const projectsData: Project[] = [
	{
		id: "agentifui",
		title: "AgentifUI",
		description:
			"Enterprise-grade AI chat interface built with Next.js, featuring self-hosted deployment, modern UI, and state management with Zustand.",
		image: "",
		category: "web",
		techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Zustand"],
		status: "in-progress",
		sourceCode: "https://github.com/ifLabX/AgentifUI",
		startDate: "2025-04-29",
		featured: true,
		tags: ["AI", "Enterprise Chat", "Self-hosted", "Open Source"],
	},
	{
		id: "easy-babeldoc",
		title: "Easy-BabelDOC",
		description:
			"Simplified documentation translation tool making multilingual documentation management easier.",
		image: "",
		category: "web",
		techStack: ["TypeScript"],
		status: "completed",
		sourceCode: "https://github.com/pixelsama/Easy-BabelDOC",
		startDate: "2025-07-25",
		endDate: "2025-08-28",
		featured: true,
		tags: ["Documentation", "Translation", "Developer Tools"],
	},
	{
		id: "agentifui-pro",
		title: "AgentifUI Pro",
		description:
			"Advanced Python backend for AgentifUI, providing enhanced AI capabilities and enterprise features.",
		image: "",
		category: "other",
		techStack: ["Python"],
		status: "in-progress",
		sourceCode: "https://github.com/ifLabX/agentifui-pro",
		startDate: "2025-08-25",
		featured: true,
		tags: ["AI", "Backend", "Python", "Enterprise"],
	},
	{
		id: "free-agent-vtuber",
		title: "Free Agent Vtuber",
		description:
			"AI-powered virtual YouTuber system with autonomous interaction capabilities.",
		image: "",
		category: "other",
		techStack: ["TypeScript"],
		status: "in-progress",
		sourceCode: "https://github.com/pixelsama/Free-Agent-Vtuber",
		startDate: "2025-07-13",
		tags: ["AI", "Vtuber", "Interactive"],
	},
	{
		id: "next-degree",
		title: "Next-Degree",
		description:
			"Educational platform built with Vue.js for tracking academic progress and degree planning.",
		image: "",
		category: "web",
		techStack: ["Vue.js"],
		status: "completed",
		sourceCode: "https://github.com/ifLabVibe/Next-Degree",
		startDate: "2025-09-13",
		endDate: "2025-09-20",
		tags: ["Education", "Vue", "Planning"],
	},
	{
		id: "now-in-openharmony",
		title: "NowInOpenHarmony",
		description:
			"OpenHarmony development tools and utilities for modern app development.",
		image: "",
		category: "other",
		techStack: ["Python"],
		status: "completed",
		sourceCode: "https://github.com/ifLabVibe/NowInOpenHarmony",
		startDate: "2025-09-13",
		endDate: "2025-09-24",
		tags: ["OpenHarmony", "Mobile", "Developer Tools"],
	},
	{
		id: "video-tutor",
		title: "VideoTutor",
		description:
			"AI-powered video tutoring system for interactive learning experiences.",
		image: "",
		category: "other",
		techStack: ["Python"],
		status: "completed",
		sourceCode: "https://github.com/pixelsama/VideoTutor",
		startDate: "2025-01-01",
		tags: ["AI", "Education", "Video"],
	},
	{
		id: "focus-grove",
		title: "Focus Grove",
		description:
			"Productivity application built with Java for focused work sessions and task management.",
		image: "",
		category: "desktop",
		techStack: ["Java"],
		status: "completed",
		sourceCode: "https://github.com/pixelsama/Focus-Grove",
		startDate: "2024-06-01",
		tags: ["Productivity", "Desktop", "Focus"],
	},
	{
		id: "finsmart-ai",
		title: "FinSmart AI",
		description:
			"AI-powered financial management tool built with JavaScript for smart budgeting and insights.",
		image: "",
		category: "web",
		techStack: ["JavaScript"],
		status: "completed",
		sourceCode: "https://github.com/pixelsama/FinSmart-AI",
		startDate: "2024-08-01",
		tags: ["AI", "Finance", "Budgeting"],
	},
	{
		id: "holiday-tier-list",
		title: "Holiday Tier List",
		description:
			"Interactive holiday ranking application for creating and sharing holiday tier lists.",
		image: "",
		category: "web",
		techStack: ["JavaScript"],
		status: "completed",
		sourceCode: "https://github.com/ifLabVibe/holiday-tier-list",
		startDate: "2025-09-21",
		endDate: "2025-09-21",
		tags: ["Fun", "Interactive", "Ranking"],
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => techSet.add(tech));
	});
	return Array.from(techSet).sort();
};
