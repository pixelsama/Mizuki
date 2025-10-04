// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills
	{
		id: "javascript",
		name: "JavaScript",
		description:
			"Modern JavaScript development, including ES6+ syntax, asynchronous programming, and modular development.",
		icon: "logos:javascript",
		category: "frontend",
		level: "advanced",
		experience: { years: 3, months: 6 },
		projects: ["holiday-tier-list", "WakeUp", "Packing-List", "NoteSync", "StyleAi"],
		color: "#F7DF1E",
	},
	{
		id: "typescript",
		name: "TypeScript",
		description:
			"A type-safe superset of JavaScript that enhances code quality and development efficiency.",
		icon: "logos:typescript-icon",
		category: "frontend",
		level: "advanced",
		experience: { years: 2, months: 8 },
		projects: ["AgentifUI", "Easy-BabelDOC", "Free-Agent-Vtuber", "Micheal024"],
		color: "#3178C6",
	},
	{
		id: "react",
		name: "React",
		description:
			"A JavaScript library for building user interfaces, including Hooks, Context, and state management.",
		icon: "logos:react",
		category: "frontend",
		level: "advanced",
		experience: { years: 2, months: 4 },
		projects: ["AgentifUI", "FinSmart-AI"],
		color: "#61DAFB",
	},
	{
		id: "vue",
		name: "Vue.js",
		description:
			"A progressive JavaScript framework that is easy to learn and use, suitable for rapid development.",
		icon: "logos:vue",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 8 },
		projects: ["Next-Degree"],
		color: "#4FC08D",
	},
	{
		id: "nextjs",
		name: "Next.js",
		description:
			"A production-level React framework supporting SSR, SSG, and full-stack development.",
		icon: "logos:nextjs-icon",
		category: "frontend",
		level: "advanced",
		experience: { years: 1, months: 8 },
		projects: ["AgentifUI"],
		color: "#000000",
	},
	{
		id: "tailwindcss",
		name: "Tailwind CSS",
		description:
			"A utility-first CSS framework for rapidly building modern user interfaces.",
		icon: "logos:tailwindcss-icon",
		category: "frontend",
		level: "advanced",
		experience: { years: 2, months: 0 },
		projects: ["AgentifUI", "mizuki-blog"],
		color: "#06B6D4",
	},
	{
		id: "vite",
		name: "Vite",
		description:
			"Next-generation frontend build tool with fast cold starts and hot updates.",
		icon: "logos:vitejs",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 2 },
		projects: ["Next-Degree"],
		color: "#646CFF",
	},

	// Backend Skills
	{
		id: "nodejs",
		name: "Node.js",
		description:
			"A JavaScript runtime based on Chrome V8 engine, used for server-side development.",
		icon: "logos:nodejs-icon",
		category: "backend",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		projects: ["AgentifUI", "FinSmart-AI"],
		color: "#339933",
	},
	{
		id: "python",
		name: "Python",
		description:
			"A general-purpose programming language suitable for web development, data analysis, machine learning, and more.",
		icon: "logos:python",
		category: "backend",
		level: "advanced",
		experience: { years: 2, months: 4 },
		projects: ["agentifui-pro", "VideoTutor", "NowInOpenHarmony", "Bai-Password-Generator"],
		color: "#3776AB",
	},
	{
		id: "java",
		name: "Java",
		description:
			"A mainstream programming language for enterprise application development, cross-platform and object-oriented.",
		icon: "logos:java",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 8 },
		projects: ["Focus-Grove"],
		color: "#ED8B00",
	},

	// Database Skills
	{
		id: "postgresql",
		name: "PostgreSQL",
		description:
			"A powerful open-source relational database management system.",
		icon: "logos:postgresql",
		category: "database",
		level: "beginner",
		experience: { years: 0, months: 3 },
		color: "#336791",
	},
	{
		id: "sqlite",
		name: "SQLite",
		description:
			"A lightweight embedded relational database, suitable for mobile applications and small projects.",
		icon: "simple-icons:sqlite",
		category: "database",
		level: "beginner",
		experience: { years: 0, months: 3 },
		color: "#003B57",
	},

	// Tools
	{
		id: "git",
		name: "Git",
		description:
			"A distributed version control system, an essential tool for code management and team collaboration.",
		icon: "logos:git-icon",
		category: "tools",
		level: "advanced",
		experience: { years: 3, months: 0 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description:
			"Primary development environment with Claude Code and Cursor extensions for AI-assisted coding.",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "expert",
		experience: { years: 3, months: 6 },
		projects: ["AgentifUI", "Easy-BabelDOC", "Free-Agent-Vtuber", "mizuki-blog"],
		color: "#007ACC",
	},
	{
		id: "claude-code",
		name: "Claude Code",
		description:
			"AI-powered coding assistant integrated with VS Code for intelligent code generation and refactoring.",
		icon: "simple-icons:anthropic",
		category: "tools",
		level: "advanced",
		experience: { years: 0, months: 8 },
		projects: ["AgentifUI", "mizuki-blog"],
		color: "#D4A574",
	},
	{
		id: "cursor",
		name: "Cursor",
		description:
			"AI-first code editor with advanced code completion and chat features for rapid development.",
		icon: "simple-icons:cursor",
		category: "tools",
		level: "advanced",
		experience: { years: 0, months: 6 },
		projects: ["AgentifUI", "Easy-BabelDOC"],
		color: "#000000",
	},
];

// Get skill statistics
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// Calculate total years of experience
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
