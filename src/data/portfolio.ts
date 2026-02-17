export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  features: string[];
  github: string;
  liveUrl?: string;
  color: string;
  year: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: "realtime-chat",
    title: "RealTime Chat App",
    tagline: "Cross-platform real-time messaging with microservices architecture",
    description:
      "A modern, cross-platform real-time chat application built with a microservices architecture. Supports desktop and web browsers via WebAssembly with offline-first caching and Azure SignalR for real-time messaging.",
    techStack: [
      "C#",
      ".NET 10",
      "Avalonia UI",
      "Azure SignalR",
      "Azure Cosmos DB",
      ".NET Aspire",
      "Docker",
      "WebAssembly",
    ],
    features: [
      "Real-time messaging via SignalR with MessagePack binary protocol",
      "Friend management and group chat functionality",
      "Offline-first caching with LiteDB on desktop",
      "Cross-platform: desktop (Windows/macOS/Linux) and browser (WASM)",
      "JWT authentication with BCrypt hashing",
      "Full microservices architecture with Aspire orchestration",
    ],
    github: "https://github.com/ErrolMc/RealTimeChatApp",
    liveUrl: "https://chat.errolsplace.com",
    color: "var(--primary)",
    year: "2025",
    category: "Full-Stack",
  },
  {
    id: "worldle",
    title: "Worldle",
    tagline: "Full-stack Wordle clone with user accounts and daily challenges",
    description:
      "A full-stack implementation of the Wordle word-guessing game with user accounts, daily words, and game history tracking. Features both web and desktop clients with automated CI/CD pipelines.",
    techStack: [
      "React",
      "TypeScript",
      "C#",
      "ASP.NET Core",
      "Azure Cosmos DB",
      "Electron",
      "Vite",
      "Vercel",
    ],
    features: [
      "User registration and login with JWT refresh tokens",
      "Daily word of the day selection",
      "Game result tracking and user history",
      "Desktop builds for Windows, macOS, and Linux via Electron",
      "Automated deployment via Vercel and GitHub Actions",
    ],
    github: "https://github.com/ErrolMc/Worldle",
    liveUrl: "https://wordle.errolsplace.com",
    color: "var(--accent-green)",
    year: "2025",
    category: "Full-Stack",
  },
  {
    id: "music-library",
    title: "Music Library Manager",
    tagline: "Desktop music management with SoundCloud integration",
    description:
      "A cross-platform desktop application for managing music libraries. Browse local audio files, edit metadata, manage album artwork, and integrate with SoundCloud for streaming.",
    techStack: [
      "C#",
      ".NET 10",
      "Uno Platform",
      "WinUI/XAML",
      "NAudio",
      "TagLibSharp",
      "SoundCloud API",
    ],
    features: [
      "Folder browsing with sortable track lists",
      "ID3 metadata editing (title, artist, album, genre, year)",
      "Album art management (view, copy, paste, replace, remove)",
      "Audio playback with seek and volume controls",
      "SoundCloud integration via OAuth 2.0",
      "Change detection to prevent accidental data loss",
    ],
    github: "https://github.com/ErrolMc/MusicLibraryManager",
    color: "var(--accent-yellow)",
    year: "2026",
    category: "Desktop",
  },
  {
    id: "cardz",
    title: "Cardz",
    tagline: "Mobile flashcard app for iOS and Android",
    description:
      "A cross-platform flashcard management application for creating, organizing, and studying flashcards on iOS and Android. Built with React Native and Expo for a seamless mobile experience.",
    techStack: [
      "React Native",
      "TypeScript",
      "Expo",
      "React Navigation",
    ],
    features: [
      "Custom flashcard deck creation and management",
      "Intuitive card creation interface",
      "Study-focused card viewer",
      "JSON-based import/export functionality",
      "Cross-platform iOS and Android support",
      "Modular architecture with React Context state management",
    ],
    github: "https://github.com/ErrolMc/Cardz",
    color: "var(--primary)",
    year: "2024",
    category: "Mobile",
  },
  {
    id: "mortgage-tool",
    title: "Mortgage Tool",
    tagline: "Web-based mortgage calculator with split-mortgage scenarios",
    description:
      "A mortgage calculator web app for computing repayments and modelling complex shared mortgage scenarios between two parties. Features flexible repayment frequencies, extra payment simulations, and preset management for comparing scenarios.",
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Jest",
      "Vercel",
    ],
    features: [
      "Flexible repayment calculations across yearly, monthly, fortnightly, and weekly intervals",
      "Principal vs interest breakdowns at specific mortgage milestones",
      "Dashboard metrics: total interest, principal repaid, equity, and outstanding balance",
      "Extra payment modelling to simulate additional repayment scenarios",
      "Split-mortgage calculator for dual-person shared mortgage planning",
      "Preset system for saving, loading, and comparing calculation scenarios",
    ],
    github: "https://github.com/ErrolMc/MortgageTool",
    liveUrl: "https://mortgages.errolsplace.com",
    color: "var(--accent-green)",
    year: "2025",
    category: "Full-Stack",
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Westpac",
    period: "May 2025 - Present",
    description:
      "Westpac Live digital banking platform — 35M+ line C#/.NET codebase with 100+ active developers.",
    highlights: [
      "Own and enhance components of the Westpac Live digital banking platform in a massive C#/.NET codebase",
      "Design and maintain mission-critical backend services and ASP.NET MVC web forms (Knockout.js, jQuery, Bootstrap) with focus on reliability, security, and performance",
      "Practice CQRS by separating read/write models for critical banking flows, simplifying business logic and testability",
      "Work with React and Next.js alongside existing ASP.NET Web Forms for a new customer-facing banking experience",
      "Maintain APIs that drive a consistent look and feel across iOS and Android apps via a bespoke screen-layout/interaction language",
      "Lead onboarding and upskilling of 4 new developers from Python/Swift/TypeScript backgrounds into C# and API development",
      "Participate in Agile ceremonies and quarterly planning, aligning technical delivery with business priorities and regulatory obligations",
    ],
  },
  {
    role: "Software Developer",
    company: "Multinail",
    period: "Aug 2023 - May 2025",
    description:
      "Cornerstone Software Suite — legacy C#/.NET codebase with millions of lines of code.",
    highlights: [
      "Managed and extended a legacy C#/.NET codebase encompassing millions of lines of code",
      "Translated complex civil engineering specifications into actionable software requirements and features",
      "Applied TDD rigorously — comprehensive unit and integration tests ensuring safety against regressions",
      "Analyzed and resolved client-reported bugs with a proactive, systematic approach to maintain quality",
      "Collaborated closely with three additional teams responsible for different modules within the software suite",
    ],
  },
  {
    role: "Software Engineer II",
    company: "Playside Studios",
    period: "July 2022 - Aug 2023",
    description:
      "Game development — Shiba Eternity, Meta Horizon Worlds, Doc Batman: Bat-Tech Edition.",
    highlights: [
      "Programmed real-time gameplay mechanics and APIs; managed deployments to iOS, Android, Windows, and Nintendo Switch",
      "Wrote and deployed Azure Functions for Azure Playfab data updates and cloud-based player reward calculations",
      "Created net-code for multiplayer compatibility across multiple game titles",
      "Integrated Oculus VR SDK for Unity, developing immersive interaction mechanics and optimizing performance",
      "Contributed to CI/CD pipeline triggering automatic builds on PR merges; employed TDD to reduce QA workload",
    ],
  },
  {
    role: "Lead Software Engineer",
    company: "BailEnemyJet",
    period: "Jan 2018 - July 2022",
    description:
      "Shipped multiple titles — Brawlerz Zombies, OTTTD, Thumbdrift, Fast and Furious: Takedown, Manifold Garden, Star Wars Force Link 2.0, and more.",
    highlights: [
      "Led UI/UX programming, real-time gameplay mechanics, and CI/CD pipeline management for the development team",
      "Ported multiple games from mobile to Nintendo Switch; integrated AR SDKs (ARKit/ARCore) into mobile games",
      "Built Bluetooth communication systems from mobile devices to a proprietary mass-market hardware device",
      "Created a cross-platform abstraction layer enabling engineers to write logic once for multiple platforms, increasing revenue and productivity",
      "Built an animation system to automate tasks previously done manually by animators, boosting throughput",
      "Migrated a legacy Windows XP database to AWS (DynamoDB/S3), cutting on-premises hosting costs",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Computer Science, Major in Software Development",
    institution: "Griffith University Gold Coast Campus",
    period: "Graduated July 2021",
    details: "GPA: 6",
  },
  {
    degree: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    institution: "Microsoft",
    period: "April 2023",
  },
];

