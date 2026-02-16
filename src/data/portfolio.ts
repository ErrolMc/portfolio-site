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
    liveUrl: "https://worldle-nu.vercel.app",
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
    year: "2025",
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
    company: "Professional Experience",
    period: "2022 - Present",
    description:
      "Building robust full-stack applications with modern architectures, cloud services, and cross-platform solutions.",
    highlights: [
      "Designed and deployed microservices using .NET, Azure, and Docker",
      "Built cross-platform apps with Avalonia, Uno Platform, and React Native",
      "Implemented real-time systems with SignalR and WebSocket protocols",
      "Created CI/CD pipelines with GitHub Actions and Vercel",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Computer Science",
    institution: "University",
    period: "2018 - 2022",
    details: "Focus on software engineering, algorithms, and distributed systems",
  },
];

export const skills = {
  languages: ["C#", "TypeScript", "JavaScript", "Python", "SQL", "HTML/CSS"],
  frameworks: [
    ".NET / ASP.NET Core",
    "React",
    "React Native",
    "Next.js",
    "Avalonia UI",
    "Uno Platform",
    "Electron",
  ],
  cloud: [
    "Azure (Cosmos DB, SignalR, App Service)",
    "Vercel",
    "Docker",
    ".NET Aspire",
  ],
  tools: [
    "Git",
    "GitHub Actions",
    "REST APIs",
    "JWT Auth",
    "MessagePack",
    "OpenTelemetry",
  ],
};

export const personalInfo = {
  name: "Errol Mc",
  title: "Software Engineer",
  tagline: "Building polished, cross-platform experiences from cloud to client",
  email: "errol@example.com",
  github: "https://github.com/ErrolMc",
  location: "Ireland",
};