export const skills = {
  "Languages & Engines": [
    "C#",
    ".NET (ASP.NET MVC, Web Forms)",
    "Unity",
    "Unreal Engine",
    "TypeScript",
    "JavaScript",
    "Python",
    "SQL",
  ],
  "Web & UI": [
    "React",
    "React Native",
    "Next.js",
    "Knockout.js",
    "jQuery",
    "Bootstrap",
    "Avalonia UI",
    "Uno Platform",
    "Electron",
  ],
  "Cloud & DevOps": [
    "Azure (Functions, Cosmos DB, SignalR, Playfab)",
    "AWS (DynamoDB, S3)",
    "CI/CD (TeamCity, Jenkins, GitHub Actions)",
    "Docker",
    "Git",
    ".NET Aspire",
  ],
  "Practices & Tools": [
    "TDD",
    "CQRS",
    "OOP",
    "Agile / Scrum",
    "ITIL",
    "Visual Studio",
    "Rider",
    "Jira",
    "Confluence",
    "Linux",
  ],
};

export const personalInfo = {
  name: "Errol McFadden",
  title: "Software Engineer",
  tagline: "Results-driven software engineer with experience across banking, manufacturing, and games",
  email: "errolmcfadden@hotmail.com",
  github: "https://github.com/ErrolMc",
  linkedin: "https://www.linkedin.com/in/errol-mcfadden/",
  location: "Gold Coast, QLD",
};
